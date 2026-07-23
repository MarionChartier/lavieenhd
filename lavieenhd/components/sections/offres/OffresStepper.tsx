import { Fragment } from "react";
import Image from "next/image";
import { OFFRES, type Offre, type OffreColor } from "@/lib/content/offres";

/** Couleur de fond du cercle, suivant la couleur sous-marque de chaque offre */
const STEPPER_BG: Record<OffreColor, string> = {
  free: "bg-[#f0e3cc]",
  violet: "bg-[#ece4f5]",
  turquoise: "bg-[#dbeef4]",
  beige: "bg-[#f0e3cc]",
};

/** Disposition en 2 rangées : 3 pastilles en haut, 4 en dessous. */
const ROWS: Offre[][] = [OFFRES.slice(0, 3), OFFRES.slice(3)];

/**
 * Mini-navigation en haut de /mes-offres : 7 cercles numérotés répartis sur
 * 2 rangées (3 puis 4), reliés par des pointillés. Chaque cercle est un lien
 * d'ancre vers la section correspondante.
 */
export function OffresStepper() {
  return (
    <nav
      aria-label="Naviguer entre les offres"
      className="mx-auto mt-14 flex flex-col items-center gap-y-8 md:mt-20 md:gap-y-10"
    >
      {ROWS.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`flex w-full flex-wrap items-start justify-center gap-x-1 gap-y-6 md:flex-nowrap md:gap-x-0 md:gap-y-0 ${
            row.length === 3 ? "md:max-w-[460px]" : "md:max-w-[600px]"
          }`}
        >
          {row.map((offre, i) => (
            <Fragment key={offre.slug}>
              <StepLink offre={offre} />

              {/* Trait pointillé entre deux cercles — aligné sur le centre vertical du cercle */}
              {i < row.length - 1 && (
                <span
                  aria-hidden
                  className="mt-6 hidden min-w-6 flex-1 border-t border-dashed border-ink-lilac md:mt-7 md:block"
                />
              )}
            </Fragment>
          ))}
        </div>
      ))}
    </nav>
  );
}

function StepLink({ offre }: { offre: Offre }) {
  const isQuiz = offre.slug === "quiz";
  return (
    <a
      href={`#${offre.slug}`}
      className="group flex w-[72px] flex-col items-center gap-2 md:w-[120px] md:gap-2.5"
    >
      <span className="font-display text-[12px] italic leading-none text-turquoise md:text-[14px]">
        {offre.tag}
      </span>
      <span
        className={`relative grid h-12 w-12 place-items-center overflow-hidden rounded-full font-display text-[14px] italic text-ink-deep transition-transform group-hover:scale-110 md:h-14 md:w-14 md:text-[16px] ${
          isQuiz ? "" : STEPPER_BG[offre.color]
        }`}
      >
        {isQuiz && (
          <>
            <Image
              src="/assets/oracle-frame.png"
              alt=""
              aria-hidden
              fill
              sizes="56px"
              className="pointer-events-none absolute inset-0 object-cover"
            />
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-white/45" />
          </>
        )}
        <span className="relative">{offre.num}</span>
      </span>
      <span
        className={`text-center font-body text-[9px] uppercase leading-tight tracking-[0.16em] text-ink-soft transition-colors group-hover:text-ink-deep md:text-[10px] md:tracking-[0.18em] ${
          offre.slug === "place-to-be" ? "whitespace-nowrap" : ""
        }`}
      >
        {offre.slug === "place-to-be" ? (
          <>
            The Place
            <br />
            to be
          </>
        ) : (
          offre.shortLabel
        )}
      </span>
    </a>
  );
}
