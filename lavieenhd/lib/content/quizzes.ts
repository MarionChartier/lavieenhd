/**
 * Quiz gratuits de Marion — pages HTML autonomes servies depuis /public/quiz.
 *
 * Les fichiers HTML sont conçus par Marion (design 100% préservé) et déposés
 * dans /public/quiz. On les expose via une page vitrine /quiz "Quiz gratuits".
 *
 * NB : le mot "HD" est volontairement absent des intitulés publics — l'idée est
 * de faire découvrir une notion (le lieu, l'alignement pro) avant de ramener au
 * Human Design à la fin du quiz.
 */

export type QuizAccent = "turquoise" | "violet";

export interface QuizItem {
  slug: string;
  /** Intitulé public (sans "HD") */
  name: string;
  /** Sous-titre court affiché sous le nom */
  subtitle: string;
  /** Accroche descriptive (1-2 phrases) */
  description: string;
  /** Méta affichée en pastille (durée / nb de questions) */
  meta: string;
  /** Lien vers la page HTML autonome dans /public/quiz */
  href: string;
  accent: QuizAccent;
}

export const QUIZZES: QuizItem[] = [
  {
    slug: "environnement",
    name: "Quiz - Ton lieu de vie/de travail idéal",
    subtitle: "Et si certains lieux te boostaient, et d'autres t'épuisaient ?",
    description:
      "Découvre quel type de lieux est bénéfique pour ton énergie actuellement, parmi 6 profils, pour que tu te ressources naturellement au quotidien.",
    meta: "6 questions · 2 minutes",
    href: "/quiz/environnement.html",
    accent: "turquoise",
  },
  {
    slug: "alignement-pro",
    name: "Quiz - Ton alignement vie pro actuel",
    subtitle: "Quel est ton niveau d'alignement actuel dans ta vie pro ?",
    description:
      "Quelques questions sur ce que tu ressens au quotidien. Les réponses en révèlent souvent bien plus qu'on ne le croit.",
    meta: "7 questions · 2 minutes",
    href: "/quiz/alignement-pro.html",
    accent: "violet",
  },
];
