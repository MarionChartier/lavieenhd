"use client";

import { openConsent } from "./consent";

/** Lien « Gérer les cookies » : réaffiche le bandeau de consentement. */
export function ManageCookiesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsent} className={className}>
      Gérer les cookies
    </button>
  );
}
