import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente des accompagnements proposés par Marion Chartier, La vie en HD.",
};

export default function CgvPage() {
  return (
    <LegalShell
      title="Conditions générales de vente"
      intro="Les présentes conditions régissent les prestations et accompagnements proposés par Marion Chartier. La vente et le paiement s'effectuent sur la plateforme systeme.io."
      updatedAt="Dernière mise à jour : 1er juillet 2026"
      sections={[
        {
          heading: "Prestataire",
          body: "Marion Chartier, entrepreneuse individuelle (coordonnées complètes sur la page Mentions légales). Email : hello@marionchartier-lavieenhd.com.",
        },
        {
          heading: "Prestations proposées",
          body: "La vie en HD propose des accompagnements et contenus autour du Human Design (séances, guides, programmes). Le détail, le contenu et le format de chaque offre sont présentés sur sa page dédiée. Il s'agit de prestations de services et de contenus numériques.",
        },
        {
          heading: "Prix et paiement",
          body: "Les prix sont indiqués en euros, toutes taxes comprises. Le paiement s'effectue en ligne via systeme.io, au moment de la commande, selon les moyens de paiement proposés par la plateforme. La prestation est confirmée après validation du paiement.",
        },
        {
          heading: "Droit de rétractation",
          body: "Pour les prestations de services, tu disposes d'un délai de rétractation de 14 jours à compter de la commande, sauf si la prestation a été pleinement exécutée avec ton accord avant la fin de ce délai. Pour les contenus numériques fournis immédiatement, tu reconnais renoncer à ce droit dès le début de l'accès au contenu. Modalités précises : [À COMPLÉTER].",
        },
        {
          heading: "Exécution et annulation",
          body: "Les modalités de prise de rendez-vous, de report et d'annulation des séances sont précisées lors de la réservation. Conditions détaillées : [À COMPLÉTER].",
        },
        {
          heading: "Responsabilité",
          body: "Les accompagnements proposés relèvent du développement personnel et ne constituent ni un avis médical, ni un traitement thérapeutique, ni un conseil psychologique. Ils ne se substituent pas à un suivi par un professionnel de santé.",
        },
        {
          heading: "Litiges",
          body: "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, tu peux recourir à un médiateur de la consommation. Coordonnées du médiateur : [À COMPLÉTER].",
        },
      ]}
    />
  );
}
