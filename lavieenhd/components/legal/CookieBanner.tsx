"use client";

import Image from "next/image";
import Link from "next/link";
import { setConsent, useConsent } from "./consent";

/**
 * Bandeau de consentement cookies, conforme aux recommandations CNIL :
 * boutons « Refuser » et « Accepter » de poids visuel égal (pas de dark pattern),
 * lien vers la politique de confidentialité. S'affiche tant qu'aucun choix n'est fait.
 */
export function CookieBanner() {
  const consent = useConsent();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-0 bottom-0 z-[100] overflow-hidden border-t border-white/50 shadow-[0_-14px_40px_-24px_rgba(80,60,98,0.6)]"
    >
      {/* Fond aquarelle, identique à la bordure du header (effet visuel démarqué du blanc) */}
      <Image
        src="/assets/oracle-frame.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover"
      />

      {/* Voile clair : garde l'aquarelle visible tout en assurant la lisibilité du texte */}
      <div className="relative bg-white/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-6 py-4 md:px-10">
          <p className="text-center font-display text-[15px] font-light leading-relaxed text-ink-deep sm:text-left md:text-[16px]">
            Ce site utilise des cookies pour comprendre comment il est utilisé et l&apos;améliorer.
            Tu peux les accepter ou les refuser, et modifier ton choix à tout moment. Aucun cookie
            de mesure n&apos;est déposé sans ton accord.
          </p>

          <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:justify-between sm:gap-4">
            <Link
              href="/confidentialite"
              className="font-body text-[10px] uppercase tracking-[0.14em] text-ink-soft/70 underline underline-offset-2 transition-colors hover:text-turquoise"
            >
              Politique de confidentialité
            </Link>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setConsent("denied")}
                className="rounded-full border border-ink-deep px-5 py-1.5 font-body text-[11px] uppercase tracking-[0.16em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
              >
                Tout refuser
              </button>
              <button
                type="button"
                onClick={() => setConsent("granted")}
                className="rounded-full border border-ink-deep bg-ink-deep px-5 py-1.5 font-body text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-ink"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
