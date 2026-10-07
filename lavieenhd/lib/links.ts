/**
 * URLs externes — ancien site Marion (systeme.io) qui gère le back-end
 * (paiement, automatisations, listes newsletter, quiz, simulateur HD).
 *
 * Toute redirection commerciale du site vitrine passe par cette constante.
 * Si Marion change ses URLs systeme.io, c'est le seul fichier à mettre à jour.
 */

const LEGACY_ROOT = "https://marionchartier-humandesign.systeme.io";
const LEGACY_BASE = `${LEGACY_ROOT}/lavieenhd`;

export const EXTERNAL = {
  /** Page principale de l'écosystème commercial de Marion */
  offres: LEGACY_BASE,

  /** Quiz "Quel est ton environnement idéal" — formulaire Tally */
  quiz: "https://tally.so/r/meORLk",

  /** Simulateur HD complet — temporairement = base */
  simulateur: LEGACY_BASE,

  /** Inscription newsletter Soul Letter — temporairement = base (V2 : endpoint dédié) */
  newsletter: LEGACY_BASE,

  /**
   * Pages d'offres individuelles. Les CTA renvoient directement vers ces pages
   * de vente. Toutes les offres sont branchées.
   *
   * Blooming, INSIDE, REVEAL, The Place to be et le Soin énergétique sont
   * reconstruits en routes Next (design harmonisé avec le site) ; Reconnect
   * est encore une page HTML servie depuis /public, et migrera sur le même
   * modèle. Les anciennes URL .html restent
   * vivantes via une redirection 308 (voir next.config.ts) : elles circulent
   * dans les mails déjà envoyés et sur systeme.io.
   */
  offre: {
    soinEnergetique: "/mes-offres/soin-energetique",
    thePlaceToBe: "/mes-offres/the-place-to-be",
    insideClub: "/mes-offres/inside",
    reveal: "/mes-offres/reveal",
    fleurDeTalents: "/mes-offres/blooming",
    reconnect: "/reconnect.html",
    /** Page de vente pas encore construite : l'URL est déjà fixée pour que les
     *  renvois des autres pages n'aient pas à changer le jour où elle existe. */
    bodyBloom: "/mes-offres/body-bloom",
  },

  /**
   * Bons de commande systeme.io — accès direct au paiement, court-circuitant
   * la page de vente ("Foncer sans détour"). The Place to be n'y figure pas :
   * l'acheteur doit d'abord choisir son Environnement sur la page de vente,
   * qui embarque les 6 bons de commande dédiés.
   */
  commande: {
    soinEnergetique: `${LEGACY_ROOT}/commande-soinenergetique`,
    insideClub: `${LEGACY_ROOT}/commande-guide_design-guidee`,
    reveal: `${LEGACY_ROOT}/commande-seance-clarte`,
    fleurDeTalents: `${LEGACY_ROOT}/commande-blooming`,
    reconnect: `${LEGACY_ROOT}/commande-reconnect`,
  },

  /**
   * The Place to be : un Guide par Environnement HD, donc six bons de
   * commande. Ils sont proposés côte à côte sur la page de vente, où
   * l'acheteur choisit le sien.
   */
  commandeEnvironnement: {
    grottes: `${LEGACY_ROOT}/commande-grottes`,
    marches: `${LEGACY_ROOT}/commande-marches`,
    cuisines: `${LEGACY_ROOT}/commande-cuisines`,
    montagnes: `${LEGACY_ROOT}/commande-montagnes`,
    vallees: `${LEGACY_ROOT}/commande-vallees`,
    rivages: `${LEGACY_ROOT}/commande-rivages`,
  },

  /** BODY Bloom : même principe, un Guide par Digestion HD. */
  commandeDigestion: {
    appetit: `${LEGACY_ROOT}/commande-appetit`,
    gout: `${LEGACY_ROOT}/commande-gout`,
    soif: `${LEGACY_ROOT}/commande-soif`,
    toucher: `${LEGACY_ROOT}/commande-toucher`,
    son: `${LEGACY_ROOT}/commande-son`,
    lumiere: `${LEGACY_ROOT}/commande-lumiere`,
  },
} as const;

/**
 * Widget calculateur Bodygraphchart. On monte le web component officiel
 * directement dans nos pages : la page d'embed de Bodygraph
 * (embed.bodygraphchart.com) ne contient elle-même que ce script et cette
 * balise, l'iframe n'ajoutait qu'une boîte intermédiaire nuisible (voir
 * BodygraphChart pour le détail).
 */
export const BODYGRAPH = {
  script: "https://app.bodygraphchart.com/integrate-chart/js",
  chartId: "22753",
  token: "2189c054-2215-4954-8f03-822921c2b1ff",
} as const;
