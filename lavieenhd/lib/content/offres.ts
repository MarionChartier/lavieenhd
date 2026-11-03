import { EXTERNAL } from "@/lib/links";

export type OffreColor = "free" | "violet" | "turquoise" | "beige";

export interface Offre {
  num: string;
  /** Identifiant URL (fragment d'ancre /mes-offres#slug) */
  slug: string;
  name: string;
  /** Sous-titre commercial affiché sous le nom (ex: "Le Guide d'Immersion dans ton Design Unique") */
  subtitle?: string;
  /** Petite ligne italique sous le sous-titre (ex: "avec 1h de coaching inclus") */
  subtitleNote?: string;
  /** FAQ dédiée à l'offre (sinon une FAQ générique est affichée sur la page) */
  faq?: { q: string; a: string }[];
  trademark?: boolean;
  tag: string;
  /** Description courte (~15 mots max) affichée dans les cards Le Chemin */
  shortDescription: string;
  /** Phrase d'accroche courte affichée en italique dans le hero de /mes-offres (entre guillemets) */
  lead: string;
  /** Paragraphe court (1-2 phrases) affiché dans le hero de /mes-offres */
  briefDescription: string;
  /** 3 puces courtes affichées dans le hero de /mes-offres */
  briefBullets: string[];
  /** Description longue pour le bloc détail de /mes-offres */
  longDescription: string;
  /** Pour qui c'est ? — cible cliente, dans le bloc détail */
  forWhom: string;
  /** Liste complète des éléments inclus dans l'offre (bloc détail) */
  included: string[];
  /** Absent pour RECONNECT : 3 formules, les prix sont sur sa page de vente. */
  price?: string;
  imgUrl: string;
  /** Path vers logo dans /public/assets (null si pas de logo dédié) */
  logoSrc: string | null;
  /** Logo recadré sur son contenu, qui remplace le titre sur /mes-offres */
  logoTitre?: { src: string; width: number; height: number };
  /**
   * Mockup tiré de la page de vente, affiché dans la vue d'ensemble de
   * /mes-offres. `detoure` : fond transparent, pas de fondu sur les bords.
   */
  visuel?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    detoure?: boolean;
    /** Petite image posée dans le coin bas droit du visuel (ex. la Boussole de REVEAL) */
    incrustation?: { src: string; width: number; height: number; alt: string };
    /** Seconde image affichée sous le visuel (ex. les 6 Guides papier) */
    complement?: { src: string; width: number; height: number; alt: string };
    /**
     * Sur mobile, le visuel se place dans le texte, avant les puces (demande de
     * Marion). Pour une offre sans puces, indice du paragraphe de
     * `briefDescription` devant lequel le placer.
     */
    avantParagrapheMobile?: number;
  };
  /** Couleur du fond de la zone sous-marque */
  color: OffreColor;
  /** Lien externe vers l'écosystème systeme.io */
  href: string;
  /**
   * Accès direct au bon de commande ("Foncer sans détour"), court-circuitant
   * la page de vente. Absent pour le Quiz (offre gratuite). Pour The Place to be,
   * pointe vers la page de vente (choix de l'Environnement obligatoire). Absent
   * pour RECONNECT : seul le bouton « Découvrir » est proposé.
   */
  orderHref?: string;
  /** Libellé du bouton principal, « Découvrir » par défaut. */
  ctaLabel?: string;
  /** Offre signature (Fleur de Talents Innés) → traitement visuel spécial */
  signature?: boolean;
}

export const OFFRES: Offre[] = [
  {
    num: "01",
    slug: "quiz",
    name: "Quiz gratuits",
    subtitle: "Des petits quiz ludiques pour t'éclairer",
    tag: "Explorer",
    shortDescription:
      "Découvre à la fois dans quel type de lieux ton corps se sent le plus à son aise, et également ton niveau d'alignement actuel avec ta vie professionnelle.",
    lead: "Réponds spontanément, et laisse-toi surprendre.",
    briefDescription:
      "Des quiz rapides et 100% offerts. Résultat instantané à chaque fois.",
    briefBullets: [
      "Quiz - Es-tu vraiment à ta place dans ta vie pro?",
      "Quiz - Business Check-up",
      "Quiz - Ton lieu de vie/de travail idéal",
    ],
    longDescription:
      "Le Human Design définit pour chacun un « Environnement idéal » parmi 6 profils : Marchés, Cuisines, Grottes, Côtes, Jardins, Sommets. C'est l'environnement où ton énergie circule au mieux, où tu te ressources naturellement. En 12 questions intuitives, ce quiz te donne ton profil + une explication détaillée de pourquoi cet espace te nourrit.",
    forWhom:
      "Tu veux découvrir le Human Design en commençant par un aspect très concret. Tu cherches à comprendre pourquoi certains lieux ou ambiances te chargent et d'autres te vident.",
    included: [
      "12 questions intuitives en moins de 5 minutes",
      "Résultat instantané : ton environnement HD (parmi 6 profils)",
      "Une description détaillée de ce qui te ressource",
      "Aucune création de compte requise",
    ],
    price: "offert",
    imgUrl:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-quiz.png",
    color: "free",
    href: "/quiz",
  },
  {
    num: "02",
    slug: "fleur-de-talents",
    name: "Blooming",
    subtitle: "Ta Fleur de Talents Innés™",
    subtitleNote: "avec 1h30 de coaching individuel inclus",
    tag: "Révéler",
    shortDescription:
      "Mise en lumière de ta zone de génie, de tes dons, et de tes métiers potentiels, grâce à une exploration croisée HD, Numérologie et Gene Keys. 1h30 de coaching inclus.",
    lead: "Toi aussi tu as des talents extraordinaires. Il est temps de les voir.",
    briefDescription: "Tu cherches ta direction, tu doutes de tes dons ou tu veux clarifier ce qui fait de toi une personne unique ?\n\nTa Fleur est là pour révéler tes talents innés, ta zone de génie et faire émerger des pistes professionnelles qui pourraient te correspondre, grâce à une analyse croisée 100% personnalisée de ton Human Design, ta Numérologie et tes Gene Keys.",
    briefBullets: [
      "Ta Fleur visuelle unique, réunissant tes 5 Pôles de Talents Innés",
      "Ta zone de génie et des pistes de métiers ou de directions professionnelles",
      "Tes principaux points de vigilance professionnels",
      "Une séance individuelle d'1h30 en visio pour te dévoiler ta Fleur et l'explorer ensemble",
      "Ton compte-rendu personnalisé incluant ta Fleur, une synthèse de chacun de tes 5 Pôles de Talents Innés et les éléments essentiels de ton analyse",
      "Le replay de notre séance pour pouvoir revenir sur nos échanges à ton rythme",
    ],
    longDescription:
      "Le programme signature de Marion. Une exploration croisée de tes grands pôles de talents innés à partir de trois grilles de lecture : Human Design, Numérologie et Gene Keys. Rendu sous forme d'une fleur visuelle, accompagné d'environ 40 pages de détails, d'une liste de métiers potentiels, des signaux de désalignement à reconnaître, et d'1h30 de coaching pour faire les liens avec ta vie.",
    forWhom:
      "Tu cherches à révéler tes talents profonds (pas juste tes compétences acquises). Tu veux comprendre la trace unique que tu peux laisser, et reconnaître les signaux quand tu t'en éloignes.",
    included: [
      "Analyse croisée Human Design, Numérologie et Gene Keys",
      "Ta fleur de talents uniques en rendu visuel",
      "Un document d'environ 40 pages personnalisé",
      "Liste de métiers et activités potentiellement alignés",
      "Signaux de désalignement à reconnaître",
      "1h30 de coaching pour faire les liens avec ta vie",
    ],
    price: "333 €",
    imgUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-blooming.png",
    logoTitre: { src: "/assets/logos-titres/blooming.webp", width: 491, height: 448 },
    visuel: {
      src: "/assets/blooming/coaching.webp",
      width: 1448,
      height: 1086,
      alt: "Un coaching Blooming en visio, la Fleur de Talents Innés partagée à l'écran",
      incrustation: {
        src: "/assets/blooming/fleur-tablette.webp",
        width: 1122,
        height: 1402,
        alt: "La Fleur de Talents Innés sur une tablette, entourée de pages du document personnalisé",
      },
    },
    color: "turquoise",
    signature: true,
    href: EXTERNAL.offre.fleurDeTalents,
    orderHref: EXTERNAL.commande.fleurDeTalents,
  },
  {
    num: "03",
    slug: "reconnect",
    name: "RECONNECT",
    subtitle: "Ton Parcours Guidé de Transformation Professionnelle",
    // Seule ligne gardée sous le logo sur /mes-offres (le sous-titre n'y est plus affiché).
    subtitleNote: "Ton Parcours Guidé de Transformation Professionnelle",
    tag: "Incarner",
    shortDescription:
      "3 mois d'Accompagnement pour réaligner ta vie professionnelle à tes aspirations de cœur, et oser prendre ta place. Inclus : INSIDE, BLOOMING, questionnaires et tests, coachings, soins énergétiques, EFT, méditations guidées.",
    lead: "Et si revenir à TOI était le premier pas pour retrouver ta direction...et l'élan d'avancer?",
    briefDescription: "Tu sais ce que tu ne veux plus dans ta vie professionnelle, mais tu ne sais pas encore ce que tu veux vraiment ni vers quoi t'engager?\n\nOu peut-être que tu as déjà une piste, mais que tu doutes de la voie à prendre ou n'arrives pas à franchir le cap?\n\nOu peut-être encore que tu sens simplement que quelque chose mérite d'évoluer dans ta vie pro, sans forcément vouloir tout changer?\n\nC'est précisément pour ça que RECONNECT existe : un parcours guidé de 13 semaines pour te reconnecter à toi, clarifier ta direction et remettre du mouvement vers une vie professionnelle qui te ressemble et qui a du sens pour toi.\n\nEt parce que chacun avance à sa façon, RECONNECT se décline en 3 formules : Solo, Circle et Premium 1:1.\n\nUn même parcours, à vivre de différentes manières : en toute autonomie, avec des ressources complémentaires et un espace d'échanges, ou encore avec un accompagnement individuel et personnalisé à mes côtés.\n\n*Au cœur des 3 formules : 13 Explorations Guidées RECONNECT*\n\nDes questionnaires introspectifs avec tests, mises en pratique, mini-analyses HD intégrées à certaines étapes et, plus ponctuellement, des éclairages ciblés en Numérologie.\n\nUn nouveau rendez-vous chaque lundi, dès le lundi suivant ton inscription.",
    briefBullets: [],
    longDescription:
      "L'accompagnement premium de 3 mois. Un espace d'introspection et de transformation profonde : 1 questionnaire ciblé par semaine, des soins énergétiques, des séances EFT, 3 coachings d'1h30, INSIDE et Fleur de Talents Innés inclus. Un parcours sur-mesure pour incarner ton design en profondeur.",
    forWhom:
      "Tu sens que c'est le moment d'une vraie transformation. Tu veux un accompagnement structuré et complet pour aligner ta vie sur qui tu es vraiment, pas juste un coaching ponctuel.",
    included: [
      "Accompagnement personnalisé sur 3 mois",
      "1 questionnaire ciblé par semaine pour avancer",
      "Soins énergétiques",
      "Séances EFT",
      "3 coachings d'1h30 en visio",
      "INSIDE inclus",
      "Fleur de Talents Innés™ inclus",
      "Suivi par messagerie tout au long du parcours",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1200&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-reconnect.png",
    logoTitre: { src: "/assets/logos-titres/reconnect.webp", width: 484, height: 314 },
    visuel: {
      src: "/assets/reconnect/questionnaire-favori.webp",
      width: 1122,
      height: 1402,
      alt: "Le parcours RECONNECT ouvert sur un ordinateur portable",
      // Avant « Et parce que chacun avance à sa façon… »
      avantParagrapheMobile: 4,
    },
    color: "violet",
    href: EXTERNAL.offre.reconnect,
    ctaLabel: "Découvrir RECONNECT",
  },
  {
    num: "04",
    slug: "reveal",
    name: "REVEAL",
    subtitle: "La Séance Clarté HD Pro - Spécial Business",
    tag: "Démêler",
    shortDescription:
      "1h30 ensemble en visio pour dénouer une situation bloquante de ta vie professionnelle, clarifier une décision ou éclairer un questionnement, grâce à une analyse ciblée de ton Human Design.",
    lead: "Il n'existe pas UNE bonne façon d'entreprendre. Il existe celle qui fonctionne pour TOI.",
    briefDescription: "Tu rencontres des blocages ou des questionnements dans ton Business? Tu t'épuises dans ta façon de travailler, tu peines à vendre, tu doutes de la direction à prendre...ou tu as simplement envie de faire évoluer ton Business pour qu'il te ressemble encore davantage?\n\nREVEAL part de TA réalité Business. À partir de ce que tu me partages, je me plonge dans ton Human Design pour éclairer ce qui te questionne, ce qui coince ou ce que tu souhaites faire évoluer.\n\nEnsuite, pendant 1h30 en visio, on explore tout ça ensemble pour faire émerger des pistes concrètes et des actions qui tiennent compte de TON fonctionnement, plutôt que d'appliquer une énième recette toute faite.",
    briefBullets: [
      "Un questionnaire préparatoire pour me partager ce que tu vis dans ton Business",
      "Mon analyse ciblée de TON Human Design, à partir de tes questionnements",
      "1h30 d'exploration et de coaching ensemble en visio",
      "Le replay de notre échange",
      "Ta Boussole REVEAL au format PDF, pour garder une synthèse des éléments clés explorés",
    ],
    longDescription:
      "REVEAL est une séance individuelle de clarté HD pro. Tu pars d'une problématique précise (un blocage, un choix à faire, un projet en suspens), Marion fait une analyse HD ciblée sur ta thématique, puis vous explorez ensemble en 1h30 de visio. À la fin de la séance, tu repars avec une clarté concrète et un plan d'action aligné avec ton design.",
    forWhom:
      "Tu as un sujet précis qui te bloque ou te questionne, pro ou perso. Tu cherches une expertise HD pour décortiquer une situation et trouver ta voie, pas une recette générique.",
    included: [
      "Échange préalable pour cadrer ta problématique",
      "Analyse HD ciblée préparée par Marion en amont",
      "1h30 de visio en tête-à-tête",
      "Plan d'action concret et aligné avec ton design",
      "Replay de la séance",
    ],
    price: "222 €",
    imgUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-reveal.png",
    logoTitre: { src: "/assets/logos-titres/reveal.webp", width: 436, height: 406 },
    visuel: {
      src: "/assets/reveal/coaching.webp",
      width: 1122,
      height: 1402,
      alt: "Une séance de coaching REVEAL en visio",
      incrustation: {
        src: "/assets/reveal/boussole-tablette.webp",
        width: 1122,
        height: 1402,
        alt: "La Boussole, le compte-rendu personnalisé de REVEAL, sur une tablette",
      },
    },
    color: "violet",
    href: EXTERNAL.offre.reveal,
    orderHref: EXTERNAL.commande.reveal,
  },
  {
    num: "05",
    slug: "place-to-be",
    name: "THE PLACE to be",
    subtitle: "Le Guide d'Exploration de ton Environnement HD",
    tag: "S'initier",
    shortDescription:
      "Un Guide complet pour adapter facilement ton lieu de vie et de travail selon ton propre Environnement de Human Design, et booster ainsi ta vitalité, ton bien-être et tes performances.",
    lead: "Et si te sentir à ta place commençait aussi par l'endroit où tu te trouves?",
    briefDescription: "Tu remarques que certains endroits t'apaisent ou te rechargent quand d'autres te fatiguent? Ou tu es simplement curieux.se de découvrir cette facette encore méconnue de ton Human Design?\n\nCe Guide dédié à TON Environnement HD t'aide à comprendre quels types de lieux peuvent davantage te ressourcer, t'apaiser ou te stimuler, dans ta vie comme dans ton travail.",
    briefBullets: [
      "Ton Guide complet de plus de 30 pages au format PDF, consacré à TON Environnement HD",
      "Le décryptage de ses caractéristiques et de ses nuances, sans jargon complexe",
      "Des exemples concrets et des pistes d'expérimentation chez toi et au travail",
      "Des espaces de réflexion et d'observation pour faire le lien avec ton quotidien",
      "Des inspirations visuelles et une planche d'ambiance couleurs & matières",
      "En bonus : la nuance \"profil actif\" ou \"profil passif\" associée à ton Environnement",
    ],
    longDescription:
      "Un guide personnalisé qui explore en profondeur ton Environnement HD idéal (parmi 6 profils possibles). Au-delà du quiz, tu reçois un guide écrit qui décrit ton environnement de prédilection avec précision : ce qui te ressource, ce qui t'épuise, comment aménager ton espace de vie ou de travail pour respecter ta vraie nature.",
    forWhom:
      "Tu connais déjà un peu ton HD et veux approfondir l'aspect concret de ton lieu de vie. Tu cherches à reconnecter ton environnement à ton énergie.",
    included: [
      "Guide personnalisé selon ton Environnement HD (1 parmi 6 profils)",
      "Présentation approfondie de ton type d'environnement",
      "Conseils concrets pour aménager ton espace de vie ou de travail",
      "Reçu par email instantanément après ta commande",
    ],
    faq: [
      {
        q: "Le guide est-il fait pour moi, même si je débute en Human Design ?",
        a: "Oui. Il est conçu pour être accessible à tout le monde : tout est clairement expliqué, vulgarisé et décrypté, même si le Human Design est une découverte pour toi.",
      },
      {
        q: "Comment je découvre mon environnement HD ?",
        a: "Avec le test HD gratuit, à partir de tes informations de naissance (date, heure, lieu). Ton environnement apparaît sur la dernière ligne de ton schéma.",
      },
      {
        q: "Le guide me donne-t-il le lieu exact où vivre ?",
        a: "Non, mais il te donne des indications claires sur tes zones de prédilection (bord de mer, zone humide, environnement citadin…) et sur la façon de t'en rapprocher au quotidien.",
      },
      {
        q: "Est-ce personnalisé ?",
        a: "Oui, chaque guide correspond à ton environnement spécifique parmi les 6 types, avec un bonus selon ton profil HD.",
      },
      {
        q: "Sous quelle forme je le reçois ?",
        a: "Ton guide t'est envoyé sous forme de livret PDF à télécharger, après ta commande.",
      },
      {
        q: "Je peux l'offrir autour de moi ?",
        a: "Oui, c'est une jolie idée cadeau et une belle porte d'entrée dans le Human Design.",
      },
    ],
    price: "22 €",
    imgUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-place.png",
    logoTitre: { src: "/assets/logos-titres/place-to-be-sans-halo.webp", width: 492, height: 249 },
    visuel: {
      src: "/assets/place-to-be/guide-tablette.webp",
      width: 1448,
      height: 1086,
      alt: "Le Guide d’Exploration de ton Environnement HD sur une tablette",
      complement: {
        src: "/assets/place-to-be/guides-papier.webp",
        width: 1448,
        height: 1086,
        alt: "Les 6 Guides d’Exploration de ton Environnement HD",
      },
    },
    color: "violet",
    href: EXTERNAL.offre.thePlaceToBe,
    // Exception : le choix de l'Environnement se fait dans la section d'achat de la page de vente.
    orderHref: `${EXTERNAL.offre.thePlaceToBe}#tarif`,
  },
  {
    num: "06",
    slug: "body-bloom",
    name: "BODY Bloom",
    subtitle: "Le Guide d'Initiation à ton Intelligence Digestive",
    tag: "S'initier",
    shortDescription:
      "Un Guide pour mieux comprendre ta Digestion HD, dans ton alimentation comme dans ta façon d'assimiler les informations.",
    lead: "Et si ton corps savait déjà ce qui lui convient?",
    briefDescription:
      "Tu t'intéresses à ton alimentation et au bien-être de ton corps? Ou tu as simplement envie de découvrir une dimension de ton Human Design que tu n'as pas encore explorée?\n\nCe Guide t'aide à mieux comprendre ta Digestion HD, aussi bien dans ton alimentation que dans ta façon d'assimiler les informations, avec des éclairages et des pistes concrètes à expérimenter dans ton quotidien.",
    briefBullets: [
      "Ton Guide complet d'environ 30 pages au format PDF, consacré à TA Digestion HD",
      "Le décryptage de ses caractéristiques et de ses nuances, sans jargon complexe",
      "Des pistes concrètes autour de ton alimentation et du contexte de tes repas",
      "Des éclairages sur ta manière d'assimiler les informations",
      "Des questions et pistes d'observation pour faire le lien avec ton quotidien",
      "Des conseils pratiques et expérimentations simples à tester à ton rythme",
      "En bonus : la nuance \"profil actif\" ou \"profil passif\" associée à ta Digestion",
    ],
    longDescription:
      "Ce Guide t'aide à mieux comprendre ta Digestion HD, aussi bien dans ton alimentation que dans ta façon d'assimiler les informations, avec des éclairages et des pistes concrètes à expérimenter dans ton quotidien.",
    forWhom:
      "Tu t'intéresses à ton alimentation et au bien-être de ton corps, ou tu as envie de découvrir une dimension de ton Human Design que tu n'as pas encore explorée.",
    included: [
      "Guide d'environ 30 pages au format PDF, consacré à ta Digestion HD (1 parmi 6)",
      "Pistes concrètes autour de ton alimentation et de ta façon d'assimiler les informations",
      "Bonus : la nuance profil actif ou profil passif",
    ],
    price: "22 €",
    imgUrl: "/assets/body-bloom/guide-tablette.webp",
    logoSrc: "/assets/logo-bodybloom.webp",
    logoTitre: { src: "/assets/logos-titres/body-bloom.webp", width: 406, height: 240 },
    visuel: {
      src: "/assets/body-bloom/guide-tablette.webp",
      width: 1254,
      height: 1254,
      alt: "Le Guide d’Initiation à ton Intelligence Digestive sur une tablette",
      complement: {
        src: "/assets/body-bloom/guides-papier.webp",
        width: 1254,
        height: 1254,
        alt: "Les 6 Guides d’Initiation à ton Intelligence Digestive",
      },
    },
    color: "turquoise",
    href: EXTERNAL.offre.bodyBloom,
    // Comme The Place to be : le choix de la Digestion se fait dans la section d'achat.
    orderHref: `${EXTERNAL.offre.bodyBloom}#tarif`,
  },
  {
    num: "07",
    slug: "inside",
    name: "INSIDE",
    subtitle: "Le Guide d'Immersion dans ton Design Unique",
    subtitleNote: "avec 1h de coaching individuel inclus",
    tag: "Découvrir",
    shortDescription:
      "Un Guide de décryptage personnalisé des 7 clés fondamentales de ton schéma de Human Design ; pour mieux te comprendre, arrêter de douter de tes choix, et te reconnecter à ta vraie nature. 1h de coaching inclus.",
    lead: "Plonge dans les fondamentaux de ton Design pour te reconnecter à ta vraie nature.",
    briefDescription: "Tu as parfois le sentiment de t'être éloigné.e de toi-même, tu te poses des questions sur ta façon de fonctionner, ou tu es simplement curieux.se de découvrir ton Human Design?\n\nINSIDE t'invite à explorer les 7 clés fondamentales de TON Design à travers un Guide personnalisé, clair et concret, pour mieux comprendre ton énergie, ta façon de prendre des décisions et tes mécanismes naturels...et commencer à expérimenter tout cela dans ton quotidien.",
    briefBullets: [
      "Ton Guide d'Immersion personnalisé d'environ 40 pages au format PDF",
      "Le décryptage des 7 clés fondamentales de TON Human Design",
      "Des exemples concrets, conseils pratiques et pistes d'expérimentation",
      "Des espaces de réflexion pour faire les liens avec ton quotidien",
      "1h de coaching individuel en visio pour poser tes questions et aller plus loin dans l'exploration de ton Design",
      "Le replay de notre séance pour y revenir à ton rythme",
    ],
    longDescription:
      "INSIDE est LA porte d'entrée si tu découvres le Human Design. On y explore les bases personnalisées de ton schéma : tes 7 piliers fondamentaux (Type, Autorité intérieure, Signature, Non-Soi, Stratégie, Profil, Croix d'incarnation). Tu reçois un guide écrit à partir de tes données de naissance, suivi d'1h de coaching en visio pour digérer, questionner, et faire le lien avec ta vie.",
    forWhom:
      "Tu débutes en Human Design et veux comprendre tes fondamentaux. Tu cherches une approche claire et personnalisée pour démarrer, sans te perdre dans la technique.",
    included: [
      "Guide écrit personnalisé à partir de tes données de naissance",
      "Présentation détaillée de tes 7 piliers HD",
      "1h de coaching en visio avec Marion",
      "Replay de ta séance",
    ],
    price: "122 €",
    imgUrl:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-inside.png",
    logoTitre: { src: "/assets/logos-titres/inside-sans-halo.webp", width: 354, height: 213 },
    visuel: {
      src: "/assets/inside/coaching.webp",
      width: 1122,
      height: 1402,
      alt: "Le Guide d’Immersion dans ton Design Unique sur une tablette, pendant une séance de coaching en visio",
    },
    color: "turquoise",
    href: EXTERNAL.offre.insideClub,
    orderHref: EXTERNAL.commande.insideClub,
  },
  {
    num: "08",
    slug: "soin-energetique",
    name: "SOIN ÉNERGÉTIQUE",
    subtitle: "Soin collectif à distance",
    tag: "Libérer",
    shortDescription:
      "On se retrouve chaque dernier dimanche du mois à 21h, pour un soin collectif à distance afin de libérer tes blocages, et pumper ton énergie.",
    lead: "Un temps rien que pour toi, où tu n'as rien à faire d'autre que de te laisser chouchouter énergétiquement.",
    briefDescription: "Tu traverses une période chargée, tu te sens à plat ou un peu dispersé.e? Ou tu as simplement envie de t'offrir une parenthèse pour ralentir, te recentrer et prendre soin de ton énergie?\n\nChaque dernier dimanche du mois à 21h, je te propose un Soin énergétique collectif à distance. Tu t'installes tranquillement de ton côté, sans visio ni live, pendant que je réalise le Soin. Un moment pour faire une pause, relâcher ce qui te pèse et accueillir ce qui se présente.",
    briefBullets: [
      "Un Soin énergétique collectif à distance d'environ 1h à 1h15",
      "Un rendez-vous chaque dernier dimanche du mois à 21h",
      "Mes indications pour accueillir au mieux le Soin, envoyées par email le jour même",
      "Mon feedback détaillé par email le lendemain : mes ressentis, perceptions et éventuelles canalisations",
    ],
    longDescription:
      "Un Soin complet pour t'aider à te libérer de tes blocages actuels (visibles ou non), refaire circuler l'énergie dans tous tes centres énergétiques, et venir te recalibrer sur la plus haute fréquence. Pas de présentiel, pas de live : tout se fait à distance. Tu poses l'intention, tu t'installes en mode cocooning, et tu te laisses chouchouter énergétiquement. Le lendemain, Marion t'envoie son feedback détaillé par email : ressentis, perceptions, travail énergétique effectué, et très souvent des canalisations groupées.",
    forWhom:
      "Ce soin est ouvert à tous ceux qui en ressentent l'appel. Il peut t'être bénéfique si tu rencontres des résistances en ce moment, si tu te sens un peu « à plat » ou dans le flou, ou simplement si tu as envie d'ouvrir les fenêtres en grand pour libérer ce qu'il y a à libérer et repimper ton énergie.",
    included: [
      "Soin énergétique collectif à distance (1h à 1h15 environ)",
      "Chaque dernier dimanche du mois à 21h",
      "Feedback détaillé de Marion par email le lendemain",
      "Bonus : tirage au sort d'une mini-guidance intuitive personnalisée",
    ],
    price: "20 €",
    imgUrl:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=900&q=80&auto=format&fit=crop",
    logoSrc: null,
    visuel: {
      src: "/assets/soin/mains-lumiere.webp",
      width: 1024,
      height: 807,
      alt: "Des mains ouvertes portant une lumière",
      detoure: true,
    },
    color: "beige",
    href: EXTERNAL.offre.soinEnergetique,
    orderHref: EXTERNAL.commande.soinEnergetique,
  },
];
