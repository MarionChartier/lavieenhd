import Image from "next/image";
import { EXTERNAL } from "@/lib/links";

/**
 * Section "The Soul Letter" — image à gauche, description + formulaire d'inscription à droite.
 * Le form envoie prénom + email vers l'écosystème systeme.io de Marion.
 */
export function SoulLetterBanner() {
  return (
    <section className="bg-white px-6 py-12 md:px-20 md:py-16">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* LEFT — visuel, bords fondus dans la section */}
        <div
          className="relative h-[280px] w-full md:h-[380px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        >
          <Image
            src="/assets/soulletter-photo.jpeg"
            alt="The Soul Letter"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        {/* RIGHT — titre + description + formulaire */}
        <div>
          <h2 className="font-display text-[28px] font-light leading-tight text-ink-deep md:text-[36px]">
            The Soul Letter
          </h2>
          <p className="mt-3 font-display text-[20px] italic leading-snug text-ink-deep md:text-[24px]">
            De temps en temps, je t'écris comme à une amie.
          </p>
          <p className="mt-4 font-display text-[15px] font-light leading-relaxed text-ink md:text-[16px]">
            Des réflexions tendres, des outils Human Design, des coulisses de mon quotidien et
            des invitations à habiter ta vie pleinement. Sans bullshit, sans diffusion massive.
          </p>

          <form
            action={EXTERNAL.newsletter}
            method="GET"
            target="_blank"
            className="mt-6 flex w-full flex-col gap-3"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Ton prénom" name="firstname" placeholder="Camille" required />
              <Field
                label="Ton email"
                name="email"
                type="email"
                placeholder="ton@email.fr"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink-deep px-8 py-3.5 font-body text-[12px] leading-none uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
            >
              Je rejoins la Soul Letter
            </button>

            <p className="text-center font-display text-[12px] italic text-ink-soft">
              Pas de spam, que du love. Tu peux te désabonner à tout moment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: "text" | "email";
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-body text-[10px] uppercase tracking-[0.22em] text-ink-soft">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="rounded border border-line bg-white/70 px-3.5 py-3 font-body text-[14px] text-ink-deep outline-none transition-colors placeholder:font-display placeholder:font-light placeholder:italic placeholder:text-ink-deep/60 focus:border-turquoise focus:bg-white"
      />
    </label>
  );
}
