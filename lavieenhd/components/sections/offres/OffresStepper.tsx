import { Fragment } from "react";
import { OFFRES, type OffreColor } from "@/lib/content/offres";

/** Couleur de fond du cercle, suivant la couleur sous-marque de chaque offre */
const STEPPER_BG: Record<OffreColor, string> = {
  free: "bg-[#f0e3cc]",
  violet: "bg-[#ece4f5]",
  turquoise: "bg-[#dbeef4]",
  beige: "bg-[#f0e3cc]",
};

/**
 * Mini-navigation horizontale en haut de /mes-offres :
 * 6 cercles numérotés reliés par des pointillés.
 * Chaque cercle est un lien d'ancre vers la section correspondante.
 */
export function OffresStepper() {
  return (
    <nav
      aria-label="Naviguer entre les offres"
      className="mx-auto mt-14 flex max-w-[1100px] items-start px-4 md:mt-20"
    >
      {OFFRES.map((offre, i) => (
        <Fragment key={offre.slug}>
          <a
            href={`#${offre.slug}`}
            className="group flex flex-col items-center gap-3 md:gap-4"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-full font-display text-[14px] italic text-ink-deep transition-transform group-hover:scale-110 md:h-14 md:w-14 md:text-[16px] ${STEPPER_BG[offre.color]}`}
            >
              {offre.num}
            </span>
            <span className="font-body text-[9px] uppercase tracking-[0.18em] text-ink-soft transition-colors group-hover:text-ink-deep md:text-[10px] md:tracking-[0.22em]">
              {offre.shortLabel}
            </span>
          </a>

          {/* Trait pointillé entre deux cercles — aligné sur le centre vertical du cercle */}
          {i < OFFRES.length - 1 && (
            <span
              aria-hidden
              className="mt-6 min-w-6 flex-1 border-t border-dashed border-ink-lilac md:mt-7"
            />
          )}
        </Fragment>
      ))}
    </nav>
  );
}
