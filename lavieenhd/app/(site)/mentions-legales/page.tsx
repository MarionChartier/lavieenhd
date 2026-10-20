import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site La vie en HD, édité par Marion Chartier.",
};

const linkClass = "underline underline-offset-2 transition-colors hover:text-turquoise";

export default function MentionsLegalesPage() {
  return (
    <LegalShell
      title="Mentions légales"
      intro="Informations légales relatives au site La vie en HD et à son éditrice."
      updatedAt="Dernière mise à jour : 20 octobre 2026"
      sections={[
        {
          heading: "Éditrice du site",
          body: [
            "Le site La vie en HD est édité par Marion Chartier, entrepreneure individuelle (EI), exerçant sous le nom commercial La vie en HD.",
            "Statut : Micro-entreprise.",
            "Adresse professionnelle : 20 chemin de Menoux, 74350 Cercier, France.",
            "SIREN : 938 589 785",
            "SIRET : 938 589 785 00014",
            "TVA : TVA non applicable, article 293 B du Code général des impôts.",
            "Adresse e-mail : hello@marionchartier-lavieenhd.com",
            "Téléphone : 06 89 55 58 77",
          ],
        },
        {
          heading: "Directrice de la publication",
          body: "Marion Chartier",
        },
        {
          heading: "Hébergement du site",
          body: [
            "Le site est hébergé par :",
            "Vercel Inc.\n440 N Barranca Avenue #4133\nCovina, CA 91723, États-Unis",
            "Contact : privacy@vercel.com",
            "Site internet : https://vercel.com",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          body: [
            "Les contenus présents sur le site La vie en HD, notamment les textes, photographies, illustrations, éléments graphiques, logos et créations originales, sont protégés par les dispositions applicables en matière de propriété intellectuelle.",
            "Sauf mention contraire, les contenus originaux créés par La vie en HD demeurent sa propriété exclusive.",
            "Toute reproduction, représentation, modification, diffusion ou exploitation de ces contenus, en tout ou partie, sans autorisation préalable écrite de La vie en HD, est interdite, sauf dans les cas autorisés par la loi.",
            "Les éléments appartenant à des tiers restent la propriété de leurs titulaires respectifs.",
            <>
              Les conditions d&apos;utilisation des contenus et ressources transmis dans le cadre des offres, notamment des questionnaires et supports du parcours RECONNECT, sont précisées à{" "}
              <Link href="/cgv#article-11" className={linkClass}>
                l&apos;article 11 des Conditions Générales de Vente
              </Link>
              .
            </>,
          ],
        },
        {
          heading: "Liens et services tiers",
          body: [
            "Le site La vie en HD peut contenir des liens vers des sites internet ou des services externes, notamment des plateformes de paiement, d'inscription, des réseaux sociaux et des outils liés au Human Design.",
            "Ces sites et services tiers disposent de leurs propres conditions d'utilisation et politiques de confidentialité.",
            "La vie en HD ne saurait être tenue responsable du contenu ou des pratiques de ces sites tiers, sous réserve des dispositions légales applicables.",
            <>
              Pour connaître les modalités de traitement des données personnelles liées à l&apos;utilisation du site et des services associés, le visiteur est invité à consulter la{" "}
              <Link href="/confidentialite" className={linkClass}>
                Politique de confidentialité
              </Link>
              .
            </>,
          ],
        },
      ]}
    />
  );
}
