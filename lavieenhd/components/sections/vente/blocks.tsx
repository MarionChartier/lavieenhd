import Image from "next/image";
import type { ReactNode } from "react";
import { Petal, Rosace } from "@/components/sections/vente/motifs";
import { Reveal } from "@/components/sections/vente/Reveal";
import { Cta } from "@/components/sections/vente/primitives";

/** Décalage en cascade d'un groupe — 80 ms par cran. */
const stagger = (i: number) => i * 80;

/* ------------------------------------------------------------------------- */
/* Cartes numérotées                                                          */
/* ------------------------------------------------------------------------- */

export type Carte = { titre: string; paragraphes: ReactNode[] };

/**
 * Grille de cartes « pour qui ». Pas de pictogramme : la hiérarchie tient au
 * numéro en Cormorant, au filet qui le souligne et au titre. C'est ce qui
 * remplace les emojis des anciennes pages.
 */
export function CartesGrid({ cartes }: { cartes: Carte[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cartes.map((carte, i) => (
        <Reveal
          key={carte.titre}
          delay={stagger(i)}
          className="group rounded-[28px] border border-line bg-white/70 p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        >
          <p className="font-display text-[34px] font-light leading-none text-ink-lilac">
            {String(i + 1).padStart(2, "0")}
          </p>
          <span aria-hidden className="mt-4 block h-px w-10 bg-ink-lilac/40" />

          <h3 className="mt-6 font-display text-[22px] font-semibold leading-snug text-ink-deep">
            {carte.titre}
          </h3>

          {carte.paragraphes.map((p, j) => (
            <p key={j} className="mt-4 font-display text-[16px] font-light leading-relaxed text-ink">
              {p}
            </p>
          ))}
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Livrables                                                                  */
/* ------------------------------------------------------------------------- */

export type Livrable = { titre: string; texte: ReactNode };

/**
 * Grille des livrables, sur strate profonde. Quand le compte laisse une carte
 * orpheline en fin de grille, la dernière occupe toute la largeur plutôt que de
 * laisser un trou — et cela met justement en avant le livrable de clôture.
 */
export function LivrablesGrid({ livrables }: { livrables: Livrable[] }) {
  const derniereSeule = livrables.length % 3 === 1;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {livrables.map((item, i) => {
        const pleineLargeur = derniereSeule && i === livrables.length - 1;

        return (
          <Reveal
            key={item.titre}
            delay={stagger(i)}
            className={`rounded-[28px] border border-turquoise/25 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-turquoise/50 ${
              pleineLargeur ? "sm:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <Petal className="h-4 w-4 text-turquoise" />
            <h3 className="mt-4 font-display text-[20px] font-semibold leading-snug text-turquoise">
              {item.titre}
            </h3>
            <p className="mt-3 font-display text-[16px] font-light leading-relaxed text-white/85">
              {item.texte}
            </p>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Étapes                                                                     */
/* ------------------------------------------------------------------------- */

export type Etape = { titre: string; texte: ReactNode };

/**
 * Les étapes du processus. La rosace de cinq pétales sert de médaillon : le
 * numéro se lit au centre, le motif rappelle la Fleur à chaque étape.
 */
export function ProcessusSteps({ etapes }: { etapes: Etape[] }) {
  return (
    <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
      {etapes.map((etape, i) => (
        <Reveal as="li" key={etape.titre} delay={stagger(i)} className="text-center">
          <span className="relative mx-auto flex h-16 w-16 items-center justify-center">
            <Rosace className="absolute inset-0 h-16 w-16 text-ink-lilac/50" />
            {/* Cormorant pose ses chiffres sur la ligne de base : sans ce
                relèvement, le numéro paraît glisser sous le cœur de la rosace. */}
            <span className="relative -translate-y-[0.09em] font-display text-[22px] font-light leading-none text-ink-deep">
              {i + 1}
            </span>
          </span>

          <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug text-ink-deep">
            {etape.titre}
          </h3>
          <p className="mt-3 font-display text-[15px] font-light leading-relaxed text-ink">
            {etape.texte}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------------- */
/* Tarif                                                                      */
/* ------------------------------------------------------------------------- */

/** Carte de tarif : bandeau de marque, prix, ce qui est inclus, bon de commande. */
export function PricingCard({
  logo,
  logoAlt,
  prix,
  inclus,
  href,
  libelleCta,
  note,
}: {
  logo: string;
  logoAlt: string;
  prix: string;
  inclus: ReactNode[];
  href: string;
  libelleCta: string;
  note: string;
}) {
  return (
    <Reveal className="mx-auto max-w-[560px] overflow-hidden rounded-[28px] border border-line bg-white shadow-simu">
      {/* Fond plus profond que la strate « deep » : le lettrage blanc du logo
          est fin, il lui faut ce contraste supplémentaire pour rester lisible. */}
      <div className="relative overflow-hidden bg-ink-deep px-8 py-10 text-center">
        <Image
          src={logo}
          alt={logoAlt}
          width={200}
          height={200}
          className="relative mx-auto h-auto w-[180px]"
        />
        <p className="relative mt-4 font-display text-[50px] font-light leading-none text-turquoise">
          {prix}
        </p>
      </div>

      <div className="px-7 py-9 md:px-9">
        <ul className="flex flex-col">
          {inclus.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 border-b border-line py-3.5 last:border-b-0 font-display text-[16px] font-light leading-relaxed text-ink"
            >
              <Petal className="mt-1.5 h-3 w-3 flex-none text-turquoise" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Cta href={href} external className="mt-8 w-full">
          {libelleCta}
        </Cta>
        <p className="mt-4 text-center font-body text-[13px] italic text-ink-soft">{note}</p>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------------- */
/* Témoignages                                                                */
/* ------------------------------------------------------------------------- */

/** Témoignage principal : portrait à gauche, verbatim à droite. */
export function TemoignageHero({
  photo,
  nom,
  contexte,
  texte,
}: {
  photo: string;
  nom: string;
  contexte: string;
  texte: ReactNode;
}) {
  return (
    <Reveal className="grid items-center gap-8 md:grid-cols-[200px_1fr] md:gap-12">
      <Image
        src={photo}
        alt={nom}
        width={220}
        height={220}
        className="mx-auto h-auto w-[160px] md:w-[200px]"
      />

      <div>
        <Rosace className="mx-auto h-8 w-8 text-turquoise/60 md:mx-0" />
        {/* La script a de grandes hampes : sans cet écart, l'accent du prénom
            touche la rosace. */}
        <p className="mt-7 text-center font-script text-[28px] leading-none text-turquoise md:text-left">
          {nom}
        </p>
        <p className="mt-2 text-center font-body text-[11px] uppercase tracking-[0.14em] text-ink-soft md:text-left">
          {contexte}
        </p>
        <div className="mt-5 whitespace-pre-line font-display text-[17px] font-light leading-relaxed text-ink-deep">
          {texte}
        </div>
      </div>
    </Reveal>
  );
}

export type Score = { valeur?: string; label: ReactNode };

/** Chiffres et verbatims courts, en appui du témoignage principal. */
export function ScoreCards({ scores }: { scores: Score[] }) {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {scores.map((score, i) => (
        <Reveal
          key={i}
          delay={stagger(i)}
          className="flex flex-col items-center justify-center rounded-[28px] border border-line bg-paper px-6 py-8 text-center"
        >
          {score.valeur && (
            <p className="font-display text-[38px] font-light leading-none text-ink-deep">
              {score.valeur}
            </p>
          )}
          <div
            className={`font-display font-light leading-relaxed text-ink ${
              score.valeur ? "mt-3 text-[15px]" : "text-[17px] italic"
            }`}
          >
            {score.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Verbatims secondaires, en deux colonnes. */
export function TemoignageCards({ verbatims }: { verbatims: string[] }) {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      {verbatims.map((texte, i) => (
        <Reveal
          key={texte}
          delay={stagger(i)}
          className="rounded-[28px] border border-line bg-paper p-8 shadow-card"
        >
          <Petal className="h-4 w-4 text-turquoise/70" />
          <p className="mt-4 font-display text-[17px] font-light italic leading-relaxed text-ink-deep">
            {texte}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Passerelle vers l'offre suivante                                           */
/* ------------------------------------------------------------------------- */

/** Renvoi vers l'offre du palier au-dessus, en fin de parcours. */
export function BridgeOffre({
  eyebrow,
  titre,
  paragraphes,
  carte,
}: {
  eyebrow: string;
  titre: ReactNode;
  paragraphes: ReactNode[];
  carte: {
    eyebrow: string;
    logo: string;
    logoAlt: string;
    texte: ReactNode;
    href: string;
    libelle: string;
  };
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">{eyebrow}</p>
        <h2 className="mt-5 font-display text-[30px] font-light leading-[1.15] text-ink-deep md:text-[42px]">
          {titre}
        </h2>
        {paragraphes.map((p, i) => (
          <p key={i} className="mt-5 font-display text-[17px] font-light leading-relaxed text-ink">
            {p}
          </p>
        ))}
      </Reveal>

      <Reveal delay={80} className="rounded-[28px] bg-ink-deep px-8 py-10 text-center md:px-10">
        <p className="font-body text-[11px] uppercase tracking-[0.22em] text-turquoise">
          {carte.eyebrow}
        </p>
        <Image
          src={carte.logo}
          alt={carte.logoAlt}
          width={160}
          height={160}
          className="mx-auto mt-6 h-auto w-[150px]"
        />
        <p className="mt-6 font-display text-[16px] font-light leading-relaxed text-white/85">
          {carte.texte}
        </p>
        <Cta href={carte.href} variant="ghost" className="mt-8 border-turquoise/60 bg-transparent text-turquoise hover:bg-turquoise hover:text-ink-deep">
          {carte.libelle}
        </Cta>
      </Reveal>
    </div>
  );
}
