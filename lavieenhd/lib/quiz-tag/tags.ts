/**
 * Traduit le résultat envoyé par un quiz de `public/quiz/` en noms de tags
 * systeme.io. Fonction pure : la route `/api/quiz-tag` est publique, tout ce
 * qui sort de la liste blanche ci-dessous est rejeté.
 */

export type TagsResult = { ok: true; email: string; tags: string[] } | { ok: false; error: string };

/**
 * Préfixe des tags : les noms des tags « par quiz » de Marion, déjà posés par ses
 * automatisations. Le tag par résultat les reprend, suivi du résultat.
 */
const BUSINESS_PREFIX = "❔ QUIZ Business check-up";

/** Quiz à résultat unique : préfixe du tag et résultats admis. */
const SINGLE_RESULT_QUIZZES: Record<string, { prefix: string; results: string[] }> = {
  "alignement-pro": { prefix: "❔ QUIZ Alignement Pro", results: ["OK", "SIGNAL", "LOIN", "PERDU"] },
  environnement: {
    prefix: "❔ QUIZ Lieu idéal",
    results: ["GROTTES", "MONTAGNES", "RIVAGES", "MARCHES", "CUISINES", "VALLEES"],
  },
};

const BUSINESS_ZONES = ["attraction", "communication", "forces", "energie", "decisions", "vente"];
const BUSINESS_LEVELS = ["green", "amber", "eye"];

/**
 * Niveaux de zone business tagués, avec le symbole du verdict de Marion
 * (décision du 16/10/2026) : 👀 « ça coince » et 💡 « à explorer ». Les zones
 * green (💜 « ça roule ») ne reçoivent pas de tag.
 */
const BUSINESS_TAGGED_LEVELS: Record<string, string> = { eye: "👀", amber: "💡" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Longueur maximale d'une adresse (RFC 5321). Testée avant la regex, dont le coût est quadratique. */
const EMAIL_MAX_LENGTH = 254;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function businessTags(result: unknown): string[] | null {
  if (!isRecord(result) || Object.keys(result).length !== BUSINESS_ZONES.length) return null;
  const valid = Object.entries(result).every(
    ([zone, level]) => BUSINESS_ZONES.includes(zone) && BUSINESS_LEVELS.includes(level as string),
  );
  if (!valid) return null;
  return BUSINESS_ZONES.filter((zone) => Object.hasOwn(BUSINESS_TAGGED_LEVELS, result[zone] as string)).map(
    (zone) => `${BUSINESS_PREFIX} - ${BUSINESS_TAGGED_LEVELS[result[zone] as string]} ${zone.toUpperCase()}`,
  );
}

function singleResultTags(quiz: string, result: unknown): string[] | null {
  const config = SINGLE_RESULT_QUIZZES[quiz];
  if (!config || typeof result !== "string" || !config.results.includes(result)) return null;
  return [`${config.prefix} - ${result}`];
}

export function tagsFor(payload: unknown): TagsResult {
  if (!isRecord(payload)) return { ok: false, error: "payload invalide" };
  const { quiz, email, result } = payload;

  if (typeof email !== "string" || email.length > EMAIL_MAX_LENGTH || !EMAIL.test(email.trim())) {
    return { ok: false, error: "email invalide" };
  }
  const knownQuiz =
    typeof quiz === "string" && (quiz === "business" || Object.hasOwn(SINGLE_RESULT_QUIZZES, quiz));
  if (!knownQuiz) return { ok: false, error: "quiz inconnu" };

  const tags = quiz === "business" ? businessTags(result) : singleResultTags(quiz, result);
  if (!tags) return { ok: false, error: "résultat invalide" };
  return { ok: true, email: email.trim(), tags };
}
