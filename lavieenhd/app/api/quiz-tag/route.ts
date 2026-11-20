import { handleQuizTag } from "@/lib/quiz-tag/handle";
import { createSystemeIoClient } from "@/lib/systemeio";

/**
 * Cas courant ~10 s : attente du contact (~4 s), création éventuelle, puis 2 à 3 appels
 * par tag (jusqu'à 7 pour business), chacun borné à 3 s. Le pire cas théorique dépasse 30 s.
 */
export const maxDuration = 30;

export async function POST(request: Request) {
  const apiKey = process.env.SYSTEMEIO_API_KEY;
  const client = apiKey
    ? createSystemeIoClient({
        apiKey,
        fetch,
        sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
      })
    : null;
  return handleQuizTag(request, { client, log: console.error });
}
