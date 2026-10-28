import { EXTERNAL } from "@/lib/links";
import { QUIZZES } from "@/lib/content/quizzes";

/**
 * Les 3 portes d'entrée de l'accueil (maquette V36 de Marion). Elles remplacent
 * sur la home le parcours linéaire 01 à 07 de `offres.ts`, qui reste en place
 * pour /mes-offres et le menu de navigation.
 */

export interface PorteOffre {
  name: string;
  description: string;
  href: string;
  /** Logo affiché dans la vignette, dans /public/assets */
  logoSrc: string;
  /** Pastille « Quiz gratuit » au-dessus du nom */
  quiz?: boolean;
}

export type PorteTon = "violet" | "turquoise" | "beige";

export interface Porte {
  num: string;
  title: string;
  description: string;
  chips: string[];
  ton: PorteTon;
  offres: PorteOffre[];
  /** Offre pont proposée « en complément », sous les offres de la porte */
  complement?: PorteOffre;
}

const quizHref = (slug: string) => QUIZZES.find((q) => q.slug === slug)?.href?? "/quiz";

/** INSIDE, l'offre pont : dans la porte 3, et en complément sous les portes 1 et 2. */
const INSIDE: PorteOffre = {
  name: "INSIDE - Le Guide d’Immersion dans ton Design Unique",
  description:
    "Explore les 7 clés fondamentales de TON Human Design pour mieux comprendre TA façon de fonctionner, prendre tes décisions et avancer d’une manière qui te ressemble. 1h de coaching incluse.",
  href: EXTERNAL.offre.insideClub,
  logoSrc: "/assets/logo-inside.png",
};

export const PORTES: Porte[] = [
  {
    num: "01",
    title: "Je veux me réaligner dans ma vie pro",
    description:
      "Tu ne te sens pas ou plus à ta place dans ton job? Tu veux du sens, de la clarté, de l’élan...et surtout une vie pro qui te ressemble et te fait vibrer?",
    chips: ["Transition pro", "Reconversion", "Quête de sens"],
    ton: "violet",
    offres: [
      {
        quiz: true,
        name: "Es-tu vraiment à ta place dans ta vie pro?",
        description:
          "7 questions pour faire le point sur ce que tu vis aujourd’hui dans ta vie professionnelle.",
        href: quizHref("alignement-pro"),
        logoSrc: "/assets/logo-quiz.png",
      },
      {
        name: "Blooming - Ta Fleur de Talents Innés™",
        description:
          "Une analyse personnalisée croisant ton Human Design, ta Numérologie et tes Gene Keys pour révéler tes talents, ta zone de génie et faire émerger des pistes de métiers et de directions professionnelles. 1h30 de coaching incluse.",
        href: EXTERNAL.offre.fleurDeTalents,
        logoSrc: "/assets/logo-blooming.png",
      },
      {
        name: "RECONNECT - Ton Parcours Guidé de Transformation Professionnelle",
        description:
          "13 semaines pour te reconnecter à toi, clarifier ta direction et remettre du mouvement vers une vie professionnelle qui te ressemble et qui a du sens pour toi.",
        href: EXTERNAL.offre.reconnect,
        logoSrc: "/assets/logo-reconnect.png",
      },
    ],
    complement: INSIDE,
  },
  {
    num: "02",
    title: "Je veux que mon business me ressemble",
    description:
      "Certaines choses coincent ou te questionnent dans ton Business? Ou tu as simplement envie de le faire évoluer à TA façon?",
    chips: ["Entrepreneuriat", "Fluidité", "Singularité"],
    ton: "turquoise",
    offres: [
      {
        quiz: true,
        name: "Business Check-up",
        description:
          "13 questions pour passer ton Business au scanner et repérer ce qui mérite peut-être d’être exploré de plus près.",
        href: quizHref("business"),
        logoSrc: "/assets/logo-quiz.png",
      },
      {
        name: "REVEAL - La Séance Clarté HD Pro - Spécial Business",
        description:
          "Une séance d’1h30 pour explorer ce qui te questionne, ce qui coince ou ce que tu veux faire évoluer dans ton Business à travers TON Human Design.",
        href: EXTERNAL.offre.reveal,
        logoSrc: "/assets/logo-reveal.png",
      },
    ],
    complement: INSIDE,
  },
  {
    num: "03",
    title: "Je veux explorer mon Human Design",
    description:
      "Curieux.se de découvrir ce que ton Human Design raconte de TOI? Tu veux mieux comprendre ton fonctionnement et ce qui fait de toi quelqu’un d’unique?",
    chips: ["Connaissance de soi", "Exploration", "Fonctionnement"],
    ton: "beige",
    offres: [
      {
        quiz: true,
        name: "Quels types d’endroits semblent faits pour toi?",
        description:
          "6 questions pour voir vers quels lieux tu sembles spontanément te tourner.",
        href: quizHref("environnement"),
        logoSrc: "/assets/logo-quiz.png",
      },
      {
        name: "THE PLACE to be - Le Guide d’Exploration de ton Environnement HD",
        description:
          "Découvre TON Environnement idéal en Human Design et comment te réapproprier concrètement tes espaces, chez toi comme au travail.",
        href: EXTERNAL.offre.thePlaceToBe,
        logoSrc: "/assets/logo-place.png",
      },
      {
        name: "BODY Bloom - Le Guide d’Initiation à ton Intelligence Digestive",
        description:
          "Découvre comment TON corps est naturellement conçu pour digérer, assimiler et se nourrir, aussi bien sur le plan alimentaire que dans sa façon d’intégrer les informations.",
        href: EXTERNAL.offre.bodyBloom,
        logoSrc: "/assets/logo-bodybloom.webp",
      },
      INSIDE,
    ],
  },
];

/** Le Soin énergétique, proposé sous les 3 portes (après la météo énergétique du jour). */
export const SOIN_ENERGETIQUE = {
  name: "SOIN ÉNERGÉTIQUE",
  subtitle: "Soin collectif à distance",
  description: [
    "Une parenthèse rien que pour toi, chaque dernier dimanche du mois, pour ralentir, te recentrer et prendre soin de ton énergie.",
    "Tu n’as rien à faire, juste à te laisser chouchouter. ✨",
  ],
  href: EXTERNAL.offre.soinEnergetique,
  logoSrc: "/assets/soin-energetique-mains.png",
} as const;
