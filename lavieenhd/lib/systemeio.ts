/**
 * Client minimal de l'API publique systeme.io (https://developer.systeme.io/reference/api),
 * limité à ce qu'il faut pour taguer un contact à l'issue d'un quiz.
 *
 * Le contact n'est jamais créé ici : c'est le formulaire embarqué du quiz qui le
 * crée, avec son consentement et son éventuel double opt-in. Comme les deux
 * envois partent en même temps, on attend qu'il apparaisse.
 */

type Deps = {
  apiKey: string;
  fetch: typeof fetch;
  sleep: (ms: number) => Promise<void>;
};

export type ApplyTagsOutcome = "tagged" | "contact-not-found";

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

  async function findContactId(email: string): Promise<number | null> {
    for (let attempt = 1; attempt <= CONTACT_ATTEMPTS; attempt++) {
      const { items } = await call<Collection<{ id: number }>>("GET", `/contacts?${new URLSearchParams({ email })}`);
      if (items.length > 0) return items[0].id;
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

  return {
    async applyTags(email: string, tags: string[]): Promise<ApplyTagsOutcome> {
      if (tags.length === 0) return "tagged";
      const contactId = await findContactId(email);
      if (contactId === null) return "contact-not-found";
      for (const name of tags) {
        await call("POST", `/contacts/${contactId}/tags`, { tagId: await tagId(name) });
      }
      return "tagged";
    },
  };
}
