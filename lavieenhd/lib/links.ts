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

  /** Générateur de bodygraph (widget externe bodygraphchart) */
  bodygraph:
    "https://embed.bodygraphchart.com/v1/22753/iframe?token=2189c054-2215-4954-8f03-822921c2b1ff",

  /** Inscription newsletter Soul Letter — temporairement = base (V2 : endpoint dédié) */
  newsletter: LEGACY_BASE,

  /**
   * Pages d'offres individuelles. Les CTA renvoient directement vers ces pages
   * de vente HTML servies depuis /public. Toutes les offres sont branchées.
   */
  offre: {
    soinEnergetique: "/soin-energetique.html",
    thePlaceToBe: "/the-place-to-be.html",
    insideClub: "/inside.html",
    reveal: "/reveal.html",
    fleurDeTalents: "/blooming.html",
    reconnect: "/reconnect.html",
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
} as const;
