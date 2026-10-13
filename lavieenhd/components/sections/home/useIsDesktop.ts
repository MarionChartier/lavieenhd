"use client";

import { useSyncExternalStore } from "react";

/** Largeur `lg` de Tailwind : en dessous, l'accueil suit la maquette mobile V36. */
const QUERY = "(min-width: 1024px)";

const subscribe = (onChange: () => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

/**
 * true en desktop, false en mobile, null côté serveur et avant hydratation.
 *
 * Sert à ne monter le calculateur qu'à un seul endroit de l'accueil (hero en
 * desktop, section dédiée en mobile) : deux widgets Bodygraph dans la page, dont
 * un masqué, liraient et écriraient le même résultat dans l'URL.
 */
export function useIsDesktop(): boolean | null {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => null,
  );
}
