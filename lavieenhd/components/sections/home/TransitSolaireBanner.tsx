"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { findTransit, parseCsv, type Transit } from "@/lib/transit";

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

/** Explication de la phase lunaire — même esprit que celle du transit. */
const LUNE_EXPLICATION =
  "La Lune parcourt un cycle d'environ 29 jours : Nouvelle Lune, croissance, Pleine Lune, décroissance. Chaque phase colore l'énergie ambiante à sa manière (poser des intentions, passer à l'action, récolter, libérer), et nous la ressentons tous, plus ou moins consciemment.";

/** Repli si la feuille est momentanément indisponible. */
const FALLBACK: Transit = {
  porte: "12",
  motsCles: "La Prudence",
  message:
    "Une période pour choisir tes mots avec soin et n'exprimer que ce qui est vraiment juste pour toi.",
  periode: "",
  phase: "",
  phaseDescription: "",
  phaseMotsCles: "",
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

  return (
    <section className="bg-white px-6 py-10 md:px-20 md:py-14">
      {/* Deux cards indépendantes : transit à gauche, phase lunaire à droite ; empilées sur mobile. */}
      <div className="mx-auto grid max-w-(--container-content) grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        {/* ——— Card Transit solaire ——— */}
        <BannerCard info={{ id: "transit-tooltip", texte: TRANSIT_EXPLICATION }}>
          <Wordmark caps="Transit" script="Solaire" capsClass="text-turquoise" scriptClass="text-[#b8975a]" />
          <div>
            <p className="font-body text-[14px] uppercase tracking-[0.16em] text-ink-deep">
              Porte {transit.porte}
            </p>
            {transit.motsCles && (
              <p className="mt-2 font-body text-[14px] uppercase tracking-[0.16em] text-ink-deep">
                {transit.motsCles}
              </p>
            )}
            {transit.periode && (
              <p className="mt-2 font-body text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                {transit.periode}
              </p>
            )}
          </div>
          <p className="max-w-[440px] font-display text-[17px] leading-relaxed text-ink-deep md:text-[18px]">
            «&nbsp;{transit.message}&nbsp;»
          </p>
        </BannerCard>

        {/* ——— Card Phase lunaire — fond photo des phases de la lune, mode nuit ——— */}
        <BannerCard
          bgSrc="/assets/phase-lunaire.jpg"
          veilClass="bg-ink-deep/65"
          info={{ id: "lune-tooltip", texte: LUNE_EXPLICATION, dark: true }}
        >
          <Wordmark
            caps="Phase"
            script="Lunaire"
            capsClass="text-ink-lilac"
            scriptClass="text-[#e9dcc0]"
          />
          <div>
            <p className="font-body text-[14px] uppercase tracking-[0.16em] text-white">
              {transit.phase || "Phase du jour"}
            </p>
            {transit.phaseMotsCles && (
              <p className="mt-2 font-body text-[14px] uppercase tracking-[0.16em] text-white">
                {transit.phaseMotsCles}
              </p>
            )}
          </div>
          {transit.phaseDescription && (
            <p className="max-w-[440px] font-display text-[17px] leading-relaxed whitespace-pre-line text-white md:text-[18px]">
              {transit.phaseDescription}
            </p>
          )}
        </BannerCard>
      </div>
    </section>
  );
}

/**
 * Card du bandeau. Par défaut : fond paillettes doré (même que le header) + voile blanc.
 * La card lunaire passe sa propre image (photo des phases) + un voile sombre.
 * `info` affiche un « ? » cerclé dans le coin haut-droit avec son explication en tooltip.
 */
function BannerCard({
  children,
  bgSrc = "/assets/header-glitter.png",
  veilClass = "bg-white/78",
  info,
}: {
  children: React.ReactNode;
  bgSrc?: string;
  veilClass?: string;
  info?: { id: string; texte: string; dark?: boolean };
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#d8bf8b]/40 px-6 py-9 shadow-[0_24px_55px_-30px_rgba(80,60,98,0.22)] lg:px-10">
      <Image
        src={bgSrc}
        alt=""
        aria-hidden
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="pointer-events-none absolute inset-0 object-cover"
      />
      <div aria-hidden className={`pointer-events-none absolute inset-0 ${veilClass}`} />
      {info && (
        <div className="absolute top-5 right-5 z-10">
          <InfoTooltip {...info} />
        </div>
      )}
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

/**
 * Point d'interrogation cerclé — tooltip au survol et au focus clavier.
 * Le panneau s'aligne sur le bord droit du bouton (coin de card oblige).
 */
function InfoTooltip({ id, texte, dark }: { id: string; texte: string; dark?: boolean }) {
  return (
    <button
      type="button"
      aria-describedby={id}
      className={`group relative grid h-6 w-6 flex-none cursor-help place-items-center rounded-full border font-body text-[13px] transition-colors hover:border-turquoise hover:text-turquoise focus-visible:border-turquoise focus-visible:text-turquoise focus-visible:outline-none ${
        dark ? "border-white/50 text-white/80" : "border-ink-deep/40 text-ink-deep/70"
      }`}
    >
      ?
      <span
        role="tooltip"
        id={id}
        className="pointer-events-none invisible absolute top-8 right-0 z-20 w-[290px] rounded-md border border-ink/10 bg-white px-4 py-3 text-left font-sans text-[13px] font-normal not-italic leading-relaxed normal-case tracking-normal text-ink shadow-[0_18px_40px_-18px_rgba(80,60,98,0.45)] opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 md:w-[340px]"
      >
        {texte}
      </span>
    </button>
  );
}
