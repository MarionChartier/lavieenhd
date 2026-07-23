import Image from "next/image";
import Link from "next/link";
import type { Offre, OffreColor } from "@/lib/content/offres";
import { LogoCircle } from "@/components/sections/offres/OffreVisuals";

/** Fond de section selon la couleur sous-marque de l'offre */
const SECTION_BG: Record<OffreColor, string> = {
  free: "bg-[#efe2c6]/55", // doré soft — opacité réduite pour plus de discrétion
  violet: "bg-[#e6dcef]/55", // lavender soft
  turquoise: "bg-[#d6e8ea]/55", // cyan soft
  beige: "bg-[#ecdfc5]/55", // beige soft
};

/** Couleur des puces (bullets) — accent assorti à l'offre */
const BULLET_COLOR: Record<OffreColor, string> = {
  free: "bg-[#b89a5b]",
  violet: "bg-ink-deep",
  turquoise: "bg-turquoise",
  beige: "bg-[#a08b6c]",
};

/**
 * Vue d'ensemble d'une offre sur /mes-offres : logo + brief + bouton "Découvrir"
 * qui mène vers la page dédiée (/mes-offres/[slug]). Le Quiz (offre 01, gratuit)
 * mène à la page interne "Quiz gratuits" (/quiz) qui présente les 2 quiz.
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
  // Le Quiz (offre 01) est plus compact : padding hero réduit + lien externe
  const isQuiz = offre.num === "01";
  const isSoin = offre.slug === "soin-energetique";

  return (
    <section id={offre.slug} className={`scroll-mt-24 border-t border-white ${bg}`}>
      <div
        className={`relative overflow-hidden px-6 md:px-20 ${
          isQuiz ? "py-14 md:py-20" : "py-20 md:py-28"
        }`}
      >
        {/* Fond aquarelle oracle-frame — pour le Quiz gratuits */}
        {isQuiz && (
          <>
            <Image
              src="/assets/oracle-frame.png"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="pointer-events-none absolute inset-0 object-cover"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/60" />
          </>
        )}

        {/* Fond paillettes doré (comme le header, ex-Quiz) — pour le Soin énergétique */}
        {isSoin && (
          <>
            <Image
              src="/assets/header-glitter.png"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="pointer-events-none absolute inset-0 object-cover"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/60" />
          </>
        )}

        {/* Fond texture papier cyan — TEST pour Fleur de Talents Innés + INSIDE */}
        {(offre.signature || offre.slug === "inside") && (
          <>
            <Image
              src="/assets/fleur-bg.png"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="pointer-events-none absolute inset-0 object-cover"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/40" />
          </>
        )}

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
              <p className="flex items-center gap-2 pb-3 font-body text-[10px] uppercase tracking-[0.28em] text-ink-soft/70 md:pb-4">
                <span>{offre.num}</span>
                <span aria-hidden className="h-3 w-px bg-ink-soft/30" />
                <span>{offre.tag}</span>
              </p>

              <h2 className="mt-3 font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[72px]">
                {offre.name}
                {offre.trademark && <sup className="ml-1 text-[0.4em]">®</sup>}
              </h2>

              {offre.subtitle && (
                <p className="mt-3 font-display text-[19px] font-light leading-snug text-ink md:text-[22px]">
                  {offre.subtitle}
                </p>
              )}

              <p className="mt-6 font-display text-[18px] italic leading-snug text-ink-deep md:text-[22px]">
                «&nbsp;{offre.lead}&nbsp;»
              </p>

              <p className="mt-5 max-w-[480px] font-sans text-[14px] font-normal leading-relaxed text-ink-deep md:text-[15px]">
                {offre.briefDescription}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {offre.briefBullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 font-sans text-[14px] font-normal leading-snug text-ink-deep md:text-[15px]"
                  >
                    <span aria-hidden className={`h-2 w-2 flex-none rounded-full ${bulletColor}`} />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-body text-[13px] leading-none tracking-wide text-ink-soft md:text-[14px]">
                {offre.price}
              </p>

              {/* CTA — lien direct vers la page de l'offre. Vide pour le moment
                  pour les offres dont la page HTML n'est pas encore fournie. */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {isQuiz ? (
                  <Link
                    href={offre.href}
                    className="inline-flex items-center justify-center rounded-full bg-ink-deep px-8 pt-[17px] pb-[15px] font-body text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
                  >
                    Voir les quiz gratuits
                  </Link>
                ) : offre.href ? (
                  <a
                    href={offre.href}
                    {...(offre.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-deep bg-white/40 px-7 py-3 font-body text-[11px] uppercase tracking-[0.22em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
                  >
                    Découvrir
                    <span aria-hidden>→</span>
                  </a>
                ) : (
                  <span
                    aria-disabled
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-ink-deep/25 bg-white/30 px-7 py-3 font-body text-[11px] uppercase tracking-[0.22em] text-ink-deep/45"
                  >
                    Bientôt disponible
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
