import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OracleDuJour } from "@/components/sections/home/OracleDuJour";

export const metadata: Metadata = {
  title: "Qui suis-je ? · La vie en HD",
  description:
    "Marion Chartier, Manifesting Generator 2/4, accompagne celles et ceux qui veulent se révéler grâce au Human Design.",
};

const PHOTOS = {
  hero:
    "https://images.unsplash.com/photo-1542596594-649edbc13630?w=1200&q=80&auto=format&fit=crop",
  story:
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1100&q=80&auto=format&fit=crop",
} as const;

const PILLS = [
  "Manifesting Generator 2/4",
  "Magicienne fraternelle",
  "Maman d'un Manifestor",
] as const;

const HD_ATTRIBUTES = [
  {
    label: "Type",
    value: "Manifesting Generator",
    blurb:
      "L'énergie multiple, le faire qui jaillit en cascade, plusieurs vies dans une même vie.",
  },
  {
    label: "Profil",
    value: "2/4 · L'Ermite & l'Opportuniste",
    blurb:
      "Le besoin de cocon pour digérer, l'élan vers les autres une fois le seuil franchi.",
  },
  {
    label: "Autorité",
    value: "Émotionnelle",
    blurb:
      "Décider avec le temps, attendre la vague, choisir quand l'eau est calme.",
  },
  {
    label: "Signature",
    value: "Satisfaction",
    blurb:
      "L'indicateur que tu marches dans le bon sens, le souffle qui suit l'effort juste.",
  },
  {
    label: "Non-Soi",
    value: "Frustration",
    blurb:
      "Le signal que quelque chose force, qu'il est temps d'écouter et de réajuster.",
  },
  {
    label: "Stratégie",
    value: "Répondre & Informer",
    blurb:
      "Ne pas initier dans le vide, accueillir ce qui se présente, prévenir avant d'agir.",
  },
  {
    label: "Croix d'incarnation",
    value: "Phœnix Dormant",
    blurb:
      "Renaître plusieurs fois, transmuter ce qui a brûlé pour mieux s'élever ensuite.",
  },
];

/** Nuage de valeurs — top 13 de Marion (dans le désordre, voulu).
 *  `big: true` = mots à mettre en avant (plus gros). */
const VALEURS: { word: string; big: boolean }[] = [
  { word: "Intuition", big: true },
  { word: "Audace", big: false },
  { word: "Aventure", big: true },
  { word: "Amour", big: false },
  { word: "Bienveillance", big: true },
  { word: "Partage", big: false },
  { word: "Fun", big: true },
  { word: "Spiritualité", big: false },
  { word: "Créativité", big: false },
  { word: "Authenticité", big: true },
  { word: "Ouverture", big: false },
  { word: "Confiance", big: false },
  { word: "Rêve", big: false },
];

const PILIERS = [
  {
    title: "Doux",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Concret",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Personnalisé",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
];

export default function QuiJeSuisPage() {
  return (
    <>
      {/* HERO — éditorial, photo grand format à droite, texte à gauche */}
      <section className="relative overflow-hidden bg-white px-6 pt-8 pb-20 md:px-20 md:pt-12 md:pb-28">
        {/* Halos d'ambiance subtils */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[20%] h-[420px] w-[420px] rounded-full bg-turquoise/[0.06] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-[480px] w-[480px] rounded-full bg-ink-lilac/[0.10] blur-3xl"
        />

        <div className="relative mx-auto grid max-w-(--container-content) items-stretch gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Colonne gauche : texte */}
          <div className="flex flex-col lg:pt-12">
            <h1 className="font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[88px]">
              <span className="block font-script text-[38px] font-normal text-turquoise md:text-[64px]">
                HELLO
              </span>
            </h1>

            <p className="mt-8 max-w-[520px] font-display text-[20px] font-light italic leading-snug text-ink-deep md:text-[26px]">
              «&nbsp;Ingénieure qui a déposé les armes, magicienne fraternelle qui s'est
              autorisée à briller.&nbsp;»
            </p>

            <p className="mt-7 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>

            <p className="mt-4 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 lg:mt-auto lg:pb-6 lg:pt-9">
              {PILLS.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-lilac bg-white px-5 pt-3 pb-2 font-sub text-[13px] leading-none tracking-wide text-ink-deep"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne droite : portrait grand format */}
          <div className="relative">
            <div className="relative h-[440px] w-full overflow-hidden rounded-md md:h-[600px]">
              <Image
                src={PHOTOS.hero}
                alt="Portrait de Marion Chartier"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            {/* Décor : petit cercle script en surimpression bas-droite */}
            <div className="absolute -bottom-6 -right-4 z-10 hidden h-[120px] w-[120px] place-items-center rounded-full bg-paper shadow-[0_18px_40px_-15px_rgba(80,60,98,0.25)] md:grid md:h-[140px] md:w-[140px]">
              <span className="font-script text-[16px] leading-none text-ink-deep md:text-[18px]">
                Marion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <div className="bg-white px-6 md:px-20">
        <div className="mx-auto max-w-(--container-content)">
          <div className="border-t border-ink-deep/10" />
        </div>
      </div>

      {/* SECTION 02 — MON CHEMIN, narrative biographique éditoriale */}
      <section className="bg-white px-6 pt-16 pb-24 md:px-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Colonne gauche : titre sticky + petite photo */}
            <div>
              <h2 className="font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[64px]">
                Du costume <em className="italic text-turquoise">d'ingé</em>
                <br />à ma vraie nature.
              </h2>

              <div className="relative mt-10 hidden h-[360px] w-full max-w-[360px] overflow-hidden rounded-md lg:block">
                <Image
                  src={PHOTOS.story}
                  alt="Marion en réflexion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Colonne droite : narration en plusieurs paragraphes + pull quote */}
            <div className="flex flex-col gap-7 font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* PULL QUOTE */}
              <blockquote className="my-4 border-l-2 border-turquoise pl-6 font-display text-[24px] font-light italic leading-snug text-ink-deep md:text-[32px]">
                «&nbsp;J'ai cessé de me forcer le jour où j'ai compris que mon design ne
                m'avait jamais menti.&nbsp;»
              </blockquote>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <div className="bg-paper px-6 md:px-20">
        <div className="mx-auto max-w-(--container-content)">
          <div className="border-t border-ink-deep/10" />
        </div>
      </div>

      {/* SECTION 03 — MON DESIGN HD, carte détaillée + explication */}
      <section className="bg-paper px-6 pt-16 pb-24 md:px-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          <div className="grid items-stretch gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Colonne gauche : carte HD format affiche */}
            <div className="flex justify-center lg:justify-start">
              <HDCardLarge />
            </div>

            {/* Colonne droite : header + grille d'attributs, calée sur la hauteur de la carte */}
            <div className="flex flex-col">
              <h2 className="font-display text-[40px] font-light leading-[0.95] text-ink-deep md:text-[56px]">
                Ma carte, <em className="italic text-turquoise">en clair</em>.
              </h2>

              <p className="mt-4 max-w-[560px] font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[18px]">
                Voici ce que dit mon design, et ce que ça veut dire concrètement : se
                comprendre, et se foutre la paix.
              </p>

              <ul className="mt-7 grid flex-1 grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {HD_ATTRIBUTES.map((attr) => (
                  <li
                    key={attr.label}
                    className="border-b border-ink-deep/10 pb-3"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                        {attr.label}
                      </p>
                      <p className="font-display text-[16px] font-light leading-none text-ink-deep md:text-[18px]">
                        {attr.value}
                      </p>
                    </div>
                    <p className="mt-1.5 font-display text-[14px] font-light italic leading-snug text-ink md:text-[15px]">
                      {attr.blurb}
                    </p>
                  </li>
                ))}
              </ul>

              <Link
                href="/test-gratuit"
                className="mt-7 inline-flex w-fit items-center justify-center rounded-full border border-ink-deep bg-white px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
              >
                Découvre ta propre carte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <div className="bg-white px-6 md:px-20">
        <div className="mx-auto max-w-(--container-content)">
          <div className="border-t border-ink-deep/10" />
        </div>
      </div>

      {/* SECTION 04 — MA PHILOSOPHIE, 3 piliers en cards */}
      <section className="bg-white px-6 pt-16 pb-24 md:px-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          {/* Header centré */}
          <div className="text-center">
            <h2 className="font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[72px]">
              Ma façon de <em className="italic text-turquoise">t'accompagner</em>.
            </h2>
            <p className="mx-auto mt-7 max-w-[640px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Trois principes qui guident
              chacune de mes séances.
            </p>
          </div>

          {/* 3 cards */}
          <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
            {PILIERS.map((p, i) => {
              // Alternance cyan / violet / cyan
              const tone =
                i === 1
                  ? "border-ink-lilac/45 bg-[linear-gradient(160deg,#f1eafa_0%,#e6d9f5_100%)]"
                  : "border-turquoise/40 bg-[linear-gradient(160deg,#e2f3f5_0%,#cfeaec_100%)]";
              return (
              <div
                key={p.title}
                className={`flex flex-col rounded-2xl border p-8 shadow-[0_16px_40px_-24px_rgba(80,60,98,0.16)] md:p-10 ${tone}`}
              >
                {/* Pictogramme — petit symbole géométrique */}
                <PilierIcon index={i} />

                <p className="mt-6 font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  Pilier {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-[30px] font-light leading-none text-ink-deep md:text-[36px]">
                  {p.title}
                </h3>
                <p className="mt-5 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                  {p.blurb}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04bis — MES VALEURS (gauche) + FUN FACT (droite) */}
      <section className="relative overflow-hidden bg-paper px-6 py-20 md:px-20 md:py-28">
        <div className="mx-auto max-w-(--container-content)">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* GAUCHE — nuage de valeurs incliné */}
            <div>
              <h2 className="font-display text-[40px] font-light leading-[0.95] text-ink-deep md:text-[58px]">
                Ce qui me <em className="italic text-turquoise">guide</em>.
              </h2>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2.5 md:gap-x-6 md:gap-y-3">
                {VALEURS.map(({ word, big }, i) => {
                  // Mots en avant = grande taille + couleur soutenue ; les autres, plus discrets.
                  const size = big
                    ? "text-[34px] md:text-[54px]"
                    : "text-[20px] md:text-[30px]";
                  const color =
                    word === "Aventure"
                      ? "text-[#5e3aa6]" // violet foncé demandé par Marion
                      : big
                        ? ["text-turquoise", "text-ink-deep"][i % 2]
                        : ["text-ink", "text-ink-lilac"][i % 2];
                  const rots = ["-rotate-2", "rotate-2", "rotate-1", "-rotate-3", "rotate-3", "-rotate-1"];
                  return (
                    <span
                      key={word}
                      className={`inline-block font-sub leading-none ${size} ${color} ${rots[i % rots.length]}`}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* DROITE — fun fact en note penchée avec pastille */}
            <div className="relative">
              <div className="relative rotate-[-2deg] rounded-[28px] border border-[#d8bf8b]/60 bg-[linear-gradient(160deg,#f8efd6_0%,#ecd6a6_100%)] p-8 shadow-[0_26px_55px_-26px_rgba(80,60,98,0.28)] md:p-11">
                <span className="absolute -top-3.5 left-8 inline-flex items-center rounded-full bg-ink-deep px-4 py-1.5 font-body text-[10px] uppercase tracking-[0.22em] text-white shadow-sm">
                  Fun fact
                </span>
                <p className="mt-3 font-display text-[19px] font-light italic leading-relaxed text-ink-deep md:text-[23px]">
                  «&nbsp;Je n'ai pas découvert le Human Design par hasard, il s'est carrément
                  imposé à moi&nbsp;! 😄 C'est en recherchant une nounou pour mon bébé que l'une
                  d'elles (qui n'est même pas devenue son ass' mat'&nbsp;!) a évoqué cet outil
                  fantastique. Je ne savais pas encore que ça allait changer toute ma vie&nbsp;!&nbsp;»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04ter — ORACLE DU JOUR (après Mes valeurs) */}
      <section className="bg-paper px-6 pb-20 md:px-20 md:pb-28">
        <div className="mx-auto max-w-[680px]">
          <div className="text-center">
            <p className="font-display text-[22px] font-light italic leading-snug text-ink-deep md:text-[26px]">
              ...et j&apos;adooore aussi les oracles. Et toi, tu crois au «&nbsp;hasard&nbsp;»&nbsp;? 😇👇
            </p>
            <p className="mx-auto mt-4 max-w-[520px] font-body text-[14px] leading-relaxed text-ink md:text-[15px]">
              Clique ici pour un petit supplément d&apos;âme&nbsp;; un message aléatoire rien que
              pour toi. 😘
            </p>
          </div>
          <div className="mt-8">
            <OracleDuJour />
          </div>
        </div>
      </section>

      {/* SECTION 05 — CTA BAS, pont vers Test gratuit + Mes offres */}
      <section className="bg-white px-6 pt-10 pb-24 md:px-20 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          <div className="rounded-2xl border border-ink-deep/8 bg-paper p-10 text-center shadow-[0_20px_50px_-20px_rgba(80,60,98,0.18)] md:p-16">
            <h3 className="font-display text-[32px] font-light leading-tight text-ink-deep md:text-[52px]">
              Deux façons de faire <em className="italic text-turquoise">le premier pas</em>.
            </h3>
            <p className="mx-auto mt-5 max-w-[560px] font-display text-[16px] font-light leading-relaxed text-ink md:text-[18px]">
              Tu peux commencer par les outils gratuits pour découvrir ton schéma, ou
              explorer tout l'écosystème d'accompagnement.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
              <Link
                href="/test-gratuit"
                className="inline-flex items-center justify-center rounded-full bg-ink-deep px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
              >
                Faire un test gratuit
              </Link>
              <Link
                href="/mes-offres"
                className="inline-flex items-center justify-center rounded-full border border-ink-deep bg-white px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-white"
              >
                Découvrir mes offres
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Carte HD format affiche — version élargie de la HDCard du home */
function HDCardLarge() {
  return (
    <div className="w-full max-w-[380px] rounded-md border border-ink/14 bg-white p-7 shadow-[0_24px_60px_-28px_rgba(80,60,98,0.20)] md:p-8">
      <p className="font-body text-[10px] uppercase tracking-[0.24em] text-ink-soft">
        Carte HD de Marion
      </p>
      <p className="mt-2 pb-1 font-display text-[28px] leading-[1.05] text-ink-deep md:text-[32px]">
        Manifesting Generator 2/4
      </p>
      <p className="font-sub text-[13px] tracking-wide text-turquoise">
        L'Ermite · l'Opportuniste
      </p>

      <hr className="my-5 border-line" />

      <dl className="flex flex-col gap-2 text-[13px]">
        <Row label="Autorité" value="Émotionnelle" />
        <Row label="Signature" value="Satisfaction" />
        <Row label="Stratégie" value="Répondre" />
        <Row label="Non-Soi" value="Frustration" />
        <Row label="Profil" value="2/4" />
        <Row label="Définition" value="Double" />
        <Row label="Environnement" value="Montagnes" />
        <Row label="Croix" value="Phœnix Dormant" />
      </dl>

      <hr className="my-5 border-line" />

      {/* Représentation 9 centres */}
      <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
        Les 9 centres
      </p>
      <div className="mt-3 flex justify-between gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => {
          // Marion : Tête (0) et Ajna (1) ouverts → les 7 autres définis
          const defined = i >= 2;
          return (
            <span
              key={i}
              className={`h-4 w-4 rounded-sm ${defined ? "bg-turquoise" : "bg-line"}`}
            />
          );
        })}
      </div>
      <p className="mt-3 font-body text-[10px] uppercase tracking-[0.18em] text-ink-soft">
        9 centres · 7 définis
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-ink">
      <dt>{label}</dt>
      <dd className="font-semibold text-ink-deep">{value}</dd>
    </div>
  );
}

/** Pictogramme géométrique simple pour chacun des 3 piliers */
function PilierIcon({ index }: { index: number }) {
  if (index === 0) {
    // Pilier Doux — vague souple
    return (
      <svg viewBox="0 0 60 60" className="h-12 w-12" aria-hidden>
        <path
          d="M 6 36 Q 18 18 30 36 T 54 36"
          fill="none"
          stroke="#75ced2"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="30" cy="30" r="2.5" fill="#503c62" />
      </svg>
    );
  }
  if (index === 1) {
    // Pilier Concret — carré + cercle
    return (
      <svg viewBox="0 0 60 60" className="h-12 w-12" aria-hidden>
        <rect
          x="12"
          y="12"
          width="36"
          height="36"
          fill="none"
          stroke="#75ced2"
          strokeWidth="1.4"
        />
        <circle
          cx="30"
          cy="30"
          r="10"
          fill="none"
          stroke="#503c62"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  // Pilier Personnalisé — étoile fine 4-branches
  return (
    <svg viewBox="0 0 60 60" className="h-12 w-12" aria-hidden>
      <g stroke="#75ced2" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <line x1="30" y1="8" x2="30" y2="52" />
        <line x1="8" y1="30" x2="52" y2="30" />
        <line x1="14" y1="14" x2="46" y2="46" opacity="0.5" />
        <line x1="46" y1="14" x2="14" y2="46" opacity="0.5" />
      </g>
      <circle cx="30" cy="30" r="3" fill="#503c62" />
    </svg>
  );
}
