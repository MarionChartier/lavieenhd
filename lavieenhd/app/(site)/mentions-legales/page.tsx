import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site La vie en HD, édité par Marion Chartier.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalShell
      title="Mentions légales"
      intro="Informations légales relatives au site La vie en HD et à son éditrice."
      updatedAt="Dernière mise à jour : 1er juillet 2026"
      sections={[
        {
          heading: "Éditrice du site",
          body: [
            "Le site La vie en HD est édité par Marion Chartier, entrepreneuse individuelle.",
            "Statut : [À COMPLÉTER : micro-entreprise / EI].",
            "Adresse : [À COMPLÉTER].",
            "SIRET : [À COMPLÉTER].",
            "Numéro de TVA intracommunautaire : [À COMPLÉTER, ou mention « TVA non applicable, article 293 B du CGI » si franchise en base].",
            "Email de contact : hello@marionchartier-lavieenhd.com.",
          ],
        },
        {
          heading: "Directrice de la publication",
          body: "Marion Chartier.",
        },
        {
          heading: "Hébergement",
          body: [
            "Le site est hébergé par Vercel Inc.",
            "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
            "Site : vercel.com.",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          body: "L'ensemble des contenus présents sur ce site (textes, visuels, logos, illustrations, éléments graphiques et sonores) est la propriété exclusive de Marion Chartier, sauf mention contraire. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite.",
        },
        {
          heading: "Liens et services tiers",
          body: "Le site renvoie vers des services externes (systeme.io pour les inscriptions et paiements, Instagram, outils de calcul du schéma Human Design). La vie en HD n'est pas responsable du contenu ni des pratiques de ces sites tiers, qui disposent de leurs propres conditions et politiques.",
        },
      ]}
    />
  );
}
