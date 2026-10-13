"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { findTransit, parseCsv, type Transit } from "@/lib/transit";
import { SOIN_ENERGETIQUE } from "@/lib/content/portes";
import { OffreCard } from "@/components/sections/home/TroisPortes";

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
    <section className="bg-white px-6 pt-16 pb-6 md:px-20 md:pt-24 md:pb-8">
      {/* Transition depuis les témoignages (maquette V36) */}
      <div className="mx-auto mb-10 max-w-[760px] text-center font-display text-ink-deep md:mb-12">
        <p className="text-[19px] font-semibold leading-relaxed md:text-[22px]">
          Et parce que nous traversons aussi des cycles qui viennent colorer ce que nous vivons...
        </p>
        <p className="mt-2 text-[17px] font-light italic leading-relaxed md:text-[18px]">
          Je te propose ici un petit éclairage sur ce qui se joue pour nous, au niveau collectif,
          aujourd’hui.
        </p>
      </div>

      <div className="mx-auto mb-8 max-w-(--container-content) text-center md:mb-10">
        {/* leading généreux : les jambages de la script descendent bas et
            viennent croiser la date si on serre l'interligne. */}
        <h2 className="font-script text-[30px] leading-[1.5] text-ink-deep md:text-[36px]">
          Les énergies du moment
        </h2>
        <DateDuJour />
      </div>

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

        {/* ——— Card Phase lunaire — fond photo des phases de la lune, mode violet clair ——— */}
        <BannerCard
          bgSrc="/assets/phase-lunaire.jpg"
          veilClass="bg-gradient-to-br from-[#ece4f5]/93 to-[#dccef0]/93"
          borderClass="border-ink-lilac/30"
          info={{ id: "lune-tooltip", texte: LUNE_EXPLICATION }}
        >
          <Wordmark
            caps="Phase"
            script="Lunaire"
            capsClass="text-turquoise"
            scriptClass="text-ink-deep"
          />
          <div>
            <p className="font-body text-[14px] uppercase tracking-[0.16em] text-ink-deep">
              {transit.phase || "Phase du jour"}
            </p>
            {transit.phaseMotsCles && (
              <p className="mt-2 font-body text-[14px] uppercase tracking-[0.16em] text-ink-deep">
                {transit.phaseMotsCles}
              </p>
            )}
          </div>
          {transit.phaseDescription && (
            <p className="max-w-[440px] font-display text-[17px] leading-relaxed whitespace-pre-line text-ink-deep md:text-[18px]">
              {transit.phaseDescription}
            </p>
          )}
        </BannerCard>
      </div>

      {/* Le Soin énergétique, placé sous les 3 portes (maquette V36) */}
      <div className="mx-auto mt-12 max-w-(--container-content) md:mt-14">
        <p className="mx-auto mb-6 max-w-[760px] text-center font-display text-[17px] font-light italic leading-relaxed text-ink-deep md:text-[18px]">
          Et si, au-delà de ces énergies collectives, tu ressens le besoin de revenir à toi...
        </p>
        <OffreCard
          offre={{
            name: SOIN_ENERGETIQUE.name,
            href: SOIN_ENERGETIQUE.href,
            logoSrc: SOIN_ENERGETIQUE.logoSrc,
          }}
          thumbClass="bg-[linear-gradient(135deg,#f0e3cc_0%,#e5d4b4_100%)]"
          badge={{
            label: SOIN_ENERGETIQUE.subtitle,
            className: "border-[#e5d4b4] bg-[#f5ecdf] text-[#8a6a3c]",
          }}
          photo
          // Carte blanche sur section blanche : un liseré fin dessine le haut,
          // que l'ombre portée vers le bas ne marquait pas, et une ombre diffuse
          // tout autour la détache du fond.
          surface="border border-ink/10 bg-white shadow-[0_6px_26px_-8px_rgba(80,60,98,0.18)] hover:shadow-[0_10px_32px_-8px_rgba(80,60,98,0.26)]"
        >
          {/* Ligne de lecture bornée : sur toute la largeur de la carte, la phrase
              filait sur 1 300px et laissait « énergie. » seule à la ligne. */}
          <div className="mt-1.5 max-w-[640px] font-display text-[16px] leading-snug text-ink-deep md:text-[17px]">
            <p>{SOIN_ENERGETIQUE.description[0]}</p>
            <p className="mt-1.5 italic">{SOIN_ENERGETIQUE.description[1]}</p>
          </div>
        </OffreCard>
      </div>
    </section>
  );
}

/** L'horloge ne pousse jamais de mise à jour : abonnement vide. */
const subscribeHorloge = () => () => {};

function lireDateDuJour() {
  const brut = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // « samedi 8 août 2026 » → « Samedi 8 Août 2026 »
  return brut.replace(/(^|\s)(\p{L})/gu, (_, sep, lettre) => sep + lettre.toUpperCase());
}

/**
 * Date du jour, format « Samedi 8 Août 2026 ».
 * Rendue côté serveur, elle refléterait le fuseau du serveur et provoquerait un
 * écart d'hydratation à l'approche de minuit : le snapshot serveur est donc
 * vide, et React bascule sur l'horloge du client une fois l'hydratation faite.
 */
function DateDuJour() {
  const date = useSyncExternalStore(subscribeHorloge, lireDateDuJour, () => "");

  // Hauteur réservée : sans elle, les cards sautent d'une ligne au montage.
  return (
    <p className="mt-8 h-4 font-body text-[12px] uppercase tracking-[0.18em] text-ink-soft">
      {date}
    </p>
  );
}

/**
 * Card du bandeau. Par défaut : fond paillettes doré (même que le header) + voile blanc.
 * La card lunaire passe sa propre image (photo des phases) + un voile violet clair.
 * `info` affiche un « ? » cerclé dans le coin haut-droit avec son explication en tooltip.
 */
function BannerCard({
  children,
  bgSrc = "/assets/header-glitter.png",
  veilClass = "bg-white/78",
  borderClass = "border-[#d8bf8b]/40",
  info,
}: {
  children: React.ReactNode;
  bgSrc?: string;
  veilClass?: string;
  borderClass?: string;
  info?: { id: string; texte: string };
}) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] border px-6 py-9 shadow-[0_24px_55px_-30px_rgba(80,60,98,0.22)] lg:px-10 ${borderClass}`}>
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
function InfoTooltip({ id, texte }: { id: string; texte: string }) {
  return (
    <button
      type="button"
      aria-describedby={id}
      className="group relative grid h-6 w-6 flex-none cursor-help place-items-center rounded-full border border-ink-deep/40 font-body text-[13px] text-ink-deep/70 transition-colors hover:border-turquoise hover:text-turquoise focus-visible:border-turquoise focus-visible:text-turquoise focus-visible:outline-none"
    >
      <span className="inline-block translate-y-[3px] leading-none">?</span>
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
