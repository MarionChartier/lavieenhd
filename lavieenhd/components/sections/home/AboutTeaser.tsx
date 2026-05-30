import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PHOTO_MARION_LIVING =
  "https://images.unsplash.com/photo-1542596594-649edbc13630?w=900&q=80&auto=format&fit=crop";

const PILLS = [
  "Manifesting Generator 2/4",
  "Magicienne fraternelle",
  "Maman d'un Manifestor",
] as const;

export function AboutTeaser() {
  return (
    <section className="px-6 py-24 md:px-20 md:py-32">
      <div className="mx-auto grid max-w-(--container-content) gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
        {/* Photo + HDCard */}
        <div className="relative">
          <div className="relative h-[480px] w-full overflow-hidden rounded md:h-[580px]">
            <Image
              src={PHOTO_MARION_LIVING}
              alt="Portrait de Marion Chartier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* HD Card flottante */}
          <div className="absolute -bottom-8 right-2 z-10 md:-bottom-10 md:-right-6">
            <HDCardMarion />
          </div>
        </div>

        {/* Copy */}
        <div>
          <Eyebrow>Qui je suis</Eyebrow>
          <h2 className="mt-5 font-display text-[44px] font-light leading-[1] text-ink-deep md:text-[72px]">
            Marion,
            <br />
            <em className="italic">multi-passionnée.</em>
          </h2>

          <p className="mt-7 max-w-[520px] font-display text-[16px] font-light leading-relaxed text-ink">
            Après des années d'ingénierie en multinationales à chercher ma place, je me suis
            retrouvée grâce au Human Design. Aujourd'hui, je t'accompagne à te révéler
            pleinement, dans ta vie pro et au-delà.
          </p>

          <p className="mt-4 max-w-[520px] font-display text-[16px] italic leading-relaxed text-ink">
            « Je crois qu'on a tous une zone de génie. Mon job, c'est de t'aider à voir la
            tienne. »
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {PILLS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-ink-lilac bg-white px-5 pt-3 pb-2 font-sub text-[13px] leading-none tracking-wide text-ink-deep"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                {label}
              </span>
            ))}
          </div>

          <Link
            href="/qui-je-suis"
            className="mt-10 inline-flex items-center rounded-full border border-ink-deep px-8 pt-[18px] pb-[14px] font-body text-[12px] leading-none uppercase tracking-[0.18em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-paper"
          >
            Faire connaissance
          </Link>
        </div>
      </div>
    </section>
  );
}

function HDCardMarion() {
  return (
    <div className="w-[260px] rounded-md border border-ink/14 bg-white p-6 shadow-[0_16px_40px_-20px_rgba(80,60,98,0.16)] md:w-[280px]">
      <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
        Carte HD de Marion
      </p>
      <p className="mt-1.5 pb-2 font-display text-[24px] leading-[1.05] text-ink-deep md:text-[26px]">
        Manifesting Generator 2/4
      </p>
      <p className="font-sub text-[12px] tracking-wide text-turquoise">
        L'Ermite · l'Opportuniste
      </p>

      <hr className="my-3.5 border-line" />

      <dl className="flex flex-col gap-1 text-[12px]">
        <Row label="Autorité" value="Émotionnelle" />
        <Row label="Signature" value="Satisfaction" />
        <Row label="Stratégie" value="Répondre" />
        <Row label="Non-Soi" value="Frustration" />
        <Row label="Profil" value="2/4" />
        <Row label="Définition" value="Double" />
        <Row label="Environnement" value="Montagnes" />
      </dl>

      <hr className="my-3.5 border-line" />

      <div className="flex justify-center gap-1">
        {Array.from({ length: 9 }).map((_, i) => {
          // Ordre HD : Tête, Ajna, Gorge, G, Cœur, Plexus, Sacral, Rate, Racine
          // Marion : Tête (0) et Ajna (1) ouverts → les 7 autres définis
          const defined = i >= 2;
          return (
            <span
              key={i}
              className={`h-3 w-3 rounded-sm ${defined ? "bg-turquoise" : "bg-line"}`}
            />
          );
        })}
      </div>
      <p className="mt-2 text-center font-body text-[10px] uppercase tracking-[0.16em] text-ink-soft">
        9 centres · 7 définis
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-ink">
      <dt>{label}</dt>
      <dd className="font-semibold text-ink-deep">{value}</dd>
    </div>
  );
}
