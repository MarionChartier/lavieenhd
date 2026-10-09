import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { EXTERNAL } from "@/lib/links";
import { FaqSection } from "@/components/sections/FaqSection";
import { Reveal } from "@/components/sections/vente/Reveal";
import { SectionDots } from "@/components/sections/vente/SectionDots";
import { VenteTheme } from "@/components/sections/vente/VenteTheme";
import {
  PetalDivider,
  PetalField,
  PetalHalo,
  Rosace,
} from "@/components/sections/vente/motifs";
import {
  CitationBand,
  Cta,
  SectionHeader,
  VenteSection,
} from "@/components/sections/vente/primitives";
import {
  type Livrable,
  type Verbatim,
  LivrablesGrid,
  PricingCard,
  ProcessusSteps,
  ProfilsNotes,
  TemoignageCards,
  TemoignageHero,
} from "@/components/sections/vente/blocks";

export const metadata: Metadata = {
  title: "REVEAL · La Séance Clarté HD Pro - Spécial Business | La vie en HD",
  description:
    "Explore ton Business à la lumière de TON Human Design, pour éclairer ce qui te questionne, ce qui coince ou ce que tu veux faire évoluer, et revenir à TA façon unique d’entreprendre.",
};

/** Bon de commande systeme.io — destination de tous les CTA d’achat. */
const COMMANDE = EXTERNAL.commande.reveal;

/**
 * Couleur et forme propres à REVEAL. Provisoires tant que Marion n'a pas
 * arrêté la répartition des couleurs entre les pages : un or doux, pour la
 * clarté (4.1:1 en prix sur le bandeau de la carte de tarif), et le losange
 * qui brille au cœur de l'œil du logo.
 */
const THEME = {
  accent: "#e6cf8b",
  accentSoft: "#f7efd6",
  // Or clair illisible sur blanc (1.6:1) : les prénoms passent en or soutenu (4:1).
  accentTexte: "#9c7a2a",
  forme: "losange",
} as const;

const PROFILS = [
  {
    titre: "Quelque chose coince ou te questionne dans ton Business",
    paragraphes: [
      "Un ou plusieurs aspects de ton Business bloquent un peu, ou soulèvent chez toi pas mal de questionnements.",
      "Tu n’arrives pas à vendre comme tu le voudrais. Tu ne sais pas comment parler de tes offres. Tu questionnes ton positionnement, ta façon de communiquer ou d’attirer tes client.e.s. Peut-être même que tu t’épuises pour peu de résultats...",
      "Tu aimerais comprendre ce qui se joue derrière tout ça et explorer ce qui pourrait être plus juste et plus fluide pour TOI.",
    ],
  },
  {
    titre: "Tu veux un Business encore plus TOI",
    paragraphes: [
      "Ton Business fonctionne peut-être déjà plutôt bien. Mais tu sens que tu pourrais encore davantage te l’approprier, le faire évoluer et l’adapter à qui TU es aujourd’hui.",
      "Une nouvelle offre se dessine? Une nouvelle étape t’appelle? Tu as envie de repenser ta façon de travailler, d’expérimenter autrement ou d’explorer une nouvelle facette de ton Business?",
      "Tu veux pousser encore plus loin sa personnalisation, pour que ton Business porte toujours davantage ta patte, ton énergie et TA façon unique d’entreprendre.",
    ],
  },
];

/** Les quatre bénéfices, dans la grille des livrables de Blooming. */
const BENEFICES: Livrable[] = [
  {
    titre: "Une vision plus claire",
    texte:
      "Tu TE comprends mieux et tu comprends ce qui se joue derrière ce qui coince ou te questionne aujourd’hui dans ton Business.",
    taille: "pleine",
  },
  {
    titre: "Un autre regard & de nouvelles pistes",
    texte: (
      <>
        Tu découvres des angles que tu n’avais peut-être jamais envisagés...et tu ouvres de
        nouvelles possibilités.
        <em className="mt-3 block">
          Une idée d’offre, un ajustement, une décision qui devient plus claire,...
        </em>
      </>
    ),
    taille: "pleine",
  },
  {
    titre: "Des clés concrètes et personnalisées",
    texte: (
      <>
        Tu identifies des façons de faire plus respectueuses de ton énergie et de ta singularité,
        et tu peux ensuite les tester et les expérimenter concrètement dans ton Business.
        <em className="mt-3 block">
          Une communication plus fluide, une façon de vendre plus naturelle pour toi, une énergie
          mieux préservée...
        </em>
        {/* Le retour client appuie ce bénéfice précis : il reste dans sa
            carte, comme la citation d'Astrig sur INSIDE. */}
        <em className="mt-3 block">
          &quot;Ça me rassure de me dire : &quot;OK, t’aimes pas et c’est normal, mais y’a quelque
          chose pour toi qui peut être mis en place tout en te respectant.&quot;&quot;
        </em>
        <span className="mt-1 block font-body text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          Retour quelques jours après une séance REVEAL
        </span>
      </>
    ),
    taille: "pleine",
  },
  {
    titre: "+ de confiance dans TA façon de faire",
    texte:
      "Tu oses davantage suivre TA propre recette magique, et tu avances plus sereinement, en te détachant progressivement des injonctions et des \"bonnes pratiques\" Business toutes faites...",
    taille: "pleine",
  },
];

const ETAPES = [
  {
    titre: "Tu me partages ta réalité Business du moment",
    texte: (
      <>
        Avant notre séance, tu réponds à quelques questions via un formulaire dédié, pour me
        raconter ce que tu vis actuellement dans ton Business,{" "}
        <em>ce qui te questionne, ce qui coince ou ce que tu aimerais faire évoluer.</em>
        <span className="mt-2 block">
          C’est également depuis ce formulaire que tu me communiques tes informations personnelles{" "}
          <em>(date, heure et lieu de naissance)</em>, et que tu choisis la date pour ta séance, au
          minimum 2 semaines plus tard{" "}
          <em>(le temps pour moi de faire ton analyse personnalisée).</em>
        </span>
        <span className="mt-2 block">
          C’est notre point de départ : REVEAL se construit autour de TES données et de TA réalité du
          moment.
        </span>
      </>
    ),
  },
  {
    titre: "Je me plonge dans ton Human Design",
    texte: (
      <>
        Avant de te retrouver, je prends le temps d’explorer ton Design sous le prisme de ce qui se
        joue pour toi aujourd’hui dans ton Business.
        <span className="mt-2 block">
          Je mets en lumière les éléments qui peuvent venir éclairer ta situation, je fais des liens,
          je creuse certaines pistes...
        </span>
        <span className="mt-2 block">
          Ici, pas d’analyse toute faite : c’est TON Design et ce que TU vis qui guident mon
          exploration.
        </span>
      </>
    ),
  },
  {
    titre: "On explore tout ça ensemble pendant 1h30",
    texte: (
      <>
        On se retrouve en visio ; je te partage ce que j’ai observé, ce qui a émergé...et on déroule
        le fil ensemble.
        <span className="mt-2 block">
          On échange, on questionne, on fait des liens avec ta réalité concrète, on approfondit...
        </span>
        <span className="mt-2 block">
          REVEAL n’est pas une lecture figée de ton Human Design : c’est une vraie séance
          d’exploration et de coaching.
        </span>
      </>
    ),
  },
  {
    titre: "Tu repars avec ton replay & ta Boussole",
    texte: (
      <>
        Dans les jours qui suivent notre séance, tu reçois le replay de notre échange pour pouvoir
        revenir tranquillement dessus quand tu le souhaites, et laisser infuser les informations.
        <span className="mt-2 block">
          Je t’envoie également ta{" "}
          <strong className="font-semibold text-ink-deep">Boussole REVEAL</strong> ; un document PDF
          qui te permet de garder une synthèse claire des éléments clés qui ont émergé pour toi, et
          de continuer à t’y référer après notre séance.
        </span>
        <span className="mt-2 block">De quoi garder le cap bien après notre séance.</span>
      </>
    ),
  },
];

const VERBATIMS: Verbatim[] = [
  {
    nom: "Laura",
    photo: "/assets/temoignages/Laura.png",
    texte:
      "\"Merci infiniment pour toute la richesse de ce que tu m'as partagé autour de la synergie de mon entreprise et moi. C'est vraiment précieux et éclairant. J'ai l'impression que ça a enfin posé des mots justes sur ce que je ressens depuis un moment sans trop savoir comment l'expliquer et l'appréhender - surtout le lien entre l'autorité émotionnelle de mon entreprise et ma propre autorité sacrale. Avec tout ce que tu m'as transmis, je sens qu'on touche à des couches très puissantes.\"",
  },
  {
    nom: "Marjory",
    photo: "/assets/temoignages/Marjory.png",
    texte: `"Marion a été d'une aide précieuse...Elle a éclairé mes lumières sur de nombreux points d'une manière bluffante! Je suis repartie avec une vraie clarté. Et surtout, grâce à elle, je me suis autorisée à accueillir la version de moi qui rêvait GRAND mais qui n'osait pas l'assumer! Ça a débloqué une grosse partie de moi qui se sentait pas légitime et pas capable. Donc juste MERCI pour ça! 🙏🙏🙏 J'y vois beaucoup plus clair, et j'ai ouvert des portes que je ne soupçonnais pas possibles pour moi."

Quelques mois après : "Honnêtement merci encore Marion parce que vraiment tes conseils ont été précieux et aujourd'hui ils sont ancrés. Peu importe ce que les gens me disent je sais, moi, toute seule ce qui est le mieux et ça a tout changé dans ma vie. 🙏"`,
  },
];

const INCLUS = [
  "Ton formulaire d’exploration",
  "Mon analyse ciblée de ton Human Design",
  "1h30 d’exploration & de coaching ensemble en visio",
  "Le replay de notre échange",
  "Ta Boussole REVEAL au format PDF",
];

/** Lien vers la page INSIDE, cité plusieurs fois dans la FAQ. */
const INSIDE = (
  <a
    href={EXTERNAL.offre.insideClub}
    className="font-semibold text-ink-deep underline underline-offset-2"
  >
    INSIDE
  </a>
);

const FAQ = [
  {
    q: "C’est quoi exactement le Human Design et qu’est-ce que ça peut apporter à mon Business?",
    a: (
      <>
        Le Human Design est un outil de connaissance de soi qui permet d’explorer ton fonctionnement
        unique : ta façon de prendre des décisions, d’utiliser ton énergie, d’interagir avec les
        autres, de communiquer...
        <br />
        Et forcément, tout ça ne s’arrête pas à la porte de ton Business.
        <br />
        Dans REVEAL, je l’utilise comme une grille de lecture pour venir éclairer ce que TU vis
        aujourd’hui dans ton Business et explorer des façons de faire plus respectueuses de ton
        fonctionnement et de ta singularité.
        <br />
        L’idée n’est donc pas de te dire comment tu &quot;dois&quot; entreprendre selon ton Human
        Design, mais de t’aider à mieux comprendre TON fonctionnement pour construire TA propre
        recette magique.
      </>
    ),
  },
  {
    q: "Est-ce que je peux faire REVEAL si je ne connais rien au Human Design?",
    a: (
      <>
        Bien sûr! Tu n’as absolument pas besoin de connaître ton Human Design avant notre séance.
        <br />
        C’est justement mon rôle de décrypter pour toi les éléments de ton Design qui peuvent venir
        éclairer ce que tu vis ou questionnes dans ton Business, et de te les transmettre de façon
        claire et accessible.
        <br />
        Je t’explique tout au fur et à mesure, sans jargon inutile. Tu peux donc totalement débarquer
        en mode &quot;je ne sais même pas ce qu’est un centre défini&quot;.
      </>
    ),
  },
  {
    q: "Est-ce que tu fais une lecture complète de mon Human Design pendant REVEAL?",
    a: (
      <>
        Non, et ce n’est justement pas l’objectif de REVEAL.
        <br />
        Je ne déroule pas ton schéma de A à Z. Je pars de ce que tu vis, questionnes ou aimerais
        faire évoluer aujourd’hui dans ton Business, puis je vais chercher dans ton Human Design les
        éléments qui peuvent venir éclairer TA situation.
        <br />
        Selon ce que tu m’auras partagé, je ne vais donc pas forcément explorer les mêmes aspects de
        ton Design que pour une autre personne.
        <br />
        <em>
          Si ton envie est plutôt de découvrir les fondamentaux de ton Human Design et de comprendre
          plus globalement ton fonctionnement, c’est {INSIDE} qui sera le plus adapté.
        </em>
      </>
    ),
  },
  {
    q: "Je n’ai pas vraiment de problème dans mon Business, est-ce que REVEAL est quand même pour moi?",
    a: (
      <>
        Oui! REVEAL n’est pas réservé aux moments où &quot;ça va mal&quot; dans ton Business.
        <br />
        Tu peux aussi venir parce que ton Business fonctionne plutôt bien, mais que tu as envie de
        le faire évoluer, de questionner certaines de tes façons de faire ou de pousser encore plus
        loin sa personnalisation.
        <br />
        Tu n’as donc pas besoin d’avoir un &quot;problème&quot; à résoudre. Ta curiosité et ton envie
        d’explorer comment entreprendre encore davantage à TA façon sont un très bon point de
        départ.
      </>
    ),
  },
  {
    q: "Et si j’ai plusieurs sujets que j’aimerais explorer?",
    a: "Tu n’es pas obligé.e d’arriver avec UNE problématique ultra précise.\nPlusieurs choses peuvent te questionner dans ton Business, et elles sont parfois beaucoup plus liées qu’elles n’en ont l’air. C’est justement ce que ton questionnaire préparatoire va me permettre de commencer à observer.\nPendant nos 1h30 ensemble, on suivra le fil de ce qui émerge et de ce qui semble le plus pertinent à explorer pour toi.\nMais évidemment, 1h30 reste 1h30!\nDonc si tu as envie d’explorer plus tard une autre facette de ton Business ou d’aller plus loin sur un sujet, tu pourras tout à fait réserver une nouvelle Séance Clarté HD Pro - Spécial Business.",
  },
  {
    q: "Est-ce que REVEAL va me dire comment je devrais entreprendre selon mon Human Design?",
    a: "Ton Human Design va effectivement mettre en lumière des façons de fonctionner naturellement plus adaptées à TOI : dans ta manière de prendre tes décisions, d’utiliser ton énergie, d’interagir avec les autres, de communiquer...\nEt c’est évidemment ce que je vais aller explorer avec toi dans REVEAL.\nEn revanche, je ne vais pas transformer ces informations en une nouvelle liste d’injonctions!\nL’idée, c’est de comprendre ce que ton Design nous montre, de le mettre en lien avec TA réalité et ton expérience, puis de voir comment tu peux concrètement te l’approprier dans ton Business.\nParce qu’au bout du compte, ta propre recette magique se construit aussi en expérimentant ce qui fonctionne réellement pour TOI.",
  },
  {
    q: "Quelle est la différence entre INSIDE et REVEAL?",
    a: (
      <>
        Les deux te permettent d’explorer ton Human Design avec moi, mais on ne part pas du même
        endroit.
        <br />
        Avec {INSIDE}, on part de ton Human Design : tu découvres les 7 clés fondamentales de ton
        Design Unique pour mieux comprendre qui tu es et comment TU fonctionnes, dans ta vie de
        manière globale.
        <br />
        Avec <strong className="font-semibold">REVEAL</strong>, on part de ton Business : de ce que
        tu vis, de ce qui te questionne, coince ou que tu aimerais faire évoluer. Et je vais ensuite
        explorer ton Human Design à travers CE prisme-là.
        <br />
        <br />
        INSIDE = &quot;Je veux mieux comprendre mon fonctionnement.&quot;
        <br />
        REVEAL = &quot;Je veux explorer mon Business à travers mon fonctionnement.&quot;
        <br />
        <br />
        <em>Si tu hésites encore entre les deux, tu peux découvrir {INSIDE} juste ici.</em>
      </>
    ),
  },
  {
    q: "Que se passe-t-il si je dois déplacer ou annuler ma séance?",
    a: "Tu peux bien sûr avoir un imprévu.\nSi tu as besoin de déplacer ta séance, préviens-moi au minimum 48h à l’avance afin que nous puissions fixer une nouvelle date ensemble.\nEn cas d’annulation moins de 48h avant notre rendez-vous, la séance ne pourra pas être remboursée, sauf si nous convenons ensemble d’une nouvelle date.\nPour une même séance, un seul déplacement de rendez-vous est possible.",
  },
];

/** Repères du menu à points, dans l'ordre de la page. */
const POINTS = [
  { id: "pour-qui", label: "Cette séance est pour toi si…" },
  { id: "offre", label: "Ce qu’est REVEAL" },
  { id: "benefices", label: "Ce que REVEAL peut t’apporter" },
  { id: "processus", label: "Comment se déroule la séance ?" },
  { id: "temoignages", label: "Les témoignages" },
  { id: "tarif", label: "Ton Business à ta façon" },
  { id: "faq", label: "FAQ" },
];

export default function RevealPage() {
  return (
    <VenteTheme {...THEME}>
      <SectionDots sections={POINTS} />

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      {/* Même premier écran que Blooming : la promesse à gauche, le verbatim
          d'une cliente à droite. */}
      <section className="relative overflow-hidden bg-paper px-6 pt-10 pb-20 md:px-20 md:pt-12 md:pb-24 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-ink-lilac/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-[4%] h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl"
        />
        <PetalField />

        <div className="relative mx-auto grid max-w-(--container-content) items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="text-center">
            <Reveal>
              <Image
                src="/assets/logo-reveal.webp"
                alt="REVEAL · La Séance Clarté HD Pro - Spécial Business"
                width={500}
                height={500}
                priority
                className="mx-auto h-auto w-[210px] md:w-[240px]"
              />
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mx-auto mt-8 max-w-[560px] font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[40px]">
                Explore ton Business à la lumière de{" "}
                <em className="italic text-ink">TON Human Design</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-[520px] font-display text-[20px] font-light italic leading-snug text-ink-deep md:text-[23px]">
                Pour éclairer ce qui te questionne, ce qui coince ou ce que tu veux faire évoluer
                aujourd’hui dans ton Business, et revenir à TA façon unique d’entreprendre et à TA
                propre recette magique.
              </p>
              <Cta href="#tarif" className="mt-9">
                J’explore mon Business à ma façon
              </Cta>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative pb-24 sm:pb-32 lg:pt-14 lg:pb-40">
            {/* Pied de carte allongé : le mockup a un fond plein, il ne doit
                mordre que sur ce blanc, jamais sur le verbatim. */}
            <figure className="relative z-10 mx-auto max-w-[480px] rounded-[28px] border border-line bg-white/95 p-6 pb-12 shadow-simu backdrop-blur-sm sm:pb-14 md:p-8 md:pb-16 lg:ml-0">
              <PetalHalo />
              {/* La Boussole d'Élise, à cheval sur l'angle inférieur droit de
                  sa propre carte, comme sur BODY Bloom. Version numérique
                  plutôt qu'imprimée : le livrable est un PDF. */}
              <Image
                src="/assets/reveal/boussole-tablette.webp"
                alt="La Boussole REVEAL d’Élise, son compte-rendu personnalisé, affichée sur une tablette"
                width={1122}
                height={1402}
                priority
                className="pointer-events-none absolute -right-4 -bottom-[92px] z-20 h-auto w-[100px] rotate-3 rounded-[14px] border-4 border-white shadow-card sm:-right-8 sm:-bottom-[128px] sm:w-[140px] lg:-right-[80px] lg:-bottom-[166px] lg:w-[180px]"
              />

              <figcaption>
                <span className="flex items-center gap-3.5">
                  <Image
                    src="/assets/temoignages/Elise-reveal.webp"
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="h-12 w-12 flex-none rounded-full object-cover"
                  />
                  <span className="font-script text-[24px] leading-none text-accent-texte">Élise</span>
                </span>
                <span className="mt-3.5 block font-body text-[11px] uppercase leading-relaxed tracking-[0.12em] text-ink-soft">
                  à chaud après sa séance
                </span>
              </figcaption>

              <blockquote className="mt-5 flex flex-col gap-3.5 font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
                <p>
                  &quot;Cet échange m’a apporté un nouveau regard et des approfondissements sur ma
                  façon de voir, et ce qu’est mon business, tout en me respectant!&quot;
                </p>
                <p className="font-body text-[11px] not-italic uppercase tracking-[0.12em] text-ink-soft">
                  Puis, quelques heures après :
                </p>
                <p>&quot;Ça bouge déjà...2 offres se dessinent vraiment...Merci encore 🙏&quot;</p>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* POUR QUI                                                         */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="pour-qui" bg="white" wide>
        <SectionHeader
          eyebrow="Cette séance est pour toi si…"
          title={
            <>
              Tu veux trouver <em className="italic text-ink">TA propre recette magique</em> pour
              entreprendre à TA façon.
            </>
          }
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Comme sur INSIDE : les portraits partent du haut de la strate et
              se suivent, légèrement espacés. */}
          <Reveal
            delay={80}
            className="order-first flex flex-col items-center gap-8 lg:order-last lg:gap-6"
          >
            <Image
              src="/assets/reveal/marion-blazer.webp"
              alt="Marion Chartier"
              width={900}
              height={1213}
              className="aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card"
            />
            <Image
              src="/assets/reveal/marion-cafe.webp"
              alt=""
              aria-hidden
              width={900}
              height={1213}
              className="hidden aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card lg:block"
            />
          </Reveal>

          <div>
            <ProfilsNotes profils={PROFILS} empile />

            <Reveal className="mt-12">
              <p className="max-w-[640px] font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
                Que quelque chose coince dans ton Business, te questionne ou que tu aies simplement
                envie d’aller plus loin, tu n’as probablement pas besoin d’une{" "}
                <strong className="font-semibold text-ink-deep">énième méthode Business</strong>{" "}
                toute faite qui te donne l’impression de devoir rentrer dans un{" "}
                <strong className="font-semibold text-ink-deep">moule</strong>.
              </p>
              <p className="mt-4 max-w-[640px] font-display text-[18px] font-light italic leading-relaxed text-ink md:text-[19px]">
                Prospecter. Poster X fois par semaine. Suivre telle stratégie de vente. Construire
                tes offres de telle façon. Communiquer comme ci, lancer comme ça...
              </p>
              <p className="mt-7 max-w-[640px] font-display text-[20px] font-semibold leading-relaxed text-ink-deep">
                Tu as surtout besoin de revenir à TOI et à ton fonctionnement, pour choisir, adapter
                ou inventer des façons de faire qui respectent ton énergie et ta singularité.
              </p>
              <Cta href="#tarif" className="mt-10">
                Je veux aligner mon Business
              </Cta>
            </Reveal>
          </div>
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* L’OFFRE                                                          */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="offre" bg="paper" decor={<PetalField dense />}>
        <Reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Ce qu’est REVEAL
          </p>
          <PetalDivider centered={false} className="mt-7" />
          <h2 className="mt-6 font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[44px]">
            Ton Business à travers le prisme
            <br />
            <em className="italic text-ink">de TON Human Design</em>
          </h2>
        </Reveal>

        <div className="mt-10 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
          <Reveal className="grid items-center gap-8 md:grid-cols-[1fr_250px] md:gap-12">
            {/* Texte resserré dans sa colonne : sur toute la largeur, les deux
                paragraphes tenaient en trois lignes à côté d'une image bien
                plus haute. */}
            <div className="md:max-w-[420px]">
              <p>
                <strong className="font-semibold text-ink-deep">
                  REVEAL part de TOI et de ce que tu vis aujourd’hui dans ton Business.
                </strong>
              </p>
              <p className="mt-4">
                Tu arrives avec tes questionnements, tes éventuels blocages ou simplement ce que tu
                aimerais explorer ou faire évoluer...et c’est à partir de LÀ que l’on déroule le fil.
              </p>
            </div>

            <Image
              src="/assets/reveal/coaching.webp"
              alt="Une séance REVEAL en visio, carnet de notes ouvert devant l’ordinateur"
              width={1122}
              height={1402}
              className="mx-auto h-auto w-[210px] rounded-[14px] shadow-card md:w-full"
            />
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal>
            <p>
              Je me plonge alors dans ton Human Design pour aller explorer ce qu’il vient nous
              raconter de TON fonctionnement unique, toujours en écho avec la réalité concrète de ton
              Business.
            </p>
            <p className="mt-4">
              Cela peut être ta façon naturelle de communiquer, de prendre des décisions, d’utiliser
              ton énergie, de vendre, d’interagir avec les autres...je vais chercher dans ton Design
              les clés qui peuvent venir éclairer TA situation et mettre en lumière des façons de
              faire naturellement plus adaptées à TOI.
            </p>
            <p className="mt-4">
              Parce qu’ici, je ne déroule pas la même analyse pour tout le monde : c’est TA réalité,
              TES questionnements et TON fonctionnement qui guident l’exploration.
            </p>
            <p className="mt-4">
              On explore, on fait des liens, tu te les appropries, tu expérimentes, tu ajustes...
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Ton Human Design est une boussole précieuse pour naviguer vers TA façon
                d’entreprendre : celle qui est la plus naturelle et juste pour TOI.
              </strong>
              <br />
              <em>Sans pour autant t’enfermer dans de nouvelles cases!</em>
            </p>
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal>
            <p>
              <strong className="font-semibold text-ink-deep">L’objectif?</strong>
            </p>
            <p className="mt-4">
              Pas te servir une énième stratégie Business standardisée et sans âme.
              <br />
              Mais t’aider à comprendre plus finement TA façon de fonctionner pour faire des choix
              plus justes pour toi et construire, petit à petit, TA propre recette magique.
            </p>
          </Reveal>
        </div>

      </VenteSection>

      <CitationBand tone="soft">
        «&nbsp;Il n’existe pas UNE bonne façon d’entreprendre.
        <br />
        Il existe celle qui fonctionne pour TOI.&nbsp;»
      </CitationBand>

      {/* ---------------------------------------------------------------- */}
      {/* BÉNÉFICES — dans la strate des livrables de Blooming             */}
      {/* ---------------------------------------------------------------- */}
      {/* Or adouci pour cette strate seulement : le fond teinté et le halo des
          cartes reprennent l'accent de la page, et l'or plein y était trop
          présent sur toute une hauteur d'écran. */}
      <div
        className="contents"
        style={
          {
            "--color-accent": "#efe3c0",
            "--color-accent-soft": "#fbf7ec",
          } as CSSProperties
        }
      >
      <VenteSection id="benefices" bg="accent" wide decor={<PetalField />}>
        <SectionHeader
          eyebrow="Ce que REVEAL peut t’apporter"
          title={
            <>
              Qu’est-ce que cette séance peut changer pour{" "}
              <em className="italic text-ink">TOI</em> concrètement?
            </>
          }
        />

        {/* La Boussole en haut à gauche, les deux premiers bénéfices empilés à
            sa droite, puis les deux suivants côte à côte sur toute la largeur.
            Cartes d'une même rangée à hauteur égale. Sur mobile, la Boussole
            passe en tête et les cartes s'empilent. */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-x-10">
          <Reveal className="relative mx-auto w-full max-w-[380px] self-center">
            <PetalHalo />
            <Image
              src="/assets/reveal/boussole-tablette.webp"
              alt="La Boussole REVEAL, le compte-rendu personnalisé, affichée sur une tablette"
              width={1122}
              height={1402}
              className="relative h-auto w-full rounded-[28px] border-[6px] border-white shadow-simu"
            />
          </Reveal>
          <div className="flex flex-col gap-6">
            <div className="lg:flex-1 lg:[&>div]:h-full">
              <LivrablesGrid livrables={[BENEFICES[0]]} />
            </div>
            <div className="lg:flex-1 lg:[&>div]:h-full">
              <LivrablesGrid livrables={[BENEFICES[1]]} />
            </div>
          </div>
          <div className="grid gap-6 lg:col-span-2 lg:grid-cols-2 lg:gap-x-10">
            <div className="lg:[&>div]:h-full">
              <LivrablesGrid livrables={[BENEFICES[2]]} />
            </div>
            <div className="lg:[&>div]:h-full">
              <LivrablesGrid livrables={[BENEFICES[3]]} />
            </div>
          </div>
        </div>

        <Reveal className="mt-14 text-center">
          <Cta href="#tarif">Je veux trouver ce qui marche pour moi</Cta>
        </Reveal>
      </VenteSection>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* PROCESSUS                                                        */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="processus" bg="lavender" wide>
        <SectionHeader
          eyebrow="Comment se déroule la séance?"
          title={
            <>
              De ta réalité Business à <em className="italic text-ink">ta Boussole REVEAL</em>
            </>
          }
        />
        <div className="mt-16">
          <ProcessusSteps etapes={ETAPES} />
        </div>

        {/* Le retour sur la Boussole conclut la dernière étape : en citation
            détachée sous la frise, comme le mot de Justine sur INSIDE. La
            Boussole imprimée l'accompagne : c'est la cliente qui a imprimé
            son PDF, l'image ne promet donc pas un livre. */}
        <Reveal
          as="figure"
          className="mx-auto mt-16 grid max-w-[760px] items-center gap-8 text-center md:grid-cols-[200px_1fr] md:gap-10 md:text-left"
        >
          {/* Légende en <p> : la figure a déjà sa figcaption, celle de la
              citation. */}
          <div className="mx-auto w-[180px] md:w-full">
            <Image
              src="/assets/reveal/boussole-papier.webp"
              alt="La Boussole REVEAL imprimée"
              width={1122}
              height={1402}
              className="h-auto w-full -rotate-2 rounded-[14px] border-4 border-white shadow-card"
            />
            <p className="mt-3 text-center font-display text-[15px] italic leading-snug text-ink-soft">
              Ta Boussole est livrée en PDF, à imprimer si tu le souhaites
            </p>
          </div>
          <div>
            <blockquote className="font-display text-[19px] italic leading-relaxed text-ink-deep md:text-[21px]">
              &quot;Je l’ai imprimé pour l’avoir à portée de main...ton support est quand même
              vraiment très beau et me met en joie 😍&quot;
            </blockquote>
            <figcaption className="mt-3 font-body text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              Message reçu après l’envoi de la Boussole REVEAL
            </figcaption>
          </div>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TÉMOIGNAGES                                                      */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="temoignages" bg="white" wide>
        <SectionHeader filet={false} title="Leurs mots valent plus qu’un long discours. ♡" />

        <div className="mx-auto mt-14 max-w-[900px]">
          <TemoignageHero
            photo="/assets/temoignages/Elise-reveal.webp"
            nom="Élise"
            texte={`"J'ai vraiment apprécié ce temps passé ensemble. J'aime beaucoup ton énergie et ton approche.
Au-delà de l'analyse détaillée, qui m'a permis d'avoir des confirmations sur ce que j'avais déjà identifié me concernant...cet échange m'a apporté un nouveau regard et des approfondissements sur ma façon de voir ce qu'est mon business, tout en me respectant!
Quant à mes questions et mes zones d'ombre...tu as apporté de beaux éclairages, qui me permettent de lâcher prise, et mettre beaucoup plus de joie dans ce que j'ai à faire. Mille mercis."

Puis, quelques heures après : "Ça bouge déjà...2 offres se dessinent vraiment...Merci encore 🙏 Mnt let's go"`}
          />

          <PetalDivider full className="my-14" />

          <TemoignageCards verbatims={VERBATIMS} />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TARIF                                                            */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="tarif" wide decor={<PetalField dense />}>
        <SectionHeader
          eyebrow="Ton Business à ta façon"
          title="Prêt.e à remettre ton unicité au cœur de ton Business?"
        />
        <div className="mt-14">
          <PricingCard
            logo="/assets/reveal/logo-blanc.webp"
            logoAlt="REVEAL"
            prix="222€"
            inclus={INCLUS}
            href={COMMANDE}
            libelleCta={"J’explore ma propre recette magique"}
            note="Paiement en plusieurs fois possible via PayPal sous réserve d’éligibilité."
          />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ                                                              */}
      {/* ---------------------------------------------------------------- */}
      <div id="faq" className="scroll-mt-36">
        <FaqSection
          items={FAQ}
          title="FAQ"
          eyebrow="Les questions qui reviennent le plus souvent"
        />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* CTA FINAL                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* Pas de passerelle vers une autre offre : le texte de Marion enchaîne
          directement de la FAQ à la clôture. Peu de marge haute : la FAQ,
          sur le même fond blanc, a déjà la sienne en bas. */}
      <section className="relative overflow-hidden bg-white px-6 pt-6 pb-24 text-center md:px-20 md:pt-8 md:pb-32">
        <PetalField />
        <Reveal className="relative mx-auto max-w-[640px]">
          <Rosace className="mx-auto h-10 w-10 text-accent/70" />
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Ta propre recette magique
          </p>
          <h2 className="mt-6 font-display text-[32px] font-light leading-[1.1] text-ink-deep md:text-[52px]">
            Et si ton Business s’adaptait enfin à <em className="italic text-ink">TOI?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] font-display text-[18px] font-light italic leading-snug text-ink">
            Il est peut-être temps d’arrêter de chercher la &quot;bonne&quot; façon de faire...pour
            explorer la tienne.
          </p>
          <Cta href={COMMANDE} external className="mt-10">
            J’entreprends à ma façon
          </Cta>
        </Reveal>
      </section>
    </VenteTheme>
  );
}
