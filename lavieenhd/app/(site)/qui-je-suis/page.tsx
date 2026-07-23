import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OracleDuJour } from "@/components/sections/home/OracleDuJour";

export const metadata: Metadata = {
  title: "Qui suis-je ?",
  description:
    "Marion Chartier, Manifesting Generator 2/4, accompagne celles et ceux qui veulent se révéler grâce au Human Design.",
};

const PHOTOS = {
  hero: "/assets/marion-quisuisje-hero.png",
  story: "/assets/marion-quisuisje-story.png",
  carte: "/assets/marion-quisuisje-carte.png",
} as const;

const PILLS = [
  "Manifesting Generator 2/4",
  "Coach transformationnelle",
  "Maman d'un petit Manifestor",
] as const;

const HD_ATTRIBUTES = [
  {
    label: "Type",
    value: "Manifesting Generator",
    blurb:
      "Je suis multi-casquette, multi-tâches, multi-potentielle. Plusieurs vies dans une même vie. Exit l'étiquette de la nana instable : c'est un besoin viscéral pour moi de jongler!",
  },
  {
    label: "Profil",
    value: "2/4",
    blurb:
      `J'adore mes bulles de solitude (et j'en ai besoin!), mais j'aime aussi profondément tisser des liens, et vivre des moments de partage avec les autres. Tout un paradoxe à cultiver et à assumer! "On me voit, on me voit plus!"`,
  },
  {
    label: "Autorité",
    value: "Émotionnelle",
    blurb:
      `Je traverse des vagues émotionnelles, mon lac intérieur est parfois agité, et j'ai besoin d'attendre que l'eau soit calme pour faire des choix. "Tu prends les choses trop à cœur Marion!" Non, je vis juste des émotions intenses tonton Roger!`,
  },
  {
    label: "Signature",
    value: "Satisfaction",
    blurb:
      "Les sentiments de satisfaction, d'accomplissement et de paix intérieure sont mes petits jalons qui m'indiquent que je marche dans le bon sens. Les did-lists sont d'ailleurs désormais mes amies!",
  },
  {
    label: "Non-Soi",
    value: "Frustration",
    blurb:
      "La frustration (et la colère) sont clairement mes warnings intérieurs. Quand ces émotions se pointent, je sais maintenant qu'il y a simplement quelque chose à réajuster. J'ai dû apprendre à gérer ces émotions mal perçues, et accepter qu'elles avaient un message pour moi!",
  },
  {
    label: "Stratégie",
    value: "Répondre",
    blurb:
      "Je suis à l'écoute de ce que la vie et les autres me proposent, et je fais confiance à mon sacral pour savoir s'il faut saisir l'opportunité ou non (+ j'informe de mes actions avec mon côté Manifestor). J'accepte d'être la reine des synchronicités!",
  },
  {
    label: "Définition",
    value: "Double",
    blurb:
      "La présence des autres permet de faire le pont entre tous mes centres énergétiques. Mes 2 voix intérieures sont bien réelles ; elles ont juste besoin de temps pour se relier et se mettre d'accord!",
  },
  {
    label: "Environnement",
    value: "Montagnes",
    blurb:
      "J'ai besoin de grand air, d'altitude, et de vue à 360! Je n'ai pas choisi ma région de cœur pour rien : Annecy et ses environs sont ma favourite place!",
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
    title: "Bienveillance (sans complaisance)",
    blurb:
      "Je t'écoute sans jugement, mais je ne te materne pas non plus. Je crois profondément au pouvoir de la responsabilisation ; je ne te dis pas ce que tu as envie d'entendre, mais je te guide pour reprendre ton pouvoir d'action, à ton rythme. Ici, pas de pression de performance, juste un espace où tu peux te déposer, sans avoir à te justifier.",
  },
  {
    title: "Clarté et sens pratique",
    blurb:
      "Je suis une scientifique avec les pieds sur Terre, et à travers mon cheminement spirituel, j'ai vraiment fait le constat de combien il est primordial de ramener certains aspects plus ésotériques dans la réalité de la vie de tous les jours! La vulgarisation et l'accessibilité à tous sont des non négociables pour moi.",
  },
  {
    title: "Personnalisation",
    blurb:
      "L'unicité de chacun n'est plus à démontrer, et on n'accompagne pas un Generator ou un MG, comme on accompagne un Projector un Manifestor ou un Reflector. L'adaptation au fonctionnement de chacun est essentielle, et le coaching se doit d'être sur-mesure!",
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
              «&nbsp;Je crois qu'on a tous une zone de génie. Mon job, c'est de t'aider à voir la tienne, et à l'exploiter.&nbsp;»
            </p>

            <p className="mt-7 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
              Moi c'est Marion&nbsp;! En Human Design, je suis MG 2/4&nbsp;: la magicienne
              fraternelle multi-passionnée, si on veut faire un (gros) résumé! 😄
            </p>

            <p className="mt-4 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
              Après des années d'ingénierie dans des grosses entreprises, et surtout des
              années de quête de sens professionnel à ne pas trouver ma place, je me suis
              finalement retrouvée grâce à un plongeon dans le Human Design, et je suis
              aujourd'hui Coach transformationnelle, pour toi.♥
            </p>

            <p className="mt-4 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
              Je suis également maman d'un petit Manifestor, qui me montre chaque jour à quel
              point on est finalement aligné naturellement à sa vraie nature lorsqu'on est
              enfant. Et c'est une priorité essentielle pour moi de le maintenir connecté à
              lui au maximum, loin des moules rigides et des injonctions qui pourraient
              l'éteindre (surtout en tant que Manifestor!). Je veux lui éviter le piège
              courant de se retrouver paumé une fois adulte, complètement éloigné de
              lui-même. Je suis passée par là, et je vois aussi malheureusement trop de
              personnes dans ce cas.
            </p>

            <p className="mt-4 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
              C'est donc une vraie mission de cœur pour moi aujourd'hui de t'accompagner
              grâce à des outils puissants comme le Human Design, à te retrouver pour te
              révéler pleinement dans ta vie pro (et au-delà!). 🌟
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

          {/* Colonne droite : portrait grand format (self-start pour ne pas s'étirer,
              afin que le badge "Marion" s'ancre au bas de la photo et non de la colonne) */}
          <div className="relative lg:self-start">
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

            {/* Colonne droite : narration en plusieurs paragraphes */}
            <div className="flex flex-col gap-7 font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
              <p>
                Ayant des &quot;facilités&quot; mais ne sachant pas réellement quoi faire
                lorsque j'ai été en âge de devoir choisir ma voie...j'ai opté pour un chemin
                conventionnel me permettant d'avoir un &quot;bon poste&quot;, un &quot;bon
                salaire&quot;, et la &quot;sécurité&quot; de l'emploi&nbsp;: études
                supérieures puis CDI dans des industries multinationales.
              </p>
              <p>
                Mais après plusieurs années à cocher des cases qui n'étaient pas faites pour
                moi, il est arrivé un moment où je ne pouvais plus me cacher la réalité
                latente&nbsp;: je ressentais un profond manque de sens, ce métier
                d'ingénieure n'était pas fait pour moi.
              </p>
              <p>
                Une fois le constat fait (et accepté!)&nbsp;: le vide.
                <br />
                Vers quoi aller? Pour quoi je suis faite? Quelle est ma place?
                <br />
                Beaucoup de questions, mais peu de réponses.
              </p>
              <p>
                S'en suit une longue phase de flou artistique, et de quête existentielle.
                <br />
                J'ai lu des dizaines de livres, fait plusieurs bilans de compétences, suivi
                des coachings, testé différents métiers,...
                <br />
                J'ai vécu la frustration, le stress, l'épuisement et la lassitude de ne pas
                savoir.
              </p>
              <p>
                Et puis le Human Design est arrivé dans ma vie. Et tout a basculé. Pas comme
                une révélation magique, mais comme un outil de clarté profonde qui m'a enfin
                permis de me comprendre vraiment, et de trouver ma voie.
              </p>
              <p>
                Aujourd'hui je peux enfin dire que je me sens à ma place (c'était pas
                gagné!), et j'ai vraiment à cœur de t'aider, toi aussi, à trouver ce chemin
                vers ton épanouissement pro. ♥
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
            {/* Colonne gauche : carte HD format affiche + photo qui remplit le blanc */}
            <div className="flex flex-col items-center gap-8 lg:items-stretch">
              <HDCardLarge />
              <div className="relative hidden min-h-[280px] w-full max-w-[380px] flex-1 overflow-hidden rounded-md lg:block">
                <Image
                  src={PHOTOS.carte}
                  alt="Marion Chartier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Colonne droite : header + grille d'attributs, calée sur la hauteur de la carte */}
            <div className="flex flex-col">
              <h2 className="font-display text-[40px] font-light leading-[0.95] text-ink-deep md:text-[56px]">
                Ma carte, <em className="italic text-turquoise">en clair</em>.
              </h2>

              <p className="mt-4 max-w-[560px] font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[18px]">
                Voici ce que dit mon Design, et ce que ça signifie concrètement&nbsp;:
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
              N&apos;étant moi-même pas une grande adepte du «&nbsp;full-théorie&nbsp;» et des
              grandes leçons moralisatrices, je mets un point d&apos;honneur à écouter
              activement tes problématiques, et à te partager un maximum de clés et conseils
              concrets et applicables dans ton quotidien. Voici trois principes qui guident
              chacune de mes séances&nbsp;:
            </p>
          </div>

          {/* 3 cards — même design moderne que les cartes de quiz */}
          <div className="mt-16 grid items-stretch gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
            {PILIERS.map((p, i) => {
              // Alternance cyan / violet / cyan
              const isViolet = i === 1;
              const card = isViolet
                ? "border-ink-lilac/30 bg-[linear-gradient(155deg,#efe8f8_0%,#ffffff_62%)]"
                : "border-turquoise/30 bg-[linear-gradient(155deg,#e4f4f5_0%,#ffffff_62%)]";
              const blob = isViolet ? "bg-ink-lilac/30" : "bg-turquoise/30";
              return (
                <div
                  key={p.title}
                  className={`relative isolate flex flex-col items-center overflow-hidden rounded-[28px] border p-9 text-center shadow-[0_18px_44px_-26px_rgba(80,60,98,0.28)] md:p-11 ${card}`}
                >
                  {/* Couche de masque : clip-path arrondi qui rogne proprement le blob flouté */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 [clip-path:inset(0_round_28px)]"
                  >
                    <span
                      className={`absolute -right-12 -top-12 h-44 w-44 rounded-full ${blob} blur-2xl`}
                    />
                  </span>

                  <h3 className="relative z-10 pt-2 font-script text-[22px] leading-[1.5] text-ink-deep/85 md:text-[26px]">
                    {p.title}
                  </h3>

                  <p className="relative z-10 mt-4 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
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

              <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-2.5 md:mt-20 md:gap-x-6 md:gap-y-3">
                {VALEURS.map(({ word, big }, i) => {
                  // Mots en avant = grande taille + couleur soutenue ; les autres, plus discrets.
                  const size = big
                    ? "text-[30px] md:text-[46px]"
                    : "text-[18px] md:text-[26px]";
                  const color =
                    word === "Aventure"
                      ? "text-ink-deep" // même couleur qu'Authenticité (ink-deep)
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
              <div className="relative rotate-[-2deg] rounded-[28px] border border-[#d8bf8b]/35 bg-[linear-gradient(160deg,rgba(248,239,214,0.5)_0%,rgba(236,214,166,0.5)_100%)] p-8 shadow-[0_26px_55px_-26px_rgba(80,60,98,0.22)] md:p-11">
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
              Clique ici pour un petit supplément d&apos;âme
              <br />
              un message aléatoire rien que pour toi. 😘
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
              Tu peux commencer par découvrir ton schéma personnel de Human Design, ou
              explorer tout l'écosystème de La vie en HD.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
              <Link
                href="/test-gratuit"
                className="inline-flex items-center justify-center rounded-full bg-ink-deep px-8 pt-[17px] pb-[15px] font-body text-[12px] leading-none uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
              >
                Faire le test HD gratuit
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
        Carte d'identité HD
      </p>
      <p className="mt-2 pb-1 font-display text-[28px] leading-[1.05] text-ink-deep md:text-[32px]">
        Manifesting Generator 2/4
      </p>
      <p className="font-sub text-[13px] tracking-wide text-turquoise">
        Magicienne fraternelle
      </p>

      <hr className="my-5 border-line" />

      <dl className="flex flex-col gap-2 text-[13px]">
        <Row label="Autorité" value="Émotionnelle" />
        <Row label="Signature" value="Satisfaction" />
        <Row label="Stratégie" value="Répondre" />
        <Row label="Non-Soi" value="Frustration" />
        <Row label="Définition" value="Double" />
        <Row label="Environnement" value="Montagnes" />
      </dl>
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
