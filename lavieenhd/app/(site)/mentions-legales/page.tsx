import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Mentions légales · La vie en HD",
  description: "Mentions légales du site La vie en HD - Marion Chartier.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalShell
      title="Mentions légales"
      intro="Informations légales relatives au site La vie en HD et à son éditrice."
      sections={[
        {
          heading: "Éditeur du site",
          body: "Nom, statut (micro-entreprise, etc.), adresse, SIRET, email de contact à compléter.",
        },
        {
          heading: "Hébergement",
          body: "Nom et coordonnées de l'hébergeur du site à compléter.",
        },
        {
          heading: "Propriété intellectuelle",
          body: "L'ensemble des contenus (textes, visuels, logos) est protégé. Mention détaillée à compléter.",
        },
      ]}
    />
  );
}
