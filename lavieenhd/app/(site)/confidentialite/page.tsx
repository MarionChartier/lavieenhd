import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Confidentialité · La vie en HD",
  description:
    "Politique de confidentialité et de protection des données du site La vie en HD.",
};

export default function ConfidentialitePage() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      intro="Comment tes données personnelles sont collectées, utilisées et protégées."
      sections={[
        {
          heading: "Données collectées",
          body: "Nature des données recueillies (prénom, email, informations de naissance pour le calcul HD) à préciser.",
        },
        {
          heading: "Utilisation des données",
          body: "Finalités : envoi de la newsletter, génération du schéma HD, suivi des commandes. Détail à compléter.",
        },
        {
          heading: "Tes droits",
          body: "Droit d'accès, de rectification et de suppression de tes données. Modalités d'exercice à compléter.",
        },
      ]}
    />
  );
}
