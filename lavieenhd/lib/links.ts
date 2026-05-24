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

  /** Quiz "Quel est ton environnement idéal" — temporairement = base */
  quiz: LEGACY_BASE,

  /** Simulateur HD complet — temporairement = base */
  simulateur: LEGACY_BASE,

  /** Inscription newsletter Soul Letter — temporairement = base (V2 : endpoint dédié) */
  newsletter: LEGACY_BASE,

  /** Pages d'offres individuelles — toutes vers base pour l'instant */
  offre: {
    insideClub: LEGACY_BASE,
    thePlaceToBe: LEGACY_BASE,
    reveal: LEGACY_BASE,
    reconnect: LEGACY_BASE,
    fleurDeTalents: LEGACY_BASE,
  },
} as const;
