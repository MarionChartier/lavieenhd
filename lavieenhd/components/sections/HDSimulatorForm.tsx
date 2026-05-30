import Image from "next/image";
import { EXTERNAL } from "@/lib/links";

/**
 * Formulaire de simulateur Human Design — partagé entre la home (HomeHero)
 * et la page Test gratuit. Redirige vers le simulateur systeme.io de Marion.
 *
 * Le visuel (logo en pastille top-right, champs, bouton) reste identique partout
 * pour garder une signature forte. Le wrapping autour (titres, explications)
 * varie d'une page à l'autre.
 */
export function HDSimulatorForm() {
  return (
    <div className="relative rounded-md border border-ink/15 bg-white p-7 shadow-[0_30px_70px_-30px_rgba(80,60,98,0.18)] md:p-9">
      {/* Logo Marion — premier plan, en haut à droite de la carte */}
      <div className="absolute -top-6 -right-6 z-10 h-[96px] w-[96px] rounded-full border border-line bg-white p-3 shadow-[0_18px_40px_-15px_rgba(80,60,98,0.3)] md:-top-8 md:-right-8 md:h-[110px] md:w-[110px]">
        <Image
          src="/assets/logo-main.png"
          alt=""
          width={110}
          height={110}
          className="h-full w-full object-contain"
        />
      </div>

      {/* pr-* garantit que le titre ne passera jamais sous le logo */}
      <h3 className="pr-24 font-display text-[26px] leading-tight text-ink-deep md:pr-28 md:text-[32px]">
        Découvre ton schéma <em className="italic text-turquoise">Human Design</em>.
      </h3>

      <form
        action={EXTERNAL.simulateur}
        method="GET"
        target="_blank"
        className="mt-6 flex flex-col gap-4"
      >
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <Field label="Prénom" name="firstname" placeholder="Camille" required />
          <Field label="Nom" name="lastname" placeholder="Dupont" required />
        </div>

        <Field
          label="Lieu de naissance"
          name="birthplace"
          placeholder="Paris"
          required
        />

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <Field
            label="Date de naissance"
            name="birthdate"
            type="text"
            placeholder="JJ / MM / AAAA"
            required
          />
          <Field
            label="Heure de naissance"
            name="birthtime"
            type="text"
            placeholder="HH : MM"
            required
          />
        </div>

        <Field
          label="Adresse email"
          name="email"
          type="email"
          placeholder="ton@email.fr"
          required
        />

        <label className="mt-1 flex items-start gap-3 text-[12px] leading-snug text-ink">
          <input
            type="checkbox"
            name="newsletter_consent"
            className="mt-[3px] h-4 w-4 flex-none cursor-pointer rounded-sm border border-ink-lilac text-turquoise accent-turquoise"
          />
          <span className="font-body">
            J'accepte de recevoir des emails de La vie en HD{" "}
            <span className="italic text-ink-soft">(pas de spam, que du love)</span>
          </span>
        </label>

        <a
          href={EXTERNAL.bodygraph}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full items-center justify-center rounded-full bg-ink-deep px-6 py-4 font-body text-[12px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
        >
          Calculer mon schéma
        </a>
      </form>
    </div>
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
        className="rounded border border-line bg-paper px-3.5 py-3 font-body text-[14px] text-ink-deep outline-none transition-colors placeholder:font-display placeholder:font-light placeholder:italic placeholder:text-ink-deep/80 focus:border-turquoise focus:bg-white"
      />
    </label>
  );
}
