import Image from "next/image";
import { HDSimulatorForm } from "@/components/sections/HDSimulatorForm";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-16 md:px-20 md:pt-12 md:pb-24">
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

      {/* Silhouette en arrière-plan — ancrée à 40% de la largeur de la page, au bas de la section */}
      <Image
        src="/assets/marion_home.png"
        alt=""
        width={600}
        height={300}
        priority={false}
        aria-hidden
        className="pointer-events-none absolute bottom-[12%] left-[10%] hidden h-auto w-[700px] opacity-[0.22] mix-blend-multiply lg:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 72%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 72%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      />

      <div className="relative mx-auto grid max-w-(--container-content) gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
        {/* LEFT — copy */}
        <div className="pt-6 lg:pt-16">
          <h1 className="font-script text-[26px] font-normal leading-none whitespace-nowrap text-ink-deep md:text-[44px]">
            La vie en <span className="not-italic text-turquoise">HD</span>
          </h1>

          <p className="mt-8 max-w-[520px] font-display text-[18px] italic leading-snug text-ink-deep md:text-[22px]">
            Et si tu te rencontrais&nbsp;?
            <br />
            Vraiment. En couleur, en grand, en toi.
          </p>

          <p className="mt-7 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink">
            Le Human Design est lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <p className="mt-5 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink">
            Je suis <strong className="font-semibold">Marion</strong>. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore.
          </p>
        </div>

        {/* RIGHT — simulator */}
        <div className="relative">
          <HDSimulatorForm />
        </div>
      </div>
    </section>
  );
}
