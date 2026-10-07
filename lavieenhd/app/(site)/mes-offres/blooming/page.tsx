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
  ProfilsNotes,
  LivrablesGrid,
  PricingCard,
  ProcessusSteps,
  TemoignageHero,
} from "@/components/sections/vente/blocks";

export const metadata: Metadata = {
  title: "Blooming — Ta Fleur de Talents Innés™ | La vie en HD",
  description:
    "Découvre tes talents innés et ta zone de génie, révélés grâce à une analyse croisée de ton Human Design, ta Numérologie et tes Gene Keys.",
};

/** Bon de commande systeme.io — destination de tous les CTA d’achat. */
const COMMANDE = EXTERNAL.commande.fleurDeTalents;

const PROFILS = [
  {
    titre: "Tu cherches ta direction",
    paragraphes: [
      "Tu es en reconversion, en transition, en questionnement... et tu aimerais enfin savoir ce pour quoi tu es fait·e.",
      "Tu ne veux pas une énième liste de compétences floues et génériques. Ce que tu recherches, c’est une révélation de TA zone de génie unique, et des propositions concrètes de métiers en adéquation avec celle-ci.",
    ],
  },
  {
    titre: "Tu doutes de tes dons",
    paragraphes: [
      "Tu sens que tu as des facilités pour certaines choses, mais tu ne sais pas forcément les nommer, et tu n’oses pas vraiment te faire confiance.",
      "Tu veux confirmer ce que tu pressens, poser des mots clairs sur tes talents innés, et avoir des conseils pratiques pour les exploiter au mieux.",
    ],
  },
  {
    titre: "Tu veux clarifier ton unicité",
    paragraphes: [
      "Tu te connais bien, mais tu sens qu’il te manque un niveau de profondeur. Tu as le sentiment que les tests de personnalité classiques sont parfois bien trop réducteurs, et tu as la sensation de rester trop en surface.",
      "Tu as envie d’aller plus loin, et de plonger dans l’exploration d’outils puissants, pour enfin mettre en lumière ce qui fait de toi une personne unique.",
    ],
  },
];

const LIVRABLES: Livrable[] = [
  {
    titre: "Ta Fleur visuelle",
    texte: (
      <>
        La représentation graphique unique et précieuse de tes 5 pôles de Talents Innés.
        {/* Bloc à part et non simple retour à la ligne : la phrase en italique
            est un commentaire du livrable, elle a besoin de respirer. */}
        <em className="mt-3 block">
          Un livrable à garder à vie, pensé autant pour être lu sur écran, qu’imprimé sur papier,
          et affiché comme une boussole pour les jours de doute. Elle est là pour te rappeler qui tu
          es, ce que tu apportes, et quelle est ta juste place.
        </em>
      </>
    ),
    taille: "pleine",
  },
  {
    titre: "L’analyse approfondie",
    texte: (
      <>
        Le détail de chaque pôle de Talents avec tes données HD, Gene Keys et Numérologie qui le
        nourrissent.
        <em className="mt-3 block">
          Aucun jargon, ou formulations complexes, le document est conçu pour être compris par tout
          le monde, même sans aucune connaissance du Human Design, de la Numérologie, ou des Gene
          Keys. Tout est simplifié et vulgarisé pour que ce soit clair et accessible à tous.
        </em>
      </>
    ),
    taille: "large",
  },
  {
    titre: "Le cœur de ta vocation",
    texte: "La synthèse de ton fil rouge - ce pour quoi tu es là, ta zone de génie.",
  },
  {
    titre: "Des pistes de métiers alignés",
    texte: "Des directions concrètes, choisies spécifiquement pour ta propre configuration.",
  },
  {
    titre: "Nuage de mots-clés",
    texte: "Les mots qui te définissent ; pour ta bio, ton positionnement, tes prises de parole.",
  },
  {
    titre: "Tes signaux d’alerte",
    texte:
      "Les warnings à reconnaître pour savoir quand tu nages à contre-courant, et revenir à toi dès que tu t’en éloignes.",
  },
  {
    titre: "Un coaching 1h30",
    texte: (
      <>
        On vient approfondir tout ça ensemble une semaine à 10 jours après la réception de ton
        document&nbsp;;{" "}
        <em>le temps pour toi de lire, relire, et laisser infuser toutes les informations.</em>
      </>
    ),
    taille: "pleine",
  },
];

const ETAPES = [
  {
    titre: "Tu commandes",
    texte:
      "Tu règles ta commande. Je t’envoie aussitôt par mail le formulaire pour me communiquer tes données - date, heure, lieu de naissance et nom-prénoms.",
  },
  {
    titre: "J’analyse",
    texte:
      "Je décortique tes données HD, Numérologie et Gene Keys pour faire émerger tes 5 grands Pôles de Talents Innés.",
  },
  {
    titre: "Je crée",
    texte: (
      <>
        Je réalise ta Fleur visuelle,
        <br />
        et rédige ton document personnalisé
        <br />- au moins 10 jours.
      </>
    ),
  },
  {
    titre: "Tu reçois ta Fleur",
    texte: (
      <>
        Ton document arrive dans ta boîte mail.
        <br />
        Tu prends le temps de le lire, le relire, et le laisser résonner en toi.
      </>
    ),
  },
  {
    titre: "On se retrouve",
    texte:
      "1 semaine à 10 jours après, nous nous retrouvons en visio pour un coaching d’1h30 ensemble, pour ancrer ta Fleur dans ta réalité.",
  },
];

const INCLUS = [
  "Analyse croisée 100% personnalisée (HD + Numérologie + Gene Keys)",
  "Ta Fleur visuelle unique - tes 5 Pôles de Talents Innés",
  "Document premium d’une quarantaine de pages, entièrement rédigé par mes petites mains d’humaine",
  "Le cœur de ta vocation ; ta zone de génie, ton fil rouge",
  "Pistes de métiers alignés à TOI",
  "Ton nuage de mots-clés",
  "Tes signaux pour repérer « quand tu nages à contre-courant »",
  <>
    Livraison digitale par email, au format PDF
    <br />
    (Délai minimum de 10 jours)
  </>,
  <>
    Coaching individuel d’1h30
    <br />
    (1 semaine à 10 jours après réception de ta Fleur)
  </>,
];

const FAQ = [
  {
    q: "De quelles informations as-tu besoin pour créer ma Fleur ?",
    a: "J’ai besoin de ta date de naissance, ton heure de naissance (aussi précise que possible), ton lieu de naissance, ainsi que tes nom-prénoms. Tu les renseignes dans le formulaire que je t’envoie par mail juste après ta commande.",
  },
  {
    q: "Je ne connais pas du tout le Human Design / la Numérologie / les Gene Keys ; est-ce un problème ?",
    a: "Pas du tout. La Fleur est conçue pour être comprise par tout le monde, même sans aucune connaissance préalable. Tout est expliqué de manière claire et vulgarisée. Exit le jargon complexe ! Tu n’as besoin que de tes données personnelles - je m’occupe du reste.",
  },
  {
    q: "Dans quel délai est-ce que je reçois mon document ?",
    a: "Ton document personnalisé t’est livré par email dans un délai de minimum 10 jours après réception de tes données. Chaque Fleur est réalisée avec soin et profondeur, par mes petites mains d’humaines.",
  },
  {
    q: "Est-ce vraiment personnalisé, ou est-ce un template ?",
    a: (
      <>
        C’est 100% personnalisé. Les 5 pôles de ta Fleur émergent de l’analyse de{" "}
        <strong className="font-semibold underline">TES</strong> données : ils diffèrent pour
        chacun, même entre 2 personnes nées le même jour. Il n’existe pas deux Fleurs identiques.
      </>
    ),
  },
  {
    q: "Quelle est la différence avec Reconnect ?",
    a: "La Fleur est un livrable autonome : elle révèle, elle nomme, elle cartographie. C’est une boussole que tu gardes à vie. Reconnect est un Accompagnement individuel sur 3 mois pour incarner, transformer et passer à l’action, et la Fleur de Talents Innés est incluse dans Reconnect.",
  },
  {
    q: "Si j’ai déjà ma Fleur, comment cela se passe si je veux rejoindre Reconnect après ?",
    a: "Avec ou sans Fleur au préalable ; tu es la·le bienvenu·e dans Reconnect !\nEt ton investissement dans Blooming est loin d’être perdu.\nAprès réception de ta Fleur, tu reçois automatiquement par mail un code de réduction du montant de celle-ci pour l’Accompagnement Reconnect, valable pendant 3 mois.\nTa Fleur devient ainsi la première étape naturelle vers Reconnect, si tu ressens l’appel d’aller plus loin.",
  },
  {
    q: "Puis-je offrir la Fleur à quelqu’un ?",
    a: (
      <>
        Oui, absolument. C’est un cadeau rare et précieux pour quelqu’un qui traverse une transition
        professionnelle, ou qui cherche à se reconnecter à ce qu’il est vraiment.
        <br />
        Dans le formulaire qui te sera envoyé par mail juste après ta commande, tu pourras préciser
        si la Fleur est pour toi, ou si c’est un cadeau, et choisir si tu préfères un bon cadeau à
        offrir, ou directement la Fleur{" "}
        <em>
          (à condition de connaître les informations personnelles de la personne à laquelle tu
          souhaites offrir la Fleur (date, heure et lieu de naissance + nom/prénoms))
        </em>
        .
      </>
    ),
  },
];

/** Repères du menu à points, dans l'ordre de la page. */
const POINTS = [
  { id: "pour-qui", label: "Cette Fleur est pour toi si…" },
  { id: "offre", label: "Ce qu’est la Fleur de Talents Innés™" },
  { id: "exemple", label: "À quoi ressemble une vraie Fleur ?" },
  { id: "livrables", label: "Ce que tu obtiens" },
  { id: "processus", label: "Le processus" },
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
                Découvre tes talents innés et ta zone de génie, révélés grâce à une analyse croisée
                de ton Human Design, ta Numérologie et tes Gene Keys.
              </p>
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
                ChatGPT ne te révélera jamais qui tu es vraiment&nbsp;!)
              </p>
              <p className="mt-7 max-w-[640px] font-display text-[20px] font-semibold leading-relaxed text-ink-deep">
                Toi tu veux du vrai, de l’authentique, du sur-mesure.
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

        {/* Le texte enchaîne trois sujets distincts — ce que Marion analyse, ce
            que contient le document, puis la séance d’intégration — que rien ne
            distinguait typographiquement. On les sépare au filet et à l’espace,
            sans intertitres : la structure était déjà dans le texte, il suffit
            de la rendre lisible. */}
        <div className="mt-10 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
          <Reveal className="grid items-center gap-8 md:grid-cols-[1fr_250px] md:gap-12">
            <p>
              À partir de ta date, heure et lieu de naissance, ainsi que de tes nom-prénoms,
              j’analyse en profondeur ton schéma de Human Design, et les éléments stratégiques de ta
              Numérologie et de tes Gene Keys.
              <br />À travers cette étude croisée, j’épluche minutieusement l’ensemble de tes
              données, je mets tout à plat, puis je dézoome pour faire émerger tes{" "}
              <strong className="font-semibold text-ink-deep">
                5 grands Pôles de Talents Innés
              </strong>
              , et avec eux, ta zone de génie unique.
            </p>

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
              <strong className="font-semibold text-ink-deep">Le résultat</strong> : un document
              premium d’une quarantaine de pages, entièrement rédigé par mes petites mains
              d’humaine.
              <br />
              Tu y retrouves un joli visuel synthétique sous forme de fleur,{" "}
              <em>où chaque pétale représente un de tes pôles de talents innés</em>, suivi de tout le
              détail explicatif (et vulgarisé !) pour chacun des 5 pôles.
              <br />
              <br />
              <em>
                Pas un template, un profil générique, ou un copier-coller déshumanisé issu d’un
                prompt de l’intelligence artificielle.
              </em>
              <br />
              <strong className="font-semibold text-ink-deep">
                Ton empreinte d’humain.e, mise en lumière par une humaine.
              </strong>
            </p>

            <p className="mt-6">
              Et ta Fleur ne s’arrête pas là !
              <br />
              Le document inclut également :
            </p>

            {/* Les trois inclusions sortent du flux : c’est le passage le plus
                concret de la section, celui qu’on vient chercher. Noyé entre
                deux paragraphes, il se lisait comme le reste. */}
            <ul className="mt-6 flex flex-col gap-4 rounded-[20px] border border-line bg-white/70 px-6 py-6 text-[16px] md:px-8 md:py-7 md:text-[17px]">
              {[
                <>des pistes concrètes de métiers alignés à qui tu es vraiment,</>,
                <>
                  les signaux intérieurs <em>- ressentis, comportements, émotions -</em> qui
                  t’indiquent quand tu fais fausse route,
                </>,
                <>
                  et les configurations externes{" "}
                  <em>- contextes, environnements, conditions de travail -</em> qui sont
                  contre-nature pour toi, et qui sont donc à éviter.
                </>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed">
                  <Petal className="mt-1.5 h-3 w-3 flex-none text-turquoise" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <PetalDivider full className="my-12" />

          <Reveal>
            <p>
              Et parce qu’une Fleur sans session d’intégration, c’est comme une carte au trésor sans
              légende... l’offre inclut également un{" "}
              {/* La durée passe en sans-serif : les chiffres de Cormorant sont
                  fins et bas sur la ligne, « 1h30 » y devient illisible en
                  plein milieu d'une phrase. */}
              <strong className="font-semibold text-ink-deep">
                coaching individuel d’
                {/* Même police que la phrase, mais chiffres alignés : par
                    défaut Cormorant compose des chiffres elzéviriens, dont le
                    « 1 » et le « 3 » plongent sous la ligne de base comme des
                    minuscules. D'où le « 1h30 » illisible. */}
                <span className="[font-variant-numeric:lining-nums]">1h30</span>
              </strong>
              .
              <br />
              <em>
                On explore ensemble ce qui a émergé pour toi, je réponds à tes questions, et on
                ancre tout ça dans ta réalité concrète.
              </em>
            </p>
          </Reveal>
        </div>

        <Reveal className="pt-12 text-center">
          <p className="font-display text-[18px] font-light italic leading-loose text-ink md:text-[20px]">
            ~ Tout pour te ramener à qui tu es vraiment, et laisser éclore ce qui sommeille en toi
            depuis toujours. ~
          </p>
          <div className="pt-9">
            <Cta href="#tarif">Je veux mon empreinte unique</Cta>
          </div>
        </Reveal>
      </VenteSection>

      <CitationBand tone="soft">
        «&nbsp;Parce que certaines fleurs n’attendent qu’une chose : qu’on leur donne enfin la
        lumière pour s’épanouir.&nbsp;»
      </CitationBand>

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
              <em className="italic text-ink">une vraie Fleur ?</em>
            </h2>
            <p className="mt-7 font-display text-[17px] font-light leading-loose text-ink md:text-[18px]">
              Voici la Fleur d’Émilie, réalisée dans le cadre de son Accompagnement Reconnect. Cinq
              pôles uniques, nés de son schéma de Human Design, de ses Gene Keys et de sa
              Numérologie.
            </p>
            <p className="mt-4 font-display text-[17px] font-light italic leading-loose text-ink md:text-[18px]">
              ~ La tienne ne ressemblera jamais à la sienne. C’est exactement ça, la magie. ~
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
              Exemple — Fleur d’Émilie
            </figcaption>
          </Reveal>
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* LIVRABLES                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* Fond turquoise clair, repris de l'ancienne strate « Le document » : le
          violet profond tranchait trop avec le reste de la page. Les cartes
          passent donc en version claire, et le visuel du document, qui portait
          cette strate supprimée, les rejoint ici. */}
      <VenteSection id="livrables" bg="turquoise" wide decor={<PetalField />}>
        <SectionHeader
          eyebrow="Ce que tu obtiens"
          title="Un document pensé dans les moindres détails, et une session d’intégration pour aller plus loin."
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Deux visuels empilés : la colonne de cartes est bien plus haute
              que le seul aperçu, qui laissait un grand vide sous lui. Le second
              est plus petit et détouré, il ne concurrence pas le premier. */}
          <Reveal className="mx-auto flex w-full max-w-[320px] flex-col items-center gap-8 lg:sticky lg:top-28">
            <Image
              src="/assets/blooming/mockup-1.webp"
              alt="Aperçu de la Fleur de Talents Innés sur téléphone"
              width={1080}
              height={1920}
              className="h-auto w-full rounded-[18px] shadow-simu"
            />
            {/* Fondu en bas et vers le coin bas-gauche : l'avant-bras s'arrête
                net sur le fond de la strate. Les deux dégradés sont croisés
                (`intersect`), chacun n'efface que sa zone. */}
            <Image
              src="/assets/blooming/mockup-2.webp"
              alt="La Fleur de Talents Innés consultée sur un téléphone, en main"
              width={1080}
              height={1920}
              // Réservée aux deux colonnes : empilée, elle n'a plus de vide à
              // combler et rallonge la page d'un écran avant les cartes.
              className="hidden h-auto w-[72%] lg:block"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 74%, transparent 100%), linear-gradient(to bottom left, black 76%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 74%, transparent 100%), linear-gradient(to bottom left, black 76%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
              }}
            />
          </Reveal>

          <LivrablesGrid livrables={LIVRABLES} />
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
        <SectionHeader eyebrow="Le processus" title="Simple. Fluide. Impactant." />
        <div className="mt-16">
          <ProcessusSteps etapes={ETAPES} />
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

          <Reveal className="mt-14 text-center">
            <Cta href="#tarif">Waouh, moi aussi je veux ma Fleur</Cta>
          </Reveal>
        </div>
      </VenteSection>

      {/* ---------------------------------------------------------------- */}
      {/* TARIF                                                            */}
      {/* ---------------------------------------------------------------- */}
      <VenteSection id="tarif" wide decor={<PetalField dense />}>
        <SectionHeader eyebrow="Faire éclore ta Fleur" title="Prêt·e à découvrir tes Talents Innés ?" />
        <div className="mt-14">
          <PricingCard
            logo="/assets/blooming/logo-blanc.webp"
            logoAlt="Blooming"
            prix="333€"
            inclus={INCLUS}
            href={COMMANDE}
            libelleCta="Je commande ma Fleur"
            note="Paiement sécurisé · Accès à vie"
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
          eyebrow="Et après ?"
          avant="Ta Fleur révèle."
          apres={
            <>
              <em className="italic text-ink">Reconnect</em> transforme.
            </>
          }
          paragraphes={[
            "Ta Fleur de Talents Innés™ te donne ta boussole ; elle met en lumière tes forces, révèle ta zone de génie, et te donne enfin les mots pour définir tes dons.",
            <>
              Si tu veux aller plus loin - incarner vraiment tes talents, les aligner avec ta vie
              pro, dépasser tes peurs, et passer à l’action -{" "}
              <strong className="font-semibold text-ink-deep">Reconnect</strong> est
              l’Accompagnement qui suit naturellement.
            </>,
          ]}
          offre={{
            eyebrow: "Accompagnement Premium · 3 mois",
            logo: "/assets/logo-reconnect.webp",
            logoAlt: "Reconnect",
            texte:
              "Un Accompagnement individuel profond pour aligner ta vie professionnelle à qui tu es vraiment, en utilisant ton Human Design comme carte de navigation.",
            href: EXTERNAL.offre.reconnect,
            libelle: "En savoir plus",
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
            Et si c’était le moment de te dévoiler&nbsp;tel·le que tu es vraiment&nbsp;?
          </p>
          <Cta href={COMMANDE} external className="mt-10">
            Je veux ma Fleur de Talents Innés™
          </Cta>
        </Reveal>
      </section>
    </VenteTheme>
  );
}
