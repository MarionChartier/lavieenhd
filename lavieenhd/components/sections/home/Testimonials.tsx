"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EXTERNAL } from "@/lib/links";

type Testimonial = {
  name: string;
  text: string;
  /** Portrait rond (liseré doré) fourni par la cliente, sinon "Anonyme". */
  photo: string;
  /** Offre dont est issu le témoignage — affichée en pastille sur la card. */
  offre: string;
};

/** Dossier des portraits de témoignages (photos clientes, liseré doré déjà intégré). */
const PHOTO = (file: string) => `/assets/temoignages/${file}`;

/** Sélection de Marion : un témoignage par offre, dans l'ordre du parcours. */
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Barbara",
    offre: "Soin énergétique",
    photo: PHOTO("Barbara.png"),
    text: `Je dois vraiment te dire merci du fond du cœur car je pense que le soin de décembre a ouvert la porte derrière laquelle je restais coincée.

On en parlait avec une amie cet après-midi : elle a fait le soin aussi, elle a le même ressenti. 💖`,
  },
  {
    name: "Astrig",
    offre: "The Place to be",
    photo: PHOTO("Astrig2.png"),
    text: `Je m'attendais à sortir le globe terrestre pour poser une petite gommette sur le lieu de vie idéal pour moi ! Mais ce que j'ai découvert, c'est bien plus que ça ! J'ai dévoré ce guide comme si je lisais le meilleur roman du moment !

Merci Marion pour la richesse de cet ebook, et pour tous ces détails et conseils pratiques : c'est pépite ! Les explications sont claires et précises, et on est vraiment guidés pas à pas pour décrypter notre environnement et appliquer des changements concrets dans notre quotidien.

Encore merci Marion 🌟`,
  },
  {
    name: "Louise-Armance",
    offre: "Inside",
    photo: PHOTO("Louise-Armance.png"),
    text: `Je ne connaissais absolument rien du tout au Human Design, et le guide d'immersion m'a donné beaucoup d'indications réellement étonnantes ; je me suis retrouvée dans énormément de descriptions et j'ai appris plein de choses sur moi !

Je ne pensais pas que mes seules infos de naissance pourraient en dévoiler autant alors qu'on ne se connait pas ! 😮 Et c'est quand même dingue d'avoir attendu plus de 35 ans pour découvrir que j'avais été livrée avec un mode d'emploi ! 😂

Clairement je me reconnais vraiment dans ma personnalité et mon fonctionnement, c'est tout à fait moi, depuis enfant, c'est fou ! Et il y a d'autres aspects de moi que je découvre et que j'ai envie de creuser du coup ! 😍

Merci mille fois pour toutes ces informations précieuses Marion, ça résonne beaucoup en moi, c'est très parlant ! Bluffant même ! 💥`,
  },
  {
    name: "Marjory",
    offre: "Reveal",
    photo: PHOTO("Marjory.png"),
    text: `Marion a été d'une aide précieuse pour mon questionnement professionnel assez complexe... Elle a éclairé mes lumières sur de nombreux points d'une manière bluffante !

Je suis repartie avec une vraie clarté sur les domaines dans lesquels je pouvais exceller, la manière également d'y arriver et d'être efficace. Et surtout, grâce à elle, je me suis autorisée à accueillir la version de moi qui rêvait GRAND mais qui n'osait pas l'assumer ! Ça a débloqué une grosse partie de moi qui se sentait pas légitime et pas capable. Donc juste MERCI pour ça ! 🙏🙏🙏

J'y vois beaucoup plus clair, et j'ai ouvert des portes que je ne soupçonnais pas possibles pour moi.

Quelques mois après : « Honnêtement merci encore Marion parce que vraiment tes conseils ont été précieux et aujourd'hui ils sont ancrés. Peu importe ce que les gens me disent je sais, moi, toute seule ce qui est le mieux et ça a tout changé dans ma vie. 🙏 »`,
  },
  {
    name: "Émilie",
    offre: "Blooming",
    photo: PHOTO("Emilie.png"),
    text: `Waw 😍🥲 !

Je suis complètement bluffée par la justesse de ton analyse ! Je me retrouve dans 95% de ce qui est écrit (et les 5%, doivent venir du conditionnement 🧘🤗).

Pour la fleur 🌸 juste en la regardant, je me suis sentie reconnue.
Je vais l'imprimer en grand je pense tellement elle est belle 😁 !`,
  },
  {
    name: "Justine",
    offre: "Reconnect",
    photo: PHOTO("Justine.png"),
    text: `Cela fait plusieurs années maintenant que je fais des coachings professionnels, des bilans de compétences, des tests de personnalité, thème astral, numérologie etc... pour essayer de trouver ma voie professionnelle. C'est donc en toute connaissance de cause que je peux affirmer que Reconnect est l'accompagnement le plus complet que j'ai fait jusqu'à présent.

Ce que j'ai beaucoup aimé c'est le format : un questionnaire par semaine, que l'on peut faire n'importe où. Cela permet vraiment d'avancer à son rythme sur la semaine et chaque lundi on a la surprise du nouveau questionnaire, c'est un peu comme un cadeau que l'on se fait à soi même :)

J'adore également le fait (et c'est aussi selon moi ce qui fait que l'accompagnement se démarque complètement de tous les autres) que Marion utilise tous les outils à sa disposition pour nous aider : le Human Design bien sûr qui est un outil que je ne connaissais pas et qui m'a vraiment bluffée (très complet), la numérologie, l'EFT, des tests de personnalité, des exercices pratiques et concrets, des guidances sur certaines thématiques, des soins énergétiques...
En fait, TOUT est vraiment mélangé et recoupé en un accompagnement hyper puissant parce que Marion maitrise ses sujets et grâce à elle et à ses coachings on avance vraiment. Il y a un avant et un après l'accompagnement. J'ai appris énormément de choses que je ne soupçonnais même pas sur moi alors que vraiment cela fait plusieurs années que je fais tous les tests de personnalité possibles^^ et inversement cela m'a aussi conforté dans certains choix professionnels.

De plus, Marion est super disponible et à l'écoute. Son super pouvoir selon moi c'est vraiment cette capacité à vulgariser ce qui peut nous sembler abstrait pour le rendre concret, compréhensible et que l'on puisse l'appliquer à notre vie de tous les jours. Elle est vraiment impliquée pour nous aider et nous faire avancer, de sa disponibilité en passant par les retours de soins énergétiques jusqu'à ses exercices pratiques « bonus » en fin de mail hebdomadaires, tout a vraiment été pensé et mis en place pour les personnes qui suivent le programme.

Je recommande les yeux fermés, à mon sens c'est vraiment l'accompagnement le plus complet que j'ai pu vivre jusqu'à maintenant.
C'est LA clé si vous êtes bloqués dans votre vie professionnelle.

Encore Merci !!!`,
  },
];

/** Couleur du badge alignée sur la card de l'offre associée (section « parcours »). */
const BADGE_COLORS: Record<string, string> = {
  "Soin énergétique": "border-[#e5d4b4] bg-[#f0e3cc]/70",
  "The Place to be": "border-[#dccef0] bg-[#ece4f5]/70",
  Inside: "border-[#c5e6e9] bg-[#dbeef4]/70",
  Reveal: "border-[#dccef0] bg-[#ece4f5]/70",
  Blooming: "border-[#c5e6e9] bg-[#dbeef4]/70",
  Reconnect: "border-[#dccef0] bg-[#ece4f5]/70",
};
const BADGE_FALLBACK = "border-turquoise/50 bg-turquoise-soft/60";

/** Page de vente de l'offre associée au témoignage (clic sur le badge). */
const OFFRE_HREF: Record<string, string> = {
  "Soin énergétique": EXTERNAL.offre.soinEnergetique,
  "The Place to be": EXTERNAL.offre.thePlaceToBe,
  Inside: EXTERNAL.offre.insideClub,
  Reveal: EXTERNAL.offre.reveal,
  Blooming: EXTERNAL.offre.fleurDeTalents,
  Reconnect: EXTERNAL.offre.reconnect,
};

/** Renvoie les indices des cards qui partagent la même ligne dans la grille desktop (3 cols). */
function getRowMates(index: number, total: number, rowSize = 3): number[] {
  const rowStart = Math.floor(index / rowSize) * rowSize;
  return Array.from({ length: rowSize }, (_, i) => rowStart + i).filter(
    (i) => i < total,
  );
}

export function Testimonials() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const rowMates = getRowMates(i, TESTIMONIALS.length);
    const isCurrentlyExpanded = expanded.has(i);
    setExpanded((prev) => {
      const next = new Set(prev);
      if (isCurrentlyExpanded) {
        rowMates.forEach((idx) => next.delete(idx));
      } else {
        rowMates.forEach((idx) => next.add(idx));
      }
      return next;
    });
  };

  return (
    <section className="bg-lavender-gradient relative overflow-hidden px-6 py-20 md:px-20 md:py-24">
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
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-display text-[36px] font-light leading-tight text-ink-deep md:text-[64px]">
            Des <em className="italic text-turquoise">retours</em> qui me touchent.
          </h2>
        </div>

        {/* Grid 1 col mobile, 3 cols desktop — 6 cards, toutes condensées par défaut */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
  text,
  photo,
  offre,
  isExpanded,
  onToggle,
}: Testimonial & {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`relative flex w-full flex-col rounded-md border border-ink/10 bg-white/80 p-7 backdrop-blur-sm md:p-9 ${
        // Hauteur fixe quand dépliée pour garder une cohérence visuelle dans la grille,
        // même si le texte est court.
        isExpanded ? "min-h-[520px]" : ""
      }`}
    >
      {/* Badge « scotch » — centré à cheval sur le bord haut de la card */}
      <Link
        href={OFFRE_HREF[offre] ?? "/mes-offres"}
        prefetch={false}
        className={`absolute -top-3 left-1/2 z-10 inline-flex -translate-x-1/2 -rotate-2 items-center border px-4 pt-[6px] pb-[4px] font-body text-[9px] uppercase leading-none tracking-[0.18em] whitespace-nowrap text-ink-deep shadow-[0_2px_6px_rgba(80,60,98,0.14)] transition-[border-color] hover:border-ink-deep/50 ${
          BADGE_COLORS[offre] ?? BADGE_FALLBACK
        }`}
      >
        {offre}
      </Link>

      <div className="mb-5 flex items-center gap-4">
        <div className="relative h-16 w-16 flex-none">
          <Image
            src={photo}
            alt={`Portrait de ${name}`}
            fill
            sizes="64px"
            className="object-contain"
          />
        </div>
        <p className="font-display text-[20px] italic text-ink-deep md:text-[22px]">{name}</p>
      </div>

      <blockquote
        className={`relative font-display text-[15px] leading-relaxed whitespace-pre-line text-ink-deep md:text-[16px] ${
          !isExpanded ? "line-clamp-3" : ""
        }`}
        dangerouslySetInnerHTML={{
          __html: text.replace(/Quelques mois après/g, '<u>Quelques mois après</u>')
        }}
      />

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
