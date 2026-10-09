import type { Metadata } from "next";
import Image from "next/image";
import { EXTERNAL } from "@/lib/links";
import { FaqSection } from "@/components/sections/FaqSection";
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
  BridgeOffre,
  MotCliente,
  ProfilsNotes,
  LivrablesGrid,
  PricingCard,
  ProcessusSteps,
  TemoignageHero,
} from "@/components/sections/vente/blocks";

export const metadata: Metadata = {
  title: "Blooming — Ta Fleur de Talents Innés™ | La vie en HD",
  description:
    "Révèle tes talents innés et ta zone de génie grâce à une analyse croisée de ton Human Design, ta Numérologie et tes Gene Keys.",
};

/** Bon de commande systeme.io — destination de tous les CTA d’achat. */
const COMMANDE = EXTERNAL.commande.fleurDeTalents;

const PROFILS = [
  {
    titre: "Tu cherches ta direction",
    paragraphes: [
      "Tu es en reconversion, en transition, en questionnement... et tu aimerais mieux comprendre quelles directions professionnelles pourraient vraiment te correspondre.",
      "Tu ne veux pas une énième liste de compétences floues et génériques. Ce que tu recherches, c’est une révélation de TA zone de génie unique, et des pistes concrètes de métiers en adéquation avec celle-ci.",
    ],
  },
  {
    titre: "Tu doutes de tes dons",
    paragraphes: [
      "Tu sens que tu as des facilités pour certaines choses, mais tu ne sais pas forcément les nommer, et tu n’oses pas vraiment te faire confiance.",
      "Tu veux confirmer ce que tu pressens, poser des mots clairs sur tes talents innés, et mieux comprendre comment ils peuvent s’exprimer dans ta vie professionnelle.",
    ],
  },
  {
    titre: "Tu es curieux.se de te découvrir sous un nouvel angle",
    paragraphes: [
      "Tu te connais bien, mais tu sens qu’il te manque un niveau de profondeur. Tu as le sentiment que les tests de personnalité classiques sont parfois bien trop réducteurs, et tu as la sensation de rester trop en surface.",
      "Tu as envie d’aller plus loin, et de plonger dans l’exploration d’outils puissants, pour enfin mettre en lumière ce qui fait de toi une personne unique.",
    ],
  },
];

const BENEFICES: Livrable[] = [
  {
    titre: "Mettre des mots sur tes talents",
    texte: (
      <>
        Tu identifies clairement ce qui te vient naturellement et ce que tu apportes de singulier, y
        compris dans ce que tu avais peut-être tendance à banaliser.
        <MotCliente
          citation={'Ça met en lumière des atouts que l’on imagine "normaux" parce qu’on pense que tout le monde a les mêmes facultés.'}
          source="Quelques mots d’une cliente, juste après avoir découvert sa Fleur ♡"
        />
      </>
    ),
    taille: "pleine",
  },
  {
    titre: "Te sentir plus légitime",
    texte:
      "Tu confirmes des talents que tu pressentais déjà, tu prends conscience de ceux que tu minimisais peut-être, et tu portes un regard plus juste sur ce que tu as à offrir.",
  },
  {
    titre: "Identifier ta zone de génie",
    texte:
      "Tu comprends comment tes différents talents s’articulent entre eux et ce qui fait ta singularité.",
  },
  {
    titre: "Découvrir des pistes professionnelles qui te ressemblent",
    texte:
      "Tu repars avec des idées concrètes de métiers ou de directions professionnelles cohérentes avec qui tu es, qui peuvent aussi venir confirmer certaines voies que tu envisageais déjà.",
  },
  {
    titre: "Savoir repérer tes warnings professionnels",
    texte: (
      <>
        Tu sais mieux reconnaître les contextes, environnements et conditions de travail qui ne te
        correspondent pas, ainsi que les signaux intérieurs{" "}
        <em>(ressentis, comportements ou émotions)</em> qui t’indiquent que tu es en train de
        t’éloigner de toi.
        <MotCliente
          citation="Je comprends mieux mes réactions et surtout je comprends ce qui ne va vraiment pas dans ma vie professionnelle..."
          source="Ce qu’elle en retient, avec un peu de recul..."
        />
      </>
    ),
  },
  {
    titre: "Avoir une boussole sur laquelle revenir",
    texte: (
      <>
        Tu peux consulter ta Fleur à tout moment, <em>notamment les jours de doute</em>, pour te
        rappeler qui tu es, ce que tu apportes, et te reconnecter à tes forces.
        <em className="mt-3 block">
          Pensée autant pour être consultée sur écran qu’imprimée et affichée, ta Fleur peut rester
          près de toi comme un repère accessible en un coup d’œil.
        </em>
      </>
    ),
    taille: "pleine",
  },
];

/** Paragraphes d'une étape : le composant rend le texte dans un `p`, d'où
 *  des `span` en bloc plutôt que des paragraphes imbriqués. */
const ETAPES = [
  {
    titre: "Tu me partages tes informations",
    texte: (
      <>
        Une fois ta commande passée, tu reçois un formulaire par mail pour me transmettre ta date,
        ton heure et ton lieu de naissance, ainsi que tes nom et prénoms.
        <span className="mt-2 block">
          Tu y choisis également la date pour ta séance, au minimum 2 semaines plus tard{" "}
          <em>(le temps pour moi de faire ton analyse personnalisée).</em>
        </span>
        <em className="mt-2 block">
          C’est notre point de départ : ta Fleur se construit autour de TES données personnelles.
        </em>
      </>
    ),
  },
  {
    titre: "Je me plonge dans ton analyse",
    texte: (
      <>
        Avant de te retrouver, je prends le temps de croiser tes données{" "}
        <em>(issues de ton Human Design, de ta Numérologie et de tes Gene Keys)</em> afin de faire
        éclore ta Fleur de Talents Innés™, ainsi que les éléments clés qui en émergent pour toi.
        <em className="mt-2 block">
          Ta Fleur est unique : c’est le fruit d’une analyse 100% personnalisée, réalisée par mes
          petites mains d’humaine. ♡
        </em>
      </>
    ),
  },
  {
    titre: "On explore ta Fleur ensemble pendant 1h30",
    texte: (
      <>
        On se retrouve en visio ; je te dévoile ta Fleur, je t’explique ce qui a émergé de mon
        analyse et on parcourt ensemble tes 5 Pôles de Talents Innés, ta zone de génie et les pistes
        professionnelles qui se dessinent.
        <em className="mt-2 block">
          L’idée n’est pas de te dire quelle voie choisir, mais de t’apporter des repères pour
          poursuivre ta réflexion avec davantage de clarté.
        </em>
      </>
    ),
  },
  {
    titre: "Tu repars avec ta Fleur, ta synthèse personnalisée et ton replay",
    texte: (
      <>
        Dans les jours qui suivent notre séance, tu reçois :
        <span className="mt-2 block">
          ton{" "}
          <strong className="font-semibold text-ink-deep">
            document PDF réunissant ta Fleur de Talents Innés™, un résumé de chacun de ses 5 pétales
            ainsi que les éléments essentiels de ton analyse
          </strong>
          ,
          <br />
          <em>
            (Aucun jargon ou formulation complexe : tout est simplifié et vulgarisé pour que ton
            document soit clair et accessible, même si tu n’as aucune connaissance du Human Design,
            de la Numérologie ou des Gene Keys.)
          </em>
        </span>
        <span className="mt-2 block">
          le <strong className="font-semibold text-ink-deep">replay de notre échange</strong>, pour
          pouvoir revenir tranquillement dessus quand tu le souhaites.
          <br />
          <em>De quoi laisser infuser tout ce qui a émergé...bien après notre séance.</em>
        </span>
      </>
    ),
  },
];

const INCLUS = [
  <>
    Ta Fleur visuelle unique, regroupant tes 5 Pôles de Talents Innés
    <br />
    <em>
      (issue d’une analyse croisée 100% personnalisée de ton Human Design, ta Numérologie et tes
      Gene Keys)
    </em>
  </>,
  "Ta zone de génie, des idées de métiers ou de directions professionnelles qui peuvent te correspondre, et tes principaux points de vigilance professionnels",
  "Une séance individuelle d’1h30 en visio pour te dévoiler ta Fleur et l’explorer ensemble",
  "Ton document PDF de synthèse personnalisé, rédigé par mes soins",
  "Le replay de notre séance",
];

const FAQ = [
  {
    q: "Je ne connais pas du tout le Human Design / la Numérologie / les Gene Keys : est-ce un problème?",
    a: "Pas du tout! Tu n’as besoin d’aucune connaissance préalable en Human Design, Numérologie ou Gene Keys pour vivre Blooming.\nJe me charge de l’analyse et je te transmets ensuite ce qui en ressort de façon claire, accessible et vulgarisée. Exit le jargon complexe! 😉",
  },
  {
    q: "De quelles informations as-tu besoin pour créer ma Fleur?",
    a: "J’ai besoin de ta date de naissance, de ton heure de naissance, de ton lieu de naissance, ainsi que de tes nom et prénoms.\nTu renseignes toutes ces informations dans le formulaire que je t’envoie par mail juste après ta commande.",
  },
  {
    q: "Est-ce que Blooming va me dire quel métier je dois faire?",
    a: (
      <>
        Non. Blooming n’a pas vocation à te donner UNE réponse toute faite ni à décider à ta place
        de la voie que tu devrais suivre.
        {"\n"}Ta Fleur vient mettre en lumière tes talents, ta zone de génie et faire émerger des
        métiers ou directions professionnelles qui peuvent te correspondre.
        {"\n"}L’idée est de t’apporter des pistes à explorer pour nourrir ta propre réflexion et tes
        choix.
        {"\n"}
        <em>
          Et si tu ressens ensuite le besoin d’être accompagné.e pour transformer ces pistes en
          choix concrets et remettre du mouvement vers une nouvelle direction, c’est justement le
          rôle de RECONNECT.
        </em>
      </>
    ),
  },
  {
    q: "Quand est-ce que je découvre ma Fleur après ma commande?",
    a: "Une fois ta commande passée, tu peux choisir une date de coaching à partir de 2 semaines après ta commande.\nCe temps me permet de me plonger dans tes données, de croiser ton Human Design, ta Numérologie et tes Gene Keys, et de faire éclore ta Fleur avec toute l’attention qu’elle mérite. 🌸\nC’est ensuite pendant notre séance d’1h30 que je te dévoile ta Fleur, et qu’on l’explore ensemble.",
  },
  {
    q: "Quelle est la différence entre Blooming et RECONNECT?",
    a: (
      <>
        <strong className="font-semibold">
          Blooming révèle, cartographie, donne des pistes. RECONNECT accompagne la transformation,
          les choix et le passage à l’action.
        </strong>
        {"\n"}Blooming est une exploration ponctuelle et personnalisée de tes talents, de ta zone de
        génie et des directions professionnelles qui peuvent te correspondre. RECONNECT, lui, est un
        parcours guidé de 13 semaines pour cheminer plus largement sur ta vie professionnelle et
        remettre du mouvement vers une direction qui te ressemble.
        {"\n"}
        <em>Blooming est d’ailleurs inclus dans la version RECONNECT Premium 1:1.</em>
      </>
    ),
  },
  {
    q: "Si j’ai déjà ma Fleur, comment cela se passe si je veux rejoindre RECONNECT après?",
    a: (
      <>
        Blooming et RECONNECT peuvent tout à fait se compléter.
        {"\n"}Et si, après avoir acheté Blooming, tu décides de rejoindre{" "}
        <strong className="font-semibold">l’offre RECONNECT Premium 1:1</strong>, dans laquelle ta
        Fleur de Talents Innés™ est déjà incluse,{" "}
        <strong className="font-semibold">222€ seront déduits de ton inscription</strong> pour tenir
        compte de l’analyse et de la Fleur déjà réalisées avec moi.
        {"\n"}Tu bénéficieras donc de RECONNECT Premium 1:1 à{" "}
        <strong className="font-semibold">1 666€ au lieu de 1 888€</strong>, tout en conservant bien
        les 3 séances individuelles prévues dans le parcours.
        {"\n"}Il te suffira simplement de me contacter avant ton inscription pour que je t’indique
        comment bénéficier de cette déduction.
      </>
    ),
  },
  {
    q: "Puis-je offrir Blooming à quelqu’un?",
    a: "Oui, absolument. C’est un cadeau précieux pour quelqu’un qui traverse une transition professionnelle, questionne sa voie ou a simplement envie de mieux comprendre ses talents.\nTu pourras préciser dans le formulaire reçu après ta commande qu’il s’agit d’un cadeau, et deux options seront alors possibles :\n♡ recevoir un bon cadeau à lui remettre, pour que la personne renseigne ensuite elle-même ses informations et choisisse la date de sa séance,\n♡ ou préparer toute la surprise de ton côté en me transmettant directement ses informations de naissance ainsi que son adresse mail.\nDans ce deuxième cas, je prendrai ensuite directement le relais avec elle pour la réservation de sa séance. 🎁",
  },
];

/** Repères du menu à points, dans l'ordre de la page. */
const POINTS = [
  { id: "pour-qui", label: "Cette Fleur est pour toi si…" },
  { id: "offre", label: "Ce qu’est la Fleur de Talents Innés™" },
  { id: "exemple", label: "À quoi ressemble une vraie Fleur?" },
  { id: "benefices", label: "Ce que Blooming peut t’apporter" },
  { id: "processus", label: "Comment se déroule Blooming" },
  { id: "temoignages", label: "Les témoignages" },
  { id: "tarif", label: "Faire éclore ta Fleur" },
  { id: "faq", label: "FAQ" },
];

export default function BloomingPage() {
  return (
    <VenteTheme>
      <SectionDots sections={POINTS} />
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      {/* Premier écran-preuve : la promesse à gauche, le livrable réel à
          droite, et par-dessus le verbatim de la cliente à qui il appartient.
          La citation ne vit plus dans une bande à part : elle travaille ici,
          au-dessus de la ligne de flottaison, là où elle pèse le plus. */}
      <section className="relative overflow-hidden bg-paper px-6 pt-10 pb-20 md:px-20 md:pt-12 md:pb-24 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-ink-lilac/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-[4%] h-[480px] w-[480px] rounded-full bg-turquoise/10 blur-3xl"
        />
        <PetalField />

        {/* Alignement par le haut : la carte est plus haute que la colonne de
            texte, un centrage vertical ferait descendre le logo bien en dessous
            de son bord supérieur. */}
        <div className="relative mx-auto grid max-w-(--container-content) items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Colonne texte, centrée */}
          <div className="text-center">
            {/* Le nom de l’offre vit dans le logo ; on le redonne au texte pour
                les lecteurs d’écran et l’indexation. */}
            <h1 className="sr-only">Blooming — Ta Fleur de Talents Innés™</h1>

            <Reveal>
              <Image
                src="/assets/blooming/logo.webp"
                alt="Blooming — Ta Fleur de Talents Innés™"
                width={500}
                height={500}
                priority
                className="mx-auto h-auto w-[210px] md:w-[240px]"
              />
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-9 max-w-[520px] font-display text-[21px] font-light italic leading-snug text-ink-deep md:text-[27px]">
                Révèle tes talents innés et ta zone de génie grâce à une analyse croisée de ton
                Human Design, ta Numérologie et tes Gene Keys.
              </p>
              <Cta href="#tarif" className="mt-9">
                Je veux découvrir ma Fleur ♡
              </Cta>
            </Reveal>

          </div>

          {/* Colonne preuve. C’est le verbatim qui porte, pas l’image : la carte
              est au premier plan, la Fleur ne fait que la sourcer, glissée
              derrière son angle inférieur droit. */}
          {/* Décalée vers le bas : alignée en haut sur le logo, la carte
              terminait bien au-dessus du bouton et la colonne paraissait
              flotter. Ce retrait la fait finir à hauteur du CTA. */}
          <Reveal delay={120} className="relative pb-12 lg:pt-14 lg:pb-28">
            <figure className="relative z-10 mx-auto max-w-[480px] rounded-[28px] border border-line bg-white/95 p-6 shadow-simu backdrop-blur-sm md:p-8 lg:ml-0">
              <PetalHalo />
              {/* La Fleur est posée à cheval sur l’angle inférieur droit de la
                  carte : assez petite pour rester un renvoi, assez présente
                  pour montrer de quoi parle le verbatim. */}
              <Image
                src="/assets/blooming/fleur-emilie.webp"
                alt="La Fleur de Talents Innés™ d’Émilie"
                width={1378}
                height={1378}
                priority
                className="pointer-events-none absolute -right-6 -bottom-7 z-20 h-auto w-[104px] sm:-right-10 sm:-bottom-10 sm:w-[150px] lg:-right-[96px] lg:-bottom-[96px] lg:w-[200px]"
              />
              {/* La note est sortie du flux : dans la rangée, elle rognait la
                  ligne de contexte jusqu'à lui faire un orphelin de trois mots. */}
              <span className="absolute right-6 top-6 rounded-full bg-ink-deep px-3 pt-[7px] pb-[5px] font-body text-[11px] leading-none text-white">
                10/10
              </span>

              {/* Le contexte passe sur toute la largeur de la carte : coincé
                  à côté du portrait, il cassait en trois lignes bancales. */}
              <figcaption>
                <span className="flex items-center gap-3.5 pr-16">
                  <Image
                    src="/assets/temoignages/Emilie.png"
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="h-12 w-12 flex-none rounded-full object-cover"
                  />
                  <span className="font-script text-[24px] leading-none text-turquoise">Émilie</span>
                </span>
                <span className="mt-3.5 block font-body text-[11px] uppercase leading-relaxed tracking-[0.12em] text-ink-soft">
                  à chaud, quelques minutes après avoir découvert sa Fleur
                </span>
              </figcaption>

              {/* Le verbatim complet d’Émilie, tel qu’il figure en bas de page.
                  Le retrait à droite du dernier paragraphe tient le texte hors
                  de la zone où la Fleur mord sur la carte. */}
              <blockquote className="mt-5 flex flex-col gap-3.5 font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
                <p>Waw 😍🥲 !</p>
                <p>
                  Je suis complètement bluffée par la justesse de ton analyse ! Je me retrouve dans
                  95% de ce qui est écrit (et les 5%, doivent venir du conditionnement 🧘🤗).
                </p>
                <p className="pr-16 sm:pr-20 lg:pr-24">
                  Pour la fleur 🌸 juste en la regardant, je me suis sentie{" "}
                  <span className="not-italic text-ink">reconnue</span>.
                  <br />
                  Je vais l’imprimer en grand je pense tellement elle est belle 😁 !
                </p>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* POUR QUI                                                         */}
      {/* ---------------------------------------------------------------- */}
      {/* Blanc et non crème : la bande violette qui séparait cette strate du
          hero est remontée dans celui-ci, il faut une autre rupture de fond. */}
      <VenteSection id="pour-qui" bg="white" wide>
        <SectionHeader
          eyebrow="Cette Fleur est pour toi si…"
          title={
            <>
              Tu sens que tu as quelque chose d’unique à apporter,
              <br className="hidden md:block" /> mais tu n’arrives pas encore à mettre le doigt
              dessus.
            </>
          }
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Les portraits passent en tête sur mobile : rejetés après le bouton,
              ils se retrouveraient tout en bas de la strate, hors du propos.

              `aspect` fixe plutôt que la hauteur naturelle : les deux clichés
              n'ont pas exactement le même rapport, et sans recadrage commun ils
              ne feraient pas la même taille. `self-center` répartit l'espace
              restant de part et d'autre au lieu de le laisser traîner sous la
              seconde photo.

              Sur mobile, un seul portrait : empilés, les deux repoussaient le
              texte d'un écran entier avant qu'on ait lu la première note. */}
          <Reveal
            delay={80}
            className="order-first flex flex-col items-center gap-8 lg:order-last lg:gap-10 lg:self-center"
          >
            <Image
              src="/assets/marion-pensive.webp"
              alt="Marion Chartier"
              width={900}
              height={1278}
              className="aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card"
            />
            <Image
              src="/assets/marion-nature.webp"
              alt=""
              aria-hidden
              width={900}
              height={1278}
              className="hidden aspect-[3/4] w-full max-w-[320px] rounded-[28px] object-cover shadow-card lg:block"
            />
          </Reveal>

          <div>
            <ProfilsNotes profils={PROFILS} />

            <Reveal className="mt-12">
              <p className="max-w-[640px] font-display text-[18px] font-light italic leading-relaxed text-ink md:text-[19px]">
                (Et, entre nous... tu en as probablement ta claque des outils qui veulent te faire
                rentrer dans une case, et tu sens bien qu’une analyse sans âme sortie tout droit de
                ChatGPT ne te révélera jamais qui tu es vraiment!)
              </p>
              <p className="mt-7 max-w-[640px] font-display text-[20px] font-semibold leading-relaxed text-ink-deep">
                Toi tu veux du vrai, de l’authentique, du sur-mesure.
                <br />
                Et tu es au bon endroit pour ça. ♡
              </p>
              <Cta href="#tarif" className="mt-10">
                Je veux donner vie à ma Fleur
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
            Ce qu’est la Fleur de Talents Innés™
          </p>
          <PetalDivider centered={false} className="mt-7" />
          <h2 className="mt-6 font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[44px]">
            Une empreinte unique,
            <br />
            <em className="italic text-ink">comme il n’en existe pas deux.</em>
          </h2>
        </Reveal>

        {/* Trois temps séparés au filet, sans intertitres : l'analyse, ce
            qu'elle donne (la Fleur et ce qu'elle éclaire), puis la séance
            d'exploration. La structure est dans le texte de Marion, il suffit
            de la rendre lisible. */}
        <div className="mt-10 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
          <Reveal className="grid items-center gap-8 md:grid-cols-[1fr_250px] md:gap-12">
            <div>
              <p>
                À partir de ta date, heure et lieu de naissance, ainsi que de tes nom et prénoms,
                j’analyse en profondeur ton schéma de Human Design, et les éléments stratégiques de
                ta Numérologie et de tes Gene Keys.
              </p>
              <p className="mt-4">
                À travers cette étude croisée, j’épluche minutieusement l’ensemble de tes données, je
                repère les récurrences, les correspondances et les singularités qui se répondent entre
                elles, puis je relie les points et je dézoome pour faire émerger tes{" "}
                <strong className="font-semibold text-ink-deep">
                  5 grands Pôles de Talents Innés
                </strong>
                , et avec eux, ta zone de génie unique.
              </p>
              <p className="mt-4">
                Et c’est à partir de ce travail <em>(de fourmi! 😄)</em> que ta Fleur de Talents Innés™
                prend vie!
              </p>
            </div>

            <Image
              src="/assets/blooming/fleur-vierge.webp"
              alt="La Fleur de Talents Innés™, ses cinq pétales"
              width={1000}
              height={1000}
              className="mx-auto h-auto w-[210px] md:w-full"
            />
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal>
            <p>
              <strong className="font-semibold text-ink-deep">Le résultat :</strong> un visuel sous
              forme de fleur symbolique, <em>comme une boussole synthétique</em>, où chaque pétale
              traduit l’un de tes 5 Pôles de Talents Innés à travers un archétype et des mots-clés qui
              lui sont propres.
            </p>
            <p className="mt-6">
              <strong className="font-semibold text-ink-deep">Et ta Fleur ne s’arrête pas là!</strong>
            </p>
            <p className="mt-4">
              Elle vient également mettre en lumière ta{" "}
              <strong className="font-semibold text-ink-deep">zone de génie</strong>, faire émerger
              des <strong className="font-semibold text-ink-deep">directions professionnelles</strong>{" "}
              qui peuvent te correspondre, et t’aider à repérer ce qui, au contraire, peut te faire
              naviguer à contre-courant.
            </p>
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal>
            <p>
              <em>
                Et parce qu’une Fleur sans session d’exploration serait un peu comme une carte au
                trésor sans légende...
              </em>{" "}
              Blooming inclut également un{" "}
              {/* Chiffres alignés : par défaut Cormorant compose des chiffres
                  elzéviriens, dont le « 1 » et le « 3 » plongent sous la ligne
                  de base, et « 1h30 » devenait illisible en pleine phrase. */}
              <strong className="font-semibold text-ink-deep">
                coaching individuel d’
                <span className="[font-variant-numeric:lining-nums]">1h30</span>
              </strong>{" "}
              pour te dévoiler ta Fleur, l’explorer ensemble et faire les liens avec ta réalité
              concrète.
            </p>
            <p className="mt-6">
              <em>
                Pas un template, un profil générique, ou un copier-coller déshumanisé issu d’un
                prompt de l’intelligence artificielle.
              </em>
              <br />
              <strong className="font-semibold text-ink-deep">
                Ton empreinte d’humain.e, mise en lumière par une humaine.
              </strong>
            </p>
          </Reveal>
        </div>

        <Reveal className="pt-12 text-center">
          <Cta href="#tarif">Je veux mon empreinte unique</Cta>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* EXEMPLE                                                          */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="exemple" wide>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Un exemple concret
            </p>
            <PetalDivider centered={false} className="mt-7" />
            <h2 className="mt-6 font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[42px]">
              À quoi ressemble
              <br />
              <em className="italic text-ink">une vraie Fleur?</em>
            </h2>
            <p className="mt-7 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
              Voici la Fleur d’Émilie, réalisée dans le cadre de RECONNECT Premium 1:1.
            </p>
            <p className="mt-4 font-display text-[17px] font-light italic leading-loose text-ink md:text-[18px]">
              ~ La tienne ne ressemblera jamais à la sienne. Et c’est exactement ça, la magie. ~
            </p>
          </Reveal>

          <Reveal delay={80} as="figure">
            <Image
              src="/assets/blooming/fleur-emilie.webp"
              alt="Fleur de Talents Innés d’Émilie — exemple"
              width={1378}
              height={1378}
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-center font-body text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              Exemple · Fleur d’Émilie
            </figcaption>
          </Reveal>
        </div>
      </VenteSection>

      {/* Placée après l'exemple à la demande de Marion : la phrase répond à la
          Fleur d'Émilie qu'on vient de voir. */}
      <CitationBand tone="paper" decor={<PetalField />}>
        «&nbsp;Parce que certaines fleurs n’attendent qu’une chose : qu’on leur donne enfin la
        lumière pour s’épanouir.&nbsp;»
      </CitationBand>

      {/* ---------------------------------------------------------------- */}
      {/* BÉNÉFICES                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* Remplace l'ancienne strate « Ce que tu obtiens » : mêmes cartes, même
          fond turquoise clair, mais centrées sur ce que la Fleur change. */}
      <VenteSection id="benefices" bg="turquoise" wide decor={<PetalField />}>
        <SectionHeader
          eyebrow="Ce que Blooming peut t’apporter"
          title="Qu’est-ce que ta Fleur de Talents Innés™ peut changer pour TOI concrètement?"
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Deux visuels empilés : la colonne de cartes est bien plus haute
              que le seul aperçu, qui laissait un grand vide sous lui. Les deux
              mockups du document de Marion. */}
          <Reveal className="mx-auto flex w-full max-w-[320px] flex-col items-center gap-8 lg:sticky lg:top-28">
            <Image
              src="/assets/blooming/fleur-tablette.webp"
              alt="La Fleur de Talents Innés™ sur tablette, entourée de pages du document"
              width={1122}
              height={1402}
              className="h-auto w-full rounded-[18px] shadow-simu"
            />
            <Image
              src="/assets/blooming/fleur-tablette-pages.webp"
              alt="La Fleur de Talents Innés™ sur tablette, devant deux pages du document"
              width={1122}
              height={1402}
              // Réservée aux deux colonnes : empilée, elle n'a plus de vide à
              // combler et rallonge la page d'un écran avant les cartes.
              className="hidden h-auto w-full rounded-[18px] shadow-simu lg:block"
            />
            {/* Marion en dernier : son geste désigne les cartes à côté. */}
            <Image
              src="/assets/marion-check-particules.png"
              alt="Marion Chartier, souriante, désignant les bénéfices"
              width={1086}
              height={1448}
              className="h-auto w-full rounded-[18px] bg-white shadow-simu"
            />
          </Reveal>

          <LivrablesGrid livrables={BENEFICES} />
        </div>

        <Reveal className="mt-14 text-center">
          <Cta href="#tarif">Je veux voir ma Fleur éclore</Cta>
        </Reveal>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* PROCESSUS                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* Fond lavande récupéré de la strate du calculateur, supprimée. */}
      <VenteSection id="processus" bg="lavender" wide>
        <SectionHeader
          eyebrow="Comment se déroule Blooming"
          title="De ta commande à ta Fleur, voici comment se passe concrètement l’expérience."
        />
        <div className="mt-16">
          <ProcessusSteps etapes={ETAPES} />
        </div>

        {/* La fin du parcours en images, comme sur Soin énergétique : la
            séance d'exploration (étape 3), puis la Fleur affichée chez soi
            (étape 4). */}
        <div className="mx-auto mt-16 grid max-w-[980px] gap-8 md:grid-cols-2 md:gap-6">
          <Reveal as="figure">
            <Image
              src="/assets/blooming/coaching.webp"
              alt="Un coaching Blooming en visio, la Fleur de Talents Innés™ partagée à l’écran"
              width={1448}
              height={1086}
              className="h-auto w-full rounded-[18px] shadow-card"
            />
            <figcaption className="mt-3 text-center font-display text-[16px] italic text-ink">
              On explore ta Fleur ensemble, en visio
            </figcaption>
          </Reveal>
          <Reveal as="figure" delay={80}>
            <Image
              src="/assets/blooming/fleur-imprimee.webp"
              alt="Une Fleur de Talents Innés™ imprimée et encadrée au-dessus d’un bureau"
              width={1448}
              height={1086}
              className="h-auto w-full rounded-[18px] shadow-card"
            />
            <figcaption className="mt-3 text-center font-display text-[16px] italic text-ink">
              Ta Fleur, imprimée et affichée comme une boussole
            </figcaption>
          </Reveal>
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TÉMOIGNAGES                                                      */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="temoignages" bg="white" wide>
        {/* Ni eyebrow ni filet : le témoignage parle de lui-même, et l'appareil
            d'en-tête des autres strates lui donnait un air d'argumentaire. */}
        <SectionHeader filet={false} title="Leurs mots valent plus qu’un long discours. ♡" />

        <div className="mx-auto mt-14 max-w-[900px]">
          <TemoignageHero
            photo="/assets/temoignages/Emilie.png"
            nom="Émilie"
            contexte="à chaud, quelques minutes après la découverte de sa Fleur"
            texte={`Waw 😍🥲 !

Je suis complètement bluffée par la justesse de ton analyse ! Je me retrouve dans 95% de ce qui est écrit (et les 5%, doivent venir du conditionnement 🧘🤗).

Pour la fleur 🌸 juste en la regardant, je me suis sentie reconnue.
Je vais l’imprimer en grand je pense tellement elle est belle 😁 !`}
          />

          {/* Suite du témoignage d'Émilie, sans cadre ni étiquette : ce sont
              ses mots qui continuent, pas un encart rapporté. Le filet à
              pétales, déjà utilisé dans la page, fait la respiration. */}
          <PetalDivider full className="my-14" />

          {/* Les questions posées à Émilie et ses réponses, en liste de
              définitions : la question porte le contexte, la réponse reste ses
              mots. Alignées à gauche, sans cadre — c'est un échange, pas un
              formulaire. */}
          <Reveal delay={80} className="mx-auto max-w-[620px]">
            <dl className="flex flex-col gap-9">
              {[
                {
                  q: "Tes sentiments à froid, après avoir relu ta Fleur au calme ?",
                  r: <>Satisfaite, Ravie, Enchantée, Surprise.</>,
                },
                {
                  q: "Qu’est-ce que ta Fleur t’a apporté ?",
                  r: (
                    <>
                      Elle m’a permis de confirmer certaines intuitions, elle a renforcé ma
                      confiance sur des talents que je n’osais pas trop exploiter, elle m’a ouvert
                      les yeux sur certains métiers à envisager, et m’a permis de découvrir ma zone
                      de génie.
                    </>
                  ),
                },
                {
                  q: "Un mot sur la Fleur de Talents Innés™ ?",
                  r: (
                    <>
                      Ça a été une énorme révélation pour moi&nbsp;! La fleur de talents innés est
                      d’une justesse incroyable.
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.q} className="flex flex-col items-center gap-2 text-center">
                  <dt className="flex items-baseline justify-center gap-2.5 font-display text-[15px] font-light italic leading-snug text-ink-soft md:text-[16px]">
                    <Petal className="h-3 w-3 flex-none translate-y-[1px] text-turquoise/70" />
                    <span>{item.q}</span>
                  </dt>
                  <dd className="font-display text-[18px] font-light leading-relaxed text-ink-deep md:text-[19px]">
                    {item.r}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <PetalDivider full className="my-14" />

          {/* Maryline, portrait à droite pour alterner avec Émilie. Ses deux
              temps reprennent les petites capitales du contexte d'Émilie. */}
          <TemoignageHero
            photo="/assets/temoignages/Maryline-blooming.webp"
            nom="Maryline"
            inverse
            texte={
              <>
                <span className="block font-body text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                  Retour à chaud
                </span>
                {`
Très éclairant.

C’est bluffant car ça reprend pas mal de sensations et d’impressions que j’avais déjà.

Ça légitimise aussi certains aspects différents de ce que la société projette comme n’étant pas dans la norme. Et perso ça me fait du bien.

C’est boostant aussi. Ça donne envie d’explorer les parties méconnues et donc de se challenger...tout ce que j’adore (même si j’ai aussi de l’appréhension 😁)
`}
                <span className="mt-6 block font-body text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                  Retour à froid
                </span>
                {`
Déjà, c'est bon pour mon estime de moi. 😎

Ça fait beaucoup de bien de comprendre qu’en réalité, certaines choses ne sont pas bonnes pour nous parce que simplement nous sommes différents du moule dans lequel les employeurs veulent nous mettre (en tout cas dans mon cas) et je ne résiste pas par esprit de révolution ou de contradiction, mais parce que simplement mes valeurs et ce qui est important pour moi ne sont pas respectés...

Petite note légère : quand je lis le contenu de ma fleur de talents, j’ai envie de m’engager 😊

Quoiqu’il en soit, cela me confirme et me conforte dans le choix d’une reconversion vers une voie qui fait sens pour moi 🥰`}
              </>
            }
          />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TARIF                                                            */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="tarif" wide decor={<PetalField dense />}>
        <SectionHeader eyebrow="Faire éclore ta Fleur" title="Prêt·e à découvrir tes Talents Innés?" />
        <div className="mt-14">
          <PricingCard
            logo="/assets/blooming/logo-blanc.webp"
            logoAlt="Blooming"
            prix="333€"
            inclus={INCLUS}
            href={COMMANDE}
            libelleCta="Je commande ma Fleur"
            note="Paiement en plusieurs fois possible via PayPal sous réserve d’éligibilité."
          />
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ — composant partagé avec le reste du site                    */}
      {/* ---------------------------------------------------------------- */}
      <div id="faq" className="scroll-mt-36">
        <FaqSection items={FAQ} title="FAQ" eyebrow="Tu te poses des questions" />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* PASSERELLE RECONNECT                                             */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection bg="lavender" wide>
        <BridgeOffre
          eyebrow="Et après?"
          avant="Ta Fleur révèle."
          apres={
            <>
              <em className="italic text-ink">RECONNECT</em> transforme.
            </>
          }
          paragraphes={[
            "Ta Fleur de Talents Innés™ te donne ta boussole ; elle met en lumière tes forces, révèle ta zone de génie, et fait émerger des directions professionnelles qui pourraient te correspondre.",
            <>
              Et si tu ressens ensuite le besoin d’aller plus loin, d’incarner vraiment tes talents,
              de les aligner avec ta vie pro, de dépasser tes peurs et de passer à l’action :{" "}
              <strong className="font-semibold text-ink-deep">
                RECONNECT est le chemin qui suit naturellement.
              </strong>
            </>,
          ]}
          offre={{
            eyebrow: "Ton Parcours Guidé de Transformation Professionnelle",
            logo: "/assets/logo-reconnect.webp",
            logoAlt: "RECONNECT",
            texte: (
              <>
                13 semaines pour te reconnecter à toi, clarifier ce qui a vraiment du sens pour toi
                et remettre du mouvement vers une vie professionnelle qui te ressemble.
                <em className="mt-3 block">
                  Un même parcours, trois façons de le vivre, selon ce dont tu as besoin
                  aujourd’hui.
                </em>
              </>
            ),
            href: EXTERNAL.offre.reconnect,
            libelle: "Je découvre RECONNECT",
          }}
        />
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* CTA FINAL                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white px-6 py-24 text-center md:px-20 md:py-32">
        <PetalField />
        <Reveal className="relative mx-auto max-w-[640px]">
          <Rosace className="mx-auto h-10 w-10 text-turquoise/50" />
          <p className="mt-6 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Ton élan commence ici
          </p>
          <h2 className="mt-6 font-display text-[32px] font-light leading-[1.1] text-ink-deep md:text-[52px]">
            Tes talents n’attendent que d’être <em className="italic text-ink">vus.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[440px] font-display text-[18px] font-light italic leading-snug text-ink">
            Et si c’était le moment de mettre enfin en lumière tout ce que tu portes déjà en toi?
          </p>
          <Cta href={COMMANDE} external className="mt-10">
            Je veux ma Fleur de Talents Innés™
          </Cta>
        </Reveal>
      </section>
    </VenteTheme>
  );
}
