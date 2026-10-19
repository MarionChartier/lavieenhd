/**
 * Logique de la route `POST /api/quiz-tag`, séparée de `app/api/quiz-tag/route.ts`
 * pour être testée sans réseau. Les journaux ne contiennent jamais l'email.
 */
import { SystemeIoError, type ApplyTagsOutcome } from "../systemeio";
import { tagsFor } from "./tags";

type Deps = {
  /** null quand la clé API n'est pas configurée. */
  client: { applyTags: (email: string, tags: string[]) => Promise<ApplyTagsOutcome> } | null;
  log: (message: string) => void;
};

const status = (code: number) => new Response(null, { status: code });

/** Un payload de quiz fait quelques centaines d'octets : au-delà, on ne lit même pas. */
const MAX_BODY_BYTES = 4096;

/** Seules les pages du site lui-même peuvent appeler la route, quel que soit son domaine. */
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function handleQuizTag(request: Request, { client, log }: Deps): Promise<Response> {
  if (!isSameOrigin(request)) return status(403);

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) return status(413);
  let payload: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return status(413);
    payload = JSON.parse(text);
  } catch {
    return status(400);
  }
  const parsed = tagsFor(payload);
  if (!parsed.ok) return status(400);

  if (!client) {
    log("[quiz-tag] SYSTEMEIO_API_KEY absente, tag non posé");
    return status(503);
  }

  try {
    const outcome = await client.applyTags(parsed.email, parsed.tags);
    // 204 dans les deux cas : un 404 dirait à n'importe qui si un email est inscrit chez Marion.
    if (outcome === "contact-not-found") {
      log(`[quiz-tag] contact introuvable, tags non posés : ${parsed.tags.join(", ")}`);
    }
    return status(204);
  } catch (error) {
    log(
      error instanceof SystemeIoError
        ? `[quiz-tag] systeme.io a répondu ${error.status}`
        : `[quiz-tag] erreur inattendue : ${error instanceof Error ? error.name : typeof error}`,
    );
    return status(502);
  }
}
