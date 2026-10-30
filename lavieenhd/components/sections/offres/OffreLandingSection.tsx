import type { CSSProperties } from "react";
import Image from "next/image";
import type { Offre, OffreColor } from "@/lib/content/offres";
import { OffreVisuel } from "@/components/sections/offres/OffreVisuals";

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
 * Rend les passages entourés d'astérisques en italique — la mise en forme que
 * Marion indique dans ses textes d'offres. Volontairement minimal : un seul
 * marqueur, pas de moteur Markdown pour six phrases.
 */
function avecItaliques(texte: string) {
  return texte.split(/\*([^*]+)\*/).map((morceau, i) =>
    i % 2 === 1 ? <em key={i}>{morceau}</em> : morceau,
  );
}

/**
 * Hauteur d'un logo recadré pour qu'il occupe la même surface qu'un carré de
 * `cote` px : un logo large et plat (BODY Bloom) s'étale en largeur, un logo
 * haut (Blooming) prend de la hauteur, et tous paraissent de même poids.
 */
function hauteurLogo({ width, height }: { width: number; height: number }, cote: number) {
  return Math.round(cote * Math.sqrt(height / width));
}

/**
 * Vue d'ensemble d'une offre sur /mes-offres : logo + brief + bouton "Découvrir"
 * qui mène vers la page dédiée (/mes-offres/[slug]).
 */
export function OffreLandingSection({
  offre,
  index,
  heading: Heading = "h2",
}: {
  offre: Offre;
  index: number;
  /** h3 dans une porte, sous son titre h2 ; h2 hors des portes (Soin). */
  heading?: "h2" | "h3";
}) {
  const logo = offre.logoTitre;
  const bg = SECTION_BG[offre.color];
  const bulletColor = BULLET_COLOR[offre.color];
  const isReversed = index % 2 === 1;
  const isSoin = offre.slug === "soin-energetique";
  // Lien externe systeme.io → nouvel onglet ; pages de vente internes → même onglet
  const externalProps = (url: string) =>
    url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <section id={offre.slug} className={`scroll-mt-24 border-t border-white ${bg}`}>
      <div className="relative overflow-hidden px-6 py-20 md:px-20 md:py-28">
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
            {/* Mockup de l'offre */}
            <div className="flex items-center justify-center">
              <OffreVisuel offre={offre} />
            </div>

            {/* Contenu hero */}
            <div>
              {/* Le logo porte déjà le nom de l'offre (demande de Marion) : il
                  remplace titre et sous-titre. Sans logo (Soin), titre texte. */}
              {logo ? (
                <Heading>
                  <Image
                    src={logo.src}
                    alt={offre.name}
                    width={logo.width}
                    height={logo.height}
                    sizes="(min-width: 768px) 240px, 180px"
                    className="h-(--logo-h) w-auto md:h-(--logo-h-md)"
                    style={
                      {
                        "--logo-h": `${hauteurLogo(logo, 135)}px`,
                        "--logo-h-md": `${hauteurLogo(logo, 175)}px`,
                      } as CSSProperties
                    }
                  />
                </Heading>
              ) : (
                <>
                  <Heading className="font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[72px]">
                    {offre.name}
                    {offre.trademark && <sup className="ml-1 text-[0.4em]">™</sup>}
                  </Heading>
                  {offre.subtitle && (
                    <p className="mt-3 font-display text-[19px] font-light leading-snug text-ink md:text-[22px]">
                      {offre.subtitle}
                    </p>
                  )}
                </>
              )}

              {offre.subtitleNote && (
                <p className="mt-4 font-display text-[15px] font-light italic leading-snug text-ink-soft md:text-[16px]">
                  {offre.subtitleNote}
                </p>
              )}

              <p className="mt-6 font-display text-[18px] italic leading-snug text-ink-deep md:text-[22px]">
                «&nbsp;{offre.lead}&nbsp;»
              </p>

              {offre.briefDescription.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="mt-5 max-w-[480px] font-sans text-[14px] font-normal leading-relaxed text-ink-deep md:text-[15px]"
                >
                  {avecItaliques(para)}
                </p>
              ))}

              {offre.briefBullets.length > 0 && (
                <ul className="mt-6 flex flex-col gap-3">
                  {offre.briefBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 font-sans text-[14px] font-normal leading-snug text-ink-deep md:text-[15px]"
                    >
                      <span aria-hidden className={`h-2 w-2 flex-none rounded-full ${bulletColor}`} />
                      <span>{avecItaliques(b)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {offre.price && (
                <p className="mt-6 font-body text-[13px] leading-none tracking-wide text-ink-soft md:text-[14px]">
                  {offre.price}
                </p>
              )}

              {/* CTA — lien direct vers la page de l'offre. Vide pour le moment
                  pour les offres dont la page HTML n'est pas encore fournie. */}
              <div className="mt-8">
                {offre.href ? (
                  <>
                    <a
                      href={offre.href}
                      {...externalProps(offre.href)}
                      className="inline-flex items-center gap-2 rounded-md border border-ink-deep bg-white/40 px-7 py-3 font-body text-[11px] uppercase tracking-[0.22em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
                    >
                      {offre.ctaLabel ?? "Découvrir"}
                      <span aria-hidden>→</span>
                    </a>

                    {/* CTA secondaire — accès direct au bon de commande, en retrait par
                        le traitement (lien texte, pas de pastille) pour ceux qui foncent à l'instinct */}
                    {offre.orderHref && (
                      <>
                        <p className="mt-6 max-w-[440px] font-display text-[15px] italic leading-snug text-ink md:text-[16px]">
                          Et si, comme moi, tu fonctionnes à l&apos;instinct, et que tu ressens
                          l&apos;appel sans avoir besoin d&apos;en savoir plus...
                        </p>
                        <a
                          href={offre.orderHref}
                          {...externalProps(offre.orderHref)}
                          className="group mt-3 inline-flex items-center gap-2 pt-2 font-body text-[13px] text-ink-deep underline decoration-ink-deep/40 decoration-1 underline-offset-4 transition-colors hover:decoration-ink-deep md:text-[14px]"
                        >
                          Foncer sans détour
                          <span aria-hidden className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </a>
                      </>
                    )}
                  </>
                ) : (
                  <span
                    aria-disabled
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-ink-deep/25 bg-white/30 px-7 py-3 font-body text-[11px] uppercase tracking-[0.22em] text-ink-deep/45"
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
