import { EXTERNAL } from "@/lib/links";

export type OffreColor = "free" | "violet" | "turquoise" | "beige";

export interface Offre {
  num: string;
  /** Identifiant URL (fragment d'ancre /mes-offres#slug) */
  slug: string;
  name: string;
  /** Sous-titre commercial affiché sous le nom (ex: "Le Guide d'Immersion dans ton Design Unique") */
  subtitle?: string;
  /** FAQ dédiée à l'offre (sinon une FAQ générique est affichée sur la page) */
  faq?: { q: string; a: string }[];
  /** Label compact pour les composants type stepper / mini-nav (ex: "QUIZ HD", "PLACE TO BE") */
  shortLabel: string;
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
  keyword: string;
  price: string;
  imgUrl: string;
  /** Path vers logo dans /public/assets (null si pas de logo dédié) */
  logoSrc: string | null;
  /** Couleur du fond de la zone sous-marque */
  color: OffreColor;
  /** Lien externe vers l'écosystème systeme.io */
  href: string;
  /** Offre signature (Fleur de Talents Innés) → traitement visuel spécial */
  signature?: boolean;
}

export const OFFRES: Offre[] = [
  {
    num: "01",
    slug: "quiz",
    name: "Quiz gratuits",
    subtitle: "Deux quiz ludiques pour mieux te connaître",
    shortLabel: "Quiz gratuits",
    tag: "Explorer",
    shortDescription:
      "Deux quiz offerts : ton lieu de vie/de travail idéal et ton alignement vie pro.",
    lead: "Réponds spontanément, et laisse-toi surprendre.",
    briefDescription:
      "Deux quiz ludiques et 100% offerts : l'un révèle le type de lieux qui booste ton énergie, l'autre ton niveau d'alignement dans ta vie pro. Résultat instantané à chaque fois.",
    briefBullets: [
      "Quiz - Ton lieu de vie/de travail idéal",
      "Quiz - Ton alignement vie pro actuel",
      "Quelques minutes, résultat immédiat",
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
    keyword: "Le hameçon",
    price: "offert",
    imgUrl:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-quiz.png",
    color: "free",
    href: "/quiz",
  },
  {
    num: "02",
    slug: "soin-energetique",
    name: "SOIN ÉNERGÉTIQUE",
    subtitle: "Notre rendez-vous mensuel",
    shortLabel: "Soin énergétique",
    tag: "Libérer",
    shortDescription:
      "On se retrouve chaque dernier dimanche du mois à 21h, pour un soin collectif à distance afin de libérer tes blocages, et pumper ton énergie.",
    lead: "Un temps rien que pour toi.",
    briefDescription:
      "Chaque dernier dimanche du mois à 21h, un soin énergétique collectif à distance : libérer tes blocages (visibles ou non), refaire circuler l'énergie, et te recalibrer sur la plus haute fréquence.",
    briefBullets: [
      "Chaque dernier dimanche du mois à 21h",
      "Tout se fait à distance, en mode réception",
      "Feedback détaillé par email le lendemain",
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
    keyword: "Libérer",
    price: "20 €",
    imgUrl:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-soin.png",
    color: "beige",
    href: EXTERNAL.offre.soinEnergetique,
  },
  {
    num: "03",
    slug: "place-to-be",
    name: "THE PLACE TO BE",
    subtitle: "Le Guide d'Exploration de ton Environnement HD",
    shortLabel: "The Place to be",
    tag: "S'initier",
    shortDescription:
      "Un Guide complet pour adapter facilement ton lieu de vie et de travail selon TON PROPRE ENVIRONNEMENT Human Design. Parfait pour booster ta vitalité, ton bien-être et tes performances! ✨",
    lead: "Ton environnement, en clair.",
    briefDescription:
      "Tu sais où tu te ressources, maintenant. Ce guide approfondit : ton lieu de vie idéal, ton environnement de travail, les lieux qui te déposent.",
    briefBullets: [
      "Guide personnalisé sur ton environnement",
      "Conseils déco et choix de lieux",
      "Carte mentale de ton « chez toi »",
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
    keyword: "S'initier",
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
    color: "violet",
    href: EXTERNAL.offre.thePlaceToBe,
  },
  {
    num: "04",
    slug: "inside",
    name: "INSIDE",
    subtitle: "Le Guide d'Immersion dans ton Design Unique",
    shortLabel: "Inside",
    tag: "Découvrir",
    shortDescription:
      "Un Guide de décryptage PERSONNALISÉ des 7 clés fondamentales de ton schéma HD ; pour mieux te comprendre, arrêter de douter de tes choix, et enfin vivre une vie alignée où tu es pleinement toi! ♡",
    lead: "Plonger dans les fondamentaux de ton design.",
    briefDescription:
      "On entre dans le détail : type, autorité, signature, non-soi, stratégie, profil, croix d'incarnation. Un guide personnalisé et une heure avec moi.",
    briefBullets: [
      "Guide personnalisé d'environ 25 pages",
      "1h de coaching en visio",
      "Replay et ressources offertes",
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
    keyword: "Découvrir",
    price: "111 €",
    imgUrl:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-inside.png",
    color: "turquoise",
    href: EXTERNAL.offre.insideClub,
  },
  {
    num: "05",
    slug: "reveal",
    name: "REVEAL",
    subtitle: "La Séance Clarté HD Pro",
    shortLabel: "Reveal",
    tag: "Clarifier",
    shortDescription:
      "1h30 ensemble en visio pour sortir du flou sur une problématique de ta vie pro (débloquer une situation, obtenir une réponse, clarifier une décision,...), grâce à une lecture ciblée de ton HUMAN DESIGN & guidance intuitive.",
    lead: "1h30 pour dénouer ce qui te bloque.",
    briefDescription:
      "Tu as un sujet précis qui te questionne. Je prépare une analyse HD ciblée sur ta problématique, puis nous explorons ensemble en visio pour trouver ta voie.",
    briefBullets: [
      "Analyse HD cadrée sur ton sujet",
      "1h30 de visio en tête-à-tête",
      "Plan d'action et replay offerts",
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
    keyword: "Clarifier",
    price: "222 €",
    imgUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-reveal.png",
    color: "violet",
    href: EXTERNAL.offre.reveal,
  },
  {
    num: "06",
    slug: "fleur-de-talents",
    name: "Fleur de Talents Innés",
    subtitle: "L'Exploration Croisée de tes Talents Uniques",
    shortLabel: "Fleur de Talents Innés",
    trademark: true,
    tag: "Révéler",
    shortDescription:
      "Exploration croisée HD, Numérologie et Gene Keys pour révéler tes talents innés.",
    lead: "Tes talents innés, en une fleur.",
    briefDescription:
      "Une exploration croisée Human Design, Numérologie et Gene Keys pour révéler ce qui te rend unique. Ta fleur de talents et 40 pages personnalisées pour comprendre la trace que tu peux laisser.",
    briefBullets: [
      "Analyse croisée HD, Numérologie, Gene Keys",
      "Fleur visuelle et 40 pages personnalisées",
      "1h30 de coaching pour faire les liens",
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
    keyword: "Révéler",
    price: "300 €",
    imgUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-blooming.png",
    color: "turquoise",
    signature: true,
    href: EXTERNAL.offre.fleurDeTalents,
  },
  {
    num: "07",
    slug: "reconnect",
    name: "RECONNECT",
    subtitle: "L'Accompagnement Premium de Reconnexion Professionnelle",
    shortLabel: "Reconnect",
    tag: "Transformer",
    shortDescription:
      "3 mois d'Accompagnement 1:1 transformationnel, sur-mesure et profond, pour réaligner ta vie professionnelle à tes aspirations de coeur, et oser prendre ta place. 👑 Te révéler & rayonner.",
    lead: "3 mois pour incarner qui tu es.",
    briefDescription:
      "L'accompagnement premium pour aligner ta vie sur ton design en profondeur. Coachings, soins énergétiques, EFT, et tout l'écosystème Marion inclus.",
    briefBullets: [
      "3 coachings d'1h30 sur 3 mois",
      "Soins énergétiques et séances EFT",
      "INSIDE et Fleur de Talents inclus",
    ],
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
      "Fleur de Talents Innés® inclus",
      "Suivi par messagerie tout au long du parcours",
    ],
    keyword: "Transformer",
    price: "1 111 €",
    imgUrl:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1200&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-reconnect.png",
    color: "violet",
    href: EXTERNAL.offre.reconnect,
  },
];
