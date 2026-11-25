import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalculateurLayout } from "@/components/sections/CalculateurLayout";
import { Testimonials } from "@/components/sections/home/Testimonials";

export const metadata: Metadata = {
  title: "Test HD gratuit",
  description:
    "À partir de ta date, ton heure et ton lieu de naissance, génère ton schéma de Human Design complet en quelques secondes, gratuitement.",
};

/** Chaque puce : un titre en gras, un paragraphe, puis une phrase en italique. */
const DECOUVERTES = [
  {
    titre: "Un schéma qui ressemble à des hiéroglyphes!",
    texte:
      "On ne va pas se mentir...à première vue, entre formes, chiffres, couleurs et termes flous, rien de très intuitif!",
    italique: "Spoiler : c'est normal d'avoir l'impression de ne rien comprendre! 😄",
  },
  {
    titre: "Derrière ces symboles obscurs, des clés pour mieux te comprendre.",
    texte:
      "Et pourtant, tout cela a du sens et cache une véritable mine d'informations sur TOI!",
    italique:
      "Ton fonctionnement énergétique (ton \"Type\"), ta façon de décider (ton \"Autorité intérieure\")...et d'autres clés de ton propre mode d'emploi.",
  },
  {
    titre: "Des éclairages précieux pour ta vie pro et ton Business.",
    texte:
      "En approfondissant la lecture, ton Design peut aussi révéler tes talents, tes dynamiques de travail, ta façon de communiquer...",
    italique:
      "Autant de pistes pour t'aider à te réaligner dans ta vie pro ou faire évoluer ton Business à TA façon.",
  },
];

export default function TestGratuitPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white px-6 pt-20 pb-12 text-center md:px-20 md:pt-28 md:pb-16">
        <h1 className="font-display text-[45px] font-light leading-[0.95] text-ink-deep md:text-[90px]">
          Découvre ton schéma de{" "}
          <em className="italic text-turquoise">Human Design</em> gratuit.
        </h1>

        <p className="mx-auto mt-8 max-w-[680px] font-display text-[18px] font-light italic leading-snug text-ink md:text-[22px]">
          À partir de ta date, ton heure et ton lieu de naissance, génère ton
          schéma complet en seulement&nbsp;quelques&nbsp;secondes.
        </p>
      </section>

      {/* SÉPARATEUR fin avant le calculateur. Absent sur mobile : la carte du
          calculateur y passe en pleine largeur avec sa propre bordure haute. */}
      <div className="bg-white px-6 max-md:hidden md:px-20">
        <div className="mx-auto max-w-(--container-content)">
          <div className="border-t border-ink-deep/10" />
        </div>
      </div>

      {/* SECTION — CALCULATEUR HD */}
      <section id="simulateur" className="scroll-mt-24 bg-white px-6 pt-12 pb-16 md:px-20 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-(--container-content)">
          {/* Deux colonnes avant le calcul, pleine largeur dès qu'un schéma existe.
              Même ratio que le hero : sous ~630px de carte, le champ année de la
              ligne de date rogne les quatre chiffres saisis. */}
          <CalculateurLayout
            columns="gap-12 max-lg:gap-y-0 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
            temoignages={["barbara", "fabienne"]}
          >
            {/* Présentation du Design et précisions sur les champs. Masqué sur mobile et tablette
                (demande de Marion) : le lien « TEST HD GRATUIT » doit mener
                directement au calculateur. */}
            <div className="max-lg:hidden">
              {/* Visuel en arrière-plan de la colonne, discret */}
              <Image
                src="/assets/simulateur-aligne.jpeg"
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="pointer-events-none -z-10 object-cover opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
              />

              <p className="relative font-script text-[30px] leading-[1.3] text-ink-deep md:text-[40px]">
                Ton Design
              </p>
              <p className="relative mt-5 font-display text-[18px] italic leading-snug text-ink-deep md:mt-6 md:text-[22px]">
                Une cartographie de qui tu es, révélée à partir de tes infos de naissance.
              </p>

              <p className="mt-5 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
                Ton schéma de Human Design est LE point de départ pour explorer ta propre
                façon de fonctionner.
              </p>

              {/* À SAVOIR — précisions sur les champs, à côté du calculateur */}
              <div className="relative mt-10 rounded-md border border-ink-deep/10 bg-paper/60 p-6 md:p-9">
                <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-deep/70">
                  Quelques précisions utiles
                </p>
                <ul className="mt-5 flex max-w-[760px] flex-col gap-5 lg:mt-7 lg:gap-7">
                  <li>
                    <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                      Heure de naissance
                    </p>
                    <p className="mt-2 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                      La plus précise possible : même 10 minutes peuvent changer certaines
                      informations essentielles de ton schéma.
                    </p>
                    <p className="mt-2 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                      Si tu ne connais pas précisément ton heure de naissance ou que tu as un
                      doute, tu peux la retrouver sur la copie intégrale de ton acte de naissance.
                    </p>
                  </li>
                  <li>
                    <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                      Lieu de naissance
                    </p>
                    <p className="mt-2 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                      Une ville suffit, pas besoin de préciser l&apos;hôpital. Vérifie simplement
                      que la localisation proposée correspond bien à ton lieu de naissance
                      (ville, région, pays). Le calculateur se charge du fuseau horaire et des
                      coordonnées.
                    </p>
                  </li>
                  <li>
                    <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                      Aucun engagement
                    </p>
                    <p className="mt-2 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                      Le calculateur est gratuit, et ton schéma t’appartient.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </CalculateurLayout>

          {/* CE QUE TU DÉCOUVRES — sous le calculateur et son éventuel schéma,
              toujours visible, sur mobile comme sur ordinateur. */}
          <div className="relative mt-16 rounded-[28px] border border-[#d8bf8b]/35 bg-[linear-gradient(160deg,rgba(248,239,214,0.5)_0%,rgba(236,214,166,0.5)_100%)] p-6 shadow-[0_26px_55px_-26px_rgba(80,60,98,0.22)] md:p-11">
            <span className="absolute -top-3.5 left-6 inline-flex items-center rounded-full bg-ink-deep px-4 py-1.5 font-body text-[10px] uppercase tracking-[0.22em] text-white shadow-sm md:left-8">
              Ce que tu découvres
            </span>
            <ul className="mt-3 grid gap-6 lg:grid-cols-3 lg:gap-10">
              {DECOUVERTES.map((item) => (
                <li
                  key={item.titre}
                  className="flex items-start gap-3 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[18px]"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-ink-deep"
                  />
                  <span>
                    <strong className="font-semibold">{item.titre}</strong>
                    <span className="mt-2 block">{item.texte}</span>
                    <em className="mt-2 block italic">{item.italique}</em>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ENVIE D'ALLER PLUS LOIN — encart turquoise, distinct de la carte dorée :
              les deux informations qui ouvrent la suite du parcours. */}
          <div className="mt-8 grid gap-8 rounded-[28px] border border-turquoise/50 bg-[linear-gradient(160deg,#e4f4f5_0%,#c3e8ea_100%)] p-6 text-ink-deep shadow-[0_26px_55px_-26px_rgba(80,60,98,0.3)] md:p-11 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <h2 className="font-display text-[26px] font-semibold leading-tight md:text-[32px]">
                💡 Envie d’aller plus loin?
              </h2>
              <p className="mt-4 font-display text-[17px] leading-relaxed md:text-[19px]">
                Les petites 🔎 présentes dans tes résultats te mèneront vers mes offres pour
                approfondir l’exploration de ton Design!
              </p>
            </div>
            <div className="border-t border-ink-deep/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
              <p className="font-display text-[19px] font-semibold leading-snug md:text-[22px]">
                Et si je te montrais ce que ça donne concrètement?
              </p>
              <p className="mt-3 font-display text-[17px] leading-relaxed md:text-[19px]">
                J’ai décrypté plusieurs clés de mon propre schéma HD pour te montrer comment
                elles se traduisent dans ma vraie vie.
              </p>
              <p className="mt-3 font-display text-[17px] italic leading-relaxed md:text-[19px]">
                Et qui sait, tu retrouveras peut-être quelques points communs avec ton propre
                Design!&nbsp;😉
              </p>
              {/* Nouvel onglet : on garde ses résultats sous la main pour comparer. */}
              <a
                href="/qui-je-suis#ma-carte"
                target="_blank"
                rel="noopener"
                className="mt-7 inline-flex items-center justify-center rounded-full border border-ink-deep bg-ink-deep px-8 pt-[17px] pb-[15px] text-center font-body text-[12px] leading-[1.4] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-ink-deep max-md:w-full"
              >
                Voir un exemple concret de décryptage
              </a>
              <p className="mt-3 text-balance font-display text-[15px] italic leading-snug text-ink-deep/80 max-md:text-center md:text-[16px]">
                Un nouvel onglet s’ouvrira pour te permettre de garder ton schéma sous
                les&nbsp;yeux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <Testimonials />

      {/* CTA BAS — pont vers /mes-offres */}
      <section className="bg-white px-6 pt-12 pb-24 md:px-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          <div className="rounded-2xl border border-ink-deep/8 bg-paper p-10 text-center shadow-[0_20px_50px_-20px_rgba(80,60,98,0.18)] md:p-14">
            <h3 className="font-display text-[32px] font-light leading-tight text-ink-deep md:text-[44px]">
              Envie d’aller plus loin?
            </h3>
            <p className="mx-auto mt-5 max-w-[560px] font-display text-[18px] font-light italic leading-snug text-ink-deep md:text-[22px]">
              <Link
                href="/#portes"
                className="underline decoration-turquoise underline-offset-4 transition-colors hover:text-turquoise"
              >
                3 portes d&apos;entrée
              </Link>{" "}
              dans l&apos;univers de La vie en HD. À toi de choisir!
            </p>
            <p className="mx-auto mt-4 max-w-[560px] font-display text-[17px] leading-relaxed text-ink-deep md:text-[18px]">
              Que tu souhaites te réaligner dans ta vie pro, faire évoluer ton Business à TA
              façon ou simplement explorer ton Human Design, je t&apos;invite à découvrir mes
              Quiz gratuits et mes différentes offres, selon tes besoins et tes envies
              du&nbsp;moment.
            </p>
            <Link
              href="/mes-offres"
              className="mt-9 inline-flex items-center justify-center rounded-full border border-ink-deep bg-white px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
            >
              Découvrir mes offres
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
