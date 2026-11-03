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
  "Coach HD • Vie pro & Business",
  "Maman d'un petit Manifestor",
] as const;

const HD_ATTRIBUTES = [
  {
    label: "Type",
    value: "Manifesting Generator",
    blurb: (
      <>
        {"Je suis multi-casquette, multi-tâches, multi-potentielle. J'ai besoin que ça bouge (vite) et de vivre plusieurs vies en une. "}
        <em className="italic">
          {"Exit l'étiquette de la nana instable : c'est un besoin viscéral pour moi de jongler!"}
        </em>
      </>
    ),
  },
  {
    label: "Profil",
    value: "2/4",
    blurb: (
      <>
        {"J'adore mes bulles de solitude "}
        <em className="italic">{"(et j'en ai vraiment besoin!)"}</em>
        {", mais j'aime aussi profondément créer du lien, et vivre des moments de partage avec les autres. "}
        <em className="italic">{`Tout un paradoxe à cultiver et à assumer : "On me voit, on me voit plus!"`}</em>
      </>
    ),
  },
  {
    label: "Autorité",
    value: "Émotionnelle",
    blurb: (
      <>
        {"Je traverse des vagues émotionnelles et mon lac intérieur est parfois agité. Je sais que j'ai besoin d'attendre que l'eau soit calme pour faire des choix. "}
        <em className="italic">
          {`"Tu prends les choses trop à cœur Marion!" Non, je vis juste des émotions intenses tonton Roger!`}
        </em>
      </>
    ),
  },
  {
    label: "Signature",
    value: "Satisfaction",
    blurb: (
      <>
        {"Les sentiments de satisfaction, d'accomplissement et de paix intérieure sont mes petits jalons qui m'indiquent que je marche dans le bon sens. "}
        <em className="italic">{"Les did-lists sont d'ailleurs devenues de vraies amies!"}</em>
      </>
    ),
  },
  {
    label: "Non-Soi",
    value: "Frustration",
    blurb: (
      <>
        {"La frustration "}
        <em className="italic">{"(et la colère)"}</em>
        {" sont clairement mes warnings intérieurs. Quand ces émotions débarquent, je sais maintenant qu'il y a quelque chose à aller regarder et probablement réajuster. "}
        <em className="italic">
          {"J'ai dû apprendre à accueillir ces émotions souvent mal perçues, et à reconnaître qu'elles pouvaient aussi avoir un message pour moi!"}
        </em>
      </>
    ),
  },
  {
    label: "Stratégie",
    value: "Répondre",
    blurb: (
      <>
        {"Je suis à l'écoute de ce que la vie et les autres me proposent, et je fais confiance à mon sacral pour savoir s'il faut saisir l'opportunité ou non."}
        <br />
        {"En parallèle, avec mon côté Manifestor, je fais attention de bien informer de mes actions et virages."}
        <br />
        <em className="italic">{"J'accepte d'être la reine des synchronicités!"}</em>
      </>
    ),
  },
  {
    label: "Définition",
    value: "Double",
    blurb: (
      <>
        {"J'ai parfois besoin de la présence des autres pour que des connexions se fassent dans mon Design, et pouvoir y voir plus clair."}
        <br />
        <em className="italic">
          {"Mes 2 voix intérieures sont bien réelles ; elles ont juste besoin de temps pour se relier et se mettre d'accord!"}
        </em>
      </>
    ),
  },
  {
    label: "Environnement",
    value: "Montagnes",
    blurb: (
      <>
        {"J'ai besoin de prendre de la hauteur, au sens propre comme au figuré : grand air, espace et vue à 360! "}
        <em className="italic">
          {"Je n'ai pas choisi ma région de cœur par hasard : Annecy et ses montagnes sont ma favourite place!"}
        </em>
      </>
    ),
  },
];

/** `chute` : la phrase de fin, détachée et en italique dans la card. */
const PILIERS: { title: string; titleNote?: string; paragraphes: string[]; chute: string }[] = [
  {
    title: "Bienveillance",
    titleNote: "(sans complaisance)",
    paragraphes: [
      "Je t'écoute avec ouverture et sans jugement, mais je ne te materne pas non plus.",
      "Je crois profondément au pouvoir de la responsabilisation : je ne suis pas là pour te dire ce que tu as envie d'entendre, ni pour décider à ta place.",
      "Je t'aide à y voir plus clair, et je n'hésite pas à te \"bousculer\" quand c'est utile, pour que tu puisses questionner certaines croyances ou façons de faire, et reprendre ton pouvoir.",
    ],
    chute:
      "Le tout à ton rythme, sans pression de performance, dans un espace où tu peux être pleinement TOI.",
  },
  {
    title: "Clarté & sens pratique",
    paragraphes: [
      "Mon côté scientifique avec les pieds sur Terre n'est jamais bien loin!",
      "À travers mon propre cheminement, j'ai compris combien il était important de rendre simples, compréhensibles et surtout UTILISABLES des notions qui peuvent parfois sembler très théoriques ou un peu perchées au premier abord!",
      "Découvrir son Design, c'est passionnant. Mais ce qui me plaît particulièrement, c'est de traduire tout ça en pistes concrètes que TU peux tester et t'approprier.",
    ],
    chute:
      "La vulgarisation, le concret et l'accessibilité sont des non-négociables pour moi.",
  },
  {
    title: "Personnalisation",
    paragraphes: [
      "Tu l'auras compris : les recettes toutes faites, très peu pour moi.",
      "Ton Design est unique, mais ton histoire, tes envies, tes contraintes et tes objectifs le sont aussi.",
      "J'utilise le Human Design comme une grille de lecture pour explorer avec toi tes propres pistes, et j'adapte mes outils et mon accompagnement à la personne que j'ai réellement en face de moi.",
    ],
    chute:
      "Du sur-mesure, donc. Parce que le coaching \"taille unique\", c'est has been...et que Monsieur/Madame Tout le monde n'existe PAS!",
  },
];

/**
 * Portes de la conclusion, vers les sections de « Mes offres » (#porte-1/2/3).
 */
const PORTES_FINALES = [
  {
    href: "/mes-offres#porte-1",
    eyebrow: "01 · VIE PRO",
    titre: "Je veux me réaligner dans ma vie pro",
    motsCles: "Transition pro · Reconversion · Quête de sens",
    ton: "border-[#d7c2e5] bg-[linear-gradient(155deg,#f5eefb,#fff)]",
    accent: "text-[#8d71a8]",
  },
  {
    href: "/mes-offres#porte-2",
    eyebrow: "02 · BUSINESS",
    titre: "Je veux que mon Business me ressemble",
    motsCles: "Entrepreneuriat · Fluidité · Stratégie alignée",
    ton: "border-[#aadfe2] bg-[linear-gradient(155deg,#eaf9f9,#fff)]",
    accent: "text-[#4f9ea3]",
  },
  {
    href: "/mes-offres#porte-3",
    eyebrow: "03 · HUMAN DESIGN",
    titre: "Je veux explorer mon Human Design",
    motsCles: "Connaissance de soi · Exploration · Fonctionnement",
    ton: "border-[#dfcfb7] bg-[linear-gradient(155deg,#faf5e9,#fff)]",
    accent: "text-[#a67c3d]",
  },
] as const;

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

            {/* Photo mobile/tablette — sous le HELLO ; la colonne de droite prend le relais en desktop */}
            <div className="relative mt-6 lg:hidden">
              <div className="relative h-[440px] w-full overflow-hidden rounded-md md:h-[600px]">
                <Image
                  src={PHOTOS.hero}
                  alt="Portrait de Marion Chartier"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 z-10 hidden h-[120px] w-[120px] place-items-center rounded-full bg-paper shadow-[0_18px_40px_-15px_rgba(80,60,98,0.25)] md:grid md:h-[140px] md:w-[140px]">
                <span className="font-script text-[16px] leading-none text-ink-deep md:text-[18px]">
                  Marion
                </span>
              </div>
            </div>

            <p className="mt-8 max-w-[520px] font-display text-[20px] font-light italic leading-snug text-ink-deep md:text-[26px]">
              «&nbsp;Je ne crois pas aux recettes toutes faites. Je crois qu’on a chacun notre
              façon unique de fonctionner, de travailler...et de réussir. Et je t’aide à trouver
              TA propre recette magique!&nbsp;»
            </p>

            <p className="mt-7 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
              Moi c’est Marion&nbsp;! En Human Design, je suis MG 2/4&nbsp;: la magicienne
              fraternelle multi-passionnée, si on veut faire un (gros) résumé!
            </p>

            <p className="mt-4 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
              Après des années d’ingénierie dans de grosses entreprises, et surtout des années à
              chercher ma place dans ma vie pro, le Human Design a été une vraie clé pour mieux
              me comprendre et commencer à tracer mon propre chemin. Et aujourd’hui, je suis
              Coach HD spécialisée Vie pro &amp; Business, pour toi.♥
            </p>

            <p className="mt-4 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
              Je suis également maman d’un petit Manifestor, qui me rappelle chaque jour à quel
              point les enfants peuvent être spontanément eux-mêmes. Et c’est essentiel pour moi
              de l’aider à rester connecté à qui il est, loin des moules rigides et des
              injonctions qui pourraient l’éteindre{" "}
              <em className="italic">(surtout en tant que Manifestor!)</em>.
              <br />
              Parce que je sais ce que c’est de se sentir éloignée de soi une fois adulte...et je
              croise beaucoup de personnes qui vivent la même chose.
            </p>

            <p className="mt-4 max-w-[520px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
              Et c’est aussi ce qui anime mes accompagnements aujourd’hui&nbsp;: t’aider à mieux
              te comprendre, à revenir à TOI, à la personne que tu es vraiment derrière toutes
              ces couches de conditionnements, et à explorer ce qui fonctionne pour TOI afin
              d’avancer vers une vie pro qui te ressemble, avec le Human Design comme boussole.
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
          <div className="relative hidden lg:mt-12 lg:block lg:self-start">
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
          {/* En desktop, titre et photo flottent à gauche : le récit, devenu bien plus
              long que la photo, reprend toute la largeur une fois passé dessous. */}
          <div className="lg:flow-root">
            {/* Gauche : titre + photo */}
            <div className="mb-14 lg:float-left lg:mr-20 lg:mb-10 lg:w-[40%]">
              {/* Photo mobile/tablette — au-dessus du titre ; la version desktop reste sous le titre */}
              <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-md md:h-[380px] lg:hidden">
                <Image
                  src={PHOTOS.story}
                  alt="Marion en réflexion"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <h2 className="font-display text-[44px] font-light leading-[0.95] text-ink-deep md:text-[64px]">
                Du costume <em className="italic text-turquoise">d’ingé</em>
                <br />à ma vraie nature.
              </h2>

              <div className="relative mt-10 hidden h-[480px] w-full max-w-[440px] overflow-hidden rounded-md lg:block">
                <Image
                  src={PHOTOS.story}
                  alt="Marion en réflexion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Récit en paragraphes courts, au rythme de la
                maquette de Marion */}
            {/* Bloc simple (pas flex) pour contourner le flottant. Chaque
                paragraphe est un `flow-root` : il se place en entier à côté de
                la photo ou en entier dessous, jamais coupé entre les deux. */}
            <div className="space-y-6 font-display lg:[&>p]:flow-root text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
              <p>
                Ayant des &quot;facilités&quot;,{" "}
                <em className="italic">
                  mais pas vraiment d&apos;idée de ce que je voulais faire de ma vie
                </em>
                , j’ai choisi, quand il a fallu m’orienter, un chemin plutôt conventionnel&nbsp;:
                études supérieures, puis CDI dans de grandes industries multinationales.
              </p>
              <p>
                <em className="italic">
                  Sur le papier, j’avais tout ce qu’il fallait&nbsp;: un &quot;bon poste&quot;, un
                  &quot;bon salaire&quot;, la &quot;sécurité&quot; de l’emploi.
                </em>
              </p>
              <p>
                Mais après plusieurs années d&apos;ingénierie, il est arrivé un moment où je ne
                pouvais plus me cacher la réalité&nbsp;: le fond de mon métier me plaisait
                vraiment, mais le contexte et la façon de l&apos;exercer...beaucoup moins.
              </p>
              <p>
                <em className="italic">
                  La hiérarchie, le manque de sens et d&apos;autonomie, cette sensation d&apos;être
                  un pion dans une grosse machine...
                </em>
                <strong className="font-semibold">je m&apos;y éteignais à petits feux.</strong>
              </p>
              <p>
                Puis mon entreprise a fermé. J&apos;aurais pu reprendre le même type de poste
                ailleurs. C&apos;était la suite logique. La voie raisonnable. Sauf que...non. 😅
              </p>
              <p>
                <strong className="font-semibold">Mais une fois cette décision prise&nbsp;: le vide.</strong>
              </p>
              <p>
                <em className="italic">
                  Vers quoi aller? Pour quoi je suis faite? Quelle est ma place?
                </em>
              </p>
              <p>Beaucoup de questions...et très peu de réponses.</p>
              <p>
                S&apos;en est suivie une longue période de flou artistique et de quête
                existentielle.
                <br />
                <em className="italic">
                  Livres, bilans de compétences, coachings, différents métiers testés...
                </em>
              </p>
              <p>J&apos;ai avancé, reculé, pensé avoir trouvé, changé d&apos;avis, recommencé.</p>
              <p>J’ai cherché LA réponse. LA bonne voie. LA recette qui allait enfin fonctionner.</p>
              <p>
                <strong className="font-semibold">Pendant 5 ans.</strong>
              </p>
              <p>
                <em className="italic">
                  J&apos;ai vécu la frustration, le stress, la lassitude...et, à mesure que les
                  années passaient, une forme de honte et de culpabilité de ne toujours pas
                  savoir, de ne pas trouver.
                </em>
              </p>
              <p>
                <strong className="font-semibold">Puis le Human Design est entré dans ma vie.</strong>
              </p>
              <p>
                <em className="italic">
                  Spoiler&nbsp;: non, il ne m&apos;a pas soufflé à l&apos;oreille le nom du métier
                  parfait que je devais faire. 😄
                </em>
              </p>
              <p>
                Mais il m&apos;a offert une nouvelle grille de lecture pour mieux me comprendre,
                remettre du sens sur certaines choses et relier des points que je n&apos;arrivais
                pas à relier jusque-là.
              </p>
              <p>
                <em className="italic">
                  Et petit à petit, les pièces ont commencé à s&apos;emboîter autrement.
                </em>
              </p>
              <p>
                Aujourd&apos;hui, après tous ces détours, je peux enfin dire que je me sens à ma
                place dans ma vie pro <em className="italic">(c&apos;était loin d&apos;être gagné! 😄)</em>.
              </p>
              <p>
                Pas parce que j&apos;ai trouvé LE métier parfait pour le reste de ma vie. Mais
                parce que j&apos;ai appris à mieux me connaître, à comprendre ce dont j&apos;avais
                besoin...et à construire petit à petit une vie pro qui me&nbsp;ressemble.&nbsp;ღ
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
              <div className="relative hidden min-h-[380px] w-full max-w-[380px] flex-1 overflow-hidden rounded-md lg:block">
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
              {/* Photo mobile/tablette — au-dessus du titre ; la version desktop reste sous la carte HD */}
              <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-md md:h-[380px] lg:hidden">
                <Image
                  src={PHOTOS.carte}
                  alt="Marion Chartier"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>

              <h2 className="font-display text-[40px] font-light leading-[0.95] text-ink-deep md:text-[56px]">
                Ma carte, <em className="italic text-turquoise">en clair</em>.
              </h2>

              <p className="mt-4 max-w-[560px] font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[18px]">
                Voici ce que racontent certaines clés de mon Design, et comment elles se
                traduisent concrètement dans ma vraie vie&nbsp;:
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
                    <p className="mt-1.5 font-display text-[14px] font-light leading-snug text-ink-deep md:text-[15px]">
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
              Ma façon de <em className="italic text-turquoise">t’accompagner</em>.
            </h2>
            <div className="mt-7">
              <p className="mx-auto max-w-[640px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
                N&apos;étant moi-même pas une grande adepte du &quot;full théorie&quot; et des
                grandes leçons moralisatrices, je mets un point d&apos;honneur à partir de
                TOI&nbsp;: de ce que tu vis, de ce qui te questionne, de ce qui coince...et de ce
                dont tu as réellement besoin.
              </p>
              <p className="mx-auto mt-5 max-w-[640px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
                Parce qu&apos;une prise de conscience, c&apos;est chouette. Mais quand elle change
                réellement quelque chose dans ta vraie vie, c&apos;est encore mieux.
              </p>
              <p className="mx-auto mt-5 max-w-[640px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
                <strong className="font-semibold">
                  Voici 3 principes qui guident ma façon de t&apos;accompagner&nbsp;:
                </strong>
              </p>
            </div>
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
                    {/* Pas de whitespace-nowrap : « Clarté et sens pratique »
                        sortait de la card entre 1024 et 1100px de large. */}
                    <span>{p.title}</span>
                    {/* La mention passe sous le titre : accolée, elle débordait
                        de la card. La ligne est rendue même quand il n'y a pas
                        de mention, sinon les paragraphes des deux autres cards
                        se décalent d'un cran en trois colonnes. */}
                    <span
                      aria-hidden={!p.titleNote}
                      className={`text-[14px] leading-[1.2] md:text-[16px] ${
                        p.titleNote ? "block" : "hidden md:block"
                      }`}
                    >
                      {p.titleNote ?? " "}
                    </span>
                  </h3>

                  {p.paragraphes.map((texte) => (
                    <p
                      key={texte}
                      className="relative z-10 mt-4 font-display text-[16px] font-light leading-relaxed text-ink-deep md:text-[17px]"
                    >
                      {texte}
                    </p>
                  ))}

                  <p className="relative z-10 mt-4 font-display text-[16px] font-light italic leading-relaxed text-ink-deep md:text-[17px]">
                    {p.chute}
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
              <h2 className="text-center font-display text-[40px] font-light leading-[0.95] text-ink-deep md:text-[58px] lg:text-left">
                Ce qui me <em className="italic text-turquoise">guide</em>.
              </h2>

              {/* Nuage fourni par Marion, dans son propre lettrage. Il remplace
                  la composition typographique qu'on générait ici : les valeurs
                  restent listées dans l'`alt`, sans quoi elles disparaîtraient
                  pour les lecteurs d'écran et les moteurs de recherche. */}
              <Image
                src="/assets/nuage-valeurs.webp"
                alt="Liberté, Aventure, Spiritualité, Partage, Fun, Intuition, Créativité, Bienveillance, Amour, Audace, Authenticité"
                width={1200}
                height={846}
                className="mt-10 h-auto w-full md:mt-14"
              />
            </div>

            {/* DROITE — fun fact en note penchée avec pastille */}
            <div className="relative">
              <div className="relative rotate-[-2deg] rounded-[28px] border border-[#d8bf8b]/35 bg-[linear-gradient(160deg,rgba(248,239,214,0.5)_0%,rgba(236,214,166,0.5)_100%)] p-8 shadow-[0_26px_55px_-26px_rgba(80,60,98,0.22)] md:p-11">
                <span className="absolute -top-3.5 left-8 inline-flex items-center rounded-full bg-ink-deep px-4 py-1.5 font-body text-[10px] uppercase tracking-[0.22em] text-white shadow-sm">
                  Fun fact
                </span>
                <div className="mt-3 flex flex-col gap-3.5 font-display text-[19px] font-light italic leading-relaxed text-ink-deep md:text-[23px]">
                  <p>
                    «&nbsp;Je n&apos;ai pas découvert le Human Design par hasard, il s&apos;est
                    carrément imposé à moi! 😄
                  </p>
                  <p>
                    C&apos;est en recherchant une nounou pour mon bébé que l&apos;une d&apos;elles
                    (qui n&apos;est même pas devenue son ass&apos; mat&apos;!) m&apos;a parlé de cet
                    outil.
                  </p>
                  <p>
                    Je ne savais pas encore que ça allait changer la suite de mon
                    parcours!&nbsp;»
                  </p>
                </div>
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
              ...et j&apos;adooore aussi les oracles. Et toi, tu crois au «&nbsp;hasard&nbsp;»&nbsp;?
            </p>
            <p className="mx-auto mt-4 max-w-[440px] font-body text-[15px] font-semibold leading-snug text-ink-deep md:text-[17px]">
              Et si tu repartais avec un petit supplément d&apos;âme? Un message surprise, rien
              que pour&nbsp;TOI.&nbsp;😘
            </p>
          </div>
          <div className="mt-8">
            <OracleDuJour />
          </div>
        </div>
      </section>

      {/* SECTION 05 — CONCLUSION : les 3 portes vers « Mes offres » */}
      <section className="bg-white px-6 pt-10 pb-24 md:px-20 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-(--container-content)">
          <div className="rounded-2xl border border-ink-deep/8 bg-paper px-5 py-10 text-center shadow-[0_20px_50px_-20px_rgba(80,60,98,0.18)] md:px-12 md:py-14">
            <h2 className="font-display text-[34px] font-light leading-tight text-ink-deep md:text-[56px]">
              Et maintenant,{" "}
              <span className="whitespace-nowrap">
                <em className="italic text-turquoise">à toi</em>.&nbsp;✨
              </span>
            </h2>
            <div className="mx-auto mt-6 flex max-w-[860px] flex-col gap-4 font-display text-[18px] font-light leading-relaxed text-ink-deep md:text-[21px]">
              <p>
                Si quelque chose dans mon histoire ou ma façon de voir les choses t&apos;a parlé,
                il est peut-être temps de revenir à TOI.
              </p>
              <p>
                Que tu te questionnes sur ta vie pro, que tu aies envie de faire évoluer ton
                Business à TA façon, ou que tu sois simplement curieux.se de découvrir ton Human
                Design...
              </p>
            </div>
            <p className="mt-7 font-display text-[18px] font-semibold text-ink-deep md:text-[21px]">
              Choisis la porte qui t&apos;appelle aujourd&apos;hui.
            </p>

            <nav
              aria-label="Explorer les trois univers de La vie en HD"
              className="mx-auto mt-8 grid max-w-[1050px] gap-3.5 text-left md:grid-cols-3 md:gap-4"
            >
              {PORTES_FINALES.map((porte) => (
                <Link
                  key={porte.href}
                  href={porte.href}
                  className={`flex flex-col gap-2.5 rounded-[19px] border-[1.5px] px-5 py-5 text-ink-deep shadow-[0_9px_21px_rgba(66,43,83,0.045)] transition-all hover:-translate-y-[3px] hover:shadow-[0_13px_24px_rgba(66,43,83,0.10)] md:min-h-[216px] md:gap-4 md:px-6 md:py-6 ${porte.ton}`}
                >
                  {/* Trois registres : repère en capitales fines à la couleur de la
                      porte, titre en Cormorant, mots-clés en italique discret. */}
                  <span className={`font-body text-[11px] tracking-[0.2em] ${porte.accent}`}>
                    {porte.eyebrow}
                  </span>
                  <span className="font-display text-[23px] font-medium leading-[1.2] md:flex-1 md:text-[26px]">
                    {porte.titre}
                  </span>
                  <span className="font-display text-[15px] italic leading-snug text-ink md:text-[16px]">
                    {porte.motsCles}
                  </span>
                </Link>
              ))}
            </nav>
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
        Carte d’identité HD
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

      <hr className="my-5 border-line" />

      <div className="flex justify-center gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => {
          // Ordre HD : Tête, Ajna, Gorge, G, Cœur, Plexus, Sacral, Rate, Racine
          // Marion : Tête (0) et Ajna (1) ouverts → les 7 autres définis
          const defined = i >= 2;
          return (
            <span
              key={i}
              className={`h-3.5 w-3.5 rounded-sm ${defined ? "bg-turquoise" : "bg-line"}`}
            />
          );
        })}
      </div>
      <p className="mt-2.5 text-center font-body text-[10px] uppercase tracking-[0.16em] text-ink-soft">
        7 centres sur 9 définis
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
