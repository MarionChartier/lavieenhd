"use client";

import Image from "next/image";
import { useBodygraphResult } from "@/components/sections/BodygraphChart";

/**
 * Preuve sociale glissée sous le calculateur, dans la place que sa colonne
 * laisse vide face au texte.
 *
 * Extraits de témoignages déjà publiés sur les pages de vente, et volontairement
 * pris HORS de la section « Des retours qui me touchent » : la home affiche les
 * deux blocs, y répéter les mêmes voix affaiblirait les deux.
 *
 * Pas de pastille d'offre ici, contrairement aux cards de témoignage : on est
 * au pied d'un formulaire gratuit, pas dans un argumentaire de vente.
 */
const TEMOIGNAGES = {
  camille: {
    name: "Camille",
    photo: "/assets/temoignages/Camille.png",
    text: "On dirait que tu me connais depuis 30 ans, tout est juste, c’est fou, je n’en reviens pas ! […] C’est étrange comme sensation de lire ce que je suis dans la réalité, juste à partir de mes informations de naissance.",
  },
  ludivine: {
    name: "Ludivine",
    photo: "/assets/temoignages/Ludivine.png",
    text: "J’y ai retrouvé des choses tellement vraies, tellement moi ; un peu l’histoire de ma vie ! […] Je trouve le HD vraiment magique, c’est ma plus belle découverte de l’année.",
  },
  barbara: {
    name: "Barbara",
    photo: "/assets/temoignages/Barbara.png",
    text: "Le HD me change la vie, et pas que professionnellement, c’est un vrai bonheur.",
  },
  fabienne: {
    name: "Fabienne",
    photo: "/assets/temoignages/Fabienne.png",
    text: "Je me reconnais dans tout ce que tu décris, tout me fait écho ! Ça m’a provoqué beaucoup de joie de te lire, et ça a mis du sens sur certaines choses, en enlevant la peur que j’y associais.",
  },
} as const;

export type TemoignageKey = keyof typeof TEMOIGNAGES;

/**
 * Desktop uniquement : sur mobile les colonnes s'empilent, il n'y a aucun vide à
 * combler et ce serait de la longueur en plus avant le formulaire.
 */
export function CalculateurTemoignages({ items }: { items: readonly TemoignageKey[] }) {
  // Une fois le schéma affiché en pleine largeur, il n'y a plus de vide à combler.
  const hasResult = useBodygraphResult();
  if (hasResult || items.length === 0) return null;

  return (
    <div className="mt-10 hidden flex-col gap-7 lg:flex">
      {items.map((key) => {
        const { name, photo, text } = TEMOIGNAGES[key];
        return (
          <figure key={key} className="flex items-start gap-5">
            <div className="relative h-14 w-14 flex-none">
              <Image src={photo} alt="" fill sizes="56px" className="object-contain" />
            </div>

            <div>
              <blockquote className="font-display text-[15px] italic leading-relaxed text-ink-deep">
                «&nbsp;{text}&nbsp;»
              </blockquote>
              <figcaption className="mt-2 font-body text-[10px] uppercase leading-none tracking-[0.18em] text-ink/60">
                {name}
              </figcaption>
            </div>
          </figure>
        );
      })}
    </div>
  );
}
