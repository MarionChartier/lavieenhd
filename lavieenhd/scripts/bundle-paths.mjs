/**
 * Réécriture des chemins de ressources des pages de vente statiques,
 * entre la forme servie par Next (`/assets/...`, `/fonts/...`) et la forme
 * relative d'un bundle autonome (`assets/...`, `fonts/...`).
 *
 * Seules les racines de ressources sont touchées : les liens de navigation
 * (`/`, `/cgv`, `/inside.html`) restent absolus, ils désignent des routes du site.
 */

/** Racines considérées comme des ressources à embarquer dans un bundle. */
const ROOTS = "assets|fonts";

const ATTR_ABSOLUTE = new RegExp(`(\\b(?:src|srcset)=")/(${ROOTS})/`, "g");
const ATTR_RELATIVE = new RegExp(`(\\b(?:src|srcset)=")(${ROOTS})/`, "g");
const CSS_ABSOLUTE = new RegExp(`(url\\()/(${ROOTS})/`, "g");
const CSS_RELATIVE = new RegExp(`(url\\()(${ROOTS})/`, "g");

const REF_ABSOLUTE = new RegExp(
  `(?:\\b(?:src|srcset)="|url\\()/((?:${ROOTS})/[^"')]+)`,
  "g",
);

/** Chemins relatifs des ressources référencées par la page, dédoublonnés et triés. */
export function collectRefs(html) {
  const refs = new Set();
  for (const [, ref] of html.matchAll(REF_ABSOLUTE)) refs.add(ref);
  return [...refs].sort();
}

/** `/assets/x.png` → `assets/x.png`. Idempotent. */
export function toRelative(html) {
  return html.replace(ATTR_ABSOLUTE, "$1$2/").replace(CSS_ABSOLUTE, "$1$2/");
}

/** `assets/x.png` → `/assets/x.png`. Idempotent. */
export function toAbsolute(html) {
  return html.replace(ATTR_RELATIVE, "$1/$2/").replace(CSS_RELATIVE, "$1/$2/");
}

const REF_ANY = /(?:\b(?:src|srcset)="|url\()([^"')]+)/g;

/**
 * Ressources relatives hors `assets/` et `fonts/` — typiquement une image déposée
 * à la racine d'un bundle. Elles n'ont pas d'équivalent dans public/ : à replacer
 * à la main avant réinjection, sinon la page pointe dans le vide en ligne.
 */
export function collectStrayRefs(html) {
  const strays = new Set();
  for (const [, ref] of html.matchAll(REF_ANY)) {
    if (/^(?:\/|data:|[a-z][a-z0-9+.-]*:)/i.test(ref)) continue;
    strays.add(ref);
  }
  return [...strays].sort();
}
