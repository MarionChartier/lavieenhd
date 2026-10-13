import Image from "next/image";

/**
 * Hero de l'accueil, resserré (maquette V36) : le récit d'origine est passé
 * dans la section « Sortir des cases » (Approche) et le calculateur dans sa
 * propre section plus bas (SchemaGenerateur).
 */
export function HomeHero() {
  return (
    /* `overflow-clip` et NON `overflow-hidden` : les halos ci-dessous débordent
       de la section. `hidden` en ferait un conteneur de défilement, scrollable
       par programme ; `clip` rogne à l'identique sans créer ce conteneur. */
    <section className="relative overflow-clip px-6 pt-10 pb-16 md:px-20 md:pt-12 md:pb-24">
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
        className="pointer-events-none absolute top-40 left-1/2 h-auto w-[560px] max-w-none -translate-x-1/2 opacity-[0.22] mix-blend-multiply lg:top-32 lg:w-[700px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 72%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 72%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      />

      <div className="relative mx-auto max-w-[760px] pt-6 text-center lg:pt-14">
        <h1 className="font-script text-[34px] font-normal leading-[1.35] text-balance text-ink-deep md:text-[56px]">
          Ton <span className="not-italic text-turquoise">Human Design</span>,
          {/* Seconde ligne fixe et un cran plus petite : sans ça, l'équilibrage
              automatique coupe au milieu de « Human Design ». */}
          <span className="mt-2 block text-[0.82em] md:mt-3">ta boussole.</span>
        </h1>

        <p className="mt-8 font-display text-[22px] font-semibold leading-snug text-ink-deep md:text-[28px]">
          Ici, on revient à TOI.
        </p>

        <div className="mx-auto mt-8 flex max-w-[640px] flex-col gap-5 font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[19px]">
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
    </section>
  );
}
