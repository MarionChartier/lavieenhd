"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { findTransit, moonPhase, parseCsv, type MoonPhase, type Transit } from "@/lib/transit";

/**
 * Bandeau "Transit solaire" + "Phase lunaire".
 *
 * Les données sont gérées par Marion dans un Google Sheet (publié en lecture),
 * lu en direct par le site : la ligne du jour est sélectionnée automatiquement
 * (une ligne par jour). Toute modif dans la feuille apparaît sans redéploiement.
 * Colonnes : Date | Porte | Mots clés | Message | Phase lunaire | Description phase lunaire
 * Dates au format JJ/MM/AAAA. Parsing et regroupement de période : lib/transit.ts.
 */
const TRANSIT_CSV =
  "https://docs.google.com/spreadsheets/d/1Vh4NuX8EFQHFMJoJy8W7DqYD-M9sf5Y01DzCLV2UMgU/gviz/tq?tqx=out:csv";

/** Texte de Marion pour le point d'interrogation. */
const TRANSIT_EXPLICATION =
  "Chaque semaine, le Soleil active une des 64 portes du Human Design. Il vient alors mettre en lumière une thématique particulière que nous allons tous ressentir énergétiquement (que nous ayons ou non la Porte en question active sur notre schéma).";

/** Repli si la feuille est momentanément indisponible. */
const FALLBACK: Transit = {
  porte: "12",
  motsCles: "La Prudence",
  message:
    "Une période pour choisir tes mots avec soin et n'exprimer que ce qui est vraiment juste pour toi.",
  periode: "",
  phase: "",
  phaseDescription: "",
};

export function TransitSolaireBanner() {
  const [transit, setTransit] = useState<Transit>(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch(TRANSIT_CSV)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((csv) => {
        const found = findTransit(parseCsv(csv), new Date());
        if (found && !cancelled) setTransit(found);
      })
      .catch(() => {
        /* on garde le repli */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const phase = moonPhase(transit.phase);

  return (
    <section className="bg-white px-6 py-10 md:px-20 md:py-14">
      {/* Deux cards indépendantes : transit à gauche, phase lunaire à droite ; empilées sur mobile. */}
      <div className="mx-auto grid max-w-(--container-content) grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        {/* ——— Card Transit solaire ——— */}
        <BannerCard>
          <div className="flex items-start gap-3">
            <Wordmark caps="Transit" script="Solaire" capsClass="text-turquoise" scriptClass="text-[#b8975a]" />
            <InfoTooltip texte={TRANSIT_EXPLICATION} />
          </div>
          <div>
            <p className="font-body text-[14px] uppercase tracking-[0.16em] text-ink-deep">
              Porte {transit.porte}
              {transit.motsCles ? ` · ${transit.motsCles}` : ""}
            </p>
            {transit.periode && (
              <p className="mt-2 font-body text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                {transit.periode}
              </p>
            )}
          </div>
          <p className="max-w-[440px] font-display text-[17px] leading-relaxed text-ink-deep italic md:text-[18px]">
            «&nbsp;{transit.message}&nbsp;»
          </p>
        </BannerCard>

        {/* ——— Card Phase lunaire ——— */}
        <BannerCard>
          <Wordmark caps="Phase" script="Lunaire" capsClass="text-ink-lilac" scriptClass="text-ink-deep" />
          <div className="flex items-center gap-3">
            {phase && <MoonIcon phase={phase} className="h-9 w-9 flex-none" />}
            <p className="font-body text-[14px] uppercase tracking-[0.16em] text-ink-deep">
              {transit.phase || "Phase du jour"}
            </p>
          </div>
          {transit.phaseDescription && (
            <p className="max-w-[440px] font-display text-[16px] leading-relaxed whitespace-pre-line text-ink-deep md:text-[17px]">
              {transit.phaseDescription}
            </p>
          )}
        </BannerCard>
      </div>
    </section>
  );
}

/** Card du bandeau — fond paillettes doré (même que le header) + voile blanc. */
function BannerCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#d8bf8b]/40 px-6 py-9 shadow-[0_24px_55px_-30px_rgba(80,60,98,0.22)] lg:px-10">
      <Image
        src="/assets/header-glitter.png"
        alt=""
        aria-hidden
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="pointer-events-none absolute inset-0 object-cover"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/78" />
      <div className="relative flex h-full flex-col items-center justify-start gap-5 text-center">
        {children}
      </div>
    </div>
  );
}

/**
 * Wordmark entrelacé façon visuel de référence de Marion :
 * capitales serif espacées + mot en script superposé sur la moitié basse.
 */
function Wordmark({
  caps,
  script,
  capsClass,
  scriptClass,
}: {
  caps: string;
  script: string;
  capsClass: string;
  scriptClass: string;
}) {
  return (
    <span className="relative inline-block pb-6">
      <span
        className={`font-display text-[34px] font-light uppercase tracking-[0.26em] drop-shadow-[0_2px_6px_rgba(80,60,98,0.18)] md:text-[40px] ${capsClass}`}
      >
        {caps}
      </span>
      <span
        aria-hidden
        className={`absolute top-[46%] left-1/2 -translate-x-1/2 font-script text-[34px] whitespace-nowrap drop-shadow-[0_2px_5px_rgba(80,60,98,0.28)] md:text-[40px] ${scriptClass}`}
      >
        {script}
      </span>
      <span className="sr-only">{script}</span>
    </span>
  );
}

/** Point d'interrogation cerclé — tooltip au survol et au focus clavier. */
function InfoTooltip({ texte }: { texte: string }) {
  return (
    <button
      type="button"
      aria-describedby="transit-tooltip"
      className="group relative mt-1 grid h-6 w-6 flex-none cursor-help place-items-center rounded-full border border-ink-deep/40 font-body text-[13px] text-ink-deep/70 transition-colors hover:border-turquoise hover:text-turquoise focus-visible:border-turquoise focus-visible:text-turquoise focus-visible:outline-none"
    >
      ?
      <span
        role="tooltip"
        id="transit-tooltip"
        className="pointer-events-none invisible absolute top-8 left-1/2 z-20 w-[290px] -translate-x-1/2 rounded-md border border-ink/10 bg-white px-4 py-3 text-left font-body text-[12px] leading-relaxed normal-case tracking-normal text-ink shadow-[0_18px_40px_-18px_rgba(80,60,98,0.45)] opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 md:w-[340px]"
      >
        {texte}
      </span>
    </button>
  );
}

/** Pictogramme de lune selon la phase (flat, une seule teinte). */
function MoonIcon({ phase, className }: { phase: MoonPhase; className?: string }) {
  const gold = "#b8975a";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      {phase === "pleine" && (
        <>
          <circle cx="20" cy="20" r="14" fill={gold} opacity="0.9" />
          <circle cx="15" cy="16" r="2.4" fill="#fff" opacity="0.35" />
          <circle cx="24" cy="23" r="1.6" fill="#fff" opacity="0.3" />
        </>
      )}
      {phase === "nouvelle" && (
        <circle cx="20" cy="20" r="14" fill="none" stroke={gold} strokeWidth="2" opacity="0.85" />
      )}
      {phase === "croissante" && (
        <path
          d="M14 6.6 a14 14 0 1 0 0 26.8 a17 17 0 0 1 0 -26.8 Z"
          transform="rotate(180 20 20)"
          fill={gold}
          opacity="0.9"
        />
      )}
      {phase === "decroissante" && (
        <path d="M14 6.6 a14 14 0 1 0 0 26.8 a17 17 0 0 1 0 -26.8 Z" fill={gold} opacity="0.9" />
      )}
    </svg>
  );
}
