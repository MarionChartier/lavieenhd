import type { Metadata } from "next";
import { Fragment } from "react";
import { OFFRES, type Offre } from "@/lib/content/offres";
import { HERO, PORTE_SECTIONS, SOIN_TRANSITION } from "@/lib/content/mes-offres";
import { OffreLandingSection } from "@/components/sections/offres/OffreLandingSection";
import {
  ComplementLabel,
  InsideComplement,
  PorteHeading,
  PortesCards,
  QuizPresentation,
  SoinTransition,
} from "@/components/sections/offres/Portes";
import { Testimonials } from "@/components/sections/home/Testimonials";

export const metadata: Metadata = {
  title: "Mes offres",
  description:
    "3 portes pour ouvrir la voie à ce qui te ressemble : ta vie pro, ton business, ton Human Design. Les offres de Marion Chartier.",
};

const offre = (slug: string): Offre => {
  const found = OFFRES.find((o) => o.slug === slug);
  if (!found) throw new Error(`Offre inconnue : ${slug}`);
  return found;
};

/** Le mot entre astérisques du titre passe en italique turquoise. */
function heroTitle(title: string) {
  return title.split(/\*([^*]+)\*/).map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="italic text-turquoise">
        {part}
      </em>
    ) : (
      part
    ),
  );
}

export default function MesOffresPage() {
  // Alternance gauche/droite des cartes d'offres, continue d'une porte à l'autre.
  let rang = 0;
  const carte = (slug: string, heading: "h2" | "h3" = "h3") => (
    <OffreLandingSection key={slug} offre={offre(slug)} index={rang++} heading={heading} />
  );

  return (
    <>
      {/* HERO */}
      <section className="bg-white px-6 pt-16 pb-16 text-center md:px-20 md:pt-24 md:pb-24">
        <h1 className="mx-auto max-w-[1000px] font-display text-[48px] font-light leading-[1] text-ink-deep md:text-[96px]">
          {heroTitle(HERO.title)}
        </h1>
        <p className="mx-auto mt-8 max-w-[680px] font-display text-[18px] font-light italic leading-snug text-ink md:text-[22px]">
          {HERO.subtitle}
        </p>
        <PortesCards sections={PORTE_SECTIONS} />
      </section>

      {/* LES 3 PORTES */}
      {PORTE_SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <PorteHeading section={section} />
          <QuizPresentation quiz={section.quiz} ton={section.porte.ton} />
          {section.offres.map((slug) => carte(slug))}
          {section.insideComplement && <InsideComplement label={section.insideComplement.label} />}
          {section.complementOffre && (
            <Fragment>
              <div className="bg-[linear-gradient(135deg,#f8f6fa,#edf9f9)] px-6 pt-12 pb-2 md:pt-16">
                <ComplementLabel>En complément</ComplementLabel>
              </div>
              {carte(section.complementOffre)}
            </Fragment>
          )}
        </section>
      ))}

      {/* SOIN ÉNERGÉTIQUE — hors des portes, avant les témoignages */}
      <SoinTransition {...SOIN_TRANSITION} />
      {carte("soin-energetique", "h2")}

      {/* TÉMOIGNAGES — en clôture de page */}
      <Testimonials />
    </>
  );
}
