/**
 * Passage des chemins de ressources d'une page de vente de la forme servie par Next
 * (`/assets/...`, `/fonts/...`) à la forme relative d'un dossier autonome.
 *
 * Seules ces deux racines sont touchées : les liens de navigation (`/`, `/cgv`,
 * `/inside.html`) restent absolus, ils désignent des routes du site.
 */

const ROOTS = "assets|fonts";

const REF = new RegExp(`(?:\\b(?:src|srcset)="|url\\()/((?:${ROOTS})/[^"')]+)`, "g");
const ATTR = new RegExp(`(\\b(?:src|srcset)=")/(${ROOTS})/`, "g");
const CSS = new RegExp(`(url\\()/(${ROOTS})/`, "g");

/** Chemins relatifs des ressources référencées par la page, dédoublonnés et triés. */
export function collectRefs(html) {
  return [...new Set([...html.matchAll(REF)].map(([, ref] ) => ref))].sort();
}

/** `/assets/x.png` → `assets/x.png`. Idempotent. */
export function toRelative(html) {
  return html.replace(ATTR, "$1$2/").replace(CSS, "$1$2/");
}
