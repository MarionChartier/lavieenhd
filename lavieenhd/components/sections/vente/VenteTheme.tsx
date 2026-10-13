import type { CSSProperties, ReactNode } from "react";
import { MOTIF_ID, MOTIF_PATHS, type MotifForme } from "@/components/sections/vente/motifs";

/**
 * Identité propre à une page de vente : ses couleurs et la forme de son motif.
 *
 * Demande de Marion : la couleur de l'offre se limite aux fonds de section
 * (`accentSoft`) et aux formes décoratives en filigrane (`motif`). Les petits
 * éléments (puces, prix, prénoms, « + » de la FAQ…) restent turquoise comme
 * sur Blooming, sauf page qui passe explicitement `accent` / `accentTexte`
 * (RECONNECT, au violet de son logo). C'est tout ce qui change d'une offre à l'autre, la structure et les
 * blocs restent ceux de Blooming.
 *
 * La couleur passe par les variables `--color-accent*`, lues par les utilitaires
 * `text-accent`, `bg-accent-soft`… La forme est déclarée une fois en `<defs>`
 * et réutilisée par chaque motif via `<use>`. Sans thème, l'accent retombe sur
 * le turquoise de `globals.css`, mais le motif, lui, ne s'affiche pas : toute
 * page qui utilise les blocs de vente doit être enveloppée.
 *
 * `contents` : l'enveloppe ne crée pas de boîte, la mise en page des strates
 * reste exactement celle d'avant.
 */
export function VenteTheme({
  accent = "#75ced2",
  accentSoft = "#dbeef4",
  accentTexte,
  motif,
  forme = "petale",
  children,
}: {
  accent?: string;
  /** Teinte très claire de l'accent, pour les fonds de strate. */
  accentSoft?: string;
  /** Accent des textes posés sur fond clair, si l'accent seul y est illisible
   *  (un or clair, par exemple). Par défaut, l'accent lui-même. */
  accentTexte?: string;
  /** Couleur des formes décoratives de fond. Par défaut, l'accent. */
  motif?: string;
  forme?: MotifForme;
  children: ReactNode;
}) {
  return (
    <div
      className="contents"
      style={
        {
          "--color-accent": accent,
          "--color-accent-soft": accentSoft,
          "--color-accent-texte": accentTexte ?? accent,
          "--color-motif": motif ?? accent,
        } as CSSProperties
      }
    >
      <svg aria-hidden width="0" height="0" className="absolute">
        <defs>
          <path id={MOTIF_ID} d={MOTIF_PATHS[forme]} />
        </defs>
      </svg>
      {children}
    </div>
  );
}
