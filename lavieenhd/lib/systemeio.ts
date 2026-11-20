/**
 * Client minimal de l'API publique systeme.io (https://developer.systeme.io/reference/api),
 * limité à ce qu'il faut pour inscrire et taguer un contact à l'issue d'un quiz.
 *
 * Le formulaire embarqué du quiz crée normalement le contact. Comme les deux envois
 * partent en même temps, on attend qu'il apparaisse, puis on le crée ici s'il manque
 * toujours (envoi par iframe bloqué, notamment dans le navigateur intégré d'Instagram).
 * Le consentement est recueilli par la case à cocher du quiz avant tout envoi.
 */

type Deps = {
  apiKey: string;
  fetch: typeof fetch;
  sleep: (ms: number) => Promise<void>;
};

export type ApplyTagsOutcome = "tagged" | "created";

/** status 0 : pas de réponse exploitable (réseau, timeout, JSON illisible). */
export class SystemeIoError extends Error {
  name = "SystemeIoError";
  constructor(
    readonly status: number,
    path: string,
  ) {
    // Sans la query string : elle contient l'email du contact.
    super(`systeme.io a répondu ${status} sur ${path.split("?")[0]}`);
  }
}

const API = "https://api.systeme.io/api";
const CONTACT_ATTEMPTS = 3;
const CONTACT_RETRY_MS = 2000;
/** Délai maximal par appel, pour rester sous le maxDuration de la route. */
const CALL_TIMEOUT_MS = 3000;

type Collection<T> = { items: T[]; hasMore: boolean };

/**
 * La réponse de systeme.io à un email déjà inscrit n'est pas documentée (422 attendu) :
 * tout refus du contenu (4xx hors authentification et quota) vaut un « peut-être déjà là ».
 */
const mayAlreadyExist = (status: number) => status >= 400 && status < 500 && ![401, 403, 429].includes(status);
type Tag = { id: number; name: string };

export function createSystemeIoClient({ apiKey, fetch, sleep }: Deps) {
  async function call<T>(method: string, path: string, body?: unknown): Promise<T> {
    let res: Response;
    try {
      res = await fetch(`${API}${path}`, {
        method,
        headers: {
          "X-API-Key": apiKey,
          Accept: "application/json",
          ...(body === undefined ? {} : { "Content-Type": "application/json" }),
        },
        body: body === undefined ? undefined : JSON.stringify(body),
        signal: AbortSignal.timeout(CALL_TIMEOUT_MS),
      });
    } catch {
      throw new SystemeIoError(0, path);
    }
    if (!res.ok) throw new SystemeIoError(res.status, path);
    if (res.status === 204) return undefined as T;
    try {
      return (await res.json()) as T;
    } catch {
      throw new SystemeIoError(0, path);
    }
  }

  async function lookupContactId(email: string): Promise<number | null> {
    const { items } = await call<Collection<{ id: number }>>("GET", `/contacts?${new URLSearchParams({ email })}`);
    return items.length > 0 ? items[0].id : null;
  }

  async function findContactId(email: string): Promise<number | null> {
    for (let attempt = 1; attempt <= CONTACT_ATTEMPTS; attempt++) {
      const id = await lookupContactId(email);
      if (id !== null) return id;
      if (attempt < CONTACT_ATTEMPTS) await sleep(CONTACT_RETRY_MS);
    }
    return null;
  }

  /**
   * La recherche de tags est textuelle : on ne garde que le nom exact, sinon on le crée.
   * limit=100 : les tags d'un même quiz partagent leur préfixe et tiendraient mal sur une page par défaut.
   */
  async function tagId(name: string): Promise<number> {
    const { items } = await call<Collection<Tag>>("GET", `/tags?${new URLSearchParams({ query: name, limit: "100" })}`);
    const existing = items.find((tag) => tag.name === name);
    if (existing) return existing.id;
    return (await call<Tag>("POST", "/tags", { name })).id;
  }

  /**
   * Crée le contact quand le formulaire embarqué n'a pas pu le faire (navigateur intégré
   * d'Instagram, qui bloque l'envoi par iframe). Un refus veut dire, en pratique, que le
   * formulaire l'a créé entre-temps : on le relit une fois, après une attente, avant d'abandonner.
   */
  async function createContact(email: string, firstName?: string): Promise<{ id: number; created: boolean }> {
    const body = firstName ? { email, fields: [{ slug: "first_name", value: firstName }] } : { email };
    try {
      return { id: (await call<{ id: number }>("POST", "/contacts", body)).id, created: true };
    } catch (error) {
      if (!(error instanceof SystemeIoError) || !mayAlreadyExist(error.status)) throw error;
      await sleep(CONTACT_RETRY_MS);
      const id = await lookupContactId(email);
      if (id === null) throw error;
      return { id, created: false };
    }
  }

  return {
    async applyTags(email: string, tags: string[], firstName?: string): Promise<ApplyTagsOutcome> {
      if (tags.length === 0) return "tagged";
      const existingId = await findContactId(email);
      const contact = existingId === null ? await createContact(email, firstName) : { id: existingId, created: false };
      for (const name of tags) {
        await call("POST", `/contacts/${contact.id}/tags`, { tagId: await tagId(name) });
      }
      return contact.created ? "created" : "tagged";
    },
  };
}
