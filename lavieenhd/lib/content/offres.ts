import { EXTERNAL } from "@/lib/links";

export type OffreColor = "free" | "violet" | "turquoise" | "beige";

export interface Offre {
  num: string;
  /** Identifiant URL (fragment d'ancre /mes-offres#slug) */
  slug: string;
  name: string;
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
    name: "Quiz Environnement HD",
    shortLabel: "Quiz HD",
    tag: "Découvrir",
    shortDescription:
      "Découvre en 12 questions ton environnement HD idéal, parmi 6 profils possibles.",
    lead: "5 minutes pour t'éclairer.",
    briefDescription:
      "Découvre lequel des 6 environnements HD est ton terreau naturel, celui où ton énergie circule sans effort et où tu deviens toi-même.",
    briefBullets: [
      "12 questions guidées",
      "Résultat instantané",
      "Rapport email personnalisé",
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
    logoSrc: null,
    color: "free",
    href: EXTERNAL.quiz,
  },
  {
    num: "02",
    slug: "place-to-be",
    name: "THE PLACE TO BE",
    shortLabel: "Place to be",
    tag: "Approfondir",
    shortDescription:
      "Ton guide personnalisé pour révéler l'environnement HD dans lequel tu t'épanouis.",
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
    keyword: "Approfondir",
    price: "22 €",
    imgUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-place.png",
    color: "violet",
    href: EXTERNAL.offre.thePlaceToBe,
  },
  {
    num: "03",
    slug: "inside",
    name: "INSIDE",
    shortLabel: "Inside",
    tag: "Découvrir",
    shortDescription:
      "Les bases personnalisées de ton schéma HD : tes 7 piliers + 1h de coaching.",
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
    num: "04",
    slug: "reveal",
    name: "REVEAL",
    shortLabel: "Reveal",
    tag: "Résoudre",
    shortDescription:
      "Analyse HD sur ta problématique précise + 1h30 de visio pour l'explorer ensemble.",
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
    keyword: "Résoudre",
    price: "222 €",
    imgUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&q=80&auto=format&fit=crop",
    logoSrc: "/assets/logo-reveal.png",
    color: "violet",
    href: EXTERNAL.offre.reveal,
  },
  {
    num: "05",
    slug: "fleur-de-talents",
    name: "Fleur de Talents Innés",
    shortLabel: "Talents",
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
    logoSrc: null,
    color: "turquoise",
    signature: true,
    href: EXTERNAL.offre.fleurDeTalents,
  },
  {
    num: "06",
    slug: "reconnect",
    name: "RECONNECT",
    shortLabel: "Reconnect",
    tag: "Transformer",
    shortDescription:
      "3 mois d'introspection profonde : coachings, soins énergétiques, EFT, Inside et Fleur de Talents.",
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
