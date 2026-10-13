import type { Metadata } from "next";
import Image from "next/image";
import { EXTERNAL } from "@/lib/links";
import { Reveal } from "@/components/sections/vente/Reveal";
import { SectionDots } from "@/components/sections/vente/SectionDots";
import { VenteTheme } from "@/components/sections/vente/VenteTheme";
import { Petal, PetalField, PetalHalo } from "@/components/sections/vente/motifs";
import { Cta, SectionHeader, VenteSection } from "@/components/sections/vente/primitives";
import {
  type Capture,
  CapturesTemoignages,
  PricingCard,
  ProcessusSteps,
} from "@/components/sections/vente/blocks";

export const metadata: Metadata = {
  title: "SOIN ÉNERGÉTIQUE · Notre rendez-vous mensuel | La vie en HD",
  description:
    "Chaque dernier dimanche du mois à 21h, un soin collectif à distance pour ralentir, te recentrer et prendre soin de ton énergie.",
};

/** Bon de commande systeme.io — destination de tous les CTA d’achat. */
const COMMANDE = EXTERNAL.commande.soinEnergetique;

/**
 * Couleur et forme propres au Soin énergétique : un abricot doux, la lumière
 * des mains du logo, et l'étincelle à quatre branches du logo. La couleur ne
 * teinte que les fonds de section et les formes en filigrane ; les petits
 * éléments restent turquoise, comme sur Blooming (demande de Marion).
 */
const THEME = {
  motif: "#f0c8a0",
  accentSoft: "#fbefe3",
  forme: "etoile",
} as const;

const POUR_QUI = [
  "Tu traverses une période dense, chargée ou un peu floue,",
  "Tu te sens à plat, dispersé·e, ou simplement en manque d’espace pour toi,",
  "Tu as envie d’« ouvrir les fenêtres en grand » et de laisser partir ce qui n’a plus besoin de rester,",
  "Tu veux t’offrir un vrai moment de pause pour te recentrer et repimper ton énergie.",
];

const ETAPES = [
  {
    titre: "Tu t’inscris",
    texte:
      "Le jour du Soin, je t’envoies un email avec le déroulement et mes quelques « petites consignes ».",
  },
  {
    titre: "Le jour J, à 21h, tu te mets en mode réception",
    texte: (
      <>
        Pour participer, tu n’as rien à « faire », juste à être disposé·e à recevoir le Soin en
        posant l’intention.
        <span className="mt-2 block">
          Installe-toi de préférence en mode cocooning, chill, dans des conditions calmes où tu ne
          seras pas dérangé·e : méditation, lecture, dessin, musique...
        </span>
        <em className="mt-2 block">
          [Si tu n’es pas dans les conditions optimales, no panic, l’énergie fera le job malgré
          tout!]
        </em>
      </>
    ),
  },
  {
    titre: "Je me mets en position de transmettrice",
    texte: "J’envoie la sauce énergétique, et toi, tu as juste à recevoir. Et c’est tout!",
  },
  {
    titre: "After Soin : mon feedback détaillé",
    texte:
      "Le lendemain du Soin, je te partage mon feedback détaillé par email : mes ressentis et perceptions durant le Soin, ce que j’ai travaillé énergétiquement, ainsi que les éventuelles canalisations groupées (et/ou personnelles selon ce qui vient.).",
  },
];

/** Les messages reçus, tels que Marion les a capturés (formats d'origine). */
const CAPTURES: Capture[] = [
  { src: "/assets/soin/temoignage-1.webp", largeur: 457, hauteur: 340 },
  { src: "/assets/soin/temoignage-2.webp", largeur: 580, hauteur: 108 },
  { src: "/assets/soin/temoignage-3.webp", largeur: 485, hauteur: 384 },
  { src: "/assets/soin/temoignage-4.webp", largeur: 459, hauteur: 257 },
  { src: "/assets/soin/temoignage-5.webp", largeur: 581, hauteur: 176 },
  { src: "/assets/soin/temoignage-6.webp", largeur: 457, hauteur: 548 },
  { src: "/assets/soin/temoignage-7.webp", largeur: 1536, hauteur: 1094 },
  { src: "/assets/soin/temoignage-8.webp", largeur: 1536, hauteur: 677 },
];

const INCLUS = [
  <>
    <strong className="font-semibold">Un soin collectif à distance</strong>
    <br />
    <em>Un temps pour relâcher ce qui te pèse, refaire circuler ton énergie et te recentrer.</em>
  </>,
  <>
    <strong className="font-semibold">Mon feedback détaillé par email le lendemain</strong>
    <br />
    <em>
      Mes ressentis, mes perceptions, le travail énergétique effectué et les éventuelles
      canalisations reçues.
    </em>
  </>,
];

/** Repères du menu à points, dans l'ordre de la page. */
const POINTS = [
  { id: "pour-qui", label: "Pour qui ?" },
  { id: "processus", label: "Comment ça se déroule ?" },
  { id: "temoignages", label: "Témoignages" },
  { id: "tarif", label: "S’inscrire" },
];

export default function SoinEnergetiquePage() {
  return (
    <VenteTheme {...THEME}>
      <SectionDots sections={POINTS} />

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      {/* Même premier écran que Blooming : la promesse à gauche, un message
          reçu à droite. */}
      <section className="relative overflow-hidden bg-paper px-6 pt-10 pb-20 md:px-20 md:pt-12 md:pb-24 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-ink-lilac/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-[4%] h-[480px] w-[480px] rounded-full bg-motif/25 blur-3xl"
        />
        <PetalField />

        <div className="relative mx-auto grid max-w-(--container-content) items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="text-center">
            {/* Les mains lumineuses tiennent lieu de logo, dans le hero (avec un
                fondu doux vers leurs extrémités) comme sur la carte de tarif. */}
            <Reveal>
              <Image
                src="/assets/soin/mains-lumiere.webp"
                alt="Soin énergétique collectif"
                width={1024}
                height={807}
                priority
                className="mx-auto h-auto w-[240px] md:w-[290px]"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, black 55%, transparent 100%)",
                  maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 55%, transparent 100%)",
                }}
              />
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mx-auto mt-8 max-w-[560px] font-display text-[30px] font-light uppercase leading-[1.15] tracking-[0.04em] text-ink-deep md:text-[38px]">
                Soin énergétique collectif
              </h1>
              <p className="mt-2 font-display text-[22px] italic text-ink md:text-[26px]">
                Libération & recalibration
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-[520px] font-display text-[20px] font-light italic leading-snug text-ink-deep md:text-[22px]">
                ~ Notre rendez-vous mensuel : chaque dernier dimanche du mois à 21h, un soin collectif
                à distance pour ralentir, te recentrer et prendre soin de ton énergie. ~
              </p>
              <p className="mx-auto mt-6 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[18px]">
                Un temps rien que pour toi pour{" "}
                <strong className="font-semibold text-ink-deep">
                  faire une pause, déposer ce qui te pèse et remettre un peu de mouvement là où ton
                  énergie semble stagner.
                </strong>
              </p>
              <p className="mx-auto mt-4 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[18px]">
                Tu n’as rien à performer, rien à comprendre, rien à « réussir » : juste à te laisser
                chouchouter énergétiquement pendant que je me mets en position de transmettrice.
              </p>
              <p className="mx-auto mt-6 max-w-[520px] font-display text-[18px] leading-relaxed text-ink-deep">
                <strong className="font-semibold">Le dernier dimanche du mois à 21h00</strong>{" "}
                <em className="text-ink">(durée approximative 1h/1h15)</em>
              </p>
              <Cta href="#tarif" className="mt-8">
                Go, je m’offre cette parenthèse énergétique!
              </Cta>
              <p className="mx-auto mt-6 max-w-[480px] font-display text-[16px] font-light italic leading-relaxed text-ink">
                ~ Pas de chichi, de grandes cérémonies ou de rituels ésotériques perchouilles. Tu
                t’installes pépouze et je m’occupe du reste. ~
              </p>
            </Reveal>
          </div>

          {/* Deux messages reçus, retranscrits mot pour mot depuis les captures
              de la section témoignages et posés en notes : la première en
              avant, la seconde décalée derrière elle, à contre-angle. Les
              captures brutes, fond noir et police système, juraient avec le
              reste du premier écran. La colonne s'étire sur toute la hauteur
              du texte : le rendez-vous, en scotch, se pose tout en bas et
              comble le vide sous la pile. */}
          <Reveal
            delay={120}
            className="relative mx-auto flex w-full max-w-[500px] flex-col pb-4 lg:ml-0 lg:self-stretch lg:pt-10"
          >
            <span aria-hidden className="pointer-events-none absolute inset-0">
              <Petal className="absolute top-0 right-[14%] h-7 w-7 text-accent-texte/50" />
              <Petal className="absolute top-[38%] -left-3 h-4 w-4 text-accent" />
              <Petal className="absolute right-1 bottom-[22%] h-5 w-5 text-ink-lilac/60" />
            </span>

            {/* Note de devant */}
            <figure className="relative z-10 -rotate-[1.4deg] rounded-[26px] border border-line bg-white/95 px-7 pt-8 pb-10 shadow-simu backdrop-blur-sm md:mr-10 md:px-9">
              <PetalHalo />
              <Image
                src="/assets/temoignages/guillemet.webp"
                alt=""
                aria-hidden
                width={160}
                height={160}
                className="h-auto w-[44px]"
              />
              <blockquote className="mt-4 font-display text-[22px] font-light italic leading-snug text-ink-deep md:text-[25px]">
                Les soins que tu proposes sont incroyables 😍 j’étais septique de le faire à
                distance, mais ça marche
              </blockquote>
              <figcaption className="mt-5 font-body text-[11px] uppercase leading-relaxed tracking-[0.12em] text-ink-soft">
                Témoignage reçu après un Soin énergétique
              </figcaption>
            </figure>

            {/* Note de derrière, dans la teinte du thème */}
            <figure className="relative -mt-5 ml-8 rotate-[1.8deg] rounded-[26px] border border-accent/60 bg-accent-soft px-7 pt-9 pb-7 shadow-card md:ml-16 md:px-8">
              <blockquote className="font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
                Donc, comme la première fois, ce soin énergétique était incroyable 🤩🥰 je suis
                hyper reconnaissante envers toi de nous faire partager ça, c’est indescriptible et
                vraiment, waw ! Merci 🫶💕
              </blockquote>
            </figure>

            {/* Deux notes de plus, en zigzag : lavande à gauche, blanche à droite.
                Plus courtes et plus petites, elles prolongent la pile sans
                rivaliser avec la note de devant. */}
            <figure className="relative -mt-4 mr-10 -rotate-[1.2deg] rounded-[26px] border border-ink-lilac/35 bg-[linear-gradient(160deg,rgba(241,233,249,0.9)_0%,rgba(226,212,242,0.75)_100%)] px-7 pt-8 pb-7 shadow-card md:mr-20">
              <blockquote className="font-display text-[16px] font-light italic leading-relaxed text-ink-deep md:text-[17px]">
                Lorsque je lu ton mail, le message collectif m’a fait fondre en larmes, comme si
                j’avais besoin de laisser sortir ce trop-plein, et la phrase m’a fait vibrer 💗
              </blockquote>
            </figure>

            <figure className="relative -mt-4 ml-14 rotate-[1.4deg] rounded-[26px] border border-line bg-white/95 px-7 pt-8 pb-8 shadow-card md:ml-24">
              <blockquote className="font-display text-[16px] font-light italic leading-relaxed text-ink-deep md:text-[17px]">
                De mon côté, je dirais des souvenirs qui sont revenus … des choses oubliées et
                beaucoup d’émotions. 🤗
              </blockquote>
            </figure>

            {/* Le rendez-vous, en scotch : coins vifs comme les badges des notes
                « pour qui », mais posé droit. La marge basse le cale à hauteur du
                bouton de la colonne de gauche (mesuré à 1440px). */}
            <p className="relative z-20 mx-auto mt-10 flex w-fit items-center gap-3 border border-accent/70 bg-accent-soft/90 px-6 pt-[12px] pb-[10px] font-body text-[12px] uppercase tracking-[0.16em] text-ink-deep shadow-[0_4px_12px_rgba(80,60,98,0.16)] lg:mt-auto lg:mb-[62px]">
              <Petal className="h-4 w-4 flex-none text-accent-texte" />
              Le dernier dimanche du mois · 21h00
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* POUR QUI                                                         */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="pour-qui" bg="white" wide>
        <SectionHeader
          eyebrow="Pour qui ?"
          title="Tu sens que tu aurais bien besoin d’un petit reset énergétique?"
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Un seul portrait : la liste est courte, un second laisserait un
              grand vide sous le texte. */}
          <Reveal
            delay={80}
            className="order-first flex flex-col items-center gap-8 lg:order-last lg:gap-6"
          >
            <Image
              src="/assets/soin/marion-tournesols.webp"
              alt="Marion Chartier"
              width={900}
              height={1231}
              className="aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card"
            />
          </Reveal>

          {/* Pas de profils titrés dans le texte de Marion : les quatre cas
              prennent l'encadré des inclusions de Blooming. */}
          <Reveal className="font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
            <p>Cette parenthèse peut être particulièrement bénéfique pour toi si :</p>
            <ul className="mt-6 flex flex-col gap-5 rounded-[20px] border border-line bg-paper px-6 py-7 md:px-8 md:py-8">
              {POUR_QUI.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-ink-deep">
                  <Petal className="mt-2 h-3.5 w-3.5 flex-none text-accent-texte" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* PROCESSUS                                                        */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="processus" bg="lavender" wide>
        <SectionHeader eyebrow="Concrètement" title="Comment ça se déroule?" />
        <Reveal className="mt-6 text-center">
          <p className="font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
            Pas de présentiel, pas de live, pas de Zoom :{" "}
            <strong className="font-semibold text-ink-deep">tout se fait à distance.</strong>
            <br />
            Tu as juste besoin de te rendre disponible pour recevoir.
          </p>
        </Reveal>
        <div className="mt-16">
          <ProcessusSteps etapes={ETAPES} />
        </div>

        {/* Les deux côtés du Soin, sous les étapes 2 et 3 qu'ils illustrent.
            Colonnes au prorata des formats (4:3 et 4:5) : les deux images
            tombent à la même hauteur sans rien recadrer du diptyque. */}
        <div className="mx-auto mt-16 grid max-w-[980px] gap-8 md:grid-cols-[5fr_3fr] md:gap-6">
          <Reveal as="figure">
            <Image
              src="/assets/soin/reception.webp"
              alt="Une personne allongée les yeux fermés et une autre qui peint, au calme, à la lueur des bougies"
              width={1448}
              height={1086}
              className="h-auto w-full rounded-[18px] shadow-card"
            />
            <figcaption className="mt-3 text-center font-display text-[16px] italic text-ink">
              Toi, en mode réception
            </figcaption>
          </Reveal>
          <Reveal as="figure" delay={80}>
            <Image
              src="/assets/soin/envoi.webp"
              alt="Une femme de dos, bras ouverts, dans une pièce éclairée de bougies"
              width={1122}
              height={1402}
              className="h-auto w-full rounded-[18px] shadow-card"
            />
            <figcaption className="mt-3 text-center font-display text-[16px] italic text-ink">
              Moi, en position de transmettrice
            </figcaption>
          </Reveal>
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TÉMOIGNAGES                                                      */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="temoignages" bg="white" wide>
        <SectionHeader
          eyebrow="Ceux qui l’ont déjà expérimenté en parlent mieux que moi"
          title="Témoignages"
        />
        <Reveal className="mt-6 text-center">
          <p className="font-display text-[18px] font-light italic text-ink md:text-[19px]">
            Quelques mots reçus après les Soins. ♡
          </p>
        </Reveal>
        <div className="mx-auto mt-14 max-w-[1000px]">
          <CapturesTemoignages
            captures={CAPTURES}
            alt="Témoignage reçu après un Soin énergétique"
          />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TARIF                                                            */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="tarif" wide decor={<PetalField dense />}>
        <SectionHeader
          eyebrow="Notre rendez-vous mensuel"
          title="Offre-toi le prochain Soin énergétique"
        />
        <Reveal className="mx-auto mt-6 max-w-[720px] text-center">
          <p className="font-display text-[20px] italic text-ink-deep md:text-[22px]">
            ~ 20€ tout rond ~
          </p>
          <p className="mt-4 font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
            Un rendez-vous simple, doux et accessible pour repimper ton énergie, sans rituel
            compliqué, ni écran à allumer. Tu t’inscris, tu reçois mes indications, puis tu te
            laisses porter.
          </p>
        </Reveal>
        <div className="mt-14">
          <PricingCard
            logo="/assets/soin/mains-lumiere.webp"
            // Fondu plus prononcé que dans le hero et léger effacement : sur le
            // bandeau violet, l'image doit rester discrète derrière le prix.
            logoStyle={{
              opacity: 0.9,
              WebkitMaskImage:
                "radial-gradient(ellipse 50% 50% at 50% 50%, black 40%, transparent 95%)",
              maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 40%, transparent 95%)",
            }}
            logoAlt="Soin énergétique collectif"
            prix="20€"
            inclus={INCLUS}
            href={COMMANDE}
            libelleCta={"Go, je m’offre ma parenthèse énergétique!"}
            note="Le dernier dimanche du mois à 21h00 (durée approximative 1h/1h15)"
          />
        </div>
      </VenteSection>
    </VenteTheme>
  );
}
