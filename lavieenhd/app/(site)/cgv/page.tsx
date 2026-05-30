import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "CGV · La vie en HD",
  description: "Conditions générales de vente du site La vie en HD - Marion Chartier.",
};

export default function CgvPage() {
  return (
    <LegalShell
      title="Conditions générales de vente"
      intro="Les présentes conditions régissent les prestations proposées par Marion Chartier."
      sections={[
        {
          heading: "Prestations",
          body: "Description des offres, modalités et contenu de chaque accompagnement à compléter.",
        },
        {
          heading: "Tarifs et paiement",
          body: "Prix, moyens de paiement et échéances à compléter. Les transactions sont gérées via systeme.io.",
        },
        {
          heading: "Droit de rétractation",
          body: "Modalités et délais de rétractation conformes à la réglementation à compléter.",
        },
      ]}
    />
  );
}
