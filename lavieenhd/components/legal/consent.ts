"use client";

import { useSyncExternalStore } from "react";

/**
 * Gestion minimaliste du consentement cookies (KISS).
 * Un seul choix stocké dans localStorage :
 *   "granted" = l'internaute accepte les cookies de mesure (Clarity)
 *   "denied"  = refus
 *   null      = pas encore de choix -> le bandeau doit s'afficher
 * Le choix pilote le chargement de Clarity (voir components/analytics/Clarity.tsx).
 */
export type ConsentValue = "granted" | "denied" | null;

const KEY = "lveh-consent";
const EVENT = "lveh-consent-change";

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(KEY);
  return v === "granted" || v === "denied" ? v : null;
}

export function setConsent(value: "granted" | "denied") {
  window.localStorage.setItem(KEY, value);
  window.dispatchEvent(new Event(EVENT));
}

/** Réouvre le bandeau (lien « Gérer les cookies » du footer) en effaçant le choix. */
export function openConsent() {
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useConsent(): ConsentValue {
  return useSyncExternalStore(subscribe, getConsent, () => null);
}
