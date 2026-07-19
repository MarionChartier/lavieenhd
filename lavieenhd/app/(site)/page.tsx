import { HomeHero } from "@/components/sections/home/HomeHero";
import { TransitSolaireBanner } from "@/components/sections/home/TransitSolaireBanner";
import { LeChemin } from "@/components/sections/home/LeChemin";
import { AboutTeaser } from "@/components/sections/home/AboutTeaser";
import { InstagramBanner } from "@/components/sections/home/InstagramBanner";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { SoulLetterBanner } from "@/components/sections/SoulLetterBanner";

/** Mini FAQ d'accueil — questions générales sur le Human Design.
 *  Contenu adapté du mag virtuel de Marion, à affiner avec elle. */
const HOME_FAQ = [
  {
    q: "C'est quoi exactement le Human Design ?",
    a: "Le Human Design (HD) est un outil puissant de connaissance de soi, où la science et la spiritualité se rencontrent. Le fondateur est Alan Robert Krakower (alias Ra Uru Hu), qui l'a découvert en 1987.\n\nLe HD regroupe plusieurs outils : la génétique, l'astrologie occidentale, la kabbale, les chakras indiens, et le yi-king chinois.\n\nGrâce à nos données de naissance (date, heure et lieu), nous obtenons une carte individuelle unique, appelée « charte HD » ou « schéma HD ».\n\nCe schéma contient énormément d'informations cryptées (sous forme de numéros, symboles, couleurs,…), qui, en les lisant avec le bon filtre, dévoilent alors toute la lumière sur notre personnalité, notre fonctionnement énergétique, nos dons, nos talents, notre mission de vie, nos forces, notre chemin d'évolution,…\n\nLes champs d'applications sont nombreux, je t'en donne quelques-uns : Déconditionnement et alignement, Découverte de tes potentiels uniques et de ta zone de génie, Éclairage sur tes relations (couple, famille, amis, collègues,…), Décodage Business (dynamique d'entreprise, communication,…).\n\nPour découvrir ton schéma HD, c'est par ici.",
  },
  {
    q: "Je n'y connais rien, est-ce que c'est quand même pour moi ?",
    a: "Oui, complètement. Tout est pensé pour être accessible, vulgarisé et décrypté, même si le Human Design est une totale découverte pour toi.\n\nEt pas besoin d'être branché.e spiritualité, laisse-toi juste guider.",
  },
  {
    q: "Comment je découvre mon schéma ?",
    a: "En faisant le test HD gratuit avec tes informations de naissance (date, heure et lieu). Ton schéma complet s'affiche en quelques secondes, gratuitement et sans création de compte. Tu peux ensuite télécharger ton schéma et tes informations essentielles en pdf, pour les conserver à vie.",
  },
  {
    q: "Par où je commence ?",
    a: "Je te conseille de commencer par ton test HD gratuit pour découvrir ton schéma et les premières informations essentielles.\nJe t'invite ensuite à explorer les offres pour voir celles qui t'appellent aujourd'hui (ton intuition reste ton meilleur allié selon moi).\n\nMais si tu souhaites découvrir et/ou approfondir ton Human Design, le Guide de ton Environnement idéal (The Place to be) et les 7 clés principales de ton Design (Inside) seront idéalement tes premiers pas dans mon monde.",
  },
  {
    q: "Pourquoi avoir quitté ton poste d'Ingénieur pour ça?",
    a: "Parce que j'ai fini par accepter que la sécurité d'un poste stable et d'un gros salaire, ne suffit pas si on n'y trouve pas de sens.\n\nJ'ai longtemps pataugé dans la semoule niveau vie pro...Paumée, frustrée, sans direction, alors même que sur le papier, tout allait bien! Et c'est le Human Design qui a été la clé pour identifier ce vers quoi j'avais vraiment envie d'aller, et qui me permet aujourd'hui de me sentir enfin à ma place.\nEt c'est exactement ce que j'ai à cœur de transmettre à celles et ceux qui traversent ce même flou que j'ai connu ; éviter les pièges, utiliser les bons outils, gagner du temps, et aller droit au but!",
  },
  {
    q: "Quelle différence entre Blooming, Reveal et Reconnect?",
    a: "Ce sont trois façons différentes d'explorer ton Human Design, selon ce dont tu as besoin :\n\nBlooming (Révéler) ; Une mise en lumière de tes dons et de ta zone de génie (avec ta Fleur de Talents Innés®) : un document PDF complet, associé à une séance de coaching d'1h30, pour identifier tes forces naturelles et savoir comment les exprimer.\nReveal (Démêler) ; Une séance unique de 90 minutes, centrée sur une problématique précise que tu traverses (questionnement, blocage, indécision...). On analyse ton design sous cet angle spécifique pour t'aider à y voir clair.\nReconnect (Incarner) ; Mon Accompagnement phare : un parcours complet de 3 mois pour celles et ceux qui veulent transformer en profondeur leur vie professionnelle, avec un suivi pas à pas, semaine après semaine (questionnaires et tests, coachings, soins énergétiques, méditations, EFT, exercices,...).\n\nEn résumé :\nBlooming pour révéler qui tu es et ce pour quoi tu es fait.e, Reveal pour éclairer et démêler une question précise, Reconnect pour t'accompagner dans une transformation complète.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TransitSolaireBanner />
      <LeChemin />
      <AboutTeaser />
      <InstagramBanner />
      <Testimonials />
      <FaqSection items={HOME_FAQ} />
      <SoulLetterBanner />
    </>
  );
}
