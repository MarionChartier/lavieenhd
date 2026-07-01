/**
 * Constantes globales du site, réutilisées par le SEO (layout, sitemap, robots, manifest).
 * L'URL de production est surchargeable via NEXT_PUBLIC_SITE_URL (à définir sur Vercel
 * une fois le domaine final connu). Valeur par défaut : domaine cible provisoire.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://marionchartier-lavieenhd.com"
).replace(/\/$/, "");

export const SITE_NAME = "La vie en HD";
export const SITE_TAGLINE = "Marion Chartier · Human Design";
export const SITE_DESCRIPTION =
  "Marion Chartier, praticienne en Human Design. Un chemin intérieur pour révéler qui tu es vraiment.";
