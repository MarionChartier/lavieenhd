"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { EXTERNAL } from "@/lib/links";

type Testimonial = {
  name: string;
  /** Offre dont est issu le témoignage — affichée en pastille sur la card. */
  offre: Offre;
  photo: string;
  /** Début du témoignage, toujours visible. */
  extrait: string;
  /** Suite, affichée par « Lire la suite ». */
  suite: ReactNode;
};

type Offre = "Reconnect" | "Blooming" | "Reveal" | "Inside" | "The Place to be" | "Body Bloom";

/** Dossier des portraits de témoignages. */
const PHOTO = (file: string) => `/assets/temoignages/${file}`;

/**
 * Sélection de Marion (maquette V36), partagée par la home et /test-gratuit
 * (et /mes-offres en attendant sa refonte).
 */
const TESTIMONIALS: Testimonial[] = [
  {
    // Témoignage final de Maryline (page RECONNECT V96) : accroche en extrait,
    // le cœur du récit dans la suite.
    name: "Maryline",
    offre: "Reconnect",
    photo: PHOTO("Maryline-blooming.webp"),
    extrait:
      "Je recommande à 1000 % cette aventure incroyable! Je ne m'attendais pas vraiment à sortir du brouillard dans lequel j'étais...",
    suite: (
      <>
        <p>
          Le processus RECONNECT et les coachings associés m&apos;ont aidée à dissiper cette brume,
          mais surtout ce cheminement a été pour moi une révélation.
        </p>
        <p>
          Je me sens désormais confiante d&apos;avancer vers ce qui me nourrit en faisant fi des peurs
          et des blocages. Merci infiniment Marion! Je recommencerais 1000 fois sans aucune
          hésitation!
        </p>
      </>
    ),
  },
  {
    name: "Émilie",
    offre: "Blooming",
    photo: PHOTO("Emilie.png"),
    extrait:
      "Waw 😍🥹! Je suis complètement bluffée par la justesse de ton analyse! Pour la fleur 🌸 juste en la regardant, je me suis sentie reconnue.",
    suite: (
      <p>
        [...] Elle m&apos;a permis de confirmer certaines intuitions, elle a renforcé ma confiance
        sur des talents que je n&apos;osais pas trop exploiter, elle m&apos;a ouvert les yeux sur
        certains métiers à envisager, et m&apos;a permis de découvrir ma zone de génie. [...] Ça a
        été une énorme révélation pour moi! La fleur de talents innés est d&apos;une justesse
        incroyable.
      </p>
    ),
  },
  {
    name: "Élise",
    offre: "Reveal",
    photo: PHOTO("Elise-reveal.webp"),
    extrait:
      "Cet échange m'a apporté un nouveau regard et des approfondissements sur ma façon de voir...",
    suite: (
      <>
        <p>...et ce qu&apos;est mon business, tout en me respectant!</p>
        <p>
          <em>Puis, quelques heures après :</em>
          <br />
          Ça bouge déjà...2 offres se dessinent vraiment...Merci encore 🙏
        </p>
      </>
    ),
  },
  {
    name: "Camille",
    offre: "Inside",
    photo: PHOTO("Camille.png"),
    extrait:
      "C'est IN-CROY-ABLE!!! On dirait que tu me connais depuis 30 ans, tout est juste, c'est fou...",
    suite: (
      <p>
        ...je n&apos;en reviens pas! 🤩 C&apos;est impressionnant! Maintenant que j&apos;ai ce
        guide, je trouve ça hyper apaisant, rassurant et déculpabilisant de constater que certains
        de mes fonctionnements ne sont pas juste une &quot;lubie&quot; de ma part, mais que ça fait
        parti de moi en fait! Merci infiniment Marion! 💖
      </p>
    ),
  },
  {
    name: "Astrig",
    offre: "The Place to be",
    photo: PHOTO("Astrig2.png"),
    extrait:
      "Je m'attendais à sortir le globe terrestre pour poser une petite gommette sur le lieu de vie idéal pour moi! Mais ce que j'ai découvert, c'est bien plus que ça!",
    suite: (
      <p>
        J&apos;ai dévoré ce guide comme si je lisais le meilleur roman du moment! Merci Marion pour
        la richesse de cet ebook, et pour tous ces détails et conseils pratiques : c&apos;est
        pépite!
      </p>
    ),
  },
  {
    name: "Yohan",
    offre: "Body Bloom",
    photo: PHOTO("Yohan-body-bloom.webp"),
    extrait:
      "Avec mon conjoint, ayant la même digestion HD, nous avons lu le Guide sur notre intelligence digestive...",
    suite: (
      <p>
        ...et nous l&apos;avons trouvé génial et rempli de vérités! Nous nous sommes reconnus
        pleinement. Merci beaucoup pour ce précieux Guide avec un visuel magnifique. On a
        adoré!! ❤️
      </p>
    ),
  },
];

/** Couleur du badge alignée sur la couleur de l'offre associée. */
const BADGE_COLORS: Record<Offre, string> = {
  Reconnect: "border-[#dccef0] bg-[#ece4f5]/70",
  Blooming: "border-[#c5e6e9] bg-[#dbeef4]/70",
  Reveal: "border-[#dccef0] bg-[#ece4f5]/70",
  Inside: "border-[#c5e6e9] bg-[#dbeef4]/70",
  "The Place to be": "border-[#dccef0] bg-[#ece4f5]/70",
  "Body Bloom": "border-[#e5d4b4] bg-[#f0e3cc]/70",
};

/** Page de vente de l'offre associée au témoignage (clic sur le badge). */
const OFFRE_HREF: Record<Offre, string> = {
  Reconnect: EXTERNAL.offre.reconnect,
  Blooming: EXTERNAL.offre.fleurDeTalents,
  Reveal: EXTERNAL.offre.reveal,
  Inside: EXTERNAL.offre.insideClub,
  "The Place to be": EXTERNAL.offre.thePlaceToBe,
  "Body Bloom": EXTERNAL.offre.bodyBloom,
};

/** Nombre de colonnes de la grille desktop. */
const COLONNES = 2;

/** Renvoie les indices des cards qui partagent la même ligne dans la grille desktop. */
function getRowMates(index: number, total: number, rowSize = COLONNES): number[] {
  const rowStart = Math.floor(index / rowSize) * rowSize;
  return Array.from({ length: rowSize }, (_, i) => rowStart + i).filter(
    (i) => i < total,
  );
}

export function Testimonials() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    // Grille desktop : on déplie toute la ligne pour garder les cards alignées.
    // En 1 colonne (mobile), seule la card cliquée s'ouvre, sinon les cards du
    // dessus poussent le texte hors de l'écran.
    const isGrid = window.matchMedia("(min-width: 1024px)").matches;
    const targets = isGrid ? getRowMates(i, TESTIMONIALS.length) : [i];
    const isCurrentlyExpanded = expanded.has(i);
    setExpanded((prev) => {
      const next = new Set(prev);
      if (isCurrentlyExpanded) {
        targets.forEach((idx) => next.delete(idx));
      } else {
        targets.forEach((idx) => next.add(idx));
      }
      return next;
    });
  };

  return (
    <section
      id="temoignages"
      className="bg-lavender-gradient relative overflow-hidden px-6 py-20 md:px-20 md:py-24"
    >
      {/* Image smile en arrière-plan discret */}
      <Image
        src="/assets/marion-sourire.webp"
        alt=""
        width={1498}
        height={1050}
        priority={false}
        aria-hidden
        className="pointer-events-none absolute top-0 left-[68%] hidden h-auto w-[820px] -translate-x-1/2 opacity-20 mask-t-from-88% mask-r-from-85% mask-b-from-25% mix-blend-multiply lg:block"
      />

      <div className="relative z-10 mx-auto max-w-(--container-content)">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="font-display text-[36px] font-light leading-tight text-ink-deep md:text-[64px]">
            Leurs <em className="italic text-turquoise">mots</em>, leurs
            <br />
            déclics.
          </h2>
        </div>

        {/* 1 colonne mobile, 2 colonnes desktop ; toutes condensées par défaut */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="flex">
              <TestimonialCard
                {...t}
                isExpanded={expanded.has(i)}
                onToggle={() => toggle(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  offre,
  photo,
  extrait,
  suite,
  isExpanded,
  onToggle,
}: Testimonial & {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="relative flex w-full flex-col items-center rounded-md border border-ink/10 bg-white/80 px-7 pt-10 pb-7 text-center backdrop-blur-sm md:px-9 md:pb-9">
      {/* Portrait centré, à cheval sur le bord haut de la card */}
      <div className="absolute -top-9 left-1/2 h-[72px] w-[72px] -translate-x-1/2 overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_6px_16px_-6px_rgba(80,60,98,0.3)]">
        <Image src={photo} alt={`Portrait de ${name}`} fill sizes="72px" className="object-cover" />
      </div>

      {/* Badge « scotch » vers la page de vente de l'offre */}
      <Link
        href={OFFRE_HREF[offre]}
        prefetch={false}
        className={`mt-4 inline-flex -rotate-2 items-center border px-4 pt-[6px] pb-[4px] font-body text-[9px] uppercase leading-none tracking-[0.18em] whitespace-nowrap text-ink-deep shadow-[0_2px_6px_rgba(80,60,98,0.14)] transition-[border-color] hover:border-ink-deep/50 ${BADGE_COLORS[offre]}`}
      >
        {offre}
      </Link>

      <p className="mt-4 font-display text-[22px] italic text-ink-deep md:text-[24px]">{name}</p>

      <blockquote className="mt-3 flex flex-col gap-3 font-display text-[15px] leading-relaxed text-ink-deep md:text-[17px]">
        <p>{extrait}</p>
        {isExpanded && suite}
      </blockquote>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="mt-5 inline-flex w-fit items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-turquoise transition-colors hover:text-ink-deep"
      >
        {isExpanded ? (
          <>
            <span>Réduire</span>
            <span aria-hidden>↑</span>
          </>
        ) : (
          <>
            <span>Lire la suite</span>
            <span aria-hidden>↓</span>
          </>
        )}
      </button>
    </article>
  );
}
