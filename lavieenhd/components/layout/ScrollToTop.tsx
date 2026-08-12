"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Remonte en haut instantanément.
 *  `scroll-behavior: smooth` est actif globalement (pour les ancres #section) ;
 *  laissé tel quel, le scroll de changement de page devient une animation que le
 *  rendu de la nouvelle page interrompt, et on reste au milieu. On le neutralise
 *  le temps du saut. */
export function scrollToTopInstant() {
  window.scrollTo({ top: 0, behavior: "instant" });
}

/** Garantit qu'on arrive en haut : au chargement du site (le navigateur restaure
 *  sinon la position précédente) et à chaque changement de page. Les liens
 *  d'ancre (#section) gardent leur défilement vers la section. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    scrollToTopInstant();
    // Second passage après peinture : quand on vient du menu mobile, le body est
    // encore en overflow:hidden au premier appel, qui peut rester sans effet.
    const frame = requestAnimationFrame(scrollToTopInstant);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
