"use client";

import Image from "next/image";
import { CalculateurLayout } from "@/components/sections/CalculateurLayout";
import { useBodygraphResult } from "@/components/sections/BodygraphChart";
import { useIsDesktop } from "@/components/sections/home/useIsDesktop";

/** Colonnes texte / calculateur du hero desktop. Sous ~630px de carte, le champ
 *  année de la ligne de date rogne les quatre chiffres saisis. */
const COLONNES = "gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20";

/**
 * Hero de l'accueil, resserré (maquette V36) : le récit d'origine est passé
 * dans la section « Sortir des cases » (Approche).
 *
 * Mobile : texte seul et centré, le calculateur vient plus bas
 * (SchemaGenerateur). Desktop, à la demande de Marion : le calculateur reste
 * dans le hero, à droite du texte, avec le témoignage de Barbara dessous.
 */
export function HomeHero() {
  const desktop = useIsDesktop();
  const hasResult = useBodygraphResult();

  const texte = (
    <div className="mx-auto max-w-[760px] pt-6 text-center lg:mx-0 lg:max-w-none lg:pt-16 lg:text-left">
      {/* En colonne (lg+), la taille suit la largeur pour que « Human Design, »
          tienne sur une ligne, comme dans l'ancien hero. */}
      <h1 className="font-script text-[34px] font-normal leading-[1.35] text-balance text-ink-deep md:text-[56px] lg:text-[clamp(33px,4.4vw_-_11.5px,44px)]">
        Ton <span className="not-italic text-turquoise">Human Design</span>,
        {/* Seconde ligne fixe et un cran plus petite : sans ça, l'équilibrage
            automatique coupe au milieu de « Human Design ». */}
        <span className="mt-2 block text-[0.82em] md:mt-3">ta boussole.</span>
      </h1>

      <p className="mt-8 font-display text-[22px] font-semibold leading-snug text-ink-deep md:text-[28px] lg:mt-6 lg:text-[24px]">
        Ici, on revient à TOI.
      </p>

      <div className="mx-auto mt-8 flex max-w-[640px] flex-col gap-5 font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px] lg:mx-0 lg:mt-6 lg:text-[18px]">
        <p>
          À travers le Human Design, je t&rsquo;aide à sortir du flou, à mieux comprendre qui tu
          es et ce qui est juste pour TOI, et surtout à trouver TA propre façon d&rsquo;avancer
          sur ton chemin professionnel.
        </p>
        <p>
          <strong className="font-semibold">Le but?</strong>{" "}Que tu te sentes (enfin) à ta place
          dans ta vie pro, et que tu n&rsquo;aies pas à te trahir pour réussir.
        </p>
        <p>
          <strong className="font-semibold">
            Parce que je crois que chacun a SA propre recette magique. ✨
          </strong>
        </p>
      </div>
    </div>
  );

  return (
    /* `overflow-clip` et NON `overflow-hidden` : les halos ci-dessous débordent
       de la section. `hidden` en ferait un conteneur de défilement, scrollable
       par programme ; `clip` rogne à l'identique sans créer ce conteneur. */
    <section
      className={`relative overflow-clip px-6 pt-10 md:px-20 md:pt-12 ${
        // Avec un schéma en pleine largeur, la section grandit énormément et le
        // padding bas devient un grand vide avant la section suivante.
        desktop && hasResult ? "pb-0" : "pb-16 md:pb-24"
      }`}
    >
      {/* Halos flous — profondeur ambiante */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-[15%] h-[420px] w-[420px] rounded-full bg-turquoise/[0.07] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full bg-ink-lilac/[0.12] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-24 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-beige-soft/[0.18] blur-3xl"
      />

      {/* Chemins fluides — traversent toute la largeur de la section */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke="#9784aa" strokeLinecap="round">
          {/* Courbe 1 — BAS → DROITE : grand arc qui culmine haut en plein milieu */}
          <path
            d="M 350 980 Q 1100 280 1620 480"
            strokeWidth="1.3"
            opacity="0.15"
            vectorEffect="non-scaling-stroke"
          />
          {/* Courbe 3 — GAUCHE → DROITE : reste tout en haut, ondule légèrement */}
          <path
            d="M -120 50 C 400 0 900 130 1620 40"
            strokeWidth="1.4"
            opacity="0.16"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>

      {/* Silhouette en arrière-plan, centrée derrière le texte */}
      <Image
        src="/assets/marion_home.png"
        alt=""
        width={600}
        height={300}
        priority
        aria-hidden
        className="pointer-events-none absolute top-40 left-1/2 h-auto w-[560px] max-w-none -translate-x-1/2 opacity-[0.22] mix-blend-multiply lg:top-32 lg:left-[10%] lg:w-[700px] lg:translate-x-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 72%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 72%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      />

      <div className="relative mx-auto max-w-(--container-content)">
        {desktop ? (
          <CalculateurLayout columns={COLONNES} temoignages={["barbara"]}>
            {texte}
          </CalculateurLayout>
        ) : (
          // Même grille avant hydratation : en desktop, le texte occupe déjà
          // la colonne de gauche le temps que le calculateur arrive.
          <div className={`grid ${COLONNES}`}>{texte}</div>
        )}
      </div>
    </section>
  );
}
