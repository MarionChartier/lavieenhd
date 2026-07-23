"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { OFFRES, type Offre, type OffreColor } from "@/lib/content/offres";

const COLOR_GRADIENTS: Record<OffreColor, string> = {
  free: "bg-[linear-gradient(135deg,#e5f0e4_0%,#d4e4d2_100%)]",
  violet: "bg-[linear-gradient(135deg,#ece4f5_0%,#dccef0_100%)]",
  turquoise: "bg-[linear-gradient(135deg,#dbeef4_0%,#c5e6e9_100%)]",
  beige: "bg-[linear-gradient(135deg,#f0e3cc_0%,#e5d4b4_100%)]",
};

export function OffresAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // À l'arrivée sur la page : ouvrir la section qui correspond au fragment d'URL (#slug)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && OFFRES.some((o) => o.slug === hash)) {
      // Sync unique au montage depuis l'URL (évite un mismatch d'hydratation SSR).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenSlug(hash);
    }
  }, []);

  const handleToggle = (slug: string) => {
    const newOpen = openSlug === slug ? null : slug;
    setOpenSlug(newOpen);

    // Mise à jour de l'URL sans recharger ni polluer l'historique
    if (newOpen) {
      window.history.replaceState(null, "", `#${newOpen}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <div className="mx-auto flex max-w-[980px] flex-col gap-4">
      {OFFRES.map((offre) => (
        <OffreItem
          key={offre.slug}
          offre={offre}
          isOpen={openSlug === offre.slug}
          onToggle={() => handleToggle(offre.slug)}
        />
      ))}
    </div>
  );
}

function OffreItem({
  offre,
  isOpen,
  onToggle,
}: {
  offre: Offre;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const gradient = COLOR_GRADIENTS[offre.color];

  return (
    <section
      id={offre.slug}
      // scroll-margin-top compense le header sticky lors du scroll vers l'ancre
      className="scroll-mt-24 overflow-hidden rounded-md border border-ink/12 bg-white shadow-[0_8px_24px_-12px_rgba(80,60,98,0.10)]"
    >
      {/* Header — toujours visible, cliquable */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${offre.slug}-content`}
        className="group flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-paper md:gap-6 md:p-7"
      >
        {/* Numéro */}
        <span className="grid h-12 w-12 flex-none place-items-center rounded-full border border-ink-lilac bg-white font-display text-[18px] italic text-ink-deep md:h-14 md:w-14 md:text-[20px]">
          {offre.num}
        </span>

        {/* Logo / accent */}
        <span
          className={`relative hidden h-14 w-20 flex-none place-items-center overflow-hidden rounded p-2 sm:grid md:h-16 md:w-24 ${gradient}`}
        >
          <span className="absolute -inset-3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_65%)]" />
          {offre.logoSrc ? (
            <Image
              src={offre.logoSrc}
              alt=""
              width={80}
              height={50}
              className="relative max-h-full w-auto max-w-full object-contain"
            />
          ) : (
            <span className="relative font-display text-[22px] italic text-ink-deep">
              {offre.num}
            </span>
          )}
        </span>

        {/* Titre + tag */}
        <span className="flex flex-1 flex-col gap-1">
          <span className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft md:text-[11px]">
            {offre.tag}
          </span>
          <span className="font-display text-[22px] leading-none text-ink-deep md:text-[28px]">
            {offre.name}
            {offre.trademark && <sup className="ml-0.5 text-[0.5em]">®</sup>}
          </span>
        </span>

        {/* Icône expand/collapse */}
        <span
          aria-hidden
          className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ink-lilac text-ink-deep transition-transform duration-300 ${
            isOpen ? "rotate-180 border-turquoise bg-turquoise text-white" : ""
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Contenu dépliable — animation grid trick (max-height fluide) */}
      <div
        id={`${offre.slug}-content`}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 border-t border-line p-5 md:grid-cols-[280px_1fr] md:gap-10 md:p-9">
            {/* Visuel */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded md:aspect-auto">
              <Image
                src={offre.imgUrl}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover"
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.22em] text-turquoise">
                  À propos
                </p>
                <p className="mt-3 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                  {offre.longDescription}
                </p>
              </div>

              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.22em] text-turquoise">
                  Pour qui c’est&nbsp;?
                </p>
                <p className="mt-3 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                  {offre.forWhom}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
