"use client";

import { CalculateurLayout } from "@/components/sections/CalculateurLayout";
import { useBodygraphResult } from "@/components/sections/BodygraphChart";

/**
 * Calculateur de schéma de l'accueil, sorti du hero dans sa propre section
 * (maquette V36). L'ancre #schema-hd permet d'y renvoyer.
 */
export function SchemaGenerateur() {
  const hasResult = useBodygraphResult();

  return (
    <section
      id="schema-hd"
      className={`scroll-mt-24 bg-paper px-6 pt-20 md:px-20 md:pt-28 ${
        // Avec un schéma en pleine largeur, la section grandit énormément et le
        // padding bas devient un grand vide avant la section suivante.
        hasResult ? "pb-0" : "pb-8 md:pb-28"
      }`}
    >
      {/* Ratio repris de l'ancien hero : sous ~630px de carte, le champ année du
          widget rogne les quatre chiffres saisis. Camille figure désormais dans
          « Leurs mots, leurs déclics » : on ne répète pas sa voix sous le
          formulaire. */}
      <div className="relative mx-auto max-w-(--container-content)">
        <CalculateurLayout
          columns="gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
          temoignages={["ludivine", "fabienne"]}
          titreFormulaire={false}
        >
          <div className="lg:pt-10">
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
        </CalculateurLayout>
      </div>
    </section>
  );
}
