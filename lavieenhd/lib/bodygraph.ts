/** Préfixe du hash dans lequel le widget Bodygraph encode les données de naissance. */
const RESULT_HASH = "#chart,";

/** `true` si le hash de l'URL porte un résultat de calcul (`#chart,<base64>`). */
export function hasBodygraphResult(hash: string): boolean {
  return hash.startsWith(RESULT_HASH);
}

/**
 * Adresse de « Test HD gratuit » avec le schéma déjà calculé, ou `null` si l'URL ne
 * porte pas de résultat. Le widget de cette page relit le hash au chargement. Les
 * paramètres (utm, fbclid) suivent, pour ne pas perdre l'origine de la visite.
 */
export function testHdResultUrl({ search, hash }: { search: string; hash: string }): string | null {
  return hasBodygraphResult(hash) ? `/test-gratuit${search}${hash}` : null;
}

type RedirectWindow = Pick<EventTarget, "addEventListener" | "removeEventListener"> & {
  location: { search: string; hash: string; replace: (url: string) => void };
};

/**
 * Emmène sur « Test HD gratuit » dès que l'URL porte un résultat, et renvoie de quoi
 * arrêter. `replace` : sans lui, le bouton retour ramènerait sur l'accueil avec le
 * résultat dans l'URL, donc aussitôt ici de nouveau.
 */
export function redirectResultsToTestHd(win: RedirectWindow): () => void {
  const redirect = () => {
    const url = testHdResultUrl(win.location);
    if (url) win.location.replace(url);
  };
  redirect();
  win.addEventListener("hashchange", redirect);
  return () => win.removeEventListener("hashchange", redirect);
}
