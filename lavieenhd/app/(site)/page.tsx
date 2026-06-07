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
    a: "Un outil puissant de connaissance de soi, à la croisée de la science et du spirituel. À partir de ta date, ton heure et ton lieu de naissance, tu obtiens une carte unique qui révèle ta personnalité, ton fonctionnement énergétique et tes talents.",
  },
  {
    q: "Je n'y connais rien, est-ce que c'est quand même pour moi ?",
    a: "Oui, totalement. Tout est pensé pour être accessible, vulgarisé et décrypté, même si le Human Design est une découverte complète pour toi.",
  },
  {
    q: "Comment je découvre mon schéma ?",
    a: "En faisant le test HD gratuit avec tes informations de naissance (date, heure et lieu). Ton schéma complet s'affiche en quelques secondes, sans création de compte.",
  },
  {
    q: "Par où je commence ?",
    a: "Commence par ton test gratuit pour découvrir ton schéma, puis explore les offres selon ce qui te parle aujourd'hui : ton environnement idéal, ton design en profondeur ou tes talents innés.",
  },
  {
    q: "Sous quelle forme je reçois mes guides ?",
    a: "Tes guides te sont envoyés sous forme de livret PDF à télécharger, après ta commande.",
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
