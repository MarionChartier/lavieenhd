import Link from "next/link";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { TroisPortes } from "@/components/sections/home/TroisPortes";
import { Approche } from "@/components/sections/home/Approche";
import { SchemaGenerateur } from "@/components/sections/home/SchemaGenerateur";
import { TransitSolaireBanner } from "@/components/sections/home/TransitSolaireBanner";
import { AboutTeaser } from "@/components/sections/home/AboutTeaser";
import { InstagramBanner } from "@/components/sections/home/InstagramBanner";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { SoulLetterBanner } from "@/components/sections/SoulLetterBanner";

const LIEN = "text-turquoise underline underline-offset-2 transition-colors hover:text-ink-deep";

/** Mini FAQ d'accueil — questions générales sur le Human Design (maquette V36). */
const HOME_FAQ = [
  {
    q: "C'est quoi exactement le Human Design ?",
    a: (
      <>
        {"Le Human Design (HD) est un outil de connaissance de soi qui propose une grille de lecture de notre fonctionnement personnel et énergétique.\n\nÀ partir de tes données de naissance (date, heure et lieu), tu obtiens une carte individuelle appelée \"schéma HD\".\n\nCe schéma contient de nombreuses informations sur ta manière de fonctionner, prendre tes décisions, interagir avec le monde, utiliser ton énergie ou encore exprimer certaines facettes de ta personnalité.\n\n"}
        <strong className="font-semibold">
          {"Et dans ta vie professionnelle, il peut aussi t'aider à mieux comprendre tes talents, tes besoins, ta façon de travailler et ce qui peut contribuer à te sentir davantage à ta place."}
        </strong>
        {"\n\n"}
        <em>
          {"L'idée n'est pas de te mettre dans une case, mais de t'offrir une nouvelle grille de lecture de toi-même, à observer et à expérimenter dans ta propre vie."}
        </em>
        {"\n\nPour découvrir ton schéma HD, c'est par "}
        <Link href="/test-gratuit" className={LIEN}>
          ici
        </Link>
        .
      </>
    ),
  },
  {
    q: "Je n'y connais rien, est-ce que c'est quand même pour moi ?",
    a: "Oui, complètement. Tout est pensé pour être accessible, vulgarisé et décrypté, même si le Human Design est une totale découverte pour toi.\n\nEt pas besoin d'être branché.e spiritualité : tu peux simplement découvrir, observer et voir ce qui résonne pour TOI.",
  },
  {
    q: "Comment découvrir mon schéma de Human Design?",
    a: "En faisant le test HD gratuit avec tes informations de naissance (date, heure et lieu). Ton schéma complet s'affiche en quelques secondes, gratuitement et sans création de compte. Tu peux ensuite télécharger ton schéma et tes informations essentielles en PDF, pour les conserver à vie.",
  },
  {
    q: "Est-ce que le Human Design peut me dire quel métier est fait pour moi ou quelle stratégie adopter dans mon Business?",
    a: (
      <>
        {"Non. Le Human Design n’a pas vocation à te dire quel métier tu \"devrais\" exercer, ni à te donner une nouvelle stratégie toute faite à appliquer dans ton Business.\n\nIl peut en revanche t’aider à mieux comprendre ton fonctionnement, tes besoins, tes talents, ta manière de prendre tes décisions, d’utiliser ton énergie ou encore d’interagir avec les autres.\n\n"}
        <strong className="font-semibold">
          {"L’idée n’est donc pas de te remettre dans une case, ni de remplacer une recette toute faite par une autre, mais de t’apporter une nouvelle grille de lecture pour faire émerger ce qui peut être le plus juste pour TOI, dans ta vie professionnelle comme dans ton Business.\n\nEt te reconnecter à TA propre recette magique. ✨"}
        </strong>
      </>
    ),
  },
  {
    q: "Par où je commence ?",
    a: (
      <>
        {"Si tu souhaites faire un premier pas dans ton Human Design et obtenir ton schéma, tu peux commencer par le "}
        <Link href="/test-gratuit" className={`${LIEN} font-semibold`}>
          test HD gratuit
        </Link>
        {".\n\nSinon, tu peux aussi t’orienter directement grâce aux "}
        <a href="#portes" className={`${LIEN} font-semibold`}>
          3 portes d’entrée de La vie en HD
        </a>
        {", pensées pour t’aider à repérer ce qui correspond le mieux à ce que tu vis ou recherches aujourd’hui : ta vie pro, ton Business ou l’exploration de ton Human Design.\n\n"}
        <strong className="font-semibold">
          {"Choisis simplement celle qui résonne le plus avec ta situation du moment, puis découvre les ressources et accompagnements qui peuvent t’aider à avancer."}
        </strong>
      </>
    ),
  },
  {
    q: "Quelle différence entre INSIDE, Blooming, RECONNECT et REVEAL?",
    a: (
      <>
        <strong className="font-semibold">💎 INSIDE</strong>
        {" est fait pour toi si tu veux mieux comprendre qui tu es et comment TU fonctionnes, à travers les 7 clés fondamentales de ton Human Design.\n\n"}
        <strong className="font-semibold">🌸 Blooming</strong>
        {" te permet d’explorer tes talents, ta zone de génie et ce que tu pourrais en faire professionnellement, grâce à une analyse croisée de ton Human Design, de ta Numérologie et de tes Gene Keys.\n\n"}
        <strong className="font-semibold">💜 RECONNECT</strong>
        {" est fait pour toi si tu ne cherches pas seulement une analyse ponctuelle, mais un véritable cheminement autour de ta vie professionnelle, à travers un parcours guidé de 13 semaines pour clarifier ta direction et remettre du mouvement.\n\n"}
        <strong className="font-semibold">🔎 REVEAL</strong>
        {" est un focus sur ton Business : ce qui te questionne, ce qui coince ou ce que tu aimerais faire évoluer. Ton Human Design devient alors une grille de lecture pour explorer tout ça et revenir à TA façon unique d’entreprendre.\n\n"}
        <strong className="font-semibold">En bref :</strong>
        {"\n"}
        <strong className="font-semibold">INSIDE</strong>
        {" = \" Je veux mieux me connaître et comprendre comment je fonctionne. \"\n"}
        <strong className="font-semibold">Blooming</strong>
        {" = \" Je veux découvrir ce que j’ai d’unique et ce que je peux en faire professionnellement. \"\n"}
        <strong className="font-semibold">RECONNECT</strong>
        {" = \" Je veux clarifier ma direction et remettre du mouvement dans ma vie professionnelle. \"\n"}
        <strong className="font-semibold">REVEAL</strong>
        {" = \" Je veux explorer mon Business à travers mon propre fonctionnement. \""}
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TroisPortes />
      <Approche />
      <SchemaGenerateur />
      <AboutTeaser />
      <Testimonials />
      <TransitSolaireBanner />
      <FaqSection items={HOME_FAQ} />
      <InstagramBanner />
      <SoulLetterBanner />
    </>
  );
}
