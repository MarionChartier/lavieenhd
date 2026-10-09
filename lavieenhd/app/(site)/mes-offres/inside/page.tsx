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
import { Cta, SectionHeader, VenteSection } from "@/components/sections/vente/primitives";
import {
  type Livrable,
  type Verbatim,
  LivrablesGrid,
  OffresSuivantes,
  PricingCard,
  ProcessusSteps,
  ProfilsNotes,
  TemoignageCards,
  TemoignageHero,
} from "@/components/sections/vente/blocks";

export const metadata: Metadata = {
  title: "INSIDE · Le Guide d’Immersion dans ton Design Unique | La vie en HD",
  description:
    "Un Guide personnalisé + 1h de coaching individuel pour décrypter les bases de TON Human Design, et poser les premières pierres d’une vraie connaissance de toi.",
};

/** Bon de commande systeme.io — destination de tous les CTA d’achat. */
const COMMANDE = EXTERNAL.commande.insideClub;

/**
 * Couleur et forme propres à INSIDE. Provisoires tant que Marion n'a pas
 * arrêté la répartition des couleurs entre les pages : un mauve clair (même
 * contraste que le turquoise de Blooming, 3.5:1 en prix sur le bandeau de la
 * carte de tarif) et le cercle du logo.
 */
const THEME = { accent: "#cdb8ea", accentSoft: "#ece4f5", forme: "cercle" } as const;

/** Liste à puces logée dans un paragraphe de note, dont elle partage la
 *  police. La puce est centrée dans une boîte haute d'une ligne (`1lh`) :
 *  elle suit la première ligne du texte quel que soit l'interlignage. */
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
    titre: "Tu te sens parfois éloigné.e de toi-même",
    paragraphes: [
      <>
        Tu as peut-être passé beaucoup de temps à t’adapter, à suivre ce que tu pensais devoir faire
        ou être, au point de ne plus toujours savoir ce qui te correspond vraiment, et de te sentir
        parfois en décalage,{" "}
        <em>
          tiraillé.e entre ce que tu ressens, ce que ton mental te raconte et ce que tu crois devoir
          faire.
        </em>
      </>,
      <>
        Cela peut se manifester par :
        <Puces
          items={[
            <em key="a">des moments où tu t’épuises, tu forces, tu luttes contre toi-même,</em>,
            <em key="b">des difficultés à faire des choix, beaucoup de doutes,</em>,
            <em key="c">
              une sensation de flou, un sentiment de ne pas vraiment te connaître, et d’être
              étouffé.e par les conditionnements extérieurs.
            </em>,
          ]}
        />
      </>,
      <>
        Aujourd’hui, tu aimerais renouer avec ton vrai toi ;{" "}
        <em>mieux comprendre tes besoins, ton énergie et tes mécanismes naturels</em>, pour revenir
        progressivement à une façon de fonctionner qui te ressemble davantage.
      </>,
    ],
  },
  {
    titre: "Tu te poses beaucoup de questions sur ton propre fonctionnement",
    paragraphes: [
      "Pourquoi certaines choses te donnent-elles de l’énergie quand d’autres t’épuisent? Pourquoi certaines décisions semblent évidentes et d’autres beaucoup moins? Pourquoi certaines opportunités arrivent facilement... et pourquoi parfois ça coince complètement? Pourquoi réagis-tu de cette manière dans certaines situations?",
      <em key="alignement">
        Peut-être que tu cherches ce fameux alignement dont tout le monde parle... sans vraiment
        savoir par où commencer.
      </em>,
      "Aujourd’hui, tu aimerais mettre des mots sur ce que tu observes ou ressens déjà de manière diffuse, mieux comprendre ce qui se joue derrière, et pouvoir enfin donner du sens à certains de tes fonctionnements.",
    ],
  },
  {
    titre: "Tu es curieux.se de découvrir ton Human Design",
    paragraphes: [
      "Tu as peut-être déjà entendu parler du Human Design, et peut-être même que tu as déjà généré ton schéma. Mais tu t’es retrouvé.e face à une page remplie de hiéroglyphes et une avalanche de termes flous : Type, Stratégie, Autorité intérieure…",
      <em key="dit">
        Et tu t’es probablement dit : “Ok, mais concrètement ça veut dire quoi à propos de moi tout
        ça?!”
      </em>,
      <>
        Ce que tu souhaites aujourd’hui, c’est décrypter ton schéma d’une manière claire et
        accessible, et surtout comprendre comment ramener tout ça dans la réalité de ton quotidien,{" "}
        <em>pour que ton Human Design devienne autre chose qu’un schéma abstrait sur une page.</em>
      </>,
    ],
  },
];

const CLES = [
  { titre: "Ton Type", parmi: "parmi les 5 existants", texte: "Ton fonctionnement énergétique global" },
  {
    titre: "Ton Autorité intérieure",
    parmi: "parmi les 8 existantes",
    texte: "Ton mécanisme naturel de prise de décision",
  },
  { titre: "Ta Signature", parmi: "parmi les 4 existantes", texte: "Ton signal personnel d’alignement" },
  { titre: "Ton Non-Soi", parmi: "parmi les 4 existants", texte: "Ton signal personnel de désalignement" },
  {
    titre: "Ta Stratégie",
    parmi: "parmi les 4 existantes",
    texte: "Ta façon naturelle d’interagir avec le monde",
  },
  {
    titre: "Ta Définition",
    parmi: "parmi les 4 existantes",
    texte: "La manière dont ton énergie circule à l’intérieur de toi",
  },
  {
    titre: "Ton Profil",
    parmi: "parmi les 12 existants",
    texte: "Les grandes dynamiques de ta personnalité",
  },
];

/** Les cinq bénéfices, dans la grille des livrables de Blooming. */
const BENEFICES: Livrable[] = [
  {
    titre: "Mieux comprendre ton énergie et respecter davantage ton propre rythme",
    texte: (
      <>
        Tu apprends à reconnaître tes besoins énergétiques naturels,{" "}
        <em>ce qui te nourrit ou t’épuise</em>, et à moins lutter contre ta propre façon de
        fonctionner.
      </>
    ),
  },
  {
    titre: "Faire des choix plus justes et alignés pour toi",
    texte: (
      <>
        Tu découvres ton propre processus de décision et apprends progressivement à lui faire
        davantage confiance,{" "}
        <em>plutôt que de laisser ton mental chercher sans cesse la &quot;bonne&quot; réponse.</em>
      </>
    ),
  },
  {
    titre: "Mettre des mots sur qui tu es et ta manière naturelle de fonctionner",
    texte: (
      <>
        Tu comprends mieux certains de tes mécanismes, besoins ou comportements, et tu t’autorises
        petit à petit à être simplement TOI,{" "}
        <em>
          en laissant tomber les masques et en te détachant de ce que tu as &quot;appris&quot; à
          être.
        </em>
        {/* Le verbatim d'Astrig appuie ce bénéfice précis : il reste dans sa
            carte, en italique détaché, comme les commentaires des livrables
            de Blooming. */}
        <em className="mt-3 block">
          &quot;Et ça m’a surtout permis de mettre des mots sur des ressentis profondément ancrés
          depuis des années, et que je n’arrivais pas à verbaliser jusqu’à présent!&quot;
        </em>
        <span className="mt-1 block font-script text-[20px] text-accent">Astrig ♡</span>
      </>
    ),
    taille: "pleine",
  },
  {
    titre: "Comprendre comment les bonnes opportunités peuvent entrer naturellement dans ta vie",
    texte: (
      <>
        Tu découvres la manière dont ton énergie est faite pour attirer à toi,{" "}
        <em>plutôt que de chercher à tout provoquer ou contrôler.</em>
      </>
    ),
  },
  {
    titre: "Savoir reconnaître quand tu es en phase avec toi-même...et quand tu ne l’es pas",
    texte: (
      <>
        Tu apprends à identifier tes propres signaux d’alignement et de désalignement,{" "}
        <em>
          pour mieux repérer quand tu es dans ton fonctionnement naturel et quand tu t’en éloignes.
        </em>
      </>
    ),
  },
];

const ETAPES = [
  {
    titre: "Tu me partages tes informations de naissance",
    texte: (
      <>
        Une fois ta commande passée, tu me communiques ta date, ton heure et ton lieu de naissance,{" "}
        <em>via un formulaire reçu par mail</em>, afin que je puisse générer ton schéma de Human
        Design.
        <em className="mt-2 block">Ton Guide est conçu à partir de TES données uniques.</em>
      </>
    ),
  },
  {
    titre: "Je me plonge dans la création de ton Guide d’Immersion",
    texte: (
      <>
        À partir de ton schéma HD, je mets mon cœur à l’ouvrage pour concevoir ton Guide
        personnalisé, et te l’envoyer par mail dans un délai de 10 jours minimum.
        <em className="mt-2 block">
          Chaque Guide est réalisé par mes soins, avec mes petites mains d’humaine. ♡
        </em>
      </>
    ),
  },
  {
    titre: "Tu découvres ton Design à ton rythme",
    texte: (
      <>
        Tu reçois ton{" "}
        <strong className="font-semibold text-ink-deep">
          Guide d’Immersion personnalisé d’environ 40 pages, au format PDF
        </strong>{" "}
        et tu peux alors prendre le temps de le découvrir, d’observer ce qui résonne, de répondre aux
        questions proposées et de noter tout ce que tu souhaites approfondir avec moi.
        <span className="mt-2 block">
          Dans le mail contenant ton Guide, tu retrouves également le lien pour réserver ta séance de
          coaching.{" "}
          <em>
            Je te recommande de laisser au moins 7 jours entre la réception de ton Guide et notre
            rendez-vous.
          </em>
        </span>
        <em className="mt-2 block">
          Pas besoin d’avoir tout compris, intégré ou expérimenté avant notre séance.
        </em>
      </>
    ),
  },
  {
    titre: "On se retrouve pour 1h de coaching individuel",
    texte: (
      <>
        <strong className="font-semibold text-ink-deep">
          Place à notre séance en visio : 1h entièrement consacrée à TOI et à ton Design.
        </strong>{" "}
        Tu viens avec tes observations, tes prises de conscience, tes questionnements... et tout ce
        qui aura émergé pendant la découverte de ton Guide.
        <em className="mt-2 block">
          Et lorsque c’est pertinent, et si tu le souhaites, je peux aussi t’emmener un peu plus
          loin dans ton schéma, en explorant notamment certains de tes Centres énergétiques.
        </em>
      </>
    ),
  },
  {
    titre: "Tu repars avec le replay de notre séance",
    texte:
      "Dans les jours qui suivent notre rendez-vous, tu reçois le replay de notre échange pour pouvoir y revenir tranquillement quand tu le souhaites.",
  },
];

/** Camille ouvre la page dans le hero ; Louise-Armance tient le témoignage principal. */
const VERBATIMS: Verbatim[] = [
  {
    nom: "Justine",
    photo: "/assets/temoignages/Justine.png",
    texte: `Déjà visuellement j'adore, ça donne vraiment envie de lire! Le guide est super bien structuré, organisé, clair, beau et lumineux! ✨
Et c'est super parce que tes explications sont concrètes et illustrées par des contextes "vraie vie", ça rend les choses hyper compréhensibles!
On sent qu'il y a eu un gros travail de vulgarisation pour clarifier des termes qui peuvent sembler abstraits, et rendre ça accessible à tout le monde, c'est trop chouette! (Au moins on ne se dit pas qu'on ne comprend rien ou que c'est perché!)
Et tout ce que tu décris c'est exactement moi, truc de dingue! Je m'y retrouve énormément, ça reflète vraiment qui je suis au fond de moi je trouve! Et ça m'a permis de me dire "aaaaah c'est pour ça que je suis comme ça, que je fais ça... etc"
Et en bonus, les zones de questions au fil du guide aident aussi à comprendre tout ce que tu expliques en amont. Ça amène vraiment à réfléchir, à conscientiser les choses et à les ancrer.
C'est ultra intéressant, je vais le relire plusieurs fois parce qu'il y a beaucoup de choses à assimiler.
Et le coaching avec toi est un vrai complément pépite!
Franchement merci beaucoup Marion 🥰`,
  },
  {
    nom: "Barbara",
    photo: "/assets/temoignages/Barbara-inside.webp",
    texte:
      "J'ai travaillé mon guide pendant les vacances au calme, quel outil précieux et quel beau travail tu as fais. Je peux relier pas mal d'aspects à mon expérience tout au long de ma vie et c'est tellement éclairant de voir des mots sur ses ressentis. Et de voir aussi les zones à explorer c'est passionnant de se recentrer sur soi et de vivre cette aventure 💖",
  },
  {
    nom: "Astrig",
    photo: "/assets/temoignages/Astrig2.png",
    texte:
      "J'ai découvert le Human Design grâce à Marion. Je ne connaissais pas du tout, et au fur et à mesure que je lisais mon guide d'immersion j'étais bluffée et scotchée par la justesse! La lecture est très fluide, c'est vraiment agréable, et j'ai adoré les exemples pour illustrer. Marion donne beaucoup d'informations très claires et précises, et le guide est hyper structuré, construit, détaillé. Et dans le coaching associé, elle est très pédagogue, très à l'écoute et impressionnante dans son expertise (tout en se mettant parfaitement à la place d'une novice comme moi!) 🙏💗 Et ça m'a surtout permis de mettre des mots sur des ressentis profondément ancrés depuis des années, et que je n'arrivais pas à verbaliser jusqu'à présent! Donc ça a été un vrai soulagement pour moi, comme-ci on m'avait ôté un poids considérable! C'est tellement fou de chez fou que j'ai du mal à y croire, je suis vraiment épatée de tout ça. Et en plus ça vient aussi confirmer mes choix, comme-ci ça venait valider et ancrer mes intuitions! Je recommande Marion les yeux fermés, merci pour cette belle découverte et le temps consacré à mes questions.🥰",
  },
  {
    nom: "Sylvie",
    photo: "/assets/temoignages/Anonyme.png",
    texte:
      "Marion m'a permis de mettre des mots clairs sur ce que je ressentais depuis longtemps : mon mode de fonctionnement, mes élans, mes besoins profonds. Grâce à sa passion communicative et à la richesse de ses connaissances, j'ai enfin pu me reconnecter à ma vraie nature. Je croyais que le Human Design était réservé aux initiés, mais en réalité, c'est un outil à la fois accessible et incroyablement concret. Beaucoup de choses ont fait sens pour moi. Il ne reste plus qu'à l'explorer au quotidien, et laisser les déclics s'inviter dans ma vie.",
  },
  {
    nom: "Fabienne",
    photo: "/assets/temoignages/Fabienne.png",
    texte:
      "Oh la la 🤩🤩🤩!! Je voulais te remercier 🙏 pour ton travail qui est remarquable, c'est une vraie pépite!💕 Franchement, chapeau, je me reconnais dans tout ce que tu décris, tout me fait écho! Ça m'a provoqué beaucoup de joie de te lire, et ça a mis du sens sur certaines choses, en enlevant la peur que j'y associais! Le HD est un outil remarquable, merci encore, tu déchires! 🔥",
  },
  {
    nom: "Ludivine",
    photo: "/assets/temoignages/Ludivine.png",
    texte:
      "Coucou Marion, Déjà merci !!! Beaucoup !!! J'adore comment c'est rédigé, la façon dont tu écris et explique les choses, c'est très clair. J'y ai retrouvé des choses tellement vraies, tellement moi ; un peu l'histoire de ma vie! 😄 Et j'ai aussi appris plein de choses nouvelles complémentaires à ce que je n'avais jamais lu encore. Wahou je trouve le HD vraiment magique, c'est ma plus belle découverte de l'année pour le moment! ^^ Merci Marion c'est génial !! 😍",
  },
  {
    nom: "Manon",
    photo: "/assets/temoignages/Anonyme.png",
    texte:
      "J'ai adoré notre visio, j'aurais pu échanger pendant des heures, c'était vraiment trop chouette! J'ai pris conscience de pas mal de choses, notamment que j'étais une « antenne », que ma parole était utile, et que je pouvais vraiment me faire confiance. C'était très riche en infos, donc ça me revient petit à petit. J'aimerais approfondir tout ça. Merci pour ton temps, ton implication et ta générosité. Merci infiniment et belle journée ☺️",
  },
];

const INCLUS = [
  <>
    <strong className="font-semibold">Ton Guide d’Immersion personnalisé d’environ 40 pages</strong>
    <br />
    <em>Au format PDF, à conserver et à relire à l’infini.</em>
  </>,
  <>
    <strong className="font-semibold">1h de coaching individuel en visio</strong>
    <br />
    <em>
      Un espace rien que pour TOI, pour poser tes questions et aller plus loin dans l’exploration
      de ton Design.
    </em>
  </>,
  <>
    <strong className="font-semibold">Le replay de notre séance</strong>
    <br />
    <em>Pour garder une trace de tous nos échanges et pouvoir les réécouter à ton rythme.</em>
  </>,
];

/** Lien vers le test HD gratuit, embarqué plus bas sur la page. */
const TEST = (
  <a href="#test-gratuit" className="font-semibold text-ink-deep underline underline-offset-2">
    TEST HD GRATUIT
  </a>
);

const FAQ = [
  {
    q: "C’est quoi exactement le Human Design?",
    a: (
      <>
        Le Human Design (HD) est un outil de connaissance de soi qui propose une grille de lecture
        de notre fonctionnement personnel et énergétique.
        <br />
        À partir de tes données de naissance (date, heure et lieu), tu obtiens une carte
        individuelle appelée &quot;schéma HD&quot;.
        <br />
        Ce schéma contient de nombreuses informations sur ta manière de fonctionner, prendre tes
        décisions, interagir avec le monde, utiliser ton énergie ou encore exprimer certaines
        facettes de ta personnalité.
        <br />
        <em>
          L’idée n’est pas de te mettre dans une case, mais de t’offrir une nouvelle grille de
          lecture de toi-même, à observer et à expérimenter dans ta propre vie.
        </em>
        <br />
        Et si tu veux découvrir ton propre schéma, tu peux faire ton {TEST} juste après cette FAQ.
      </>
    ),
  },
  {
    q: "Est-ce qu’INSIDE est fait pour moi si je ne connais pas du tout le Human Design?",
    a: "Oui, complètement! INSIDE a justement été pensé comme une porte d’entrée claire et accessible dans le Human Design.\nTout est expliqué et vulgarisé pour que tu puisses comprendre les bases sans avoir besoin de maîtriser le jargon HD. Et le coaching est là pour t’aider à faire les liens avec TA réalité.",
  },
  {
    q: "Est-ce que le Guide d’Immersion est personnalisé?",
    a: "Oui! Chaque Guide est conçu à partir de TON schéma de Human Design, lui-même calculé grâce à ta date, ton heure et ton lieu de naissance.\nLe décryptage de tes 7 clés est donc entièrement personnalisé à TON Design.",
  },
  {
    q: "Est-ce qu’INSIDE est une lecture complète de mon schéma HD?",
    a: (
      <>
        Non, et c’est volontaire.
        <br />
        INSIDE se concentre sur les 7 clés fondamentales de ton Design pour te donner une base
        claire et solide, sans te noyer sous une avalanche d’informations.
        <br />
        Il est malgré tout possible que nous allions un peu plus loin lors de notre séance de
        coaching ensemble, en explorant notamment certains de tes Centres énergétiques.
        <br />
        <em>
          Ton schéma contient évidemment beaucoup d’autres éléments, que l’on pourra explorer
          ensemble dans le cadre d’autres offres, si cela t’appelle.
        </em>
      </>
    ),
  },
  {
    q: "Est-ce qu’il y a du pratico-pratique dans le Guide? Ou uniquement de la théorie?",
    a: (
      <>
        Oui ; n’étant moi-même pas une grande adepte du &quot;full-théorie&quot;, je mets un point
        d’honneur à te partager des clés concrètes, des exemples et des pistes d’expérimentation en
        complément de la théorie indispensable et vulgarisée.
        <br />
        <em>
          Ton Design n’est pas une notice rigide à suivre à la lettre. Tu découvres. Tu observes. Tu
          expérimentes. Tu ajustes.
        </em>
      </>
    ),
  },
  {
    q: "Est-ce que je dois répondre aux questions posées dans le Guide avant notre coaching ensemble?",
    a: (
      <>
        Ces questions te sont proposées à titre d’introspection personnelle. Il est donc pertinent
        que tu prennes le temps d’y répondre de ton côté avant notre coaching, mais sans aucune
        obligation, évidemment.
        <br />
        <em>
          L’idée est simplement qu’elles puissent t’aider à faire émerger tes propres réflexions,
          prises de conscience ou questionnements avant notre échange.
        </em>
      </>
    ),
  },
  {
    q: "Quand et sous quelle forme vais-je recevoir mon Guide?",
    a: (
      <>
        Ton Guide d’Immersion est un ebook qui t’est envoyé par mail, au format PDF, dans un délai
        d’au moins 10 jours après ta commande, puisqu’il est conçu à la main et personnalisé pour
        toi.
        <br />
        <em>Ensuite, libre à toi de le faire imprimer sur un joli support si tu le souhaites.</em>
      </>
    ),
  },
  {
    q: "Est-ce que je peux commander INSIDE pour le Design de mon enfant?",
    a: (
      <>
        Bien sûr!
        <br />
        Le Guide de ton enfant peut te donner des billes précieuses pour mieux comprendre son
        fonctionnement, ses besoins et ses réactions, et donc l’accompagner au mieux à grandir au
        plus proche de qui il est vraiment.
        <br />
        <em>
          L’idée reste cependant la même : utiliser le Human Design comme une grille d’observation
          et d’expérimentation, pas comme une nouvelle boîte dans laquelle l’enfermer.
        </em>
      </>
    ),
  },
  {
    q: "Est-ce que je peux offrir INSIDE autour de moi?",
    a: (
      <>
        Oui bien sûr, c’est même une jolie idée de cadeau pour quelqu’un qui a envie de mieux se
        connaître ou de découvrir le Human Design.
        <br />
        <em>
          Dans le formulaire à remplir après ta commande, tu pourras choisir si tu souhaites lui
          offrir un bon cadeau ou le Guide directement.
        </em>
      </>
    ),
  },
  {
    q: "Quelle différence entre INSIDE, Blooming, RECONNECT et REVEAL?",
    a: (
      <>
        <strong className="font-semibold">INSIDE</strong> est fait pour toi si tu veux mieux
        comprendre qui tu es et comment TU fonctionnes, à travers les bases de ton Human Design.
        <br />
        <strong className="font-semibold">Blooming</strong> te permet d’explorer tes talents, ta
        zone de génie, ce qui te rend unique et ce que tu pourrais en faire professionnellement,
        grâce à une analyse croisée de ton Human Design, de ta Numérologie et de tes Gene Keys.
        <br />
        <strong className="font-semibold">RECONNECT</strong> est fait pour toi si tu ne cherches
        pas seulement une analyse ponctuelle, mais un véritable cheminement autour de ta transition
        et de ton épanouissement professionnel, à travers un parcours guidé de 13 semaines.
        <br />
        <strong className="font-semibold">REVEAL</strong> est un focus sur ton Business : ce qui te
        questionne, ce qui coince ou ce que tu aimerais faire évoluer. Ton Human Design devient alors
        une grille de lecture pour explorer tout ça et revenir à TA façon unique d’entreprendre.
        <br />
        <br />
        <em>
          En bref :
          <br />
          INSIDE = &quot;Je veux mieux me connaître et comprendre comment je fonctionne.&quot;
          <br />
          Blooming = &quot;Je veux découvrir ce que j’ai d’unique et ce que je peux en faire
          professionnellement.&quot;
          <br />
          RECONNECT = &quot;Je veux cheminer pour clarifier ma direction et remettre du mouvement
          dans ma vie professionnelle.&quot;
          <br />
          REVEAL = &quot;Je veux explorer mon Business à travers mon propre fonctionnement.&quot;
        </em>
      </>
    ),
  },
  {
    q: "Comment connaître mon schéma de Human Design?",
    a: (
      <>
        Tu peux générer ton schéma gratuitement grâce au {TEST} présent sur cette page.
        <br />
        Il te suffit d’indiquer ta date, ton heure et ton lieu de naissance. Et si tu as ensuite
        envie de comprendre ce que toutes ces informations racontent concrètement de TOI, c’est
        exactement là qu’INSIDE entre en jeu. :)
      </>
    ),
  },
];

/** Repères du menu à points, dans l'ordre de la page. */
const POINTS = [
  { id: "pour-qui", label: "INSIDE est pour toi si…" },
  { id: "offre", label: "Ce qu’est INSIDE" },
  { id: "benefices", label: "Ce qu’INSIDE peut t’apporter" },
  { id: "processus", label: "Comment se déroule INSIDE" },
  { id: "temoignages", label: "Les témoignages" },
  { id: "tarif", label: "Ton immersion commence ici" },
  { id: "faq", label: "FAQ" },
  { id: "test-gratuit", label: "Découvre ton schéma HD" },
];

export default function InsidePage() {
  return (
    <VenteTheme {...THEME}>
      <SectionDots sections={POINTS} />

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      {/* Même premier écran que Blooming : la promesse à gauche, le verbatim
          d'une cliente à droite, le livrable glissé derrière son angle. */}
      <section className="relative overflow-hidden bg-paper px-6 pt-10 pb-20 md:px-20 md:pt-12 md:pb-24 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-ink-lilac/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-[4%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl"
        />
        <PetalField />

        <div className="relative mx-auto grid max-w-(--container-content) items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="text-center">
            <Reveal>
              <Image
                src="/assets/logo-inside.webp"
                alt="INSIDE · Le Guide d’Immersion dans ton Design Unique"
                width={500}
                height={500}
                priority
                className="mx-auto h-auto w-[210px] md:w-[240px]"
              />
            </Reveal>

            {/* Contrairement à Blooming, le texte de Marion a un vrai titre :
                il devient le h1 visible, sous le logo. */}
            <Reveal delay={80}>
              <h1 className="mx-auto mt-8 max-w-[560px] font-display text-[26px] font-light uppercase leading-[1.2] tracking-[0.04em] text-ink-deep md:text-[32px]">
                Plonge au cœur de ton Human Design,
                <br />
                <em className="italic text-ink">et découvre ton propre mode d’emploi.</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-[520px] font-display text-[20px] font-light italic leading-snug text-ink-deep md:text-[24px]">
                ~ Un Guide personnalisé + 1h de coaching individuel pour décrypter les bases de TON
                Human Design, et poser les premières pierres d’une vraie connaissance de toi. ~
              </p>
              <Cta href="#tarif" className="mt-9">
                Je veux mon mode d’emploi unique ♡
              </Cta>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative pb-24 sm:pb-32 lg:pt-14 lg:pb-40">
            {/* Pied de carte allongé : le mockup a un fond plein, il ne doit
                mordre que sur ce blanc, jamais sur le verbatim. */}
            <figure className="relative z-10 mx-auto max-w-[480px] rounded-[28px] border border-line bg-white/95 p-6 pb-12 shadow-simu backdrop-blur-sm sm:pb-14 md:p-8 md:pb-16 lg:ml-0">
              <PetalHalo />
              {/* Le Guide sur tablette, à cheval sur l'angle inférieur droit,
                  comme sur BODY Bloom. */}
              <Image
                src="/assets/inside/guide-tablette.webp"
                alt="Le Guide d’Immersion INSIDE affiché sur une tablette"
                width={1122}
                height={1402}
                priority
                className="pointer-events-none absolute -right-4 -bottom-[92px] z-20 h-auto w-[100px] rotate-3 rounded-[14px] border-4 border-white shadow-card sm:-right-8 sm:-bottom-[128px] sm:w-[140px] lg:-right-[80px] lg:-bottom-[166px] lg:w-[180px]"
              />

              <figcaption>
                <span className="flex items-center gap-3.5 pr-16">
                  <Image
                    src="/assets/temoignages/Camille.png"
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="h-12 w-12 flex-none rounded-full object-cover"
                  />
                  <span className="font-script text-[24px] leading-none text-accent">Camille</span>
                </span>
              </figcaption>

              <blockquote className="mt-5 flex flex-col gap-3.5 font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
                <p>
                  C’est IN-CROY-ABLE !!! On dirait que tu me connais depuis 30 ans, tout est juste,
                  c’est fou, je n’en reviens pas! 🤩 C’est impressionnant!
                </p>
                <p className="pr-16 sm:pr-20 lg:pr-24">
                  Maintenant que j’ai ce guide, je trouve ça hyper apaisant, rassurant et
                  déculpabilisant de constater que certains de mes fonctionnements ne sont pas juste
                  une &quot;lubie&quot; de ma part, mais que ça fait parti de moi en fait! Merci
                  infiniment Marion! 💖
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
          eyebrow="INSIDE est pour toi si…"
          title="Tu as envie de mieux comprendre qui tu es et comment TU fonctionnes."
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <Reveal
            delay={80}
            className="order-first flex flex-col items-center gap-8 lg:order-last lg:gap-6"
          >
            {/* Trois portraits et non deux comme sur Blooming : les profils
                d'INSIDE sont plus longs, deux photos laissaient la colonne
                vide sur toute la fin de la strate. */}
            <Image
              src="/assets/inside/marion-mer.webp"
              alt="Marion Chartier"
              width={900}
              height={1237}
              className="aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card"
            />
            <Image
              src="/assets/inside/marion-fleurs.webp"
              alt=""
              aria-hidden
              width={900}
              height={1205}
              className="hidden aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card lg:block"
            />
            <Image
              src="/assets/inside/marion-lecture.webp"
              alt=""
              aria-hidden
              width={900}
              height={1273}
              className="hidden aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card lg:block"
            />
            {/* Grands cercles diffus (le motif d'INSIDE) juste sous le dernier
                portrait, dans le vide qui fait face au texte de conclusion.
                Ancre de hauteur nulle : le décor ne pousse rien. Grand écran
                seulement, en colonne unique il n'y a pas de vide. */}
            <span aria-hidden className="pointer-events-none relative hidden h-0 w-full lg:block">
              {/* Trois tailles en diagonale, espacées d'au moins 60px entre
                  leurs bords (flou compris) : les cercles ne se touchent pas. */}
              <span className="absolute top-6 right-0 h-[200px] w-[200px] rounded-full bg-accent/20 blur-md" />
              <span className="absolute top-0 left-4 h-[80px] w-[80px] rounded-full bg-accent/20 blur-sm" />
              <span className="absolute top-[210px] left-0 h-[130px] w-[130px] rounded-full bg-ink-lilac/15 blur-sm" />
            </span>
          </Reveal>

          <div>
            <ProfilsNotes profils={PROFILS} empile />

            <Reveal className="mt-12">
              <p className="max-w-[640px] font-display text-[18px] font-light italic leading-relaxed text-ink md:text-[19px]">
                Que tu sois dans une vraie démarche de reconnexion à toi-même ou simplement
                animé.e par la curiosité ou l’envie de mieux te connaître, INSIDE te propose un vrai
                point de départ pour découvrir ton fonctionnement unique.
              </p>
              <p className="mt-4 max-w-[640px] font-display text-[18px] font-light italic leading-relaxed text-ink md:text-[19px]">
                L’idée n’est cependant pas de t’enfermer dans une nouvelle case, ni de te perdre
                dans des informations trop théoriques, trop complexes ou trop perchées.
              </p>
              <p className="mt-7 max-w-[640px] font-display text-[20px] font-semibold leading-relaxed text-ink-deep">
                Juste mieux te comprendre, pour faire progressivement plus de place à qui TU es
                vraiment. ♡
              </p>
              <Cta href="#tarif" className="mt-10">
                Je veux découvrir comment je fonctionne
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
            Ce qu’est INSIDE
          </p>
          <PetalDivider centered={false} className="mt-7" />
          <h2 className="mt-6 font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[44px]">
            Le Guide d’Immersion
            <br />
            <em className="italic text-ink">dans ton Design Unique</em>
          </h2>
        </Reveal>

        <div className="mt-10 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
          <Reveal className="grid items-center gap-8 md:grid-cols-[1fr_250px] md:gap-12">
            <div>
              <p>
                Avec INSIDE, je te propose de plonger dans les bases de ton schéma personnel de
                Human Design, à travers ton Guide d’Immersion et son coaching associé.
              </p>
              <p className="mt-4">
                Une porte d’entrée pour comprendre et expérimenter TA propre façon de fonctionner. ♡
              </p>
            </div>

            {/* Le Guide est montré imprimé : la légende rappelle que le
                livrable est un PDF, pour que l'image ne promette pas un livre. */}
            <figure className="mx-auto w-[210px] md:w-full">
              <Image
                src="/assets/inside/guide-papier.webp"
                alt="Le Guide d’Immersion INSIDE, imprimé"
                width={1122}
                height={1402}
                className="h-auto w-full rounded-[14px] shadow-card"
              />
              <figcaption className="mt-3 text-center font-display text-[15px] italic leading-snug text-ink-soft">
                Ton Guide est livré en PDF, à imprimer si tu le souhaites
              </figcaption>
            </figure>
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal>
            <p>
              INSIDE, c’est avant tout ton Guide personnalisé,{" "}
              <em>conçu à partir de ta date, ton heure et ton lieu de naissance.</em>
              <br />
              Ce Guide je l’ai voulu clair, accessible à tous et pragmatique.
              <br />
              <em>Pas de jargon incompréhensible.</em>
            </p>

            {/* Le mot de Justine répond directement à la phrase précédente :
                il reste à sa place dans le texte, en citation détachée. */}
            <figure className="my-8 text-center">
              <blockquote className="font-display text-[19px] italic leading-relaxed text-ink-deep md:text-[21px]">
                &quot;Ta force c’est vraiment d’expliquer avec des mots simples des concepts qui ne
                sont pas simples du tout ^^&quot;
              </blockquote>
              <figcaption className="mt-2 font-script text-[22px] text-accent">Justine ♡</figcaption>
            </figure>

            <p>
              <strong className="font-semibold text-ink-deep">
                Un Guide conçu par une humaine, pour des humains. ♥
              </strong>
              <br />
              Au-delà de la théorie essentielle, tu y retrouveras des conseils pratiques, des
              exemples ainsi que des pistes d’expérimentation pour ramener progressivement ces
              informations dans ton propre quotidien.
            </p>

            <p className="mt-6">
              Plus exactement, grâce à ton Guide d’Immersion, tu vas cheminer à travers les{" "}
              <strong className="font-semibold text-ink-deep">7 clés fondamentales</strong> de ton
              Design :
            </p>

            {/* Les 7 clés dans l'encadré de la liste d'inclusions de Blooming,
                numérotées au médaillon des étapes du processus. */}
            <ol className="mt-6 flex flex-col gap-5 rounded-[20px] border border-line bg-white/70 px-6 py-6 text-[16px] md:px-8 md:py-7 md:text-[17px]">
              {CLES.map((cle, i) => (
                <li key={cle.titre} className="flex items-start gap-4 leading-relaxed">
                  <span className="relative flex h-10 w-10 flex-none items-center justify-center">
                    <Rosace className="absolute inset-0 h-10 w-10 text-ink-lilac/50" />
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/70 font-body text-[12px] font-semibold leading-none text-ink-deep">
                      {i + 1}
                    </span>
                  </span>
                  <span>
                    <strong className="font-semibold text-ink-deep">{cle.titre}</strong>{" "}
                    <span className="text-ink-soft">({cle.parmi})</span>
                    <br />
                    <em>{cle.texte}</em>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal>
            <p>
              <strong className="font-semibold text-ink-deep">
                Et le Guide n’est que la première partie de l’expérience...
              </strong>
            </p>
            <p className="mt-4">
              La lecture de celui-ci va certainement faire émerger en toi des résonances, des prises
              de conscience, et te permettre de mettre des mots sur beaucoup de choses que tu
              ressens, vis ou pressens depuis longtemps...
              <br />
              Mais probablement aussi faire naître des questions.
              <br />
              Dont celle-ci :
            </p>
            <p className="mt-4 text-center font-display text-[19px] italic text-ink-deep md:text-[21px]">
              “Qu’est-ce que je fais de tout ça après, dans mon quotidien?”
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Et c’est justement pour ça qu’INSIDE inclut 1h de coaching individuel avec moi.
              </strong>
            </p>
            <p className="mt-4">
              Cette séance est là pour t’accompagner dans l’intégration de ce que tu as découvert
              dans ton Guide, en le mettant en perspective avec ce que TOI, tu vis concrètement.
              <br />
              Parce que ton Design prend vraiment vie quand on le ramène à TA réalité.
            </p>
            <p className="mt-4">
              On fait les liens, on approfondit ce qui mérite de l’être, tu poses toutes tes
              questions et on identifie ensemble tes propres pistes d’expérimentation.
              <br />
              Et il n’est pas question de t’enfermer dans une nouvelle case ou de transformer ton
              Design en notice rigide à suivre à la lettre.
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Je décrypte, tu infuses, on observe, tu expérimentes, tu ajustes. ♡
              </strong>
            </p>
          </Reveal>
        </div>

        <Reveal className="pt-12 text-center">
          <p className="font-display text-[18px] font-light italic leading-loose text-ink md:text-[20px]">
            ~ Pour trouver TA propre recette magique, encore faut-il commencer par découvrir tes
            propres ingrédients. ~
          </p>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* BÉNÉFICES — dans la strate des livrables de Blooming             */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="benefices" bg="accent" wide decor={<PetalField />}>
        <SectionHeader
          eyebrow="Ce qu’INSIDE peut t’apporter"
          title="Qu’est-ce que ce Guide et son coaching peuvent changer pour TOI concrètement?"
        />

        {/* Visuels plafonnés à 410px : deux portraits 4:5 empilés plus larges
            dépassaient nettement la hauteur des cartes. */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* Le coaching d'abord, seul visible en mobile : c'est ce qui
              distingue INSIDE d'un Guide seul. Les deux visuels s'effacent
              légèrement sur les bords. */}
          <div className="mx-auto flex w-full max-w-[410px] flex-col items-center">
            <Reveal className="w-full">
              <Image
                src="/assets/inside/coaching.webp"
                alt="Le Guide d’Immersion INSIDE sur tablette, pendant un coaching en visio"
                width={1122}
                height={1402}
                className="h-auto w-full"
                style={FONDU_BORDS}
              />
            </Reveal>
            <Reveal delay={80} className="mt-6 hidden w-full lg:block">
              <Image
                src="/assets/inside/guide-tablette.webp"
                alt="Le Guide d’Immersion INSIDE affiché sur une tablette"
                width={1122}
                height={1402}
                className="h-auto w-full"
                style={FONDU_BORDS}
              />
            </Reveal>
          </div>

          <LivrablesGrid livrables={BENEFICES} />
        </div>

        <Reveal className="mt-14 text-center">
          <Cta href="#tarif">Je veux mieux me comprendre ♡</Cta>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* PROCESSUS                                                        */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="processus" bg="lavender" wide>
        <SectionHeader
          eyebrow="Comment se déroule INSIDE"
          title="De ta commande à notre coaching, voici comment se passe concrètement ton immersion."
        />
        <div className="mt-16">
          <ProcessusSteps etapes={ETAPES} />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TÉMOIGNAGES                                                      */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="temoignages" bg="white" wide>
        <SectionHeader filet={false} title="Leurs mots valent plus qu’un long discours. ♡" />

        <div className="mx-auto mt-14 max-w-[900px]">
          <TemoignageHero
            photo="/assets/temoignages/Louise-Armance.png"
            nom="Louise-Armance"
            texte="Je ne connaissais absolument rien du tout au Human Design, et le guide d'immersion m'a donné beaucoup d'indications réellement étonnantes ; je me suis retrouvée dans énormément de descriptions et j'ai appris plein de choses sur moi! Je ne pensais pas que mes seules infos de naissance pourraient en dévoiler autant alors qu'on ne se connait pas! 😮 Et c'est quand même dingue d'avoir attendu plus de 35ans pour découvrir que j'avais été livrée avec un mode d'emploi!! 😂 Clairement je me reconnais vraiment dans ma personnalité et mon fonctionnement, c'est tout à fait moi, depuis enfant, c'est fou! Et il y a d'autres aspects de moi que je découvre et que j'ai envie de creuser du coup! 😍 Merci mille fois pour toutes ces informations précieuses Marion, ça résonne beaucoup en moi, c'est très parlant! Bluffant même! 💥"
          />

          <PetalDivider full className="my-14" />

          <TemoignageCards verbatims={VERBATIMS} />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TARIF                                                            */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="tarif" wide decor={<PetalField dense />}>
        <SectionHeader eyebrow="Prêt.e à plonger dans ton Design?" title="Ton immersion commence ici." />
        <div className="mt-14">
          <PricingCard
            logo="/assets/inside/logo-blanc.webp"
            logoAlt="INSIDE"
            prix="122€"
            inclus={INCLUS}
            href={COMMANDE}
            libelleCta={"Je plonge dans mon Design\u00a0♡"}
            note="Paiement en plusieurs fois possible via PayPal sous réserve d’éligibilité."
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
        <SectionHeader filet={false} title="Découvre ton schéma HD" />
        <Reveal className="mt-6 text-center">
          <p className="font-display text-[17px] font-light leading-relaxed text-ink md:text-[18px]">
            Pour obtenir ton schéma de Human Design, il te suffit de faire ton TEST HD GRATUIT en 2
            minutes juste ici.
          </p>
          <p className="mt-3 font-display text-[17px] font-light italic leading-relaxed text-ink md:text-[18px]">
            Tu retrouveras notamment les 7 clés fondamentales décryptées dans INSIDE dans les
            informations sous ton schéma.
          </p>
        </Reveal>
        <div className="mt-14">
          <HDSimulatorForm />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* PASSERELLE — trois offres pour la suite                          */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection bg="lavender" wide>
        <OffresSuivantes
          eyebrow="Et après ?"
          titre="Ton Design a encore beaucoup de choses à te raconter..."
          paragraphes={[
            "INSIDE t’a permis de poser les premières pierres d’une meilleure connaissance de toi et de ton fonctionnement.",
            <em key="chemins">
              Et si tu as envie de poursuivre l’exploration, trois chemins peuvent naturellement
              s’ouvrir à toi...
            </em>,
          ]}
          offres={[
            {
              eyebrow: "Ta Fleur de Talents Innés™",
              logo: "/assets/blooming/logo.webp",
              logoAlt: "Blooming",
              accroche:
                "Tu as envie d’explorer ce qui te rend unique et ce que tu pourrais en faire professionnellement?",
              texte:
                "Blooming te permet d’explorer tes talents et ta zone de génie, grâce à une analyse croisée de ton Human Design, de ta Numérologie et de tes Gene Keys.",
              href: EXTERNAL.offre.fleurDeTalents,
              libelle: "Je découvre Blooming",
            },
            {
              eyebrow: "Ton Parcours Guidé de Transformation Professionnelle",
              logo: "/assets/logo-reconnect.webp",
              logoAlt: "RECONNECT",
              accroche:
                "Tu as envie d’aller plus loin et de cheminer réellement sur ta vie professionnelle?",
              texte:
                "13 semaines pour te reconnecter à toi, clarifier ce qui a vraiment du sens pour toi et remettre du mouvement vers une vie professionnelle qui te ressemble.",
              href: EXTERNAL.offre.reconnect,
              libelle: "Je découvre RECONNECT",
            },
            {
              eyebrow: "La Séance Clarté HD Pro - Spécial Business",
              logo: "/assets/logo-reveal.webp",
              logoAlt: "REVEAL",
              accroche:
                "Tu es entrepreneur.e et tu as envie d’explorer ton Business à travers TA façon unique de fonctionner?",
              texte:
                "Avec REVEAL, on part de ce qui te questionne, de ce qui coince ou de ce que tu aimerais faire évoluer dans ton Business, et on utilise ton Human Design comme grille de lecture pour explorer TA propre recette magique.",
              href: EXTERNAL.offre.reveal,
              libelle: "Je découvre REVEAL",
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
          <Rosace className="mx-auto h-10 w-10 text-accent/50" />
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Tout commence à l’intérieur
          </p>
          <h2 className="mt-6 font-display text-[32px] font-light leading-[1.1] text-ink-deep md:text-[52px]">
            Tu n’as pas besoin de devenir <em className="italic text-ink">quelqu’un d’autre...</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[440px] font-display text-[18px] font-light italic leading-snug text-ink">
            ...simplement de revenir à qui tu es.
          </p>
          <Cta href={COMMANDE} external className="mt-10">
            Je veux découvrir mon propre mode d’emploi ♡
          </Cta>
        </Reveal>
      </section>
    </VenteTheme>
  );
}
