"use client";

import { CalculateurLayout } from "@/components/sections/CalculateurLayout";
import { useIsDesktop } from "@/components/sections/home/useIsDesktop";

/**
 * Calculateur de schéma de l'accueil en mobile (maquette V36), dans sa propre
 * section. En desktop il reste dans le hero (HomeHero) : la section est masquée
 * et son widget n'est jamais monté. L'ancre #schema-hd permet d'y renvoyer.
 */
export function SchemaGenerateur() {
  const desktop = useIsDesktop();

  const texte = (
    <div>
      <h2 className="font-display text-[36px] font-light leading-tight text-ink-deep md:text-[52px]">
        Il est temps de
        <br />
        révéler ton <em className="italic text-turquoise">mode d’emploi personnel.</em>
      </h2>
      <p className="mt-6 max-w-[460px] font-display text-[17px] font-light leading-relaxed text-ink-deep md:text-[18px]">
        Renseigne ta date, ton heure et ton lieu de naissance pour générer gratuitement ton
        schéma de Human Design.
      </p>
    </div>
  );

  return (
    <section
      id="schema-hd"
      className="scroll-mt-24 bg-paper px-6 pt-20 pb-8 md:px-20 md:pt-28 md:pb-28 lg:hidden"
    >
      <div className="relative mx-auto max-w-(--container-content)">
        {desktop === false ? (
          <CalculateurLayout columns="gap-12" temoignages={[]} titreFormulaire={false}>
            {texte}
          </CalculateurLayout>
        ) : (
          texte
        )}
      </div>
    </section>
  );
}
