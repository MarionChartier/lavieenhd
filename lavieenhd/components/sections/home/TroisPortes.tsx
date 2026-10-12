"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { PORTES, type Porte, type PorteOffre, type PorteTon } from "@/lib/content/portes";

/** Fond de la porte ouverte, numéro et chevron, par ton. */
const TONS: Record<PorteTon, { open: string; num: string; chev: string; thumb: string }> = {
  violet: {
    open: "bg-[#eee4f8]",
    num: "text-[#8d71a8]",
    chev: "bg-[#f4ecfa]",
    thumb: "bg-[linear-gradient(135deg,#ece4f5_0%,#dccef0_100%)]",
  },
  turquoise: {
    open: "bg-[#e5f4f5]",
    num: "text-[#68afb4]",
    chev: "bg-[#e2f2f3]",
    thumb: "bg-[linear-gradient(135deg,#dbeef4_0%,#c5e6e9_100%)]",
  },
  beige: {
    open: "bg-[#f5ecdf]",
    num: "text-[#b78c4a]",
    chev: "bg-[#f3e9db]",
    thumb: "bg-[linear-gradient(135deg,#f0e3cc_0%,#e5d4b4_100%)]",
  },
};

/**
 * Les 3 portes d'entrée de l'accueil, en accordéon : une seule porte ouverte à
 * la fois. L'ancre #portes est utilisée par la FAQ (« Par où je commence ? »).
 */
export function TroisPortes() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="portes" className="scroll-mt-24 bg-paper px-6 py-20 md:px-20 md:py-28">
      <div className="mx-auto max-w-(--container-content)">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <h2 className="font-display text-[36px] font-light leading-tight text-ink-deep md:text-[56px]">
            Qu’est-ce qui t’appelle le plus <em className="italic text-turquoise">aujourd’hui?</em>
          </h2>
          <p className="max-w-[330px] font-display text-[16px] font-light leading-relaxed text-ink lg:justify-self-end">
            Choisis la porte qui correspond le mieux à ce que tu vis ou recherches en ce moment,
            puis ouvre-la pour découvrir ce qui pourrait t’aider à avancer.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PORTES.map((porte, i) => (
            <PorteAccordeon
              key={porte.num}
              porte={porte}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PorteAccordeon({
  porte,
  isOpen,
  onToggle,
}: {
  porte: Porte;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ton = TONS[porte.ton];
  const panelId = `porte-${porte.num}`;

  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-ink/12 transition-colors duration-300 ${
        isOpen ? ton.open : "bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="grid w-full grid-cols-[52px_1fr_40px] items-center gap-3 px-4 py-6 text-left md:grid-cols-[90px_1fr_54px] md:gap-6 md:px-8 md:py-7"
      >
        <span
          className={`font-display text-[44px] font-light leading-none transition-colors md:text-[68px] ${
            isOpen ? ton.num : "text-ink/25"
          }`}
        >
          {porte.num}
        </span>
        <span>
          <span className="block font-body text-[15px] font-semibold uppercase leading-snug tracking-[0.06em] text-ink-deep md:text-[18px]">
            {porte.title}
          </span>
          <span className="mt-2 block font-display text-[15px] font-light leading-relaxed text-ink md:text-[16px]">
            {porte.description}
          </span>
          <span className="mt-3 flex flex-wrap gap-2">
            {porte.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-ink/15 bg-white/70 px-3 pt-[3px] pb-[2px] font-body text-[11px] text-ink"
              >
                {chip}
              </span>
            ))}
          </span>
        </span>
        <span
          aria-hidden
          className={`grid h-10 w-10 place-items-center rounded-full text-ink-deep md:h-12 md:w-12 ${ton.chev}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" inert={!isOpen}>
          <div className="flex flex-col gap-3 px-3 pb-6 md:px-6">
            {porte.offres.map((offre) => (
              <OffreCard key={offre.name} offre={offre} thumbClass={ton.thumb} />
            ))}
            {porte.complement && (
              <>
                <p className="mx-1 mt-2 border-t border-ink/15 pt-4 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  En complément
                </p>
                <OffreCard offre={porte.complement} thumbClass={ton.thumb} complement />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Carte d'offre des portes, réutilisée pour le Soin énergétique.
 *
 * Toutes les cartes partagent la même hauteur minimale, calée sur la plus
 * chargée à chaque largeur (consigne de Marion : même hauteur visuelle quelle
 * que soit la longueur du texte). Une hauteur MINIMALE et non fixe : un texte
 * plus long que prévu agrandit la carte au lieu d'être tronqué ou de déborder.
 */
export function OffreCard({
  offre,
  thumbClass,
  complement = false,
  children,
}: {
  offre: Pick<PorteOffre, "name" | "href" | "logoSrc" | "quiz"> & { description?: string };
  thumbClass: string;
  complement?: boolean;
  /** Contenu libre sous le nom, à la place de la description */
  children?: ReactNode;
}) {
  // Les quiz sont des fichiers .html statiques (pas des routes Next) : pas de prefetch.
  const isStaticFile = offre.href.endsWith(".html");

  return (
    <Link
      href={offre.href}
      prefetch={isStaticFile ? false : undefined}
      className={`group grid min-h-[332px] grid-cols-1 content-between items-center sm:content-center gap-x-3 gap-y-3 rounded-[18px] px-3.5 py-3 transition-all hover:-translate-y-0.5 sm:min-h-[210px] sm:grid-cols-[72px_1fr] lg:min-h-[150px] lg:grid-cols-[105px_1fr_auto] lg:gap-x-5 ${
        complement
          ? "border border-ink/12 bg-white/60"
          : "bg-white shadow-[0_5px_16px_rgba(70,50,80,0.04)] hover:shadow-[0_12px_30px_-16px_rgba(80,60,98,0.25)]"
      }`}
    >
      <div
        className={`relative grid h-[72px] w-[72px] place-items-center sm:w-auto overflow-hidden rounded-xl lg:h-[84px] ${thumbClass} ${
          complement ? "opacity-75 saturate-50" : ""
        }`}
      >
        <Image
          src={offre.logoSrc}
          alt=""
          width={105}
          height={84}
          className="h-full w-full object-contain p-1.5"
        />
      </div>

      <div className={complement ? "opacity-85" : undefined}>
        {offre.quiz && (
          <span className="mb-1.5 inline-flex rounded-full border border-[#ddd1e7] bg-[#f4ecfa] px-2.5 pt-[4px] pb-[3px] font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-[#765d8d]">
            Quiz gratuit
          </span>
        )}
        <p className="font-display text-[17px] leading-snug text-ink-deep md:text-[21px]">
          {offre.name}
        </p>
        {children ??
          (offre.description && (
            <p className="mt-1 font-body text-[12.5px] leading-relaxed text-ink md:text-[13.5px]">
              {offre.description}
            </p>
          ))}
      </div>

      <span className="inline-flex items-center gap-2.5 sm:col-start-2 font-body text-[13px] font-semibold text-ink-deep lg:col-start-3">
        Découvrir
        <span
          aria-hidden
          className="grid h-8 w-8 place-items-center rounded-full bg-ink-lilac text-white transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </Link>
  );
}
