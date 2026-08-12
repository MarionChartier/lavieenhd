import type { Metadata } from "next";
import { OFFRES } from "@/lib/content/offres";
import { OffreLandingSection } from "@/components/sections/offres/OffreLandingSection";
import { OffresStepper } from "@/components/sections/offres/OffresStepper";
import { Testimonials } from "@/components/sections/home/Testimonials";

export const metadata: Metadata = {
  title: "Mes offres",
  description:
    "Sept offres pour explorer le Human Design avec Marion Chartier. À chaque besoin, sa formule.",
};

export default function MesOffresPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white px-6 pt-16 pb-12 text-center md:px-20 md:pt-24 md:pb-20">
        {/* Titre massif */}
        <h1 className="font-display text-[56px] font-light leading-[0.95] text-ink-deep md:text-[112px]">
          Plusieurs espaces
          <br />
          pour te <em className="italic text-turquoise">révéler</em>.
        </h1>

        {/* Lead italique */}
        <p className="mx-auto mt-8 max-w-[680px] font-display text-[18px] font-light italic leading-snug text-ink md:text-[22px]">
          Suis ton intuition et ce qui t&apos;appelle aujourd&apos;hui.
        </p>

        {/* Stepper de navigation interne */}
        <OffresStepper />
      </section>

      {/* SECTIONS LANDING PAR OFFRE — fond coloré assorti + layout alterné */}
      {OFFRES.map((offre, i) => (
        <OffreLandingSection key={offre.slug} offre={offre} index={i} />
      ))}

      {/* TÉMOIGNAGES — en clôture de page */}
      <Testimonials />
    </>
  );
}
