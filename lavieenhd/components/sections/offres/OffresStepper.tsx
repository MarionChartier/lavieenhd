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
      className="mx-auto mt-14 flex flex-col items-center gap-y-8 md:mt-20"
    >
      {/* Desktop : les 7 pastilles reliées en pointillés sur une seule ligne */}
      <div className="hidden w-full max-w-[1040px] items-start justify-center lg:flex">
        {OFFRES.map((offre, i) => (
          <Fragment key={offre.slug}>
            <StepLink offre={offre} />

            {/* Trait pointillé entre deux cercles */}
            {i < OFFRES.length - 1 && (
              <span
                aria-hidden
                className="mt-7 min-w-4 flex-1 border-t border-dashed border-ink-lilac"
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile / tablette : 2 rangées (3 + 4), trait discret qui serpente —
          rangée 1 de la pastille 1 vers le bord droit de l'écran, rangée 2 du
          bord gauche jusqu'à la pastille 7. */}
      {ROWS.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="relative flex w-full flex-wrap items-start justify-center gap-x-1 gap-y-6 lg:hidden"
        >
          <span
            aria-hidden
            className={`absolute top-[44px] border-t border-dashed border-ink-lilac/50 ${
              rowIdx === 0
                ? "left-[calc(50%-76px)] right-[calc(50%-50vw)]"
                : "left-[calc(50%-50vw)] right-[calc(50%-114px)]"
            }`}
          />
          {row.map((offre) => (
            <StepLink key={offre.slug} offre={offre} />
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
      className="group flex w-[72px] flex-col items-center gap-2 lg:w-[104px] lg:gap-2.5"
    >
      <span className="font-display text-[12px] italic leading-none text-ink-deep lg:text-[14px]">
        {offre.tag}
      </span>
      <span
        className={`relative grid h-12 w-12 place-items-center overflow-hidden rounded-full font-display text-[14px] italic text-ink-deep transition-transform group-hover:scale-110 lg:h-14 lg:w-14 lg:text-[16px] ${
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
        className={`text-center font-body text-[9px] uppercase leading-tight tracking-[0.16em] text-ink-soft transition-colors group-hover:text-ink-deep lg:text-[10px] lg:tracking-[0.18em] ${
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
