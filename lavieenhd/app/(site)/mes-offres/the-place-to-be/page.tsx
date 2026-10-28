import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { EXTERNAL } from "@/lib/links";
import { FaqSection } from "@/components/sections/FaqSection";
import { HDSimulatorForm } from "@/components/sections/HDSimulatorForm";
import { Reveal } from "@/components/sections/vente/Reveal";
import { SectionDots } from "@/components/sections/vente/SectionDots";
import { VenteTheme } from "@/components/sections/vente/VenteTheme";
import {
  FONDU_BORDS,
  Petal,
  PetalDivider,
  PetalField,
  PetalHalo,
  Rosace,
} from "@/components/sections/vente/motifs";
import {
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
  title: "THE PLACE to be · Le Guide d’Exploration de ton Environnement HD | La vie en HD",
  description:
    "Découvre ton Environnement idéal en Human Design, et apprends à reconnaître les espaces qui soutiennent naturellement ton corps, ton énergie & ton bien-être.",
};

/**
 * Couleur et forme propres à The Place to be : un vert tendre, pour les lieux
 * et la nature, et le carré, pour les espaces. La couleur ne teinte que les
 * fonds de section et les formes en filigrane ; les petits éléments restent
 * turquoise, comme sur Blooming (demande de Marion).
 */
const THEME = {
  motif: "#b5d3a8",
  accentSoft: "#e8f1e3",
  forme: "carre",
} as const;

/** Liste à puces logée dans un paragraphe, dont elle partage la police. La
 *  puce est centrée dans une boîte haute d'une ligne (`1lh`) : elle suit la
 *  première ligne du texte quel que soit l'interlignage. */
function Puces({ items }: { items: ReactNode[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="mt-1.5 flex items-start gap-2.5">
          <span className="flex h-[1lh] flex-none items-center">
            <Petal className="h-2.5 w-2.5 translate-y-[1px] text-accent" />
          </span>
          <span>{item}</span>
        </span>
      ))}
    </>
  );
}

const PROFILS = [
  {
    titre: "Tu es sensible aux lieux",
    paragraphes: [
      "Tu as déjà remarqué que certains endroits semblent naturellement t’apaiser, te recharger ou te booster...quand d’autres ont tendance à te vider, t’agiter ou simplement te donner envie d’en partir!",
      <>
        Tu sens que ton environnement influence ton bien-être et ton énergie, sans forcément
        comprendre pourquoi ni savoir précisément ce dont{" "}
        <strong className="font-semibold">TOI</strong>, tu as besoin.
      </>,
    ],
  },
  {
    titre: "Tu es curieux.se et tu veux mieux te connaître",
    paragraphes: [
      <>
        Tu as envie de découvrir une facette plus méconnue de ton Human Design et de mettre des mots
        sur certains besoins ou préférences liés aux endroits qui t’entourent,{" "}
        <em>que tu as peut-être déjà cernés intuitivement.</em>
      </>,
      <>
        Tu veux surtout aller au-delà de la théorie : observer ce qui résonne pour toi, avoir des
        pistes d’expérimentation concrètes et des clés pratico-pratiques pour pouvoir te rapprocher
        au mieux de <strong className="font-semibold">TON Environnement</strong>.
      </>,
    ],
  },
];

const DANS_LE_GUIDE = [
  "le décryptage clair de ton Environnement HD,",
  "ses grandes caractéristiques et nuances,",
  "des questions pour observer ton quotidien,",
  "des pistes concrètes et faciles à tester chez toi et au travail,",
  "des exemples pour sortir des interprétations trop littérales,",
  "des inspirations visuelles, et une planche d’ambiance couleurs & matières,",
  <>
    <strong className="font-semibold text-ink-deep">en bonus</strong> : la nuance &quot;profil
    actif&quot; ou &quot;profil passif&quot; associée à ton Environnement.
  </>,
];

/** Les trois bénéfices, dans la grille des livrables de Blooming. */
const BENEFICES: Livrable[] = [
  {
    titre: "Mettre des mots sur ce que tu ressentais déjà intuitivement",
    texte: (
      <>
        Tu comprends mieux certaines préférences ou réactions de ton corps face aux différents
        espaces que tu rencontres, et notamment pourquoi certains semblent naturellement te faire du
        bien...et d’autres beaucoup moins.
        <em className="mt-3 block">
          &quot;Franchement c’est bluffant comme dans ton contenu je retrouve plein de choses très
          justes concernant mes besoins et ma sensibilité aux paramètres dont tu parles!&quot;
        </em>
        <span className="mt-1 block font-script text-[20px] text-accent-texte">Gloria ♡</span>
      </>
    ),
    taille: "pleine",
  },
  {
    titre: "Soutenir au mieux ton énergie et maximiser tes ressources",
    texte: (
      <>
        Tu apprends à regarder autrement ton logement ou ton espace de travail, et à repérer les
        petits ajustements concrets et accessibles <em>(décoration, aménagement...)</em> permettant
        de favoriser ta concentration, ta créativité, ton énergie ou encore ta récupération.
      </>
    ),
    taille: "pleine",
  },
  {
    titre: "Pouvoir choisir en conscience les lieux que tu fréquentes",
    texte: (
      <>
        Tu identifies plus clairement les caractéristiques des environnements dans lesquels tu te
        sens naturellement apaisé.e, en sécurité et à l’aise, pour privilégier les endroits qui
        contribuent à te ressourcer, et limiter au maximum, lorsque c’est possible, ceux qui te
        conviennent moins.
        <em className="mt-3 block">
          &quot;Il va notamment me permettre d’être plus vigilante par la suite pour mieux vivre en
          harmonie avec mon environnement perso et pro!&quot;
        </em>
        <span className="mt-1 block font-script text-[20px] text-accent-texte">Eloïse ♡</span>
      </>
    ),
    taille: "pleine",
  },
];

/** Yohan tient le témoignage principal ; Astrig ouvre la page dans le hero. */
const VERBATIMS: Verbatim[] = [
  {
    nom: "Nathalie",
    photo: "/assets/temoignages/Nathalie-place-to-be.webp",
    texte:
      "Franchement bluffée de ce guide ! Il est agréable à lire, et surtout totalement juste. C'est rigolo car je m'aperçois que j'ai spontanément peint mon bureau de travail aux couleurs de mon environnement! :) Merci infiniment Marion.",
  },
  {
    nom: "Gloria",
    photo: "/assets/temoignages/Gloria-place-to-be.webp",
    texte:
      "Merci Marion pour ce Guide d'exploration! Déjà j'ai beaucoup aimé le format, la charte visuelle, c'est pétillant! Je ne m'y connaissais pas du tout en Human Design et j'ai adoré ce preview sur mon environnement. C'est un guide super révélateur et hallucinant de justesse! Ça donne vraiment envie de découvrir les autres parties du HD! Par rapport à mon profil, je m'aperçois que je suis à l'opposé dans ma vie actuelle, et que c'est un vrai facteur d'anxiété pour moi. C'est vraiment un déclic de plus pour chercher à me construire une vie plus alignée avec moi, plus slow. Merci Marion pour tous les conseils pratiques! Pour l'anecdote, j'ai trouvé ça fou que mon environnement soit \"Cuisines\" parmi les 6, car je viens de ce milieu-là! Mon père a un magasin de cuisines, et, en tant qu'italienne, la cuisine est un lieu de réunion et de partage important! 😍",
  },
  {
    nom: "Barbara",
    photo: "/assets/temoignages/Barbara-place-to-be.webp",
    texte:
      "Je viens de recevoir mon guide de l'environnement HD de la part de Marion, c'est une pépite, très détaillé pour moi c'est Rivages. La description est nette précise et avec des exemples c'est génial et en plus il y a des visuels de l'environnement, des inspirations déco et des planches d'ambiance, c'est carrément un plus. Je conseille à tous ce que fait Marion",
  },
  {
    nom: "Nicolas",
    photo: "/assets/temoignages/Nicolas-place-to-be.webp",
    texte:
      "À la première lecture de mon guide d'exploration, j'étais sceptique. Je me disais que tout le monde pouvait se reconnaître dans la description de mon Environnement. Mais, dans les jours qui ont suivis, des détails ont refait surface et m'ont interpellés. J'ai donc décidé de relire une seconde fois mon guide. Et là, je dois avouer que tout a changé. Les mots de Marion me parlaient vraiment, avec une résonance bluffante. Je me suis reconnu dans tous les aspects, même certains dont je n'avais pas conscience avant. J'ai hâte de continuer mon expérience du HD avec Marion. Mon conseil pour les sceptiques? Essayez, vous serez bluffés!",
  },
  {
    nom: "Eloïse",
    photo: "/assets/temoignages/Eloise-place-to-be.webp",
    texte:
      "Qui aurait cru qu'à partir de mes infos de naissance j'aurais pu en apprendre autant sur moi? Grâce au guide d'exploration de Marion, j'ai pu comprendre mon Environnement et identifier ce qui me correspond le mieux en terme d'aménagement et d'ambiance par exemple. L'ebook que j'ai reçu est très instructif et utile. Merci beaucoup Marion 🥰",
  },
  {
    nom: "Astrig",
    photo: "/assets/temoignages/Astrig-place-to-be.webp",
    texte:
      "Je m'attendais à sortir le globe terrestre pour poser une petite gommette sur le lieu de vie idéal pour moi! Mais ce que j'ai découvert, c'est bien plus que ça! J'ai dévoré ce guide comme si je lisais le meilleur roman du moment! Merci Marion pour la richesse de cet ebook, et pour tous ces détails et conseils pratiques : c'est pépite! Les explications sont claires et précises, et on est vraiment guidés pas à pas pour décrypter notre environnement et appliquer des changements concrets dans notre quotidien. Encore merci Marion 🌟",
  },
];

const INCLUS = [
  <strong key="guide" className="font-semibold">
    Ton Guide complet de plus de 30 pages
  </strong>,
  "Théorie vulgarisée + conseils pratiques",
  "Espaces de réflexion & d’observation",
  "Pistes d’expérimentation concrètes",
  "Inspirations visuelles + planche d’ambiance couleurs & matières",
  <>
    <strong className="font-semibold">Bonus</strong> : ta nuance &quot;profil actif&quot; ou
    &quot;profil passif&quot;
  </>,
];

const COMMANDES = EXTERNAL.commandeEnvironnement;

const ENVIRONNEMENTS: Variante[] = [
  { nom: "Grottes", sousTitre: "Le Refuge intérieur", prix: "22€", href: COMMANDES.grottes },
  { nom: "Marchés", sousTitre: "Le Carrefour vivant", prix: "22€", href: COMMANDES.marches },
  { nom: "Cuisines", sousTitre: "L’Atelier bouillonnant", prix: "22€", href: COMMANDES.cuisines },
  {
    nom: "Montagnes",
    sousTitre: "L’Observatoire paisible",
    prix: "22€",
    href: COMMANDES.montagnes,
  },
  { nom: "Vallées", sousTitre: "Le Jardin des échos", prix: "22€", href: COMMANDES.vallees },
  { nom: "Rivages", sousTitre: "L’Entre-deux Mondes", prix: "22€", href: COMMANDES.rivages },
];

/** Lien vers le test HD gratuit, embarqué plus bas sur la page. */
const lienTest = (libelle: string) => (
  <a href="#test-gratuit" className="font-semibold text-ink-deep underline underline-offset-2">
    {libelle}
  </a>
);

const FAQ = [
  {
    q: "Est-ce que ce Guide est fait pour moi, même si je ne connais pas le Human Design?",
    a: "Le Guide d’Exploration est conçu de manière à le rendre accessible à tout le monde, même si le Human Design est une découverte pour toi.\nTout est clairement expliqué, vulgarisé et décrypté.",
  },
  {
    q: "Comment connaître mon Environnement HD?",
    a: (
      <>
        Pour découvrir ton Environnement Human Design, je t’invite à faire ton{" "}
        {lienTest("TEST HD GRATUIT")}. :)
        <br />
        <em>
          C’est très rapide et tu as juste besoin de tes informations de naissance (date, heure et
          lieu).
        </em>
        <br />
        Ce TEST va générer ton schéma HD, sous lequel tu retrouveras ton{" "}
        <strong className="font-semibold">Environnement sur la dernière ligne</strong>.
      </>
    ),
  },
  {
    q: "Est-ce que le Guide est personnalisé?",
    a: (
      <>
        Le Guide n’est pas personnalisé au sens où nous sommes plusieurs à partager le même
        Environnement HD.
        <br />
        Cependant, le Guide que tu choisis est entièrement consacré à TON Environnement spécifique
        (1 parmi les 6). Au moment de ta commande, tu sélectionnes donc directement le Guide
        correspondant à ton Environnement.
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
    q: "Il m’est difficile de modifier mon espace de travail. Est-ce que le Guide me sera quand même utile?",
    a: (
      <>
        Tu vas découvrir dans ton Guide des conseils pratiques faciles à mettre en place, dans ta vie
        personnelle ou professionnelle. Même si tu es salarié.e sans possibilité d’adapter ton
        espace de travail, le Guide peut te donner des clés simples à appliquer.
        <br />
        Par exemple, il peut être question d’utiliser ta pause déjeuner pour te rapprocher de ton
        Environnement, afin de te ressourcer au maximum sur ce temps.
        <br />
        Cela peut aussi être des idées d’éléments de décoration minimes mais qui vont avoir une
        influence positive inconsciente sur ton bien-être.
        <br />
        <em>De petites actions sont toujours possibles.</em>
      </>
    ),
  },
  {
    q: "Quand et sous quel format vais-je recevoir mon Guide?",
    a: (
      <>
        Ton Guide d’Exploration est un ebook au format PDF, disponible en téléchargement{" "}
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
    q: "Puis-je commander ce Guide pour mon enfant ou l’offrir à quelqu’un?",
    a: (
      <>
        Bien sûr! Pour ton enfant, le Guide peut notamment te donner des billes précieuses pour
        adapter son univers (sa chambre par exemple), et mieux identifier les endroits susceptibles
        de l’apaiser ou les configurations plus appropriées pour lui.
        <br />
        <em>
          C’est un vrai cadeau pour nos enfants que de décoder ce genre de clé d’alignement HD dès
          leur plus jeune âge.
        </em>
        <br />
        Et c’est aussi une jolie idée de cadeau pour faire découvrir le Human Design autour de toi.
        <br />
        Il te suffit de connaître l’Environnement HD de la personne à qui tu souhaites offrir le
        Guide, afin de choisir le &quot;bon&quot; Guide au moment de l’achat.
        <br />
        <em>
          (Si tu ne le connais pas, tu peux faire son {lienTest("TEST HD")} à partir de ses
          informations de naissance (date, heure et lieu).)
        </em>
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
        <strong className="font-semibold">BODY Bloom</strong>, pour découvrir ton Intelligence
        Digestive HD et mieux comprendre la manière dont TON corps assimile au mieux les nutriments
        et les informations.
        <br />
        <a
          href={EXTERNAL.offre.insideClub}
          className="font-semibold text-ink-deep underline underline-offset-2"
        >
          INSIDE
        </a>
        , pour plonger plus largement dans ton Design Unique et découvrir les 7 clés fondamentales
        de ton fonctionnement.
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
  { id: "tarif", label: "Les 6 Environnements" },
  { id: "faq", label: "FAQ" },
  { id: "test-gratuit", label: "Découvre ton Environnement HD" },
];

export default function ThePlaceToBePage() {
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
          className="pointer-events-none absolute -bottom-40 right-[4%] h-[480px] w-[480px] rounded-full bg-motif/20 blur-3xl"
        />
        <PetalField />

        <div className="relative mx-auto grid max-w-(--container-content) items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="text-center">
            <Reveal>
              <Image
                src="/assets/logo-place.webp"
                alt="THE PLACE to be · Le Guide d’Exploration de ton Environnement HD"
                width={500}
                height={500}
                priority
                className="mx-auto h-auto w-[210px] md:w-[240px]"
              />
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mx-auto mt-8 max-w-[560px] font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[40px]">
                Et si te sentir à ta place commençait aussi{" "}
                <em className="italic text-ink">par l’endroit où tu te trouves?</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-[520px] font-display text-[20px] font-light italic leading-snug text-ink-deep md:text-[23px]">
                ~ Découvre ton Environnement idéal en Human Design, et apprends à reconnaître les
                espaces qui soutiennent naturellement ton corps, ton énergie & ton bien-être. ~
              </p>
              <Cta href="#tarif" className="mt-9">
                Je découvre Le Guide
              </Cta>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative pb-20 sm:pb-28 lg:pt-14 lg:pb-36">
            {/* Pied de carte allongé : le mockup a un fond plein, il ne doit
                mordre que sur ce blanc, jamais sur le verbatim. */}
            <figure className="relative z-10 mx-auto max-w-[480px] rounded-[28px] border border-line bg-white/95 p-6 pb-12 shadow-simu backdrop-blur-sm sm:pb-14 md:p-8 md:pb-16 lg:ml-0">
              <PetalHalo />
              {/* Le Guide posé à cheval sur l’angle inférieur droit de la
                  carte, comme sur BODY Bloom. */}
              <Image
                src="/assets/place-to-be/guide-tablette.webp"
                alt="Le Guide d’Exploration de ton Environnement HD Grottes affiché sur une tablette"
                width={1448}
                height={1086}
                priority
                className="pointer-events-none absolute -right-4 -bottom-[64px] z-20 h-auto w-[130px] rotate-3 rounded-[14px] border-4 border-white shadow-card sm:-right-8 sm:-bottom-[90px] sm:w-[180px] lg:-right-[80px] lg:-bottom-[122px] lg:w-[240px]"
              />

              <figcaption>
                <span className="flex items-center gap-3.5">
                  <Image
                    src="/assets/temoignages/Astrig-place-to-be.webp"
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="h-12 w-12 flex-none rounded-full object-cover"
                  />
                  <span className="font-script text-[24px] leading-none text-accent-texte">
                    Astrig
                  </span>
                </span>
              </figcaption>

              <blockquote className="mt-5 flex flex-col gap-3.5 font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
                <p>
                  &quot;Je m’attendais à sortir le globe terrestre pour poser une petite gommette sur
                  le lieu de vie idéal pour moi! Mais ce que j’ai découvert, c’est bien plus que ça!
                </p>
                <p>
                  J’ai dévoré ce guide comme si je lisais le meilleur roman du moment! Merci Marion
                  pour la richesse de cet ebook, et pour tous ces détails et conseils pratiques :
                  c’est pépite!&quot;
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
              Tu veux comprendre ce dont <em className="italic text-ink">TON corps</em> a besoin
              pour se sentir vraiment bien dans les espaces qui t’entourent.
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
              src="/assets/place-to-be/marion-foret.webp"
              alt="Marion Chartier"
              width={900}
              height={1213}
              className="aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card"
            />
            <Image
              src="/assets/place-to-be/marion-terrasse.webp"
              alt=""
              aria-hidden
              width={900}
              height={1273}
              className="hidden aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card lg:block"
            />
          </Reveal>

          <div>
            <ProfilsNotes profils={PROFILS} />

            <Reveal className="mt-12">
              <p className="max-w-[640px] font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
                Que tu ressentes déjà clairement l’impact des lieux sur toi, ou que tu sois
                simplement curieux.se d’explorer cette{" "}
                <strong className="font-semibold text-ink-deep">dimension de ton fonctionnement</strong>
                , ce Guide t’invite à regarder autrement les espaces qui t’entourent.
              </p>
              <p className="mt-7 max-w-[640px] font-display text-[20px] font-semibold leading-relaxed text-ink-deep">
                Et il n’est pas question ici de trouver LE lieu parfait ou de tout révolutionner chez
                toi ou au travail!
              </p>
              <p className="mt-3 max-w-[640px] font-display text-[18px] font-light italic leading-relaxed text-ink md:text-[19px]">
                Juste mettre en lumière ce qui fait du bien à{" "}
                <strong className="font-semibold not-italic text-ink-deep">TON corps</strong>, dans{" "}
                <strong className="font-semibold not-italic text-ink-deep">TA vraie vie</strong>.
              </p>
              <Cta href="#tarif" className="mt-10">
                Je découvre mon Environnement idéal
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
            Découvre ton Environnement HD,
            <br />
            <em className="italic text-ink">et apprends à t’en rapprocher au mieux dans ton quotidien.</em>
          </h2>
        </Reveal>

        <div className="mt-10 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
          <Reveal>
            <h3 className="font-display text-[22px] font-semibold text-ink-deep">
              Ton Environnement HD, concrètement, c’est quoi?
            </h3>
            <p className="mt-4">
              En Human Design, l’Environnement est directement lié au bon fonctionnement de tes
              cellules, et donc au bien-être de ton corps.{" "}
              <em>(C’est ce qu’on appelle l’intelligence cellulaire.)</em>
              <br />
              Il correspond aux types de lieux dans lesquels ton corps est naturellement le plus à
              l’aise énergétiquement.
            </p>
            <p className="mt-6 text-center italic text-ink-deep">
              C’est une clé d’alignement puissante, bien qu’assez méconnue.
            </p>
            <p className="mt-6">
              <strong className="font-semibold text-ink-deep">
                Grottes, Marchés, Cuisines, Montagnes, Vallées ou Rivages
              </strong>{" "}
              : nous avons tous un Environnement défini dans notre Design, avec ses propres
              caractéristiques, besoins et nuances :{" "}
              <em>
                sensibilité à la lumière, au bruit, au mouvement, à la proximité avec les autres,
                possibilité de s’isoler, besoin d’avoir une vue dégagée,...
              </em>
            </p>
            <p className="mt-4">
              Et on ne parle pas ici d’une histoire de goûts personnels ou de sensibilité, mais bien
              de{" "}
              <strong className="font-semibold text-ink-deep">
                données énergétiques profondes, inscrites dans ton ADN.
              </strong>
            </p>
            <p className="mt-4">
              Peut-être que tu as déjà remarqué que, selon les endroits, tu n’as pas la même facilité
              à :
              <Puces
                items={[
                  "te concentrer",
                  "te poser vraiment",
                  "avoir des idées",
                  "travailler sans te disperser",
                  "dormir sereinement",
                  "échanger avec les autres",
                  "te sentir calme et en sécurité intérieurement",
                ]}
              />
            </p>
            <p className="mt-4">
              Ton environnement n’explique évidemment pas tout à lui seul. Mais il peut être une
              pièce du puzzle intéressante à observer, notamment pour mettre de la conscience sur les
              lieux qui t’apaisent, te rechargent ou soutiennent davantage tes ressources.
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
                  Le Guide d’Exploration de ton Environnement HD est un Guide complet de plus de 30
                  pages, que j’ai voulu clair, accessible à tous et pragmatique.
                </strong>{" "}
                Pas de jargon incompréhensible, et pas besoin d’être expert.e en Human Design : je
                traduis la théorie pour que tu puisses l’observer, l’expérimenter et surtout
                l’adapter à <strong className="font-semibold text-ink-deep">TA réalité.</strong>
              </p>
            </div>

            {/* Les Guides sont montrés imprimés : la légende rappelle que le
                livrable est un PDF, pour que l'image ne promette pas un livre. */}
            <figure className="mx-auto w-[240px] md:w-full">
              <Image
                src="/assets/place-to-be/guides-papier.webp"
                alt="Les 6 Guides d’Exploration de ton Environnement HD, imprimés"
                width={1448}
                height={1086}
                className="h-auto w-full rounded-[14px] shadow-card"
              />
              <figcaption className="mt-3 text-center font-display text-[15px] italic leading-snug text-ink-soft">
                Un Guide par Environnement, livré en PDF, à imprimer si tu le souhaites
              </figcaption>
            </figure>
          </Reveal>

          <Reveal>
            <p className="mt-6">
              Connaître ton Environnement oui. Mais avoir les clés pour savoir quoi en faire dans la
              vraie vie, c’est quand même beaucoup mieux!
            </p>
            <p className="mt-4">
              Et il ne s’agit pas de déménager, de refaire toute ta déco ou de changer de job pour
              respecter ton Design!
              <br />
              L’idée avec ce Guide, c’est de t’aider à repérer les petits ajustements qui ont du sens
              pour <strong className="font-semibold text-ink-deep">TOI</strong>, pour te rapprocher
              au mieux de ces conditions idéales dans ton quotidien.
            </p>

            <p className="mt-6">À l’intérieur de ton Guide, tu vas retrouver :</p>

            {/* L'encadré des inclusions de Blooming. Les emojis du texte
                d'origine deviennent le motif de la page. */}
            <ul className="mt-6 flex flex-col gap-4 rounded-[20px] border border-line bg-white/70 px-6 py-6 text-[16px] md:px-8 md:py-7 md:text-[17px]">
              {DANS_LE_GUIDE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed">
                  <Petal className="mt-1.5 h-3 w-3 flex-none text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              Guide d’Exploration de ton Environnement HD avec autre chose qu’une jolie théorie en
              tête :{" "}
              <strong className="font-semibold text-ink-deep">
                des choses à observer, des idées à essayer et davantage de conscience sur ce qui te
                convient (ou ne te convient pas!).
              </strong>
            </p>
          </Reveal>
        </div>

        <Reveal className="pt-12 text-center">
          <p className="font-display text-[18px] font-light italic leading-loose text-ink md:text-[20px]">
            ~ Ta propre recette magique, jusque dans tes espaces. ~
          </p>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* BÉNÉFICES — dans la strate des livrables de Blooming             */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="benefices" bg="accent" wide decor={<PetalField />}>
        <SectionHeader
          eyebrow="Ce que ce Guide peut t’apporter"
          title="Qu’est-ce que ce Guide peut changer pour toi, concrètement?"
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* Deux visuels empilés, comme sur Blooming et INSIDE : la colonne de
              cartes est bien plus haute qu'un seul. Le second est réservé aux
              deux colonnes, empilé il rallongerait la page avant les cartes.
              Ce sont les mockups du hero et de l'offre : Marion n'en a fourni
              que deux, et les anciens montraient une couverture périmée. */}
          <div className="mx-auto flex w-full max-w-[520px] flex-col gap-6">
            <Reveal>
              <Image
                src="/assets/place-to-be/guide-tablette.webp"
                alt="Le Guide d’Exploration de ton Environnement HD Grottes affiché sur une tablette"
                width={1448}
                height={1086}
                className="h-auto w-full"
                style={FONDU_BORDS}
              />
            </Reveal>
            <Reveal delay={80} className="hidden lg:block">
              <Image
                src="/assets/place-to-be/guides-papier.webp"
                alt="Les 6 Guides d’Exploration de ton Environnement HD, imprimés"
                width={1448}
                height={1086}
                className="h-auto w-full"
                style={FONDU_BORDS}
              />
            </Reveal>
          </div>

          <LivrablesGrid livrables={BENEFICES} />
        </div>

        <Reveal className="mt-14 text-center">
          <p className="mx-auto max-w-[720px] font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
            L’idée de ce Guide est que tu puisses te rapprocher de{" "}
            <strong className="font-semibold text-ink-deep">
              TES conditions environnementales idéales
            </strong>{" "}
            autant que possible dans ton quotidien, sans chercher à tout transformer.
          </p>
          <Cta href="#tarif" className="mt-10">
            Je veux explorer mon Environnement
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
            photo="/assets/temoignages/Yohan-place-to-be.webp"
            nom="Yohan"
            texte={`Curieux de la partie environnement, un registre svt inexploité, j’ai été agréablement surpris de voir que qq1 en proposé un Guide. En le recevant, je me suis dit ah bon il y a autant de choses à dire ??
Je l’ai lu 3 fois, j’ai été bluffé par plusieurs détails bien précis qui me correspondent à 100%(et même certains tatoués !). Des détails aussi qui expliquent certaines choses que je faisais déjà enfant.
Ce Guide(oui il mérite une majuscule !) est un véritable plaisir à lire, à (re)découvrir, et me permettra d’axer, dans la mesure du possible, mon futur déménagement qui arrivera dans quelques mois.
En outre la qualité des informations, on sent que c’est fait avec le cœur et dans le plaisir de transmettre.
Merci Marion pour cette belle découverte !`}
          />

          <PetalDivider full className="my-14" />

          <TemoignageCards verbatims={VERBATIMS} />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TARIF — un Guide par Environnement                               */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="tarif" wide decor={<PetalField dense />}>
        <SectionHeader
          eyebrow="À toi de plonger dans ton Guide"
          title="Prêt.e à découvrir ton Environnement HD?"
        />
        <Reveal className="mt-6 text-center">
          <p className="font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
            Commande dès maintenant ton Guide d’Exploration, en choisissant TON Environnement parmi
            les 6 ci-dessous.
          </p>
        </Reveal>

        <div className="mt-14">
          <ChoixVariantes
            inclus={[
              ...INCLUS,
              <>
                <strong className="font-semibold">Accès immédiat après ta commande</strong>
                <br />
                Une fois ton achat validé, tu peux télécharger ton Guide directement et commencer à
                explorer TON Environnement sans attendre.
              </>,
              <em key="format" className="italic">
                Format PDF • Créé par mes petites mains d’humaine • À conserver et relire à
                l’infini. ♡
              </em>,
            ]}
            apresInclus={
              // Encadré pour distinguer l'aide au choix de la liste du dessus.
              <div className="rounded-2xl border border-line bg-accent-soft/70 px-6 py-5 font-display text-[17px] leading-relaxed text-ink md:px-8">
                <p>
                  <strong className="font-semibold text-ink-deep">
                    Tu ne sais pas/plus quel est ton Environnement HD?
                  </strong>
                  <br />
                  Clique ici pour le découvrir rapidement grâce à ton{" "}
                  {lienTest("TEST HD GRATUIT")}.
                </p>
              </div>
            }
            variantes={ENVIRONNEMENTS}
            libelleCta="Je veux mon Guide complet"
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
        <SectionHeader filet={false} title="Tu ne connais pas encore ton Environnement HD?" />
        <Reveal className="mt-6 text-center">
          <p className="font-display text-[17px] font-light leading-relaxed text-ink md:text-[18px]">
            Ton schéma est le point de départ pour découvrir ton Environnement, mais aussi toutes
            les autres facettes de ton Human Design.
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
            Ton Environnement est indiqué tout en bas : c’est la dernière ligne des informations
            situées sous ton schéma.
          </p>
        </Reveal>
        <div className="mt-14">
          <HDSimulatorForm titre={false} />
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
              Ton Environnement est une facette de ton Design.
              <br />
              <em className="italic text-ink">Et il en reste tant d’autres à explorer.</em>
            </>
          }
          paragraphes={[
            "Ce Guide te permet de découvrir les conditions environnementales dans lesquelles TON corps se sent naturellement le mieux, et de commencer à les expérimenter dans ton quotidien.",
            "Et si tu as envie de poursuivre ton exploration, et d’aller plus loin dans la découverte de toi-même et de ton fonctionnement unique, tu peux continuer la plongée dans ton Human Design à travers deux chemins complémentaires.",
          ]}
          offres={[
            {
              eyebrow: "Le Guide d’Initiation à ton Intelligence Digestive",
              logo: "/assets/logo-bodybloom.webp",
              logoAlt: "BODY Bloom",
              texte:
                "Pour découvrir comment TON corps est naturellement conçu pour assimiler au mieux les nutriments et les informations.",
              href: EXTERNAL.offre.bodyBloom,
              libelle: "Je découvre mon Intelligence Digestive",
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
          <Rosace className="mx-auto h-10 w-10 text-accent" />
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Ta place commence ici
          </p>
          <h2 className="mt-6 font-display text-[32px] font-light leading-[1.1] text-ink-deep md:text-[52px]">
            Et si tu optais pour des espaces où{" "}
            <em className="italic text-ink">TON corps se sent enfin chez lui?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] font-display text-[18px] font-light italic leading-snug text-ink">
            Prêt.e à découvrir ce que TON Environnement a à te raconter, et comment il peut devenir
            un vrai soutien au quotidien?
          </p>
          <Cta href="#tarif" className="mt-10">
            Je découvre mon Environnement
          </Cta>
          <p className="mt-5 font-body text-[12px] tracking-[0.06em] text-ink-soft">
            Guide complet • 22€ • Accès immédiat
          </p>
        </Reveal>
      </section>
    </VenteTheme>
  );
}
