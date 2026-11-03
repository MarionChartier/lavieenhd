/**
 * Garde `el` à la même hauteur à l'écran pendant `duree` ms, en compensant le
 * défilement à chaque image.
 *
 * L'ancrage de défilement du navigateur est coupé sur tout le site (voir
 * `overflow-anchor` dans globals.css). Sans lui, quand un accordéon replie un
 * panneau situé au-dessus de celui qu'on ouvre, tout le contenu remonte et la
 * personne se retrouve plus bas dans la page. On refait cet ancrage à la main,
 * seulement le temps de la transition.
 */
export function ancrerPendant(el: HTMLElement, duree: number) {
  const haut = el.getBoundingClientRect().top;
  const fin = performance.now() + duree;
  const suivre = () => {
    const ecart = el.getBoundingClientRect().top - haut;
    // `instant` : le défilement doux global étalerait la correction.
    if (ecart !== 0) window.scrollBy({ top: ecart, behavior: "instant" });
    if (performance.now() < fin) requestAnimationFrame(suivre);
  };
  requestAnimationFrame(suivre);
}
