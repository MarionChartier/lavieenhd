import { PORTES, type Porte } from "@/lib/content/portes";
import { QUIZZES } from "@/lib/content/quizzes";

/**
 * Page /mes-offres organisée en 3 portes (maquette « Page MES OFFRES » de Marion).
 * Les cartes du hero reprennent mot pour mot les portes de l'accueil (`portes.ts`) ;
 * les cartes d'offres restent celles de `offres.ts`, désignées ici par leur slug.
 */

export interface PorteQuiz {
  meta: string;
  title: string;
  question: string;
  description?: string;
  cta: string;
  /** Ouvre directement la question 1 (consigne V10 de Marion) ; l'URL nue garde l'introduction. */
  href: string;
}

export interface PorteComplement {
  /** Phrase de liaison propre à chaque porte */
  label: string;
}

export interface PorteSection {
  /** Ancre de la section (#porte-1…) */
  id: string;
  heading: string;
  porte: Porte;
  quiz: PorteQuiz;
  /** Slugs des offres de `offres.ts`, dans l'ordre d'affichage */
  offres: string[];
  /** Petite carte INSIDE renvoyant vers sa carte complète (portes 1 et 2) */
  insideComplement?: PorteComplement;
  /** Offre complète affichée sous « En complément » (INSIDE dans la porte 3) */
  complementOffre?: string;
}

const quizStart = (slug: string) => `${QUIZZES.find((q) => q.slug === slug)!.href}?start=1`;

export const HERO = {
  /** Le mot entre astérisques est en italique */
  title: "3 portes pour ouvrir la voie à ce qui te *ressemble*.",
  subtitle: "Suis ce qui t'appelle aujourd'hui.",
};

export const INSIDE_COMPLEMENT = {
  title: "INSIDE - Le Guide d’Immersion dans ton Design Unique",
  text: "Explore les 7 clés fondamentales de TON Human Design pour mieux comprendre ton fonctionnement unique.",
  coaching: "1h de coaching individuel incluse.",
  cta: "Voir le descriptif complet d’INSIDE",
};

export const PORTE_SECTIONS: PorteSection[] = [
  {
    id: "porte-1",
    heading: "01 · Pour une vie pro qui te ressemble",
    porte: PORTES[0],
    quiz: {
      meta: "7 questions · 2 minutes",
      title: "Es-tu vraiment à ta place dans ta vie pro?",
      question:
        "Quelques questions pour faire le point sur ce que tu vis et ressens aujourd'hui dans ton travail.",
      cta: "Je fais le point",
      href: quizStart("alignement-pro"),
    },
    offres: ["fleur-de-talents", "reconnect"],
    insideComplement: {
      label: "Et parce que mieux te connaître peut aussi éclairer les choix que tu fais dans ta vie pro :",
    },
  },
  {
    id: "porte-2",
    heading: "02 · Pour un business qui te ressemble",
    porte: PORTES[1],
    quiz: {
      meta: "13 questions · 5 minutes",
      // Trait d'union insécable : « Check-up » ne se coupe pas en fin de ligne sur mobile.
      title: "Business Check\u2011up",
      question: "Connais-tu vraiment ta façon d'entreprendre?",
      description:
        "Des questions pour passer ton Business au scanner, découvrir où est-ce que tu suis déjà ton propre mode d'emploi...et ce qui mérite peut-être d'être exploré de plus près.",
      cta: "Je fais mon check\u2011up",
      href: quizStart("business"),
    },
    offres: ["reveal"],
    insideComplement: {
      label:
        "Et parce que mieux te connaître peut aussi éclairer ta façon d'entreprendre et de faire évoluer ton Business :",
    },
  },
  {
    id: "porte-3",
    heading: "03 · Pour explorer ton Human Design",
    porte: PORTES[2],
    quiz: {
      meta: "6 questions · 2 minutes",
      title: "Ton lieu de vie/de travail idéal",
      question: "Et si certains lieux avaient réellement le pouvoir de te booster...et d'autres de t'épuiser?",
      description:
        "Des questions ciblées pour découvrir quel type d'endroits semble naturellement bénéfique pour ton énergie.",
      cta: "Je fais le quiz",
      href: quizStart("environnement"),
    },
    offres: ["place-to-be", "body-bloom"],
    complementOffre: "inside",
  },
];

export const SOIN_TRANSITION = {
  title: "Et parce que prendre soin de TOI passe aussi par ton énergie...",
  subtitle: "Je te propose une parenthèse pour ralentir, te recentrer et simplement te laisser porter.",
};
