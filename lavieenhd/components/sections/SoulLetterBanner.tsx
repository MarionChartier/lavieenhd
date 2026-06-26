"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Section "The Soul Letter" — bandeau HQ pleine largeur (titre + sous-titre déjà
 * intégrés à l'image), avec le formulaire d'inscription (prénom + email) posé
 * directement sur le bandeau.
 *
 * Inscription branchée sur systeme.io en arrière-plan (même mécanisme que les quiz) :
 * un POST est envoyé dans une iframe cachée vers l'endpoint d'inscription du
 * formulaire Soul Letter, et l'utilisateur reste sur le site (message de confirmation).
 *
 * À compléter avec le CODE D'INTEGRATION du formulaire Soul Letter de Marion :
 *   - action     : l'URL du <form action="..."> (ex. https://systeme.io/embedded/XXXXXXXX/subscription)
 *   - emailField : le name="" du champ email (souvent "email")
 *   - nameField  : le name="" du champ prénom (souvent "first_name")
 *   - hidden     : champs cachés éventuels { "nom": "valeur" }
 * Tant que "action" est vide, le formulaire reste inerte (rien n'est envoyé), sans casser la page.
 *
 * Bannière HQ fournie par Marion (1600×533), version dorée. La version cyan
 * (soulletter-banner-cian-hq.png) est aussi disponible si on change la palette.
 */
const SOULLETTER = {
  action: "https://systeme.io/embedded/42096565/subscription",
  emailField: "email",
  nameField: "first_name",
  hidden: {} as Record<string, string>,
};

export function SoulLetterBanner() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const prenom = (form.elements.namedItem("firstname") as HTMLInputElement | null)?.value.trim() ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement | null)?.value.trim() ?? "";
    if (!email) return;

    if (SOULLETTER.action) {
      try {
        let iframe = document.getElementById("sio-sink-soulletter") as HTMLIFrameElement | null;
        if (!iframe) {
          iframe = document.createElement("iframe");
          iframe.name = "sio-sink-soulletter";
          iframe.id = "sio-sink-soulletter";
          iframe.style.display = "none";
          document.body.appendChild(iframe);
        }
        const sio = document.createElement("form");
        sio.method = "POST";
        sio.action = SOULLETTER.action;
        sio.target = "sio-sink-soulletter";
        sio.style.display = "none";
        const add = (name: string, value: string) => {
          if (!name) return;
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          input.value = value;
          sio.appendChild(input);
        };
        add(SOULLETTER.emailField, email);
        add(SOULLETTER.nameField, prenom);
        Object.entries(SOULLETTER.hidden).forEach(([k, v]) => add(k, v));
        document.body.appendChild(sio);
        sio.submit();
        setTimeout(() => sio.remove(), 1000);
      } catch {
        /* on n'empêche jamais l'affichage de la confirmation */
      }
    }

    setDone(true);
  }

  return (
    <section className="bg-white px-6 pt-4 pb-14 md:px-20 md:pt-6 md:pb-20">
      {/* Titre + description au-dessus du bandeau */}
      <div className="mx-auto mb-8 max-w-[680px] text-center md:mb-10">
        <h2 className="font-display text-[28px] font-light italic leading-tight text-ink-deep md:text-[40px]">
          De temps en temps, je t'écris comme à une amie.
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] font-display text-[16px] font-light leading-relaxed text-ink md:text-[18px]">
          Des réflexions tendres, des outils Human Design et des coulisses de mon quotidien.
          Sans bullshit, sans diffusion massive.
        </p>
      </div>

      <div className="mx-auto max-w-(--container-content) overflow-hidden rounded-2xl shadow-[0_20px_50px_-24px_rgba(80,60,98,0.22)]">
        <Image
          src="/assets/soulletter-banner-or-hq.png"
          alt="The Soul Letter, la newsletter intimiste & authentique"
          width={1600}
          height={533}
          sizes="100vw"
          className="h-auto w-full object-cover"
          priority={false}
        />
      </div>

      {/* Formulaire CTA, juste sous le bandeau */}
      {done ? (
        <p className="mx-auto mt-6 max-w-[760px] text-center font-display text-[18px] font-light italic text-ink-deep md:mt-8 md:text-[20px]">
          Merci, c'est confirmé ✨ Surveille ta boîte mail, je t'écris très vite.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex w-full max-w-[760px] flex-col gap-2 sm:flex-row sm:items-center md:mt-8"
        >
          <input
            name="firstname"
            placeholder="Ton prénom"
            required
            className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2.5 font-sans text-[14px] text-ink-deep outline-none transition-colors placeholder:font-sans placeholder:text-ink-deep/45 focus:border-turquoise"
          />
          <input
            name="email"
            type="email"
            placeholder="Ton email"
            required
            className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2.5 font-sans text-[14px] text-ink-deep outline-none transition-colors placeholder:font-sans placeholder:text-ink-deep/45 focus:border-turquoise"
          />
          <button
            type="submit"
            className="shrink-0 whitespace-nowrap rounded-full border border-[#c1ad8d] bg-[#c1ad8d] px-6 py-2.5 font-body text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#c1ad8d]"
          >
            Je rejoins la Soul Letter
          </button>
        </form>
      )}
    </section>
  );
}
