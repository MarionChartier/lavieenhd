/**
 * URLs externes — ancien site Marion (systeme.io) qui gère le back-end
 * (paiement, automatisations, listes newsletter, quiz, simulateur HD).
 *
 * Toute redirection commerciale du site vitrine passe par cette constante.
 * Si Marion change ses URLs systeme.io, c'est le seul fichier à mettre à jour.
 */

const LEGACY_BASE = "https://marionchartier-humandesign.systeme.io/lavieenhd";

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

  /** Pages d'offres individuelles sur l'espace systeme.io de Marion */
  offre: {
    thePlaceToBe:
      "https://marionchartier-humandesign.systeme.io/lavieenhd_guide-environnement#CHOIXGUIDES",
    insideClub: "https://marionchartier-humandesign.systeme.io/commande-guide_design-guidee",
    reveal: "https://marionchartier-humandesign.systeme.io/commande-seance-clarte",
    fleurDeTalents: LEGACY_BASE,
    reconnect: "https://marionchartier-humandesign.systeme.io/reconnect",
  },
} as const;
