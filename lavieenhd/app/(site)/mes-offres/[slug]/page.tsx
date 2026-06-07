import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OFFRES, type OffreColor } from "@/lib/content/offres";
import { LogoCircle } from "@/components/sections/offres/OffreVisuals";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";

/** FAQ générique, utilisée quand une offre n'a pas de FAQ dédiée. */
const GENERIC_FAQ = [
  {
    q: "Est-ce fait pour moi, même si je débute en Human Design ?",
    a: "Oui. Tout est pensé pour être accessible et vulgarisé, même si le Human Design est une découverte complète pour toi.",
  },
  {
    q: "Comment ça se passe après ma commande ?",
    a: "Tu reçois toutes les informations par email juste après ta commande, avec la marche à suivre selon l'offre choisie.",
  },
  {
    q: "J'ai besoin de mon heure de naissance ?",
    a: "Oui, pour un schéma précis. Même quelques minutes comptent : si tu ne la connais pas, tu peux la demander à ta mairie de naissance.",
  },
  {
    q: "J'ai une question avant de me lancer ?",
    a: "Écris à Marion, elle te répond avec plaisir pour t'aider à choisir ce qui te correspond le mieux.",
  },
];

/** Fond du hero selon la couleur sous-marque de l'offre */
const SECTION_BG: Record<OffreColor, string> = {
  free: "bg-[#efe2c6]",
  violet: "bg-[#e6dcef]",
  turquoise: "bg-[#d6e8ea]",
  beige: "bg-[#ecdfc5]",
};

const BULLET_COLOR: Record<OffreColor, string> = {
  free: "bg-[#b89a5b]",
  violet: "bg-ink-deep",
  turquoise: "bg-turquoise",
  beige: "bg-[#a08b6c]",
};

/** Le Quiz (offre 01) renvoie vers un formulaire externe : pas de page dédiée. */
const PAGE_OFFRES = OFFRES.filter((o) => o.num !== "01");

export function generateStaticParams() {
  return PAGE_OFFRES.map((offre) => ({ slug: offre.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offre = OFFRES.find((o) => o.slug === slug);
  if (!offre) return {};
  return {
    title: `${offre.name} · La vie en HD`,
    description: offre.subtitle ?? offre.shortDescription,
  };
}

export default async function OffrePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offre = PAGE_OFFRES.find((o) => o.slug === slug);
  if (!offre) notFound();

  const bg = SECTION_BG[offre.color];
  const bulletColor = BULLET_COLOR[offre.color];

  return (
    <>
      {/* HERO */}
      <section className={`relative overflow-hidden px-6 py-16 md:px-20 md:py-24 ${bg}`}>
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
          {/* Fil d'ariane */}
          <Link
            href="/mes-offres"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft transition-colors hover:text-ink-deep"
          >
            <span aria-hidden>←</span> Toutes les offres
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex items-center justify-center">
              <LogoCircle offre={offre} />
            </div>

            <div>
              <p className="flex items-baseline gap-3">
                <span className="font-display text-[26px] italic text-turquoise md:text-[30px]">
                  {offre.num}
                </span>
                <span className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                  {offre.tag}
                </span>
              </p>

              <h1 className="mt-5 font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[72px]">
                {offre.name}
                {offre.trademark && <sup className="ml-1 text-[0.4em]">®</sup>}
              </h1>

              {offre.subtitle && (
                <p className="mt-3 font-display text-[19px] font-light italic leading-snug text-ink md:text-[22px]">
                  {offre.subtitle}
                </p>
              )}

              <p className="mt-6 font-display text-[18px] italic leading-snug text-ink-deep md:text-[22px]">
                «&nbsp;{offre.lead}&nbsp;»
              </p>

              <p className="mt-5 max-w-[480px] font-body text-[14px] leading-relaxed text-ink-deep md:text-[15px]">
                {offre.briefDescription}
              </p>

              <div className="mt-8">
                <a
                  href={offre.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-ink-deep px-8 pt-[17px] pb-[15px] font-body text-[12px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
                >
                  Je fonce&nbsp;!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPS — contenu détaillé */}
      <div className="bg-paper">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-20 md:py-24">
          {/* À PROPOS */}
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
              À propos
            </p>
            <p className="mt-5 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[18px]">
              {offre.longDescription}
            </p>
          </div>

          <hr className="my-12 border-ink-deep/10 md:my-16" />

          {/* POUR QUI + CE QUI EST INCLUS */}
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                Pour qui c'est&nbsp;?
              </p>
              <p className="mt-5 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                {offre.forWhom}
              </p>
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

          {/* BANDEAU PRIX */}
          <div className="mt-16 md:mt-20">
            <div className="rounded-2xl border border-ink-deep/8 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(80,60,98,0.18)] md:p-10">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
                <p className="font-display text-[24px] font-light leading-none text-ink-deep md:text-[28px] md:translate-y-[2px]">
                  {offre.name}
                  {offre.trademark && <sup className="ml-0.5 text-[0.4em]">®</sup>}
                </p>

                <span className="font-body text-[14px] font-normal leading-none text-ink-soft md:text-[15px]">
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

      {/* FAQ dédiée à l'offre (sinon générique) */}
      <FaqSection items={offre.faq ?? GENERIC_FAQ} eyebrow="On répond à tes questions" />

      {/* TÉMOIGNAGES */}
      <Testimonials />
    </>
  );
}
