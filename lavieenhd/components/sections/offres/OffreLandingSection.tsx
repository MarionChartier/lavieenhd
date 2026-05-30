"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Offre, OffreColor } from "@/lib/content/offres";

/** Fond de section selon la couleur sous-marque de l'offre */
const SECTION_BG: Record<OffreColor, string> = {
  free: "bg-[#dde5d8]", // sage soft
  violet: "bg-[#e6dcef]", // lavender soft
  turquoise: "bg-[#d6e8ea]", // cyan soft
  beige: "bg-[#ecdfc5]", // beige soft
};

/** Couleur des puces (bullets) — accent assorti à l'offre */
const BULLET_COLOR: Record<OffreColor, string> = {
  free: "bg-[#7a9b6d]",
  violet: "bg-ink-deep",
  turquoise: "bg-turquoise",
  beige: "bg-[#a08b6c]",
};

/**
 * Section "landing" pour une offre :
 *  - Hero (toujours visible) : logo + brief content + bouton Découvrir
 *  - Drawer pleine largeur (caché par défaut, dépliable au clic) : fond bg-paper,
 *    grandes sections de contenu, bandeau prix en bas
 *  - Auto-ouverture du drawer si l'URL contient #slug (depuis Le Chemin)
 */
export function OffreLandingSection({
  offre,
  index,
}: {
  offre: Offre;
  index: number;
}) {
  const bg = SECTION_BG[offre.color];
  const bulletColor = BULLET_COLOR[offre.color];
  const isReversed = index % 2 === 1;
  // Le Quiz (offre 01) est plus compact : logo plus petit + padding hero réduit
  const isQuiz = offre.num === "01";

  const [isOpen, setIsOpen] = useState(false);

  // Auto-ouvre le drawer si l'URL pointe sur cette offre
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash === offre.slug) {
        setIsOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [offre.slug]);

  return (
    <section id={offre.slug} className={`scroll-mt-24 ${bg}`}>
      {/* HERO — avec blobs décoratifs, scopés au hero via overflow-hidden */}
      <div
        className={`relative overflow-hidden px-6 md:px-20 ${
          isQuiz ? "py-14 md:py-20" : "py-20 md:py-28"
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-white/45 blur-sm"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-white/35 blur-sm"
        />

        <div className="relative mx-auto max-w-(--container-content)">
          <div
            className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
              isReversed ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Cercle logo */}
            <div className="flex items-center justify-center">
              <LogoCircle offre={offre} />
            </div>

            {/* Contenu hero */}
            <div>
              <p className="flex items-baseline gap-3">
                <span className="font-display text-[26px] italic text-turquoise md:text-[30px]">
                  {offre.num}
                </span>
                <span className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                  {offre.tag}
                </span>
              </p>

              <h2 className="mt-5 font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[72px]">
                {offre.name}
                {offre.trademark && <sup className="ml-1 text-[0.4em]">®</sup>}
              </h2>

              <p className="mt-6 font-display text-[18px] italic leading-snug text-ink-deep md:text-[22px]">
                «&nbsp;{offre.lead}&nbsp;»
              </p>

              <p className="mt-5 max-w-[480px] font-body text-[14px] leading-relaxed text-ink-deep md:text-[15px]">
                {offre.briefDescription}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {offre.briefBullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 font-body text-[14px] text-ink-deep md:text-[15px]"
                  >
                    <span aria-hidden className={`h-2 w-2 flex-none rounded-full ${bulletColor}`} />
                    {b}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-controls={`${offre.slug}-detail`}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-deep bg-white/40 px-7 py-3 font-body text-[11px] uppercase tracking-[0.22em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
              >
                {isOpen ? "Refermer" : "Découvrir"}
                <span
                  aria-hidden
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  ↓
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DRAWER — pleine largeur viewport, bg-paper, contenu enrichi */}
      <div
        id={`${offre.slug}-detail`}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-paper">
            <div className="mx-auto max-w-[900px] px-6 py-20 md:px-20 md:py-24">
              {/* À PROPOS */}
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                  À propos
                </p>
                <div className="mt-5 flex flex-col gap-5 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[18px]">
                  <p>{offre.longDescription}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>

              <hr className="my-12 border-ink-deep/10 md:my-16" />

              {/* POUR QUI + CE QUI EST INCLUS */}
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                    Pour qui c'est&nbsp;?
                  </p>
                  <div className="mt-5 flex flex-col gap-4 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                    <p>{offre.forWhom}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                    Ce qui est inclus
                  </p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {offre.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-display text-[16px] font-light leading-snug text-ink-deep md:text-[17px]"
                      >
                        <span
                          aria-hidden
                          className={`mt-2.5 h-1.5 w-1.5 flex-none rounded-full ${bulletColor}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-ink-deep/10 md:my-16" />

              {/* COMMENT ÇA SE PASSE */}
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                  Comment ça se passe
                </p>
                <div className="mt-5 flex flex-col gap-5 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[18px]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
                  </p>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore.
                  </p>
                </div>
              </div>

              {/* BANDEAU PRIX — carte blanche élevée qui se distingue du beige */}
              <div className="mt-16 md:mt-20">
                <div className="rounded-2xl border border-ink-deep/8 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(80,60,98,0.18)] md:p-10">
                  <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
                    <p className="font-display text-[24px] font-light leading-none text-ink-deep md:text-[28px] md:translate-y-[2px]">
                      {isQuiz ? offre.shortLabel : offre.name}
                      {offre.trademark && <sup className="ml-0.5 text-[0.4em]">®</sup>}
                    </p>

                    <span className="font-display text-[30px] font-light leading-none text-ink-deep md:text-[40px]">
                      {offre.price}
                    </span>

                    <a
                      href={offre.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-ink-deep bg-white px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
                    >
                      Je fonce&nbsp;!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Cercle blanc contenant le logo de l'offre (ou un placeholder SVG pour Quiz/Fleur) */
function LogoCircle({ offre }: { offre: Offre }) {
  // Le Quiz utilise une icône SVG dont l'anneau pointillé visuel va plus loin
  // que les logos PNG des autres offres : on réduit le cercle pour rééquilibrer
  // la hauteur globale de la section.
  const isQuiz = offre.num === "01";
  const circleSize = isQuiz
    ? "h-[260px] w-[260px] md:h-[340px] md:w-[340px]"
    : "h-[300px] w-[300px] md:h-[420px] md:w-[420px]";

  return (
    <div
      className={`relative grid place-items-center rounded-full bg-white/65 shadow-[0_30px_80px_-40px_rgba(80,60,98,0.25)] backdrop-blur-sm ${circleSize}`}
    >
      {offre.logoSrc ? (
        <Image
          src={offre.logoSrc}
          alt={offre.name}
          width={280}
          height={180}
          className="relative max-h-[60%] max-w-[65%] object-contain"
        />
      ) : offre.signature ? (
        <FleurSvg className="relative h-[55%] w-[55%]" />
      ) : isQuiz ? (
        <QuizIcon className="relative h-[55%] w-[55%]" />
      ) : (
        <span className="relative font-display text-[80px] italic text-ink-deep">
          {offre.num}
        </span>
      )}
    </div>
  );
}

/** SVG géométrique 8-pétales pour la Fleur de Talents Innés® */
function FleurSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" className={className} aria-hidden>
      <g fill="none" stroke="#503c62" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => {
          const angleDeg = (i * 360) / 8 - 90;
          const rad = (angleDeg * Math.PI) / 180;
          const cx = 140 + Math.cos(rad) * 60;
          const cy = 140 + Math.sin(rad) * 60;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="22"
              ry="58"
              transform={`rotate(${angleDeg + 90} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="140" cy="140" r="18" fill="#75ced2" stroke="none" opacity="0.5" />
        <circle cx="140" cy="140" r="8" fill="#503c62" stroke="none" />
      </g>
    </svg>
  );
}

/** Mini-logo pour le Quiz Environnement HD — boussole avec 6 points (les 6 profils) */
function QuizIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g>
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="#7a9b6d"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6 - 90;
          const rad = (angle * Math.PI) / 180;
          const cx = 100 + Math.cos(rad) * 50;
          const cy = 100 + Math.sin(rad) * 50;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="16"
              fill="none"
              stroke="#7a9b6d"
              strokeWidth="1.5"
            />
          );
        })}
        <circle cx="100" cy="100" r="14" fill="none" stroke="#7a9b6d" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="4" fill="#7a9b6d" />
      </g>
    </svg>
  );
}
