import type { Metadata } from "next";
import Link from "next/link";
import { BodygraphResultEmbed } from "@/components/sections/BodygraphResultEmbed";

/** Page cible de la redirection du calculateur Bodygraph : le résultat s'affiche
 *  ici en pleine page. Hors sitemap et non indexée (page fonctionnelle). */
export const metadata: Metadata = {
  title: "Ton Design",
  description:
    "Ton schéma Human Design personnel, généré à partir de tes informations de naissance.",
  robots: { index: false, follow: true },
};

export default function MonDesignPage() {
  return (
    <>
      {/* HERO — court : le résultat est la star de la page */}
      <section className="bg-white px-6 pt-12 pb-6 text-center md:px-20 md:pt-20 md:pb-10">
        <h1 className="font-script text-[38px] leading-none text-ink-deep md:text-[56px]">
          Ton Design
        </h1>
        <p className="mx-auto mt-6 max-w-[560px] font-display text-[17px] font-light italic leading-snug text-ink-deep md:text-[21px]">
          Ta carte d’identité énergétique, telle qu’inscrite dans le ciel
          à&nbsp;ta&nbsp;naissance.
        </p>
      </section>

      {/* RÉSULTAT — embed pleine largeur, toute la place qu'il faut sur mobile */}
      <section className="bg-white px-2 pb-16 md:px-20 md:pb-24">
        <div className="mx-auto max-w-[1100px]">
          <BodygraphResultEmbed />
        </div>
      </section>

      {/* CTA — pont vers les offres */}
      <section className="bg-white px-6 pb-24 md:px-20 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          <div className="rounded-2xl border border-ink-deep/8 bg-paper p-10 text-center shadow-[0_20px_50px_-20px_rgba(80,60,98,0.18)] md:p-14">
            <h2 className="font-display text-[32px] font-light leading-tight text-ink-deep md:text-[44px]">
              Ton schéma n’est que <em className="italic text-turquoise">le début</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[18px]">
              Chaque espace de La vie en HD t’aide à comprendre et à incarner ce que
              ta carte révèle, à ton rythme et selon&nbsp;tes&nbsp;besoins.
            </p>
            <Link
              href="/mes-offres"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-ink-deep px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
            >
              Découvrir mes offres
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
