import { handleQuizTag } from "@/lib/quiz-tag/handle";
import { createSystemeIoClient } from "@/lib/systemeio";

/** Attente du contact (~4 s) + jusqu'à 3 appels par tag (6 tags business), chacun borné à 3 s. */
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
