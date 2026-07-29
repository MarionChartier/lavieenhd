"use client";

import Image from "next/image";
import { BodygraphChart } from "@/components/sections/BodygraphChart";

/**
 * Calculateur Human Design — partagé entre la home (HomeHero) et la page
 * Test HD gratuit. On embarque le widget officiel Bodygraphchart (le back-end
 * de Marion), dans une carte habillée aux couleurs du site. Le schéma s'affiche
 * là où le formulaire a été rempli, en pleine largeur (voir CalculateurLayout).
 */
export function HDSimulatorForm() {
  return (
    <div className="relative rounded-md border border-ink/15 bg-white p-5 shadow-[0_30px_70px_-30px_rgba(80,60,98,0.18)] md:p-7">
      {/* Logo Marion — premier plan, en haut à droite de la carte */}
      <div className="absolute -top-6 -right-6 z-10 h-[96px] w-[96px] overflow-hidden rounded-full border border-line bg-white shadow-[0_18px_40px_-15px_rgba(80,60,98,0.3)] md:-top-8 md:-right-8 md:h-[110px] md:w-[110px]">
        <Image
          src="/assets/logo-main.png"
          alt=""
          width={128}
          height={128}
          className="h-full w-full object-contain"
        />
      </div>

      {/* pr-* garantit que le titre ne passera jamais sous le logo */}
      <h2 className="pr-24 font-display text-[26px] leading-tight text-ink-deep md:pr-28 md:text-[32px]">
        Il est temps de révéler ton <em className="italic text-turquoise">mode d’emploi personnel</em>.
      </h2>

      {/* Pas de cadre ici : le widget apporte le sien. Et surtout pas
          d'overflow-hidden, qui rognerait la liste des villes. */}
      <div className="relative mt-2">
        <BodygraphChart />
      </div>
    </div>
  );
}
