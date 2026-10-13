import type { Metadata } from "next";
import Image from "next/image";
import { EXTERNAL } from "@/lib/links";
import { FaqSection } from "@/components/sections/FaqSection";
import { HDSimulatorForm } from "@/components/sections/HDSimulatorForm";
import { Reveal } from "@/components/sections/vente/Reveal";
import { SectionDots } from "@/components/sections/vente/SectionDots";
import { VenteTheme } from "@/components/sections/vente/VenteTheme";
import {
  Petal,
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
  type Variante,
  type Verbatim,
  ChoixVariantes,
  LivrablesGrid,
  OffresSuivantes,
  ProfilsNotes,
  TemoignageCards,
  TemoignageHero,
} from "@/components/sections/vente/blocks";

export const metadata: Metadata = {
  title: "BODY Bloom · Le Guide d’Initiation à ton Intelligence Digestive | La vie en HD",
  description:
    "Découvre ton Intelligence Digestive en Human Design, et reconnecte-toi à TA façon naturelle de digérer, d’assimiler et de te nourrir.",
};

/**
 * Couleur et forme propres à BODY Bloom : un rose poudré, pour le corps et
 * l'éclosion, et la goutte, pour la Digestion. La couleur ne teinte que les
 * fonds de section et les formes en filigrane ; les petits éléments restent
 * turquoise, comme sur Blooming (demande de Marion).
 */
const THEME = {
  motif: "#efbfd0",
  accentSoft: "#fbeef3",
  forme: "goutte",
} as const;

const PROFILS = [
  {
    titre: "Tu t’intéresses déjà à ton alimentation et/ou au bien-être de ton corps",
    paragraphes: [
      "Tu t’interroges sur la façon dont ton alimentation et ta digestion peuvent influencer ton énergie, ta clarté ou ton humeur au quotidien.",
      "Tu as peut-être même déjà testé différentes façons de manger, lu beaucoup de conseils sur le sujet, et tu cherches à comprendre ce qui serait \"le mieux\" pour toi.",
      <>
        Mais parmi toutes les recommandations extérieures divergentes, tu aimerais surtout revenir à{" "}
        <strong className="font-semibold">TON propre fonctionnement naturel et inné.</strong>
      </>,
    ],
  },
  {
    titre: "Tu es curieux.se et tu veux mieux te connaître",
    paragraphes: [
      "Tu as envie de découvrir une facette plus méconnue de ton Human Design et de mettre de la conscience sur ta manière d’assimiler, aussi bien les nutriments que les informations.",
      "Et tu veux surtout aller au-delà de la théorie : observer, expérimenter et garder ce qui fonctionne réellement pour TOI, sans ajouter une nouvelle liste de règles à suivre.",
    ],
  },
];

const DANS_LE_GUIDE = [
  "Un décryptage clair de ta Digestion HD",
  "Ses grandes caractéristiques et ses nuances",
  <>
    Des pistes concrètes autour de ton alimentation{" "}
    <em>(optimisation de la composition de ton assiette ou du contexte dans lequel tu manges)</em>
  </>,
  <>
    Son application à l’assimilation des informations{" "}
    <em>(façons ou contextes favorables à tes apprentissages, tes lectures, tes formations,...)</em>
  </>,
  "Des questions et pistes d’observation",
  "Des conseils d’expérimentation faciles à tester au quotidien",
  <>
    <strong className="font-semibold text-ink-deep">En bonus</strong> : la nuance &quot;profil
    actif&quot; ou &quot;profil passif&quot; associée à ta Digestion
  </>,
];

/** Les trois bénéfices, dans la grille des livrables de Blooming. */
const BENEFICES: Livrable[] = [
  {
    titre: "Mieux comprendre les besoins de TON corps",
    texte:
      "Tu mets des mots sur certaines sensations, préférences ou habitudes que tu avais peut-être déjà remarquées, sans forcément les nommer.",
    taille: "pleine",
  },
  {
    titre: "Avoir une digestion plus fluide",
    texte: (
      <>
        Tu optimises ta manière d’assimiler les nutriments et les informations en revenant à un
        fonctionnement plus naturel pour TON corps,{" "}
        <strong className="font-semibold">
          et tu ouvres de nouvelles pistes d’observation autour de ta propre régulation alimentaire.
        </strong>
      </>
    ),
    taille: "pleine",
  },
  {
    titre: "Développer une écoute plus fine de ton corps",
    texte: (
      <>
        Tu apprends à observer davantage tes signaux internes et à distinguer progressivement ce qui
        semble réellement te convenir, en te détachant petit à petit des &quot;il faut...&quot; et
        des &quot;tu dois...&quot;.
        <em className="mt-3 block">
          &quot;Certains passages m’ont fait sourire, je réalise le conditionnement que nous avons
          depuis l’enfance par l’éducation ou les normes sociétales bien pensantes...&quot;
        </em>
        <span className="mt-1 block font-body text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          Une prise de conscience née au fil du Guide...
        </span>
      </>
    ),
    taille: "pleine",
  },
];

/** Yohan tient le témoignage principal (et ouvre la page dans le hero). */
const VERBATIMS: Verbatim[] = [
  {
    nom: "Justine",
    photo: "/assets/temoignages/Justine-body-bloom.webp",
    texte: `"Je viens de finir le guide de la digestion : hyper intéressant! Je me suis carrément reconnue dans la mienne, je ne pensais pas que ce serait la digestion au sens propre (rapport a l'alimentation) mais aussi au sens figuré (comment on "ingère" ses connaissances.)
C'est vraiment un plus pour la connaissance de soi au quotidien et ça vient conforter, rassurer, certains comportements où l'on se demande si on est normaux ahah.
Merci beaucoup Marion pour ce guide!"`,
  },
  {
    nom: "Émilie",
    photo: "/assets/temoignages/Emilie-body-bloom.webp",
    texte: `"Je viens de lire le guide, c'est très intéressant 😊
Je me retrouve beaucoup dans le côté froid. Je préfère mon café tiédi ou froid, je déteste avoir chaud."`,
  },
];

const INCLUS = [
  <strong key="guide" className="font-semibold">
    Ton Guide complet d’environ 30 pages
  </strong>,
  "Théorie vulgarisée + conseils pratiques",
  "Espaces de réflexion & d’observation",
  "Pistes d’expérimentation concrètes",
  <>
    <strong className="font-semibold">Bonus</strong> : ta nuance &quot;profil actif&quot; ou
    &quot;profil passif&quot;
  </>,
];

const COMMANDES = EXTERNAL.commandeDigestion;

const DIGESTIONS: Variante[] = [
  ["L’Appétit", "L’APPÉTIT", COMMANDES.appetit],
  ["Le Goût", "LE GOÛT", COMMANDES.gout],
  ["La Soif", "LA SOIF", COMMANDES.soif],
  ["Le Toucher", "LE TOUCHER", COMMANDES.toucher],
  ["Le Son", "LE SON", COMMANDES.son],
  ["La Lumière", "LA LUMIÈRE", COMMANDES.lumiere],
].map(([nom, majuscules, href]) => ({
  nom,
  sousTitre: "Guide BODY Bloom",
  prix: "22€",
  href,
  libelle: `Je choisis ${majuscules} ♡`,
}));

/** Lien vers le test HD gratuit, embarqué plus bas sur la page. */
const TEST = (
  <a href="#test-gratuit" className="font-semibold text-ink-deep underline underline-offset-2">
    TEST HD GRATUIT
  </a>
);

const lienOffre = (href: string, libelle: string) => (
  <a href={href} className="font-semibold text-ink-deep underline underline-offset-2">
    {libelle}
  </a>
);

const FAQ = [
  {
    q: "Est-ce que ce Guide est fait pour moi, même si je ne connais pas le Human Design?",
    a: "Oui! BODY Bloom est conçu de manière à être accessible à tout le monde, même si le Human Design est une découverte pour toi.\nTout est clairement expliqué, vulgarisé et décrypté.",
  },
  {
    q: "Comment connaître ma Digestion HD?",
    a: (
      <>
        Pour découvrir ta Digestion Human Design, tu peux faire ton {TEST} plus bas sur cette page.
        <br />
        <em>
          C’est très rapide et tu as juste besoin de tes informations de naissance (date, heure et
          lieu).
        </em>
        <br />
        Le TEST va générer ton schéma HD et les informations associées, parmi lesquelles tu
        retrouveras ta Digestion.
      </>
    ),
  },
  {
    q: "Est-ce que le Guide est personnalisé?",
    a: (
      <>
        Le Guide n’est pas personnalisé au sens où nous sommes plusieurs à partager la même
        Digestion HD.
        <br />
        Cependant, le Guide que tu choisis est entièrement consacré à TA Digestion spécifique (1
        parmi les 6). Au moment de ta commande, tu sélectionnes donc directement le Guide
        correspondant à ta Digestion.
        <br />
        <em>
          De plus, tu y retrouveras également en BONUS les descriptions du &quot;Profil HD&quot;,
          &quot;actif&quot; et &quot;passif&quot;, pour pouvoir identifier et explorer ta propre
          nuance.
        </em>
      </>
    ),
  },
  {
    q: "Est-ce qu’il y a du pratico-pratique dans le Guide? Ou uniquement de la théorie?",
    a: (
      <>
        N’étant moi-même pas une grande adepte du &quot;full-théorie&quot; quand je plonge dans un
        sujet, je mets un point d’honneur à te partager dans ce Guide un maximum de clés concrètes et
        applicables dans ton quotidien (en complément de toute la théorie indispensable{" "}
        <em>et vulgarisée</em> évidemment).
        <br />
        <em>
          Je suis une scientifique avec les pieds sur Terre, et à travers mon cheminement spirituel,
          j’ai vraiment fait le constat de combien il est primordial de ramener certains aspects
          plus ésotériques dans la réalité de la vie de tous les jours!
        </em>
      </>
    ),
  },
  {
    q: "Est-ce que ça concerne uniquement l’alimentation?",
    a: (
      <>
        Non. Même si son nom peut prêter à confusion, la Digestion en Human Design ne concerne pas
        uniquement ce que tu manges.
        <br />
        Elle donne des indications sur la manière dont ton corps est naturellement conçu pour{" "}
        <strong className="font-semibold">
          assimiler les nutriments, mais aussi les informations.
        </strong>
        <br />
        Dans BODY Bloom, on explore donc ces deux dimensions : ton alimentation au sens littéral,
        mais aussi ta manière d’absorber et d’intégrer ce que tu lis, apprends, regardes,
        écoutes,...
        <br />
        <strong className="font-semibold">
          Il est question ici d’alimentation à la fois du CORPS, mais aussi de L’ESPRIT.
        </strong>
      </>
    ),
  },
  {
    q: "Quand et sous quel format vais-je recevoir mon Guide?",
    a: (
      <>
        Ton Guide d’Initiation est un ebook au format PDF, disponible en téléchargement{" "}
        <strong className="font-semibold">immédiatement après ta commande</strong>.
        <br />
        Tu recevras également le lien de téléchargement par email, pour pouvoir le retrouver
        facilement par la suite.
        <br />
        <em>Ensuite, libre à toi de le faire imprimer sur un joli support si tu le souhaites.</em>
      </>
    ),
  },
  {
    q: "BODY Bloom remplace-t-il un avis médical ou un suivi nutritionnel?",
    a: (
      <>
        Non. BODY Bloom est un Guide d’exploration basé sur le Human Design.
        <br />
        Il ne constitue{" "}
        <strong className="font-semibold">
          ni un avis médical, ni un diagnostic, ni une prescription alimentaire ou nutritionnelle
        </strong>
        , et ne se substitue en aucun cas à l’accompagnement d’un professionnel de santé.
        <br />
        L’objectif du Guide est de t’inviter à mieux observer ton propre fonctionnement et à
        expérimenter certaines pistes dans ton quotidien,{" "}
        <strong className="font-semibold">pas de prendre en charge une problématique de santé.</strong>
      </>
    ),
  },
  {
    q: "Et si j’ai envie de décoder d’autres informations de mon schéma?",
    a: (
      <>
        Si cette première exploration te donne envie d’aller plus loin, tu peux poursuivre de deux
        façons :
        <br />
        {lienOffre(EXTERNAL.offre.thePlaceToBe, "THE PLACE to be")}, pour découvrir ton
        Environnement HD et mieux comprendre les types de lieux dans lesquels TON corps se sent
        naturellement le mieux.
        <br />
        {lienOffre(EXTERNAL.offre.insideClub, "INSIDE")}, pour plonger plus largement dans ton
        Design Unique et découvrir les 7 clés fondamentales de ton fonctionnement.
      </>
    ),
  },
];

/** Repères du menu à points, dans l'ordre de la page. */
const POINTS = [
  { id: "pour-qui", label: "Ce Guide est pour toi si…" },
  { id: "offre", label: "À propos du Guide" },
  { id: "benefices", label: "Ce que ce Guide peut t’apporter" },
  { id: "temoignages", label: "Les témoignages" },
  { id: "tarif", label: "Les 6 Digestions" },
  { id: "faq", label: "FAQ" },
  { id: "test-gratuit", label: "Découvre ta Digestion HD" },
];

export default function BodyBloomPage() {
  return (
    <VenteTheme {...THEME}>
      <SectionDots sections={POINTS} />

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
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
            <Reveal>
              <Image
                src="/assets/logo-bodybloom.webp"
                alt="BODY Bloom · Le Guide d’Initiation à ton Intelligence Digestive"
                width={500}
                height={500}
                priority
                className="mx-auto h-auto w-[230px] md:w-[270px]"
              />
            </Reveal>

            <Reveal delay={80}>
              <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
                Human Design • Intelligence digestive
              </p>
              <h1 className="mx-auto mt-6 max-w-[560px] font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[40px]">
                Et si ton corps savait déjà{" "}
                <em className="italic text-ink">ce qui lui convient?</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-[520px] font-display text-[20px] font-light italic leading-snug text-ink-deep md:text-[23px]">
                ~ Découvre ton Intelligence Digestive en Human Design, et reconnecte-toi à TA façon
                naturelle de digérer, d’assimiler et de te nourrir. ~
              </p>
              <Cta href="#tarif" className="mt-9">
                Je découvre BODY Bloom ♡
              </Cta>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative pb-20 sm:pb-28 lg:pt-14 lg:pb-36">
            {/* Pied de carte allongé : le mockup a un fond plein, il ne doit
                mordre que sur ce blanc, jamais sur le verbatim. */}
            <figure className="relative z-10 mx-auto max-w-[480px] rounded-[28px] border border-line bg-white/95 p-6 pb-12 shadow-simu backdrop-blur-sm sm:pb-14 md:p-8 md:pb-16 lg:ml-0">
              <PetalHalo />
              {/* Le Guide posé à cheval sur l’angle inférieur droit de la
                  carte, comme la Fleur sur Blooming : il montre de quoi parle
                  le verbatim sans lui voler la vedette. */}
              <Image
                src="/assets/body-bloom/guide-tablette.webp"
                alt="Le Guide d’Initiation à ton Intelligence Digestive affiché sur une tablette"
                width={1254}
                height={1254}
                priority
                className="pointer-events-none absolute -right-4 -bottom-[76px] z-20 h-auto w-[110px] rotate-3 rounded-[14px] border-4 border-white shadow-card sm:-right-8 sm:-bottom-[112px] sm:w-[160px] lg:-right-[80px] lg:-bottom-[150px] lg:w-[210px]"
              />

              <figcaption>
                <span className="flex items-center gap-3.5">
                  <Image
                    src="/assets/temoignages/Yohan-body-bloom.webp"
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="h-12 w-12 flex-none rounded-full object-cover"
                  />
                  <span className="font-script text-[24px] leading-none text-accent-texte">
                    Yohan
                  </span>
                </span>
              </figcaption>

              <blockquote className="mt-5 font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
                <p>
                  &quot;Avec mon conjoint, ayant la même digestion HD, nous avons lu le Guide sur
                  notre intelligence digestive et nous l’avons trouvé génial et rempli de vérités!
                  Nous nous sommes reconnus pleinement. Merci beaucoup pour ce précieux Guide avec un
                  visuel magnifique. On a adoré!! ❤️&quot;
                </p>
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
          eyebrow="Ce Guide est pour toi si…"
          title={
            <>
              Tu veux mieux comprendre ce dont TON corps a besoin pour assimiler au mieux ce que tu
              lui donnes à manger,{" "}
              <em className="italic text-ink">dans ton assiette comme dans ta tête.</em>
            </>
          }
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <Reveal
            delay={80}
            className="order-first flex flex-col items-center gap-8 lg:order-last lg:gap-6"
          >
            <Image
              src="/assets/body-bloom/marion-robe.webp"
              alt="Marion Chartier"
              width={900}
              height={1202}
              className="aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card"
            />
            <Image
              src="/assets/body-bloom/marion-pensive.webp"
              alt=""
              aria-hidden
              width={900}
              height={1205}
              className="hidden aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card lg:block"
            />
          </Reveal>

          <div>
            <ProfilsNotes profils={PROFILS} />

            <Reveal className="mt-12">
              <p className="max-w-[640px] font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
                Que tu sois déjà attentif.ve à ton alimentation ou simplement curieux.se d’en
                apprendre davantage sur toi, ce Guide t’invite à poser un autre regard sur ce que tu
                donnes à digérer à ton corps.
              </p>
              <p className="mt-7 max-w-[640px] font-display text-[20px] font-semibold leading-relaxed text-ink-deep">
                Et il n’est pas question ici de te prescrire un régime, de te donner des conseils
                nutritionnels stricts ou de révolutionner ton alimentation!
              </p>
              <p className="mt-3 max-w-[640px] font-display text-[20px] font-semibold leading-relaxed text-ink-deep">
                Juste revenir à une référence essentielle : TON propre corps.
              </p>
              <Cta href="#offre" className="mt-10">
                Je découvre mon Intelligence Digestive ♡
              </Cta>
            </Reveal>
          </div>
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* L’OFFRE — le Guide                                               */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="offre" bg="paper" decor={<PetalField dense />}>
        <Reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            À propos du Guide
          </p>
          <PetalDivider centered={false} className="mt-7" />
          <h2 className="mt-6 font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[44px]">
            Découvre ton Intelligence Digestive HD,
            <br />
            <em className="italic text-ink">
              et apprends à mieux écouter les besoins de TON corps au quotidien.
            </em>
          </h2>
        </Reveal>

        <div className="mt-10 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
          <Reveal>
            <h3 className="font-display text-[22px] font-semibold text-ink-deep">
              Ta Digestion HD, concrètement, c’est quoi?
            </h3>
            <p className="mt-4">
              En Human Design, la Digestion décrit{" "}
              <strong className="font-semibold text-ink-deep">
                la manière dont ton corps est naturellement conçu pour assimiler au mieux les
                nutriments et les informations.
              </strong>
              <br />
              Elle fait partie, tout comme l’Environnement, des clés qui ramènent l’exploration de
              ton Design directement dans le corps.
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Appétit, Goût, Soif, Toucher, Son ou Lumière
              </strong>{" "}
              : nous avons tous une Digestion définie dans notre Design, avec ses propres
              caractéristiques, besoins et nuances :{" "}
              <em>
                ultra-sélectivité, sensibilité au bruit, à la qualité, à la luminosité, à la
                diversité,...
              </em>
            </p>
            <p className="mt-4">
              Et contrairement à ce que son nom pourrait laisser penser,{" "}
              <strong className="font-semibold text-ink-deep">
                ta Digestion HD ne parle pas uniquement de ce que tu manges au sens littéral.
              </strong>
              <br />
              Elle concerne également ta manière d’absorber et d’intégrer ce que tu lis, apprends,
              regardes, écoutes,...
            </p>
            <p className="mt-6 text-center">
              <strong className="font-semibold text-ink-deep">
                Il est question ici d’alimentation à la fois du CORPS, mais aussi de L’ESPRIT.
              </strong>
            </p>
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal className="grid items-center gap-8 md:grid-cols-[1fr_260px] md:gap-12">
            <div>
              <h3 className="font-display text-[22px] font-semibold text-ink-deep">
                Et le Guide dans tout ça?
              </h3>
              <p className="mt-4">
                <strong className="font-semibold text-ink-deep">
                  BODY Bloom, Le Guide d’Initiation à ton Intelligence Digestive, est un Guide
                  complet d’environ 30 pages, conçu pour t’aider à comprendre TA Digestion et surtout
                  à l’observer et l’expérimenter dans ton quotidien.
                </strong>
              </p>
            </div>

            {/* Les Guides sont montrés imprimés : la légende rappelle que le
                livrable est un PDF, pour que l'image ne promette pas un livre. */}
            <figure className="mx-auto w-[240px] md:w-full">
              <Image
                src="/assets/body-bloom/guides-papier.webp"
                alt="Les 6 Guides d’Initiation à ton Intelligence Digestive, imprimés"
                width={1254}
                height={1254}
                className="h-auto w-full rounded-[14px] shadow-card"
              />
              <figcaption className="mt-3 text-center font-display text-[15px] italic leading-snug text-ink-soft">
                Un Guide par Digestion, livré en PDF, à imprimer si tu le souhaites
              </figcaption>
            </figure>
          </Reveal>

          <Reveal>
            <p className="mt-6">
              Pas de jargon complexe, et pas besoin d’être expert.e en Human Design : je traduis la
              théorie pour que tu puisses te l’approprier et découvrir ce qui fonctionne réellement
              pour TOI.
            </p>
            <p className="mt-4">
              L’idée avec ce Guide, c’est de t’aider à développer une écoute plus fine de ton corps
              et à{" "}
              <strong className="font-semibold text-ink-deep">
                te reconnecter progressivement à ta biologie naturelle.
              </strong>
            </p>

            <p className="mt-6">À l’intérieur de ton Guide, tu vas retrouver :</p>

            <ul className="mt-6 flex flex-col gap-4 rounded-[20px] border border-line bg-white/70 px-6 py-6 text-[16px] md:px-8 md:py-7 md:text-[17px]">
              {DANS_LE_GUIDE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed">
                  <Petal className="mt-1.5 h-3 w-3 flex-none text-accent-texte" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <figure className="my-8 text-center">
              <blockquote className="font-display text-[19px] italic leading-relaxed text-ink-deep md:text-[21px]">
                &quot;Ton guide est super détaillé et très complémentaire, j’arrête pas de le relire
                et découvrir des choses c’est trop bien.&quot;
              </blockquote>
              <figcaption className="mt-2 font-script text-[22px] text-accent-texte">
                Barbara ♡
              </figcaption>
            </figure>
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal>
            <p>
              <strong className="font-semibold text-ink-deep">
                Un Guide conçu avec cœur, par une humaine, pour des humains. ♡
              </strong>
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">Le but?</strong> Que tu refermes Le
              Guide d’Initiation à ton Intelligence Digestive avec autre chose qu’une jolie théorie
              en tête :{" "}
              <strong className="font-semibold text-ink-deep">
                des choses à observer, des pistes à explorer et davantage de conscience sur ce qui te
                convient (ou ne te convient pas!).
              </strong>
            </p>
          </Reveal>
        </div>

        <Reveal className="pt-12 text-center">
          <p className="font-display text-[18px] font-light italic leading-loose text-ink md:text-[20px]">
            ~ Ta propre recette magique, jusque dans ta digestion. ~
          </p>
          <div className="pt-9">
            <Cta href="#tarif">Je plonge dans ma Digestion ♡</Cta>
          </div>
        </Reveal>
      </VenteSection>

      <CitationBand tone="soft">
        «&nbsp;Ton corps n’a pas besoin de faire &quot;comme tout le monde&quot;. Il a surtout
        besoin que tu apprennes à l’écouter.&nbsp;»
      </CitationBand>

      {/* ---------------------------------------------------------------- */}
      {/* BÉNÉFICES — dans la strate des livrables de Blooming             */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="benefices" bg="accent" wide decor={<PetalField />}>
        <SectionHeader
          eyebrow="Ce que ce Guide peut t’apporter"
          title="Qu’est-ce que ce Guide peut changer pour toi, concrètement?"
        />

        {/* Le Guide au centre, comme point focal, les deux premiers bénéfices
            de part et d'autre, et le troisième, porté par le mot d'une
            lectrice, en large dessous. Sur mobile, le Guide passe en tête. */}
        {/* Les deux cartes latérales s'étirent sur la hauteur de la rangée
            (`items-stretch` puis `h-full` jusqu'à la carte) : elles font la
            même hauteur, le Guide reste centré entre elles. */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_360px_1fr] lg:items-stretch lg:gap-10">
          <Reveal className="relative mx-auto w-full max-w-[360px] lg:order-2 lg:self-center">
            <PetalHalo />
            <Image
              src="/assets/body-bloom/guide-tablette.webp"
              alt="Le Guide d’Initiation à ton Intelligence Digestive affiché sur une tablette"
              width={1254}
              height={1254}
              className="relative h-auto w-full rounded-[28px] border-[6px] border-white shadow-simu"
            />
          </Reveal>
          <div className="lg:order-1 lg:[&>div]:h-full">
            <LivrablesGrid livrables={[BENEFICES[0]]} />
          </div>
          <div className="lg:order-3 lg:[&>div]:h-full">
            <LivrablesGrid livrables={[BENEFICES[1]]} />
          </div>
        </div>
        <div className="mx-auto mt-5 max-w-[1080px] lg:mt-10">
          <LivrablesGrid livrables={[BENEFICES[2]]} />
        </div>

        <Reveal className="mt-14 text-center">
          <p className="mx-auto max-w-[720px] font-display text-[18px] font-semibold leading-relaxed text-ink-deep md:text-[19px]">
            L’idée? T’offrir de nouvelles clés pour questionner certaines habitudes, faire tes
            propres expériences et laisser progressivement plus de place à l’intelligence naturelle
            de TON corps.
          </p>
          <Cta href="#tarif" className="mt-10">
            Je veux écouter mon corps autrement
          </Cta>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TÉMOIGNAGES                                                      */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="temoignages" bg="white" wide>
        <SectionHeader filet={false} title="Leurs mots valent plus qu’un long discours. ♡" />

        <div className="mx-auto mt-14 max-w-[900px]">
          <TemoignageHero
            photo="/assets/temoignages/Yohan-body-bloom.webp"
            nom="Yohan"
            texte={`"Avec mon conjoint, ayant la même digestion HD, nous avons lu le Guide sur notre intelligence digestive et nous l'avons trouvé génial et rempli de vérités! Nous nous sommes reconnus pleinement.
Tu m'as fait ouvrir les yeux sur la digestion des informations.
Merci beaucoup pour ce précieux Guide avec un visuel magnifique. C'est toujours un plaisir de lire tes analyses. Bref on a adoré!! ❤️"

Quelques jours plus tard : "En tout cas ce week-end j'ai essayé de + me nourrir intellectuellement, et j'ai beaucoup moins mangé du coup :) Et ça c'est une véritable découverte pour moi. Je n'ai pas culpabilisé d'avoir sauter un repas et manger une tartine de fromage quand j'en avais envie!
Franchement, c'est pépite!"`}
          />

          <PetalDivider full className="my-14" />

          <TemoignageCards verbatims={VERBATIMS} />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TARIF — un Guide par Digestion                                   */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="tarif" wide decor={<PetalField dense />}>
        <SectionHeader
          eyebrow="À toi de plonger dans ton Guide"
          title="Prêt.e à explorer ton Intelligence Digestive?"
        />
        <Reveal className="mt-6 text-center">
          <p className="font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
            Choisis simplement le Guide correspondant à ta Digestion HD parmi les 6 possibilités
            ci-dessous.
          </p>
        </Reveal>

        <div className="mt-14">
          <ChoixVariantes
            inclus={INCLUS}
            apresInclus={
              <div className="flex flex-col gap-5 font-display text-[17px] leading-relaxed text-ink">
                <p className="italic">
                  Format PDF • À conserver et relire à l’infini • Créé par mes petites mains
                  d’humaine ♡
                </p>
                <p>
                  <strong className="font-semibold text-ink-deep">
                    Accès immédiat après ta commande
                  </strong>
                  <br />
                  Une fois ton achat validé, tu peux télécharger ton Guide directement et commencer à
                  explorer TON Intelligence Digestive sans attendre.
                </p>
                <p>
                  <strong className="font-semibold text-ink-deep">
                    Tu ne sais pas/plus quelle est ta Digestion HD?
                  </strong>
                  <br />
                  Clique ici pour la découvrir rapidement grâce à ton {TEST}.
                </p>
              </div>
            }
            variantes={DIGESTIONS}
          />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ                                                              */}
      {/* ---------------------------------------------------------------- */}
      <div id="faq" className="scroll-mt-36">
        <FaqSection items={FAQ} title="FAQ" eyebrow="Tu te poses des questions" />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* TEST HD GRATUIT — le calculateur du site, ciblé par la FAQ       */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="test-gratuit" bg="paper">
        <SectionHeader
          eyebrow="Ton schéma HD gratuit"
          filet={false}
          title="Tu ne connais pas encore ta Digestion HD?"
        />
        <Reveal className="mt-6 text-center">
          <p className="font-display text-[17px] font-light leading-relaxed text-ink md:text-[18px]">
            Ton schéma est le point de départ pour découvrir ta Digestion, mais aussi toutes les
            autres facettes de ton Human Design.
            <br />
            Pour l’obtenir, il te suffit de faire ton{" "}
            <strong className="font-semibold text-ink-deep">
              TEST HD GRATUIT en 2 minutes juste ici
            </strong>
            .
          </p>
          <p className="mt-3 font-display text-[17px] font-light italic leading-relaxed text-ink md:text-[18px]">
            C’est super rapide et tu as juste besoin de tes informations de naissance (date, heure
            et lieu).
            <br />
            Ta Digestion est indiquée sous ton schéma : c’est la 4ème ligne en partant du bas.
          </p>
        </Reveal>
        <div className="mt-14">
          <HDSimulatorForm />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* PASSERELLE — deux chemins pour la suite                          */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection bg="lavender" wide>
        <OffresSuivantes
          eyebrow="Et après ?"
          titre={
            <>
              Ta Digestion est une facette de ton Design.
              <br />
              <em className="italic text-ink">Et il en reste tant d’autres à explorer.</em>
            </>
          }
          paragraphes={[
            "Ce Guide te permet de découvrir la manière dont TON corps est naturellement conçu pour assimiler au mieux les nutriments et les informations, et de commencer à l’expérimenter dans ton quotidien.",
            "Et si tu as envie de poursuivre ton exploration, et d’aller plus loin dans la découverte de toi-même et de ton fonctionnement unique, tu peux continuer la plongée dans ton Human Design à travers deux chemins complémentaires.",
          ]}
          offres={[
            {
              eyebrow: "Le Guide d’Exploration de ton Environnement HD",
              logo: "/assets/logo-place.webp",
              logoAlt: "THE PLACE to be",
              texte:
                "Pour découvrir les caractéristiques des lieux dans lesquels TON corps est naturellement le plus à l’aise, et des pistes concrètes pour t’en rapprocher au mieux dans ton quotidien.",
              href: EXTERNAL.offre.thePlaceToBe,
              libelle: "Je découvre mon Environnement idéal",
            },
            {
              eyebrow: "Le Guide d’Immersion dans ton Design Unique",
              logo: "/assets/logo-inside.webp",
              logoAlt: "INSIDE",
              texte:
                "Pour découvrir les 7 clés fondamentales de ton Design et poser les premières pierres d’une connaissance de toi approfondie.",
              href: EXTERNAL.offre.insideClub,
              libelle: "Je plonge dans mon Design Unique",
            },
          ]}
        />
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* CTA FINAL                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white px-6 py-24 text-center md:px-20 md:py-32">
        <PetalField />
        <Reveal className="relative mx-auto max-w-[640px]">
          <Rosace className="mx-auto h-10 w-10 text-accent-texte/60" />
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Ton corps sait
          </p>
          <h2 className="mt-6 font-display text-[32px] font-light leading-[1.1] text-ink-deep md:text-[48px]">
            Et si tu laissais un peu plus de place à{" "}
            <em className="italic text-ink">ton intelligence corporelle et digestive?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] font-display text-[18px] font-light italic leading-snug text-ink">
            Prêt.e à découvrir ce que TON corps a à te raconter à propos de ta Digestion, et à
            l’expérimenter dans ta vraie vie?
          </p>
          <Cta href="#tarif" className="mt-10">
            Je découvre ma Digestion
          </Cta>
          <p className="mt-5 font-body text-[12px] tracking-[0.06em] text-ink-soft">
            Guide complet • 22€ • Accès immédiat
          </p>
          <p className="mx-auto mt-10 max-w-[560px] font-display text-[14px] italic leading-relaxed text-ink-soft">
            BODY Bloom est un outil d’exploration et de connaissance de soi basé sur le Human
            Design. Il ne constitue pas un avis médical ou nutritionnel et ne se substitue pas à
            l’accompagnement d’un professionnel de santé.
          </p>
        </Reveal>
      </section>
    </VenteTheme>
  );
}
