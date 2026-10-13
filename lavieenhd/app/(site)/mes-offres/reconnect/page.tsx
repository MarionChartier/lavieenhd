import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { EXTERNAL } from "@/lib/links";
import { type FaqItem, FaqSection } from "@/components/sections/FaqSection";
import { type Onglet, Onglets } from "@/components/sections/vente/Onglets";
import { Reveal } from "@/components/sections/vente/Reveal";
import { SectionDots } from "@/components/sections/vente/SectionDots";
import { VenteTheme } from "@/components/sections/vente/VenteTheme";
import { Petal, PetalDivider, PetalField, PetalHalo, Rosace } from "@/components/sections/vente/motifs";
import {
  CitationBand,
  Cta,
  SectionHeader,
  VenteSection,
} from "@/components/sections/vente/primitives";
import {
  type Livrable,
  type Profil,
  LivrablesGrid,
  MotCliente,
  ProfilsNotes,
  TemoignageHero,
} from "@/components/sections/vente/blocks";

export const metadata: Metadata = {
  title: "RECONNECT · Ton Parcours Guidé de Transformation Professionnelle | La vie en HD",
  description:
    "Un parcours guidé de 13 semaines pour te reconnecter à toi, clarifier ta direction et remettre du mouvement vers une vie professionnelle qui te ressemble et qui a du sens pour toi.",
};

/**
 * Couleur et forme propres à RECONNECT : le violet du mot RECONNECT de son
 * logo, et le pétale, que la page partage avec Blooming (la Fleur est incluse
 * dans Premium 1:1). L'accent reste clair, il est posé sur des fonds sombres
 * (prix, boutons) ; les textes sur fond clair prennent le violet du logo.
 */
const THEME = {
  accent: "#c4b6d6",
  accentSoft: "#efeaf4",
  accentTexte: "#746588",
  forme: "petale",
} as const;

/** La pensée « dans ta tête » de chaque profil, mise en exergue. */
function Pensee({ children }: { children: ReactNode }) {
  return (
    <span className="block border-l-2 border-accent pl-4">
      <em>Peut-être que, dans ta tête, ça ressemble à :</em>{" "}
      <strong className="font-semibold">{children}</strong>
    </span>
  );
}

const PROFILS: Profil[] = [
  {
    titre: "Tu es paumé.e professionnellement",
    paragraphes: [
      "Tu ressens fort le manque de sens dans ta vie pro actuelle. Tu ne t’y reconnais pas ou plus, tu n’as plus envie...ou tu te sens vidé.e, lassé.e, parfois même épuisé.e.",
      <Pensee key="p">
        &quot;Je sais ce que je ne veux plus. Mais ce que je veux vraiment? Aucune idée.&quot;
      </Pensee>,
      "Tu ne sais absolument pas ce qui pourrait vraiment te correspondre, dans quoi tu pourrais t’épanouir, ni même ce que tu as à apporter. Tu te cherches, tu pars parfois dans tous les sens, et tu aimerais enfin retrouver de la clarté, voir une direction se dessiner et sentir que tu peux de nouveau avancer.",
    ],
  },
  {
    titre: "Tu as une piste pro...mais rien ne bouge",
    paragraphes: [
      "Tu as une idée de reconversion ou un projet de cœur qui semble t’appeler...mais pour l’instant, rien ne se concrétise.",
      <Pensee key="p">
        &quot;J’ai bien une piste qui me titille sans arrêt...mais est-ce que c’est vraiment la
        bonne? Et si oui, pourquoi je n’arrive pas à franchir le cap et à me lancer?&quot;
      </Pensee>,
      "Tu doutes, tu manques de confiance, tu as peur de te tromper ou de plonger dans l’inconnu. Tu avances, tu recules, tu attends le bon moment, et finalement...tu te sens bloqué.e.",
    ],
  },
  {
    titre: "Côté pro, ça va...mais tu aspires à mieux",
    paragraphes: [
      <Pensee key="p">
        &quot;Je ne déteste pas mon job...mais je sens quand même qu’il me manque quelque
        chose.&quot;
      </Pensee>,
      "Peut-être qu’une partie de ta vie professionnelle te convient encore. Mais tu aimerais plus de sens, plus d’enthousiasme, davantage de cohérence avec tes valeurs...ou simplement plus de place pour ce qui te fait vraiment vibrer.",
      "Tu n’as pas forcément envie de tout envoyer valser ni de faire un virage à 180°. Tu sens surtout que quelque chose pourrait être réajusté, sans forcément savoir encore précisément quoi ni comment : faire évoluer ta façon de travailler, affiner tes ambitions, redonner du sens à ce que tu fais...ou peut-être ouvrir une nouvelle porte en parallèle.",
    ],
  },
];

const BENEFICES: Livrable[] = [
  {
    titre: "Une reconnexion à toi-même",
    texte: (
      <>
        Tu développes une connaissance de toi plus profonde : ton fonctionnement, tes besoins, tes
        moteurs, tes réactions, ce qui te nourrit vraiment...Tu mets aussi des mots sur des choses
        que tu ressentais sans toujours réussir à les expliquer, et tu t’assumes davantage tel.le
        que tu es.
        <MotCliente
          citation="C’est un vrai travail sur soi et un véritable auto-coaching que tu proposes."
          source="J. ♡"
        />
      </>
    ),
  },
  {
    titre: "De la clarté et du sens retrouvés",
    texte:
      "Des intuitions se confirment, certaines prises de conscience émergent, des liens deviennent évidents, certains éléments prennent un sens nouveau...et tu repars avec une lecture plus juste de toi, de ta situation et de ce qui compte vraiment pour la suite.",
  },
  {
    titre: "Plus de justesse dans tes choix",
    texte: (
      <>
        Tu fais des choix plus conscients et plus justes pour toi.
        <span className="mt-3 block">
          Tu démêles tes idées, tu fais le tri et tu distingues mieux ce qui t’appelle vraiment de
          ce qui relève de la peur, des &quot;il faut&quot; ou des attentes extérieures.
        </span>
      </>
    ),
  },
  {
    titre: "Davantage de confiance",
    texte: (
      <>
        Certaines peurs s’apaisent, certains freins deviennent moins paralysants. Tu te sens plus
        solide intérieurement, plus serein.e face au changement...et tu oses enfin avancer même
        lorsque tout n’est pas parfaitement balisé.
        <MotCliente citation="Maintenant, même si j’ai peur, j’y vais et on verra." source="E. ♡" />
      </>
    ),
  },
  {
    titre: "Un cap professionnel mieux défini",
    texte: (
      <>
        Tu repars avec une vision beaucoup plus nette et concrète de ce vers quoi tu veux aller et
        de la vie professionnelle que tu veux construire pour la suite. Selon ton point de départ,
        cela peut être une nouvelle voie qui émerge, une piste déjà présente qui se précise ou un
        projet de cœur laissé de côté qui reprend vie.
        <strong className="mt-3 block font-semibold">
          Avec un fil conducteur : une vie professionnelle qui te ressemble vraiment.
        </strong>
        <MotCliente
          citation="Avant j’étais dans le brouillard complet, aujourd’hui plus du tout, je vois le cap à l’horizon..."
          source="M. ♡"
        />
      </>
    ),
  },
  {
    titre: "Une vraie mise en mouvement",
    texte: (
      <>
        Tu repars avec des échéances posées et des décisions à concrétiser pour la suite. Le
        changement ne reste plus seulement une envie ou une idée abstraite dans ta tête : tu lui
        donnes une impulsion concrète dans ta vie professionnelle.
        <MotCliente
          citation={
            <>
              J’ai aussi mis de l’ordre dans ce qu’il faut entreprendre pour démarrer. [...]
              <br />
              Je me sens plus résolue que jamais.
            </>
          }
          source="M. ♡"
        />
      </>
    ),
  },
];

/** Les 4 temps du rendez-vous du lundi. */
const ETAPES: { titre: string; texte: ReactNode }[] = [
  {
    titre: "Tu plonges dans ton Exploration Guidée",
    texte: (
      <>
        <p>
          <strong className="font-semibold">
            Au cœur de chaque semaine : un nouveau questionnaire introspectif guidé, ludique et
            parfois interactif.
          </strong>{" "}
          Les questions sont le plus souvent ouvertes, pour te laisser le temps de réfléchir,
          laisser émerger...et parfois aller plus loin que ta première réponse.
        </p>
        <p>
          <em>
            Loin du questionnaire scolaire ou rébarbatif qu’on remplit parce qu’il &quot;faut le
            faire&quot;.
          </em>
        </p>
      </>
    ),
  },
  {
    titre: "Tu expérimentes concrètement",
    texte: (
      <>
        <p>
          <strong className="font-semibold">
            Selon les étapes, des exercices, des tests et des mises en pratique viennent
            directement s’intégrer à ce que tu es en train d’explorer.
          </strong>
        </p>
        <p>
          <em>Une méditation guidée spécifique vient également ponctuer le parcours.</em>
        </p>
      </>
    ),
  },
  {
    titre: "Tu fais parfois entrer ton Human Design dans l’enquête",
    texte: (
      <>
        <p>
          <strong className="font-semibold">
            Certains questionnaires intègrent des mini-analyses HD ciblées et, plus ponctuellement,
            des éclairages en Numérologie, pour t’apporter un angle de lecture supplémentaire ou
            personnaliser ton exploration.
          </strong>
        </p>
        <p>
          Je te guide pas à pas pour aller chercher l’information dont tu as besoin dans ton propre
          schéma ou, lorsque la Numérologie entre en jeu, à partir de tes nom(s), prénom(s) et date
          de naissance.
        </p>
        <p>
          Tu trouves ton indice...puis tu découvres ce qu’il a à te raconter. Et parfois même...la
          suite du questionnaire s’adapte directement à ce que tu viens de découvrir. ✨️
        </p>
        <p>
          <em>
            Tu n’as besoin ni de savoir lire ton schéma de Human Design, ni de connaître la
            Numérologie : tout est clairement expliqué et balisé.
          </em>
        </p>
      </>
    ),
  },
  {
    titre: "Tu te laisses guider au fil des semaines",
    texte: (
      <>
        <p>
          <strong className="font-semibold">
            Tu ne connais pas à l’avance les 13 étapes exactes du voyage. Chaque lundi, tu
            découvres celle qui t’attend et tu as simplement à te laisser porter par le
            cheminement.
          </strong>
        </p>
        <p>
          <em>
            Je garde volontairement cette part de découverte dans RECONNECT, parce que l’expérience
            consiste aussi à lâcher un peu prise et à accueillir en confiance ce qui arrive semaine
            après semaine...
          </em>
        </p>
      </>
    ),
  },
];

const VOIX: { citation: ReactNode; source: string }[] = [
  {
    citation: (
      <>
        J’adore tes questionnaires, ils sont vraiment percutants et je trouve les questions très
        justes ✨
        <br />
        J’ai vraiment adoré aller chercher sur la charte certaines données 🥰
      </>
    ),
    source: "Émilie, cliente RECONNECT ♡",
  },
  {
    citation: "Chaque lundi on a la surprise du nouveau questionnaire",
    source: "Justine, cliente RECONNECT ♡",
  },
  {
    citation:
      "La méditation était incroyable, je l’ai enregistrée, bien précieusement pour pouvoir la refaire plus tard quand j’en ressentirai le besoin 🥰",
    source: "Émilie, cliente RECONNECT ♡",
  },
];

const EN_SIMPLE = [
  { nom: "Solo", texte: "Tu suis le parcours en autonomie." },
  {
    nom: "Circle",
    texte:
      "Tu suis le même parcours avec, en plus, la Bibliothèque de ressources complémentaires et la Communauté RECONNECT, où tu peux partager ce que tu vis, échanger avec les autres membres et me poser tes questions pendant tes 13 semaines.",
  },
  {
    nom: "Premium 1:1",
    texte:
      "Tu suis le même parcours, tu as les mêmes accès que Circle, mais en plus, je suis personnellement ton cheminement pendant 13 semaines, avec un suivi individuel continu, des coachings, un canal privé et deux analyses sur mesure.",
  },
];

/** Mot de cliente détaché, en fin de bloc. */
function MiniPreuve({ citation, source }: { citation: string; source: string }) {
  return (
    <figure className="rounded-[18px] bg-accent-soft px-5 py-4">
      <blockquote className="italic">&quot;{citation}&quot;</blockquote>
      <figcaption className="mt-2 font-body text-[11px] uppercase leading-relaxed tracking-[0.12em] text-ink-soft">
        {source}
      </figcaption>
    </figure>
  );
}

/** Carte d'un onglet de formule : l'accroche, puis ce qui est inclus en
 *  pastilles, puis un bloc par composante. Avant, tout s'enchaînait en une
 *  seule colonne de paragraphes et on ne voyait plus ce qui relevait de quoi. */
function PanneauFormule({
  accroche,
  inclus,
  noteInclus,
  children,
}: {
  accroche: ReactNode;
  inclus: string[];
  noteInclus?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-line bg-white/90 px-6 py-8 font-display text-[17px] font-light leading-relaxed text-ink-deep shadow-card md:px-10 md:py-10 md:text-[18px]">
      <p className="text-center text-[19px] md:text-[21px]">{accroche}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {inclus.map((item) => (
          <span
            key={item}
            className="rounded-full border border-accent/70 bg-accent-soft/60 px-4 pt-[8px] pb-[6px] font-body text-[11px] uppercase leading-none tracking-[0.12em] text-ink-deep"
          >
            {item}
          </span>
        ))}
      </div>
      {noteInclus && <p className="mt-3 text-center text-[15px] text-ink-soft">{noteInclus}</p>}
      {children}
    </div>
  );
}

/** Une composante de la formule, séparée de la précédente par un filet. */
function Bloc({ titre, children }: { titre: ReactNode; children: ReactNode }) {
  return (
    <section className="mt-9 border-t border-line pt-8">
      <h4 className="font-display text-[20px] font-semibold leading-snug text-ink-deep md:text-[22px]">
        {titre}
      </h4>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  );
}

/** La phrase à retenir d'un bloc, en exergue sur un filet d'accent. */
function ARetenir({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-accent pl-4 font-semibold">{children}</p>
  );
}

const EXPLORATIONS = "👑 Les 13 Explorations Guidées RECONNECT";
const BIBLIOTHEQUE = "💎 La Bibliothèque RECONNECT";
const COMMUNAUTE = "💬 La Communauté RECONNECT";

const DETAIL_FORMULES: Onglet[] = [
  {
    label: "Solo",
    contenu: (
      <PanneauFormule
        accroche="Tu suis l’intégralité de ce cheminement en totale autonomie, sans espace d’échange ni accompagnement individuel. Chaque lundi devient ainsi un nouveau rendez-vous avec toi-même."
        inclus={[EXPLORATIONS]}
      />
    ),
  },
  {
    label: "Circle",
    barreEnBas: true,
    contenu: (
      <PanneauFormule
        accroche="Autour de ton rendez-vous du lundi viennent s’ajouter deux espaces de soutien : la Bibliothèque et la Communauté RECONNECT."
        inclus={[EXPLORATIONS, BIBLIOTHEQUE, COMMUNAUTE]}
      >
        <Bloc titre={BIBLIOTHEQUE}>
          <p>
            Dans le mail du lundi, tu reçois également l’accès à une nouvelle ressource
            complémentaire, pensée pour t’aider à intégrer, traverser ou approfondir ce qui se joue
            pour toi au fil du parcours.
          </p>
          <p>
            <em>
              Cette ressource vient ensuite enrichir ta Bibliothèque RECONNECT, dans laquelle tu
              peux aller piocher lorsque tu en ressens le besoin au fil des semaines.
            </em>
          </p>
          <div>
            <p>Au fil du parcours, ta Bibliothèque vient ainsi accueillir :</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {[
                <>
                  3 séances de libération émotionnelle et de reprogrammation (EFT) : &quot;Prendre
                  sa place&quot;, &quot;Légitimité &amp; Confiance en soi&quot; et &quot;Apaiser son
                  lien à l’argent&quot;,
                </>,
                <>
                  3 méditations guidées supplémentaires <em>(soit 4 au total dans RECONNECT)</em>,
                </>,
                <>1 audio de reprogrammation,</>,
                <>
                  ainsi que différents tips et outils, notamment sous forme d’exercices pratiques
                  et énergétiques.
                </>,
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Petal className="mt-[0.6em] h-3 w-3 flex-none text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <ARetenir>
            Toutes les ressources de ta Bibliothèque sont téléchargeables, pour que tu puisses les
            conserver et y revenir quand tu le souhaites, même après la fin de tes 13 semaines.
          </ARetenir>
        </Bloc>

        <Bloc titre={COMMUNAUTE}>
          <p>
            Tu rejoins par ailleurs la Communauté RECONNECT, un espace collectif de discussion sur
            Telegram dans lequel tu peux partager tes prises de conscience, tes doutes, tes
            difficultés et tes questionnements, et échanger avec les autres membres autour de vos
            expériences et réflexions respectives.
          </p>
          <p>
            <em>
              J’y suis également présente de manière asynchrone pour répondre à tes questions et
              t’apporter mon regard lorsque tu en ressens le besoin, tout au long de ton parcours.
            </em>
          </p>
          <ARetenir>
            Après tes 13 semaines, tu conserves ton accès à la Communauté aussi longtemps que tu le
            souhaites : tu peux continuer à consulter les discussions et à échanger avec les autres
            membres.
          </ARetenir>
          <p>
            <em>
              Mes réponses personnelles ne font alors simplement plus partie de ton accompagnement.
            </em>
          </p>
        </Bloc>

        <p className="mt-9 text-center text-ink">
          <em>
            Rien n’est obligatoire : ces espaces sont simplement là pour te soutenir au fil de ton
            parcours.
          </em>
        </p>
      </PanneauFormule>
    ),
  },
  {
    label: "Premium 1:1",
    barreEnBas: true,
    contenu: (
      <PanneauFormule
        accroche="Ton parcours de 13 semaines devient beaucoup plus individualisé, avec un suivi personnel continu de ton cheminement, et des analyses personnalisées."
        inclus={[EXPLORATIONS, BIBLIOTHEQUE, COMMUNAUTE]}
        noteInclus={
          <>
            Les ressources de Circle <em>(Seulement si tu le souhaites)</em>
          </>
        }
      >
        <Bloc titre="Ton Accompagnement de proximité">
          {/* Le visuel coaching Premium, à côté de l'accompagnement de
              proximité qu'il illustre, comme Marion le voyait. */}
          {/* L'image prend la hauteur du texte (recadrée au besoin) : à
              largeur fixe, elle descendait bien plus bas que lui. */}
          <div className="grid gap-6 md:grid-cols-[1fr_200px]">
            <div className="flex flex-col gap-4">
              <ARetenir>
                Je lis régulièrement tes réponses aux questionnaires et je suis personnellement ton
                évolution tout au long des 13 semaines.
              </ARetenir>
              <p>
                <em>
                  Je repère ce qui émerge ou se répète dans ton cheminement : prises de conscience,
                  croyances, contradictions, blocages éventuels, fils rouges, angles morts...et je
                  fais les liens entre ce que tu vis, tes réponses, ton Human Design, tes analyses
                  et nos échanges.
                </em>
              </p>
            </div>
            <div className="relative mx-auto w-[200px] md:w-full">
              <Image
                src="/assets/reconnect/premium-coaching.webp"
                alt="Un coaching RECONNECT Premium 1:1 en visio"
                width={1122}
                height={1402}
                className="h-auto w-full rounded-[14px] object-cover shadow-card md:absolute md:inset-0 md:h-full"
              />
            </div>
          </div>
          <ARetenir>
            Ce regard extérieur me permet de nourrir et d’adapter nos 3 coachings individuels de
            1h30, qui viennent ponctuer ton parcours à raison d’un rendez-vous par mois, en fonction
            de ce qui se présente réellement pour toi au fil du chemin.
          </ARetenir>
          <p>
            Tu disposes également d’un{" "}
            <strong className="font-semibold">
              canal privé avec moi sur WhatsApp, 5 jours sur 7, sur des plages horaires définies
            </strong>
            , pour ne pas avoir à attendre le prochain coaching lorsqu’un questionnement, un doute
            ou un blocage se présente.
          </p>
          <p>
            <em>
              Et parce que mon accompagnement est aussi intuitif, des tirages de cartes peuvent
              également venir ponctuer nos échanges lorsque cela me semble pertinent. 🔮
            </em>
          </p>
          <MiniPreuve
            citation="Tu as réussi à dissiper la brume là où j’avais besoin d’un sacré coup de pouce...et je te remercie d’avoir eu le courage de me challenger, de ne pas me dire ce que je voudrais entendre, mais ce que j’ai besoin d’entendre. Ça, ça n’a pas de prix."
            source="Une cliente RECONNECT Premium 1:1, au fil du parcours ♡"
          />
        </Bloc>

        <Bloc titre={<>Tes deux analyses personnalisées : INSIDE &amp; Blooming.</>}>
          {/* Les deux analyses côte à côte : elles se suivent dans le parcours
              (1er puis 2e mois), le texte les présente en miroir. */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-[18px] border border-line px-5 py-5">
              <p>
                <strong className="font-semibold">
                  INSIDE, Le Guide d’Immersion dans ton Design Unique
                </strong>
                , vient enrichir ton premier mois pour approfondir la compréhension des 7 clés
                fondamentales de ton Human Design.
              </p>
              <p>
                Pas pour te mettre dans une case, mais pour t’offrir un niveau de lecture
                supplémentaire sur ton énergie, tes prises de décision, tes fonctionnements et tes
                besoins.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-[18px] border border-line px-5 py-5">
              <p>
                <strong className="font-semibold">Puis Blooming, Ta Fleur de Talents Innés™</strong>
                , issue d’une analyse croisée de ton Human Design, de ta Numérologie et de tes Gene
                Keys, intervient au cours du deuxième mois pour mettre en lumière tes talents, ta
                zone de génie et les directions professionnelles qui peuvent te correspondre.
              </p>
              <p>
                Ta Fleur te donne une vision d’ensemble de la façon dont tes différents talents
                s’articulent entre eux, de ce qui fait ta singularité et de la manière dont tout
                cela peut s’exprimer dans ta vie professionnelle.
              </p>
            </div>
          </div>
          <MiniPreuve
            citation="Le schéma HD + la Fleur de Talents Innés...WAW...oui je suis unique et j’ai la foi désormais que je peux totalement y arriver."
            source="Maryline, cliente RECONNECT Premium 1:1 ♡"
          />
        </Bloc>

        <p className="mt-9 text-center font-semibold">
          ✨️ Quelques attentions surprises viennent également ponctuer ton parcours.
        </p>
      </PanneauFormule>
    ),
  },
];

/** Les indicateurs d'un témoignage, en pastilles. */
function Indicateurs({ items }: { items: string[] }) {
  return (
    <span className="mt-7 flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-accent/70 bg-white px-3.5 pt-[7px] pb-[5px] font-body text-[10px] uppercase leading-none tracking-[0.12em] text-ink-deep"
        >
          {item}
        </span>
      ))}
    </span>
  );
}

type Formule = {
  nom: string;
  badge: string;
  vignette: string;
  accroche: ReactNode;
  prix: string;
  inclus: ReactNode[];
  href: string;
  note?: ReactNode;
  enAvant?: boolean;
};

const FORMULES: Formule[] = [
  {
    nom: "Solo",
    badge: "Autonomie",
    vignette: "/assets/reconnect/vignette-solo.webp",
    accroche: (
      <p>
        <strong className="font-semibold">
          Tu avances de ton côté, tout en étant guidé.e pas à pas dans ton cheminement.
        </strong>
      </p>
    ),
    prix: "444 €",
    inclus: [
      <>
        <strong className="font-semibold">👑 Les 13 Explorations Guidées RECONNECT</strong>
        <br />
        <span className="text-[15px] font-light">
          13 questionnaires introspectifs guidés, avec exercices, tests, mises en pratique,
          mini-analyses HD ciblées et éclairages ponctuels en Numérologie selon les étapes, ainsi
          qu’une méditation guidée intégrée au parcours.
        </span>
      </>,
    ],
    href: EXTERNAL.commandeReconnect.solo,
    note: (
      <em>
        Besoin de plus de soutien en cours de route? Jusqu’à la fin de ta 3e semaine, tu peux faire
        évoluer Solo vers Circle en réglant simplement la différence entre les deux formules, sans
        recommencer ton parcours.
      </em>
    ),
  },
  {
    nom: "Circle",
    badge: "Ressources & Collectif",
    vignette: "/assets/reconnect/vignette-circle.webp",
    accroche: (
      <p>
        <strong className="font-semibold">
          Tu soutiens ton cheminement grâce à des ressources complémentaires et à un espace
          collectif où partager ce qui émerge au fil du parcours.
        </strong>
      </p>
    ),
    prix: "777 €",
    inclus: [
      <strong key="e" className="font-semibold">
        👑 Les 13 Explorations Guidées RECONNECT
      </strong>,
      <>
        <strong className="font-semibold">💎 La Bibliothèque RECONNECT</strong>
        <br />
        <span className="text-[15px] font-light">
          Des ressources complémentaires pour t’aider à intégrer, traverser ou approfondir ce qui se
          joue pour toi au fil du parcours : EFT, méditations, reprogrammation, tips et outils
          pratiques/énergétiques.
          <br />
          <em>(Toutes téléchargeables)</em>
        </span>
      </>,
      <>
        <strong className="font-semibold">💬 La Communauté RECONNECT</strong>
        <br />
        <span className="text-[15px] font-light">
          Un espace collectif sur Telegram pour partager tes prises de conscience, tes doutes, tes
          difficultés et tes questions, échanger avec les autres membres et bénéficier de mes
          réponses asynchrones pendant tes 13 semaines.
        </span>
      </>,
      <em key="a" className="text-[15px]">
        Accès à la Communauté conservé après tes 13 semaines.
      </em>,
    ],
    href: EXTERNAL.commandeReconnect.circle,
    enAvant: true,
  },
  {
    nom: "Premium 1:1",
    badge: "Proximité & Personnalisation",
    vignette: "/assets/reconnect/vignette-premium.webp",
    accroche: (
      <>
        <p>
          <strong className="font-semibold">
            Le parcours guidé complet, avec suivi individuel continu, lecture personnalisée de ton
            cheminement et deux analyses sur mesure incluses.
          </strong>
        </p>
        <p>
          <em>
            Une safe place où tu peux te sentir écouté.e, vu.e et reconnu.e, et où l’on démêle
            ensemble ce que tu n’arrives pas à démêler seul.e.
          </em>
        </p>
      </>
    ),
    prix: "1 888 €",
    inclus: [
      <strong key="e" className="font-semibold">
        👑 Les 13 Explorations Guidées RECONNECT
      </strong>,
      <strong key="b" className="font-semibold">
        💎 La Bibliothèque RECONNECT
      </strong>,
      <>
        <strong className="font-semibold">💬 La Communauté RECONNECT</strong>{" "}
        <em>(non obligatoire)</em>
      </>,
      <strong key="c" className="font-semibold">
        3 coachings individuels de 1h30
      </strong>,
      <>
        <strong className="font-semibold">Mon regard individuel sur ton cheminement</strong>, avec
        une lecture régulière de tes réponses pour repérer les éventuels blocages ou angles morts,
        et nourrir nos coachings.
      </>,
      <>
        <strong className="font-semibold">Un canal de discussion privé avec moi</strong> sur
        WhatsApp, 5 jours sur 7, sur des plages horaires définies
      </>,
      <>
        <strong className="font-semibold">INSIDE &amp; Blooming</strong> : deux analyses
        entièrement personnalisées qui viennent jalonner ton parcours à des moments clés
      </>,
      <strong key="s" className="font-semibold">
        ✨ Et quelques surprises...
      </strong>,
    ],
    href: EXTERNAL.commandeReconnect.premium,
    note: "Une seule nouvelle place Premium 1:1 est ouverte chaque mois afin de préserver la profondeur, la disponibilité et la qualité de mon accompagnement individuel. Si la place du mois est déjà prise, tu peux rejoindre la liste d’attente pour être informé.e de la prochaine ouverture.",
  },
];

/** Le tableau récap : libellé, puis Solo, Circle, Premium 1:1. */
const COMPARATIF: [string, boolean, boolean, boolean][] = [
  ["13 Explorations Guidées RECONNECT", true, true, true],
  ["Exercices, tests + éclairages HD / Numérologie", true, true, true],
  ["La Bibliothèque RECONNECT", false, true, true],
  ["La Communauté RECONNECT", false, true, true],
  ["Mes réponses dans la Communauté pendant tes 13 semaines", false, true, true],
  ["Mon regard individuel sur tes réponses aux questionnaires", false, false, true],
  ["3 coachings individuels de 1h30", false, false, true],
  ["Canal privé 1:1 avec moi", false, false, true],
  ["INSIDE", false, false, true],
  ["Blooming", false, false, true],
];

const POUR_MOI = "Est-ce que RECONNECT est fait pour moi?";
const CONCRETEMENT = "Comment ça se passe concrètement?";
const FORMULE = "Quelle formule choisir?";
const INSCRIPTION = "Comment se passe l’inscription?";

const FAQ: FaqItem[] = [
  {
    groupe: POUR_MOI,
    q: "Est-ce que c’est fait pour moi si je suis encore en poste?",
    a: "Oui. Tu n’as pas besoin d’avoir quitté ton emploi pour commencer RECONNECT. Le parcours peut justement se vivre pendant que tu es encore en poste, pour prendre le temps d’explorer ce qui te correspond et clarifier la suite avant de prendre d’éventuelles décisions.",
  },
  {
    groupe: POUR_MOI,
    q: "Est-ce que RECONNECT peut m’aider si je n’ai aucune idée de ce que je veux faire...ou si j’ai déjà une piste?",
    a: "Oui, dans les deux cas.\nSi tu es encore dans le flou, RECONNECT t’aide à faire émerger progressivement des directions en phase avec qui tu es, sans jamais te donner une réponse toute faite.\nEt si une piste est déjà présente, le parcours t’aide à l’explorer à la lumière de ce que tu découvres sur toi, à comprendre pourquoi elle t’attire, à identifier les éventuels freins et à la rendre progressivement plus concrète.",
  },
  {
    groupe: POUR_MOI,
    q: "Et si, au bout des 13 semaines, je n’ai toujours pas trouvé ma voie?",
    a: (
      <>
        RECONNECT n’a pas pour promesse de faire apparaître magiquement un métier précis au bout de
        13 semaines.
        {"\n"}Selon ton point de départ, le parcours peut faire émerger une nouvelle direction,
        préciser une piste déjà présente, remettre en lumière un projet laissé de côté ou t’aider à
        comprendre beaucoup plus clairement ce que tu veux et ne veux plus pour la suite.
        {"\n"}Il est donc possible qu’à la fin des 13 semaines tu n’aies pas encore un intitulé de
        métier parfaitement défini.
        {"\n"}En revanche, l’objectif est que tu repartes avec une compréhension beaucoup plus fine
        de toi, de tes besoins, de tes moteurs et de ce qui a du sens pour toi, mais aussi avec des
        directions plus claires à explorer et davantage de matière pour faire des choix plus justes
        et remettre du mouvement dans ta vie professionnelle.
        {"\n"}
        <strong className="font-semibold">
          RECONNECT ne force pas une réponse avant qu’elle soit prête à émerger.
        </strong>
      </>
    ),
  },
  {
    groupe: POUR_MOI,
    q: "RECONNECT est-il surtout introspectif ou est-ce qu’il m’aide aussi à passer à l’action?",
    a: (
      <>
        Les deux.
        {"\n"}L’introspection est une partie essentielle du parcours, parce qu’il est difficile de
        construire une suite professionnelle qui te ressemble sans commencer par comprendre ce qui
        se joue réellement pour toi.
        {"\n"}Mais RECONNECT n’a pas vocation à rester dans la réflexion. Au fil des semaines, les
        prises de conscience viennent aussi nourrir des choix, des expérimentations, des décisions
        et des actions concrètes.
        {"\n"}
        <strong className="font-semibold">
          L’idée est justement de faire le lien entre ce qui bouge à l’intérieur...et ce que tu peux
          progressivement remettre en mouvement dans ta vie professionnelle.
        </strong>
      </>
    ),
  },
  {
    groupe: POUR_MOI,
    q: "En quoi RECONNECT est différent d’un bilan de compétences?",
    a: (
      <>
        Un bilan de compétences propose généralement une approche plus analytique et structurée
        autour de ton parcours, de tes compétences, de tes expériences, de ton projet et de sa
        faisabilité.
        {"\n"}RECONNECT adopte une approche différente et complémentaire : on ne regarde pas
        seulement ce que tu <strong className="font-semibold">SAIS</strong> faire ou les cases dans
        lesquelles tu pourrais éventuellement rentrer.
        {"\n"}C’est une autre porte d’entrée dans la transition professionnelle, plus
        introspective, expérientielle et multidimensionnelle.
        {"\n"}
        <em>
          Il peut d’ailleurs être pertinent après un bilan qui n’a pas suffi à dénouer certaines
          choses, ou tout simplement indépendamment d’un bilan.
        </em>
        {"\n"}L’idée de ce parcours guidé de 13 semaines est de t’amener à explorer plus largement
        qui tu es, tes fonctionnements, tes besoins, tes aspirations, tes ressentis, tes
        conditionnements et ce qui a réellement du sens pour toi.
        {"\n"}
        <em>Avec notamment certains éclairages issus du Human Design et de la Numérologie.</em>
        {"\n"}L’objectif n’est pas de décider à ta place, mais de t’aider à faire émerger une
        direction professionnelle qui te ressemble vraiment.
      </>
    ),
  },
  {
    groupe: POUR_MOI,
    q: "Est-ce que je dois déjà connaître le Human Design?",
    a: (
      <>
        <strong className="font-semibold">Absolument pas.</strong>
        {"\n"}Les éclairages Human Design présents dans le parcours sont expliqués, vulgarisés et
        guidés afin que tu puisses les comprendre même si tu débutes complètement.
        {"\n"}Dans Premium 1:1, INSIDE vient t’apporter un niveau de lecture beaucoup plus
        approfondi de ton schéma personnel, tandis que Blooming croise ton Human Design, ta
        Numérologie et tes Gene Keys pour mettre en lumière tes talents et ta singularité
        professionnelle.
        {"\n"}
        <em>
          Là encore, tu n’as besoin d’aucune connaissance préalable : tout est analysé et expliqué
          pour toi.
        </em>
      </>
    ),
  },
  {
    groupe: CONCRETEMENT,
    q: "Quand démarre RECONNECT et combien de temps dure le parcours?",
    a: "RECONNECT se déroule sur 13 semaines et démarre dès le lundi suivant ton inscription.\nChaque lundi, tu reçois une nouvelle étape directement par mail. Le parcours avance donc selon ce rythme hebdomadaire, mais tu restes libre d’organiser ton temps dans la semaine comme tu le souhaites.",
  },
  {
    groupe: CONCRETEMENT,
    q: "Combien de temps dois-je y consacrer par semaine?",
    a: "En moyenne, compte environ 1h30 par semaine pour remplir ton questionnaire hebdomadaire. Certaines semaines pourront te demander un peu plus ou un peu moins de temps, selon ce que tu explores et ta façon d’avancer.\nSi tu choisis Circle ou Premium 1:1, prévois également un peu de temps en plus pour explorer les ressources hebdomadaires de la Bibliothèque RECONNECT.\nEt en Premium 1:1, 3 coachings individuels de 1h30 viennent également s’ajouter au fil des 13 semaines.",
  },
  {
    groupe: CONCRETEMENT,
    q: "Et si je prends du retard ou que j’ai besoin de faire une pause?",
    a: (
      <>
        Le parcours, lui, continue : pendant 13 semaines, ton nouveau rendez-vous RECONNECT arrive
        chaque lundi dans ta boîte mail.
        {"\n"}Mais tu restes libre de faire une pause de ton côté et de reprendre lorsque tu te sens
        disponible. Tes mails sont conservés, les questionnaires restent accessibles et les
        ressources de ta Bibliothèque peuvent être retrouvées et téléchargées pour que tu puisses y
        revenir plus tard.
        {"\n"}
        <strong className="font-semibold">
          À garder simplement en tête pour Circle et Premium 1:1 : la période pendant laquelle je
          t’accompagne reste bien limitée à tes 13 semaines initiales.
        </strong>{" "}
        Une pause de ton côté ne décale donc pas automatiquement cette période.
        {"\n"}En Premium 1:1, les 3 coachings viennent également jalonner ces 13 semaines. Si tu
        prends du retard, l’idée sera donc de voir comment t’organiser pour profiter au mieux de ton
        accompagnement.
      </>
    ),
  },
  {
    groupe: CONCRETEMENT,
    q: "Comment fonctionne concrètement la Communauté RECONNECT?",
    a: "La Communauté RECONNECT est un espace d’échange asynchrone sur Telegram. Il n’y a pas de rendez-vous collectif en visio, ni de groupe qui démarre et avance exactement au même moment : chacun.e rejoint RECONNECT au moment qui lui convient, et suit ensuite ses propres 13 semaines.\nPendant ton parcours, tu peux y partager tes réflexions, tes prises de conscience et tes questions, et j’y suis également présente de manière asynchrone pour te répondre et t’apporter mon regard lorsque tu en ressens le besoin.\nAprès tes 13 semaines, tu conserves l’accès à la Communauté et peux continuer à consulter les discussions et à échanger avec les autres membres. Je peux toujours y intervenir ponctuellement, mais mes réponses personnelles ne sont alors plus incluses dans ton accompagnement.",
  },
  {
    groupe: FORMULE,
    q: "Est-ce que j’aurai les mêmes résultats quelle que soit la formule choisie?",
    a: (
      <>
        <strong className="font-semibold">
          Le cœur de RECONNECT est exactement le même dans les trois formules : les mêmes 13
          Explorations Guidées et le même cheminement semaine après semaine.
        </strong>
        {"\n"}Ce qui change, c’est tout ce qui vient entourer ce parcours : les ressources
        complémentaires, le soutien collectif ou encore le degré de proximité et de
        personnalisation.
        {"\n"}Je ne peux donc pas te promettre que les résultats seront exactement les mêmes d’une
        personne ou d’une formule à l’autre. Ton cheminement dépend aussi de ton point de départ, de
        ton implication et du niveau de soutien dont tu as besoin pour avancer.
        {"\n"}L’enjeu est surtout de choisir la formule qui correspond le mieux à ta manière
        d’avancer.
      </>
    ),
  },
  {
    groupe: FORMULE,
    q: "Puis-je changer de formule en cours de parcours?",
    a: "Si tu démarres avec Solo, tu peux faire évoluer ta formule vers Circle jusqu’à la fin de ta 3e semaine, en réglant simplement la différence de tarif entre les deux formules. Tu poursuis alors ton parcours exactement là où tu en étais, sans recommencer depuis le début, et tu accèdes également rétroactivement aux ressources de la Bibliothèque correspondant aux semaines déjà écoulées.\nEn revanche, il n’est pas possible de rejoindre Premium 1:1 en cours de parcours, que tu aies démarré avec Solo ou Circle.\nSi tu sens dès le départ que tu as besoin d’un accompagnement très individualisé et personnalisé, avec une vraie proximité, mieux vaut donc choisir Premium 1:1 dès ton inscription.",
  },
  {
    groupe: FORMULE,
    q: "Puis-je choisir Solo ou Circle et ajouter INSIDE ou Blooming à côté?",
    a: (
      <>
        Oui. INSIDE et Blooming restent disponibles séparément et peuvent tout à fait venir
        compléter ton parcours Solo ou Circle si tu souhaites aller plus loin dans la connaissance
        de ton Design ou bénéficier de l’analyse de ta Fleur de Talents Innés™.
        {"\n"}Ils sont directement inclus dans Premium 1:1, mais les acheter séparément avec Solo ou
        Circle ne transforme pas pour autant ces formules en Premium.
        {"\n"}
        <strong className="font-semibold">
          Les coachings associés à INSIDE et Blooming restent centrés sur ces deux analyses.
        </strong>{" "}
        Ils ne remplacent donc pas les coachings et le suivi individuel de ton cheminement inclus
        dans RECONNECT Premium 1:1.
      </>
    ),
  },
  {
    groupe: FORMULE,
    q: "Et si j’ai besoin de débloquer quelque chose avec toi sans choisir Premium 1:1?",
    a: "Solo et Circle n’incluent pas de séance individuelle ponctuelle à ajouter en cours de parcours.\nSi tu choisis Circle, tu peux en revanche utiliser l’espace collectif pendant tes 13 semaines pour partager tes réflexions, poser tes questions et bénéficier de mes réponses.\nSi tu ressens le besoin d’un accompagnement beaucoup plus individualisé, avec des coachings individuels et mon regard directement posé sur ton propre cheminement, c’est précisément ce que propose Premium 1:1.",
  },
  {
    groupe: INSCRIPTION,
    q: "Est-ce que je peux payer RECONNECT en plusieurs fois?",
    a: "Oui. Un paiement en plusieurs fois peut être proposé via PayPal, sous réserve d’éligibilité et selon les conditions qui te seront directement proposées par PayPal au moment du paiement.",
  },
  {
    groupe: INSCRIPTION,
    q: "Pourquoi n’y a-t-il qu’une seule nouvelle place Premium 1:1 par mois?",
    a: "Je limite volontairement RECONNECT Premium 1:1 à une seule nouvelle place par mois parce que je souhaite préserver la profondeur, la disponibilité et la qualité de mon accompagnement individuel tout au long des 13 semaines.\nEt si la place du mois est déjà prise, tu peux rejoindre la liste d’attente pour être informé.e de la prochaine ouverture.",
  },
];

/** Repères du menu à points, dans l'ordre de la page. */
const POINTS = [
  { id: "pour-qui", label: "RECONNECT est pour toi si…" },
  { id: "parcours", label: "Ce qu’est RECONNECT" },
  { id: "benefices", label: "Ce que RECONNECT peut t’apporter" },
  { id: "processus", label: "Comment se déroule RECONNECT" },
  { id: "temoignages", label: "Les témoignages" },
  { id: "tarif", label: "Les 3 formules" },
  { id: "faq", label: "FAQ" },
];

export default function ReconnectPage() {
  return (
    <VenteTheme {...THEME}>
      <SectionDots sections={POINTS} />

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      {/* Même premier écran que les autres pages : la promesse à gauche, le
          verbatim d'Émilie à droite, le questionnaire glissé sous son angle. */}
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
            {/* Le nom de l'offre vit dans le logo ; le h1 le redonne aux
                lecteurs d'écran et à l'indexation. */}
            <h1 className="sr-only">RECONNECT</h1>
            <Reveal>
              <Image
                src="/assets/logo-reconnect.webp"
                alt="RECONNECT"
                width={500}
                height={500}
                priority
                className="mx-auto h-auto w-[200px] md:w-[230px]"
              />
              <p className="mx-auto mt-6 max-w-[520px] font-display text-[24px] font-light uppercase leading-[1.25] tracking-[0.04em] text-ink-deep md:text-[28px]">
                Ton Parcours Guidé de Transformation Professionnelle
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className="mx-auto mt-6 max-w-[540px] font-display text-[20px] font-light italic leading-snug text-ink-deep md:text-[22px]">
                ~ Un parcours guidé de 13 semaines pour te reconnecter à toi, clarifier ta direction
                et remettre du mouvement vers une vie professionnelle qui te ressemble et qui a du
                sens pour toi. ~
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-[540px] font-display text-[17px] font-light leading-relaxed text-ink md:text-[18px]">
                Tu sens que quelque chose a besoin d’évoluer dans ta vie pro.{" "}
                <em>Peut-être même que tu le ressens depuis longtemps.</em> Mais entre sentir ce
                décalage...et savoir où aller, ce que tu veux vraiment, ce que tu as à apporter, puis
                transformer tout cela en choix et en actions concrètes, il peut y avoir tout un monde
                à explorer.
              </p>
              <p className="mx-auto mt-5 max-w-[540px] font-display text-[18px] font-semibold leading-relaxed text-ink-deep md:text-[19px]">
                RECONNECT est un parcours guidé pour faire ce chemin.
                <br />
                <span className="font-light italic text-ink">
                  Pas à pas. Une semaine après l’autre.
                </span>
              </p>
              <Cta href="#tarif" className="mt-9">
                Je veux découvrir RECONNECT
              </Cta>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative lg:pt-14">
            {/* Pied de carte allongé : le mockup a un fond plein, il ne doit
                mordre que sur ce blanc, jamais sur le verbatim. */}
            <figure className="relative z-10 mx-auto max-w-[480px] rounded-[28px] border border-line bg-white/95 p-6 pb-12 shadow-simu backdrop-blur-sm sm:pb-14 md:p-8 md:pb-16 lg:ml-0">
              <PetalHalo />
              <figcaption>
                <span className="flex items-center gap-3.5">
                  <Image
                    src="/assets/temoignages/Emilie-reconnect.webp"
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="h-12 w-12 flex-none rounded-full object-cover"
                  />
                  <span className="font-script text-[24px] leading-none text-accent-texte">
                    Émilie
                  </span>
                </span>
              </figcaption>

              <blockquote className="mt-5 flex flex-col gap-3.5 font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
                <p>
                  &quot;Durant ces 3 mois, j’ai pu poser des mots sur ce que j’étais, j’ai pu
                  identifier mes talents, valeurs, besoins et peurs. J’ai eu des prises de
                  conscience, des confirmations et des révélations.
                </p>
                <p>
                  RECONNECT a été d’une puissance étonnante. J’ai pu mettre en place un projet de
                  cœur que je voulais secrètement depuis des années.&quot;
                </p>
              </blockquote>
            </figure>
            {/* Le questionnaire « Favori » de Marion, sous la carte et non plus
                dans son angle : petit et décentré, il laissait un grand vide
                sous le verbatim à côté d'une colonne de texte bien plus haute. */}
            <div className="relative z-20 mx-auto -mt-8 max-w-[480px] lg:ml-0">
              <Image
                src="/assets/reconnect/questionnaire-favori.webp"
                alt="Un questionnaire RECONNECT ouvert sur un ordinateur, carnet de notes à côté"
                width={1122}
                height={1402}
                priority
                className="pointer-events-none mr-4 ml-auto block h-auto w-[170px] rotate-3 rounded-[14px] border-4 border-white shadow-card sm:mr-8 sm:w-[200px] lg:-mr-6 lg:w-[250px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* POUR QUI                                                         */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="pour-qui" bg="white" wide>
        <SectionHeader
          eyebrow="RECONNECT est pour toi si…"
          title="Tu aimerais enfin te sentir vraiment à ta place"
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Portraits en tête sur mobile, un seul : empilés, ils repoussaient
              la première note d'un écran entier. */}
          <Reveal
            delay={80}
            className="order-first flex flex-col items-center gap-8 lg:order-last lg:gap-10 lg:self-center"
          >
            <Image
              src="/assets/reveal/marion-blazer.webp"
              alt="Marion Chartier"
              width={900}
              height={1213}
              className="aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card"
            />
            {/* Trois portraits sur desktop : les notes empilées allongent la
                colonne de texte, deux laissaient un vide sous eux. */}
            <Image
              src="/assets/inside/marion-lecture.webp"
              alt=""
              aria-hidden
              width={900}
              height={1273}
              className="hidden aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card lg:block"
            />
            <Image
              src="/assets/inside/marion-mer.webp"
              alt=""
              aria-hidden
              width={900}
              height={1237}
              className="hidden aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card lg:block"
            />
          </Reveal>

          <div>
            <ProfilsNotes profils={PROFILS} empile />

            <Reveal className="mt-12">
              <p className="max-w-[640px] font-display text-[18px] font-light leading-relaxed text-ink md:text-[19px]">
                Et peut-être que tu as déjà beaucoup cherché : bilan de compétences, tests, coaching,
                introspection...sans trouver les réponses, la clarté ou l’élan que tu attendais.
              </p>
              <p className="mt-4 max-w-[640px] font-display text-[18px] font-light italic leading-relaxed text-ink md:text-[19px]">
                Au point peut-être de te demander parfois si le problème ne venait pas de toi, si tu
                n’étais pas trop difficile, trop indécis.e...ou simplement &quot;un cas à part&quot;.
              </p>
              <p className="mt-7 max-w-[640px] font-display text-[20px] font-semibold leading-relaxed text-ink-deep">
                Et si, simplement, il restait une autre façon d’explorer tout ça...en te prenant,
                TOI, comme point de départ?
              </p>
              <Cta href="#tarif" className="mt-10">
                Je veux me sentir à ma place
              </Cta>
            </Reveal>
          </div>
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* CE QU'EST RECONNECT                                              */}
      {/* ---------------------------------------------------------------- */}
      {/* Le bloc le plus long de la page, découpé en quatre temps : la
          conviction, l'histoire de Marion (encart à part, à lire comme un
          récit), « Pas un énième bilan » en carte contrastée, puis l'aparté
          « parfois ça remue ». Tout le texte reste visible. */}
      <VenteSection id="parcours" bg="paper" decor={<PetalField dense />}>
        <Reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Ce qu’est RECONNECT
          </p>
          <PetalDivider centered={false} className="mt-7" />
          <h2 className="mt-6 font-display text-[28px] font-light leading-[1.2] text-ink-deep md:text-[38px]">
            Un parcours guidé en 13 étapes pour explorer ce qui a besoin de bouger dans ta vie
            professionnelle...
            <em className="italic text-ink">et faire émerger la suite.</em>
          </h2>
        </Reveal>

        <div className="mt-10 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
          <Reveal className="grid items-center gap-8 md:grid-cols-[1fr_250px] md:gap-12">
            <div>
              <p>
                RECONNECT part d’une conviction simple : pour construire une vie professionnelle qui
                te ressemble, on ne peut pas regarder uniquement ton CV, tes compétences, les métiers
                qui recrutent, ou ce que ton mental considère comme &quot;raisonnable&quot;.
              </p>
              <p className="mt-4">
                <strong className="font-semibold text-ink-deep">Ça ne fonctionne pas.</strong>
              </p>
              <p className="mt-4">
                <em>
                  Et si j’en suis aussi convaincue aujourd’hui, c’est parce que je me suis moi-même
                  cherchée professionnellement pendant des années.
                </em>
              </p>
            </div>

            <Image
              src="/assets/reconnect/questionnaire-favori.webp"
              alt="Un questionnaire RECONNECT ouvert sur un ordinateur, carnet de notes à côté"
              width={1122}
              height={1402}
              className="mx-auto h-auto w-[210px] rounded-[14px] shadow-card md:w-full"
            />
          </Reveal>

          {/* L'histoire de Marion, en récit : carte blanche, titre manuscrit,
              et ses deux questions d'alors détachées en exergue. */}
          <Reveal className="mt-12 rounded-[28px] border border-line bg-white/85 px-6 py-9 shadow-card md:px-12 md:py-12">
            <p className="font-script text-[30px] leading-none text-ink-deep md:text-[34px]">
              Rétrospective de mon histoire.
            </p>
            <p className="mt-7">
              Pendant des années, j’ai été ingénieure R&amp;D (Recherche &amp; Développement) dans de
              grandes multinationales. Le fond de mon métier me plaisait vraiment. Mais le contexte
              et la façon de l’exercer...beaucoup moins.{" "}
              <em>
                La hiérarchie, le manque d’autonomie, cette sensation d’être un pion dans une grosse
                machine...et surtout, le manque de sens.
              </em>{" "}
              <strong className="font-semibold text-ink-deep">
                Tout ça m’étouffait à petits feux.
              </strong>
            </p>
            <p className="mt-4">
              Puis mon entreprise a fermé. J’aurais pu reprendre le même type de poste ailleurs.
              C’était la suite logique. La voie raisonnable. Sauf que...non. 😅 Je sentais bien que le
              changement toquait à ma porte...
              <em>
                avec, évidemment, la flippe qui va avec à l’idée de devoir naviguer dans le brouillard
                vers une destination inconnue.
              </em>
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Super! Mais du coup...je voulais faire quoi? Aucune idée. Le flou TOTAL.
              </strong>
            </p>
            <p className="mt-4">
              Alors j’ai cherché.{" "}
              <strong className="font-semibold text-ink-deep">Pendant 5 ans.</strong>{" "}
              <em>Livres, bilans de compétences, coachings, différents métiers testés...</em>
              J’ai avancé, reculé, pensé avoir trouvé, changé d’avis, recommencé.{" "}
              <strong className="font-semibold text-ink-deep">
                Bref, je me suis beaucoup cherchée professionnellement!
              </strong>
            </p>
            <p className="mt-4">
              <em>
                Et plus le temps passait, plus je ressentais une espèce de honte et de culpabilité qui
                me rongeait de l’intérieur...
              </em>
            </p>

            <div className="my-8 flex flex-col gap-5 border-l-2 border-accent pl-5 md:pl-7">
              <p className="font-display text-[19px] italic leading-relaxed text-ink-deep md:text-[21px]">
                &quot;Pourquoi je n’arrive pas à &quot;juste&quot; me contenter d’un CDI bien payé et
                d’une vie qui, sur le papier, est censée me rendre heureuse?&quot;
              </p>
              <p className="font-display text-[19px] italic leading-relaxed text-ink-deep md:text-[21px]">
                &quot;Pourquoi MOI je n’arrive pas à trouver une place où je me sente VRAIMENT au bon
                endroit dans ma vie pro, alors que j’ai l’impression que tous les autres y arrivent
                ou au moins se satisfont de ce qu’ils ont?&quot;
              </p>
            </div>

            <p>
              <strong className="font-semibold text-ink-deep">
                Et puis le Human Design est entré dans ma vie.
              </strong>{" "}
              Spoiler : Non, il ne m’a pas soufflé à l’oreille le nom du métier parfait que je devais
              faire. 😄
            </p>
            <p className="mt-4">
              Par contre...il m’a offert une nouvelle grille de lecture pour mieux me comprendre,
              remettre du sens sur certaines choses et relier des points que je n’arrivais pas à
              relier jusque-là.
            </p>
            <p className="mt-4">Et petit à petit, les pièces ont commencé à s’emboîter autrement.</p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Et aujourd’hui, après tous ces détours, je peux enfin dire que je me sens à ma place
                dans ma vie pro.
              </strong>{" "}
              <em>Et franchement...c’était loin d’être gagné! 😄</em>
              <br />
              Pas parce que j’ai trouvé LE métier parfait pour le reste de ma vie. Mais parce que
              j’ai appris à mieux me connaître, à comprendre ce dont j’avais besoin...et à construire
              petit à petit une vie pro qui me ressemble.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <p className="text-[18px] md:text-[20px]">
              <strong className="font-semibold text-ink-deep">
                Et RECONNECT est né de ce chemin-là.
              </strong>
              <br />
              Pas d’une méthode miracle qui m’aurait donné LA réponse...mais de plusieurs années de
              quête, de questionnements, d’explorations, de déconstructions, d’expérimentations et de
              formations à différents outils et méthodes.
            </p>
            <p className="mt-4">
              Je l’ai imaginé comme le{" "}
              <strong className="font-semibold text-ink-deep">
                cheminement transformationnel et multidimensionnel
              </strong>{" "}
              que j’aurais moi-même aimé vivre à cette époque...
              <em>
                pour t’éviter quelques (gros) détours, quelques murs...et surtout{" "}
                <strong className="font-semibold text-ink-deep">te faire gagner du temps!</strong>
              </em>
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Et oui...j’y ai mis énormément de moi et beaucoup de cœur. 💜
              </strong>
            </p>
          </Reveal>

          <PetalDivider full className="my-12" />

          {/* « Pas un énième bilan » : la carte contrastée de la section,
              dans la teinte du thème. */}
          <Reveal className="rounded-[28px] border border-accent/60 bg-accent-soft px-6 py-9 md:px-12 md:py-12">
            <h3 className="font-display text-[24px] font-semibold leading-snug text-ink-deep md:text-[28px]">
              Pas un énième bilan de compétences
            </h3>
            <p className="mt-5">
              RECONNECT ne repose pas sur l’idée qu’une recherche d’alignement professionnel serait
              une quête purement mentale, analytique et stratégique.
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Ici, on ouvre une autre porte d’entrée dans la transition professionnelle, plus
                introspective, expérientielle et multidimensionnelle.
              </strong>
            </p>
            <p className="mt-4">
              L’idée de ce parcours, c’est justement d’aller plus loin : te reconnecter à TOI, dans
              ton entièreté.
            </p>
            <p className="mt-4">
              <em>
                On ne vient pas seulement regarder ce que tu sais faire. On vient également explorer
                ton ressenti, ton fonctionnement personnel, ton histoire, tes besoins, ton identité,
                tes aspirations profondes, tes valeurs, tes talents, tes peurs, tes conditionnements,
                ton corps, ton énergie...
              </em>
            </p>
            <p className="mt-4">
              Et pour aller encore plus loin dans ce chemin introspectif, RECONNECT s’appuie
              volontairement sur des outils puissants de connaissance de soi, comme{" "}
              <strong className="font-semibold text-ink-deep">le Human Design</strong> et, plus
              ponctuellement, <strong className="font-semibold text-ink-deep">la Numérologie</strong>.
            </p>
            <p className="mt-4">
              Ces mini-analyses et éclairages, intégrés au cœur du parcours, apportent un angle de
              lecture supplémentaire,{" "}
              <strong className="font-semibold text-ink-deep">pas pour décider à ta place</strong>,
              mais pour t’aider à mettre de la conscience, des mots et du sens sur ce que tu ressens
              déjà parfois sans réussir à l’expliquer.
            </p>
            <p className="mt-4">
              <em>
                Et parce que l’intuition fait aussi partie de ma façon d’accompagner, elle peut
                également venir nourrir certains échanges et éclairages au fil du parcours, sans
                jamais se substituer à ton propre ressenti ni à tes décisions.
              </em>
            </p>
          </Reveal>

          {/* L'aparté : plus léger que la carte précédente, en pointillé. */}
          <Reveal className="mt-10 rounded-[28px] border border-dashed border-ink-lilac/50 px-6 py-8 md:px-12 md:py-10">
            <p>
              <strong className="font-semibold text-ink-deep">Et oui, parfois...ça remue.</strong>
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                RECONNECT est un cheminement vivant, pas une succession de petits exercices &quot;feel
                good&quot;.
              </strong>{" "}
              <em>
                Alors oui, c’est un parcours ludique, qui peut être grisant, reboostant,
                surprenant...mais je ne vais pas te vendre 13 semaines de paillettes non plus. 😄
              </em>
            </p>
            <p className="mt-4">
              Certaines explorations peuvent chatouiller un peu, gratter là où c’est moins
              confortable, réveiller certaines émotions ou encore mettre en lumière quelque chose
              qu’on aurait volontiers laissé sous le tapis. 🫣
            </p>
            <p className="mt-4">
              <em>
                Tu restes évidemment libre de ralentir, de reporter une exploration ou de ne pas
                creuser un sujet si quelque chose ne semble pas juste pour toi.
              </em>
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                L’objectif n’est jamais de forcer, mais de t’aider à regarder avec honnêteté ce qui
                se joue pour toi, à identifier ce qui te bloque aujourd’hui...et à avancer avec plus
                de clarté.
              </strong>
            </p>
          </Reveal>
        </div>

        <Reveal className="pt-14 text-center">
          <p className="mx-auto max-w-[680px] font-display text-[19px] font-semibold leading-relaxed text-ink-deep md:text-[21px]">
            Et parce qu’on n’a pas tous besoin du même niveau de soutien pour traverser ce
            cheminement, j’ai imaginé 3 façons différentes de vivre RECONNECT.
          </p>
          <Cta href="#tarif" className="mt-9">
            Je découvre les 3 options
          </Cta>
        </Reveal>
      </VenteSection>

      <CitationBand tone="soft">
        «&nbsp;Tu n’as pas besoin de savoir exactement où tu vas pour commencer à construire une
        vie pro qui te ressemble.&nbsp;»
      </CitationBand>

      {/* ---------------------------------------------------------------- */}
      {/* BÉNÉFICES                                                        */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="benefices" bg="accent" wide decor={<PetalField />}>
        <SectionHeader
          eyebrow="Ce que RECONNECT peut t’apporter"
          title="Qu’est-ce que ce parcours guidé de 13 semaines peut changer pour TOI concrètement?"
        />
        <Reveal className="mt-6 text-center">
          <p className="font-display text-[18px] font-light italic text-ink md:text-[20px]">
            Plus de clarté, plus de conscience...et l’élan pour avancer.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-[1000px]">
          <LivrablesGrid livrables={BENEFICES} />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* PROCESSUS                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* Trois temps : le rendez-vous du lundi et ses 4 étapes, les mots des
          clientes, puis les formules (« En très simple », et le détail en
          onglets pour ne pas empiler trois écrans de texte). */}
      <VenteSection id="processus" bg="lavender" wide>
        <SectionHeader
          eyebrow="Comment se déroule RECONNECT"
          title="De ton inscription à la semaine 13, voici comment se passe concrètement ton parcours."
        />

        <Reveal className="mx-auto mt-12 grid max-w-[1000px] items-center gap-10 font-display text-[17px] font-light leading-relaxed text-ink md:grid-cols-[1fr_260px] md:text-[18px]">
          <div>
            <p>
              RECONNECT démarre <em>dès le lundi suivant ton inscription.</em> Et pendant 13
              semaines, ce <strong className="font-semibold text-ink-deep">&quot;rendez-vous du
              lundi&quot;</strong> vient rythmer ton cheminement, directement depuis ta boîte mail. 💌
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Pendant 13 semaines, tu avances à travers 13 thématiques d’exploration différentes,
                pensées comme les étapes d’un même cheminement. Chacune vient nourrir la suivante,
                pour te faire avancer progressivement tout au long du parcours.
              </strong>
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-ink-deep">
                Et ce n’est pas un simple email avec un lien posé dedans.
              </strong>{" "}
              Tu y découvres la nouvelle étape du parcours, quelques clés pour plonger dans la
              thématique de la semaine et ton Exploration Guidée.
            </p>
          </div>
          <Image
            src="/assets/reconnect/questionnaire-2.webp"
            alt="Un questionnaire RECONNECT en cours de saisie sur un ordinateur"
            width={1122}
            height={1402}
            className="mx-auto h-auto w-[220px] rounded-[14px] shadow-card md:w-full"
          />
        </Reveal>

        <ol className="mx-auto mt-14 grid max-w-[1000px] gap-5 md:grid-cols-2">
          {ETAPES.map((etape, i) => (
            <Reveal
              as="li"
              key={etape.titre}
              delay={i * 80}
              className="rounded-[28px] border border-line bg-white/85 p-7 shadow-card md:p-8"
            >
              <span className="font-display text-[34px] font-light leading-none text-accent-texte [font-variant-numeric:lining-nums]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[20px] font-semibold leading-snug text-ink-deep md:text-[22px]">
                {etape.titre}
              </h3>
              <div className="mt-4 flex flex-col gap-3 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                {etape.texte}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mx-auto mt-14 max-w-[1000px]">
          <p className="text-center font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            Leurs mots sur l’expérience ♡
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {VOIX.map((voix, i) => (
              <figure
                key={i}
                className="flex flex-col justify-between rounded-[22px] bg-white/70 p-6 text-center"
              >
                <blockquote className="font-display text-[16px] italic leading-relaxed text-ink-deep md:text-[17px]">
                  &quot;{voix.citation}&quot;
                </blockquote>
                {/* Le prénom seul en manuscrit : sur toute la ligne, l'écriture
                    devenait illisible ; le reste passe en petites capitales. */}
                <figcaption className="mt-5 text-accent-texte">
                  <span className="block font-script text-[26px] leading-none">
                    {voix.source.split(", ")[0]}
                  </span>
                  <span className="mt-2 block font-body text-[10px] uppercase leading-relaxed tracking-[0.16em]">
                    {voix.source.split(", ").slice(1).join(", ")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <PetalDivider full className="mx-auto my-16 max-w-[1000px]" />

        {/* Les formules, d'abord en une phrase chacune. */}
        <Reveal className="mx-auto max-w-[1000px] text-center font-display text-[17px] font-light leading-relaxed text-ink md:text-[18px]">
          <p className="text-[19px] md:text-[21px]">
            <strong className="font-semibold text-ink-deep">
              Ce fil rouge que tu viens de découvrir est commun aux 3 déclinaisons de RECONNECT :
              Solo, Circle et Premium 1:1.
            </strong>
          </p>
          <p className="mx-auto mt-4 max-w-[780px]">
            Selon la formule que tu choisis, le cœur du parcours peut ensuite être enrichi par des
            ressources complémentaires, du soutien en collectif ou par un accompagnement individuel
            beaucoup plus rapproché et des analyses personnalisées.
          </p>
          <p className="mt-10 font-display text-[22px] italic text-ink-deep">En très simple :</p>
        </Reveal>

        <div className="mx-auto mt-6 grid max-w-[1000px] gap-5 md:grid-cols-3">
          {EN_SIMPLE.map((formule, i) => (
            <Reveal
              key={formule.nom}
              delay={i * 80}
              className="rounded-[24px] border border-accent/60 bg-white/80 p-6 text-center"
            >
              <p className="font-body text-[11px] uppercase tracking-[0.22em] text-accent-texte">
                {formule.nom}
              </p>
              <p className="mt-3 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]">
                {formule.texte}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-[900px]">
          <h3 className="text-center font-display text-[24px] font-semibold text-ink-deep md:text-[28px]">
            Dans le détail :
          </h3>
          <div className="mt-8">
            <Onglets onglets={DETAIL_FORMULES} />
          </div>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TÉMOIGNAGES                                                      */}
      {/* ---------------------------------------------------------------- */}
      {/* Un troisième témoignage arrive : il s'ajoutera à la suite, portrait à
          droite (`inverse`) pour garder l'alternance. */}
      <VenteSection id="temoignages" bg="white" wide>
        <SectionHeader filet={false} title="Leurs mots valent plus qu’un long discours. ♡" />
        <Reveal className="mt-5 text-center">
          <p className="font-display text-[17px] font-light italic text-ink md:text-[18px]">
            Les témoignages ci-dessous ont été recueillis auprès de clientes ayant vécu RECONNECT
            dans sa version Premium 1:1.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 flex max-w-[1000px] flex-col gap-16">
          <TemoignageHero
            photo="/assets/temoignages/Justine-reconnect.webp"
            nom="Justine"
            contexte="★★★★★"
            texte={
              <>
                <span className="block">
                  &quot;Cela fait plusieurs années maintenant que je fais des coachings
                  professionnels, des bilans de compétences, des tests de personnalité, thème astral,
                  numérologie etc...pour essayer de trouver ma voie professionnelle. C’est donc en
                  toute connaissance de cause que je peux affirmer que Reconnect est
                  l’accompagnement le plus complet que j’ai fait jusqu’à présent.&quot;
                </span>
                <span className="mt-6 block rounded-[20px] bg-accent-soft px-5 py-5 text-left">
                  <span className="block font-body text-[11px] uppercase tracking-[0.18em] text-accent-texte">
                    À propos des questionnaires
                  </span>
                  <span className="mt-2 block italic">
                    &quot;Dans le questionnaire, il y a plein de questions qu’on ne se pose jamais
                    et/ou qu’on ne nous a jamais posées en accompagnement, c’est vraiment différent
                    des accompagnements &quot;classiques&quot;, et encore une fois ça amène à se
                    questionner sur des sujets qu’on pensait connaître mais qui sont flous en
                    réalité...&quot;
                  </span>
                </span>
                <span className="mt-6 block">
                  &quot;En fait, TOUT est vraiment mélangé et recoupé en un accompagnement hyper
                  puissant parce que Marion maîtrise ses sujets et grâce à elle et à ses coachings
                  on avance vraiment. Il y a un avant et un après l’accompagnement. J’ai appris
                  énormément de choses que je ne soupçonnais même pas sur moi alors que vraiment
                  cela fait plusieurs années que je fais tous les tests de personnalité
                  possibles^^ et inversement cela m’a aussi conforté dans certains choix
                  professionnels.&quot;
                </span>
                <strong className="mt-6 block font-semibold">
                  &quot;Je recommande les yeux fermés, à mon sens c’est vraiment l’accompagnement le
                  plus complet que j’ai pu vivre jusqu’à maintenant.&quot;
                </strong>
                <Indicateurs
                  items={[
                    "5/5 satisfaction globale",
                    "Moins de peurs",
                    "Moins de croyances limitantes",
                    "Plus de confiance",
                  ]}
                />
              </>
            }
          />

          <TemoignageHero
            photo="/assets/temoignages/Emilie-reconnect.webp"
            nom="Émilie"
            contexte="★★★★★"
            inverse
            texte={
              <>
                <span className="block">
                  &quot;Je viens de terminer l’Accompagnement Reconnect de 3 mois proposé par La Vie
                  en HD de Marion Chartier et celui-ci a été d’une puissance étonnante. Entre prises
                  de conscience, confirmations et révélations, Marion a su poser les bonnes
                  questions, donner les bons conseils et me guider vers une vie professionnelle plus
                  épanouie. Sans avoir besoin de faire un virage à 180°, j’ai pu ajuster la
                  trajectoire et mettre en place un projet de cœur que je voulais secrètement
                  depuis des années. Merci Marion d’avoir créé cet accompagnement personnalisé et de
                  m’avoir accompagnée avec autant de bienveillance et clairvoyance.&quot;
                </span>
                <Indicateurs
                  items={[
                    "5/5 satisfaction globale",
                    "Intention de départ atteinte",
                    "En route vers sa vie pro idéale",
                    "Actions concrètes déjà engagées",
                  ]}
                />
              </>
            }
          />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* ACHAT                                                            */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="tarif" bg="accent" wide decor={<PetalField dense />}>
        <SectionHeader
          eyebrow="Un même parcours. Trois façons de le vivre."
          title="Choisis la formule qui te correspond le mieux."
        />
        <Reveal className="mx-auto mt-8 max-w-[780px] text-center font-display text-[17px] font-light leading-relaxed text-ink md:text-[19px]">
          <p>
            <strong className="font-semibold text-ink-deep">
              Les 3 formules donnent accès au même cheminement de fond pendant 13 semaines et aux
              mêmes 13 Explorations Guidées RECONNECT.
            </strong>
          </p>
          <p className="mt-4">
            Le cœur du parcours reste le même. Ce qui change d’une formule à l’autre, ce sont les
            ressources, le soutien et le degré de proximité et de personnalisation.
          </p>
        </Reveal>

        {/* Circle en avant, comme sur la maquette de Marion : par son cadre et
            son ombre, plus par un décalage vertical.

            Sur desktop, chaque carte est une sous-grille : les 5 premières
            rangées (vignette → prix) sont partagées, les prix tombent donc à
            la même hauteur malgré des accroches de longueurs différentes. La
            6e rangée (liste, bouton) n'est pas étirée : chaque carte s'arrête
            à son contenu. Une sous-grille s'étire forcément sur toutes ses
            rangées, alors la carte elle-même est transparente et son fond est
            fait de deux pièces : le haut, étiré sur les rangées partagées, et
            le bas, à sa hauteur naturelle. L'ombre est un `drop-shadow` sur
            l'ensemble, qui épouse les deux pièces sans couture. */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          {FORMULES.map((formule, i) => {
            const bordure = formule.enAvant ? "border-ink-deep/40" : "border-line";
            return (
              <Reveal
                key={formule.nom}
                delay={i * 80}
                className={`relative flex flex-col rounded-[28px] border bg-white px-6 pt-8 pb-8 text-center md:px-8 lg:row-span-6 lg:grid lg:grid-rows-subgrid lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${bordure} ${
                  formule.enAvant
                    ? "shadow-simu lg:drop-shadow-[0_24px_32px_rgba(80,60,98,0.14)]"
                    : "shadow-card lg:drop-shadow-[0_14px_22px_rgba(80,60,98,0.10)]"
                }`}
              >
                <div
                  aria-hidden
                  className={`hidden rounded-t-[28px] border border-b-0 bg-white lg:col-start-1 lg:row-[1/6] lg:block ${bordure}`}
                />
                <Image
                  src={formule.vignette}
                  alt=""
                  aria-hidden
                  width={600}
                  height={600}
                  className="mx-auto h-auto w-[150px] lg:col-start-1 lg:row-start-1 lg:mt-8"
                />
                <p className="mt-4 font-body text-[10px] uppercase tracking-[0.22em] text-accent-texte lg:col-start-1 lg:row-start-2 lg:px-8">
                  {formule.badge}
                </p>
                <h3 className="mt-2 font-display text-[24px] font-semibold text-ink-deep lg:col-start-1 lg:row-start-3 lg:px-8">
                  RECONNECT · {formule.nom}
                </h3>
                <div className="mt-3 flex flex-col gap-2 font-display text-[16px] leading-relaxed text-ink-deep lg:col-start-1 lg:row-start-4 lg:px-8">
                  {formule.accroche}
                </div>
                <p className="mt-5 font-display text-[44px] font-light leading-none text-ink-deep [font-variant-numeric:lining-nums] lg:col-start-1 lg:row-start-5 lg:px-8">
                  {formule.prix}
                </p>
                <div
                  className={`flex flex-1 flex-col lg:col-start-1 lg:row-start-6 lg:self-start lg:rounded-b-[28px] lg:border lg:border-t-0 lg:bg-white lg:px-8 lg:pb-8 ${bordure}`}
                >
                  <ul className="mt-6 flex flex-col gap-3.5 border-t border-line pt-6 text-left font-display text-[16px] leading-relaxed text-ink-deep">
                    {formule.inclus.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Cta href={formule.href} external>
                      Je choisis {formule.nom}
                    </Cta>
                    <p className="mt-3 font-display text-[14px] italic leading-snug text-ink-soft">
                      Paiement en plusieurs fois possible via PayPal sous réserve d’éligibilité.
                    </p>
                    {formule.note && (
                      <p className="mt-4 rounded-[16px] bg-accent-soft px-4 py-3 text-left font-display text-[14px] leading-snug text-ink-deep">
                        {formule.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Le tableau récap auquel Marion tient : un vrai tableau, lisible
            jusqu'en 375px sans défilement horizontal. */}
        <Reveal className="mx-auto mt-16 max-w-[900px] overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
          <table className="w-full border-collapse text-ink-deep">
            <caption className="sr-only">Comparatif des formules RECONNECT</caption>
            <thead>
              <tr className="bg-[#665b74] text-white">
                <th scope="col" className="w-[46%] p-3 md:p-4" />
                {["Solo", "Circle", "Premium 1:1"].map((nom) => (
                  <th
                    key={nom}
                    scope="col"
                    className="p-2 font-body text-[10px] font-normal uppercase tracking-[0.14em] md:p-4 md:text-[11px]"
                  >
                    {nom}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-display text-[14px] leading-snug md:text-[17px]">
              {COMPARATIF.map(([libelle, ...valeurs]) => (
                <tr key={libelle} className="border-t border-line">
                  <th scope="row" className="p-3 text-left font-normal md:px-6 md:py-4">
                    {libelle}
                  </th>
                  {valeurs.map((inclus, j) => (
                    <td key={j} className="p-2 text-center md:p-4">
                      {inclus ? (
                        <span className="text-[18px] text-accent-texte">✓</span>
                      ) : (
                        <span className="text-ink-soft">-</span>
                      )}
                      <span className="sr-only">{inclus ? "inclus" : "non inclus"}</span>
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-line bg-accent-soft">
                <th scope="row" className="p-3 text-left font-semibold md:px-6 md:py-4">
                  Tarif
                </th>
                {["444 €", "777 €", "1 888 €"].map((prix) => (
                  <td
                    key={prix}
                    className="p-2 text-center font-semibold [font-variant-numeric:lining-nums] md:p-4"
                  >
                    {prix}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>

        <Reveal className="mt-6 text-center font-display text-[15px] leading-relaxed text-ink">
          <p className="italic">
            Paiement en plusieurs fois possible via PayPal sous réserve d’éligibilité.
          </p>
          <p className="mt-8">
            Besoin de (re)voir le déroulement de RECONNECT et tout ce qui est inclus précisément dans
            chaque formule?
            <br />
            <a
              href="#processus"
              className="font-semibold text-ink-deep underline decoration-accent underline-offset-4"
            >
              → Voir le parcours et le détail des formules
            </a>
          </p>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ — composant partagé, en groupes de questions                 */}
      {/* ---------------------------------------------------------------- */}
      <div id="faq" className="scroll-mt-36">
        <FaqSection items={FAQ} title="FAQ" eyebrow="Tu te poses des questions" />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* CTA FINAL                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* Haut réduit : la FAQ juste au-dessus est blanche elle aussi, ses
          marges et celles-ci s'additionnaient en un grand vide. */}
      <section className="relative overflow-hidden bg-white px-6 pt-4 pb-24 text-center md:px-20 md:pt-6 md:pb-32">
        <PetalField />
        <Reveal className="relative mx-auto max-w-[680px]">
          <Rosace className="mx-auto h-10 w-10 text-accent/60" />
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Ton premier pas est ici
          </p>
          <h2 className="mt-6 font-display text-[32px] font-light leading-[1.1] text-ink-deep md:text-[50px]">
            Et si RECONNECT devenait{" "}
            <em className="italic text-ink">ton prochain rendez-vous du lundi?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] font-display text-[18px] font-light italic leading-snug text-ink">
            Il est peut-être temps d’avancer vers une vie professionnelle qui te ressemble vraiment,
            même si tout te semble encore un peu flou (et fou) aujourd’hui...
          </p>
          <Cta href="#tarif" className="mt-10">
            Je suis prêt.e à avancer
          </Cta>
        </Reveal>
      </section>
    </VenteTheme>
  );
}
