import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment tes données personnelles sont collectées, utilisées et protégées sur le site La vie en HD.",
};

export default function ConfidentialitePage() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      intro="Cette page explique quelles données personnelles sont collectées sur le site La vie en HD, pourquoi, et quels sont tes droits."
      updatedAt="Dernière mise à jour : 1er juillet 2026"
      sections={[
        {
          heading: "Responsable du traitement",
          body: "Les données collectées via ce site sont traitées par Marion Chartier, éditrice du site (coordonnées sur la page Mentions légales). Pour toute question, tu peux écrire à hello@marionchartier-lavieenhd.com.",
        },
        {
          heading: "Données collectées",
          body: "Selon tes actions sur le site, les données suivantes peuvent être recueillies :",
          items: [
            "Prénom et adresse email, lorsque tu t'inscris à la Soul Letter ou à une offre.",
            "Données de naissance (date, heure, lieu), lorsque tu utilises l'outil de calcul de ton schéma Human Design.",
            "Données de navigation et de mesure d'audience (pages vues, interactions), uniquement si tu acceptes les cookies de mesure.",
          ],
        },
        {
          heading: "Finalités",
          body: "Tes données sont utilisées pour :",
          items: [
            "T'envoyer la Soul Letter et les informations liées aux offres auxquelles tu t'inscris.",
            "Générer ton schéma Human Design lorsque tu en fais la demande.",
            "Comprendre l'utilisation du site et l'améliorer (mesure d'audience anonyme).",
          ],
        },
        {
          heading: "Base légale",
          body: "Les traitements reposent sur ton consentement (inscription à la Soul Letter, cookies de mesure) et sur l'exécution des prestations que tu demandes.",
        },
        {
          heading: "Sous-traitants et outils tiers",
          body: "Pour fonctionner, le site s'appuie sur des prestataires qui peuvent traiter certaines de tes données pour notre compte :",
          items: [
            "systeme.io : inscriptions, envoi des emails et gestion des paiements.",
            "Vercel : hébergement du site.",
            "Microsoft Clarity : mesure d'audience (uniquement avec ton consentement).",
            "Instagram (Meta) et l'outil de calcul Human Design : services externes intégrés ou liés.",
          ],
        },
        {
          heading: "Durée de conservation",
          body: "Tes données sont conservées le temps nécessaire aux finalités décrites. Elles peuvent être supprimées à tout moment à ta demande.",
        },
        {
          heading: "Cookies",
          body: "Aucun cookie de mesure n'est déposé sans ton accord. Lors de ta première visite, un bandeau te permet d'accepter ou de refuser les cookies de mesure (Microsoft Clarity). Tu peux modifier ton choix à tout moment via le lien « Gérer les cookies » en bas de page.",
        },
        {
          heading: "Tes droits",
          body: "Conformément au RGPD, tu disposes d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de tes données. Pour les exercer, écris à hello@marionchartier-lavieenhd.com. Tu peux également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
        },
        {
          heading: "Litiges",
          body: "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, tu peux recourir à un médiateur de la consommation.",
        },
      ]}
    />
  );
}
