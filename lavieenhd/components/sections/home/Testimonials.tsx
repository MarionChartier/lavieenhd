"use client";

import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  name: string;
  text: string;
  /** Portrait rond (liseré doré) fourni par la cliente, sinon "Anonyme". */
  photo: string;
};

/** Dossier des portraits de témoignages (photos clientes, liseré doré déjà intégré). */
const PHOTO = (file: string) => `/assets/temoignages/${file}`;
const ANONYME = PHOTO("Anonyme.png");

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Louise-Armance",
    photo: PHOTO("Louise-Armance.png"),
    text: `Je ne connaissais absolument rien du tout au Human Design, et le guide d'immersion m'a donné beaucoup d'indications réellement étonnantes ; je me suis retrouvée dans énormément de descriptions et j'ai appris plein de choses sur moi !

Je ne pensais pas que mes seules infos de naissance pourraient en dévoiler autant alors qu'on ne se connait pas ! 😮 Et c'est quand même dingue d'avoir attendu plus de 35 ans pour découvrir que j'avais été livrée avec un mode d'emploi ! 😂

Clairement je me reconnais vraiment dans ma personnalité et mon fonctionnement, c'est tout à fait moi, depuis enfant, c'est fou ! Et il y a d'autres aspects de moi que je découvre et que j'ai envie de creuser du coup ! 😍

Merci mille fois pour toutes ces informations précieuses Marion, ça résonne beaucoup en moi, c'est très parlant ! Bluffant même ! 💥`,
  },
  {
    name: "Sylvie",
    photo: ANONYME,
    text: `Marion m'a permis de mettre des mots clairs sur ce que je ressentais depuis longtemps : mon mode de fonctionnement, mes élans, mes besoins profonds.

Grâce à sa passion communicative et à la richesse de ses connaissances, j'ai enfin pu me reconnecter à ma vraie nature.

Je croyais que le Human Design était réservé aux initiés, mais en réalité, c'est un outil à la fois accessible et incroyablement concret. Beaucoup de choses ont fait sens pour moi.

Il ne reste plus qu'à l'explorer au quotidien, et laisser les déclics s'inviter dans ma vie.`,
  },
  {
    name: "Camille",
    photo: PHOTO("Camille.png"),
    text: `J'ai tout dévoré d'une seule traite ! C'est IN-CROY-ABLE !!! On dirait que tu me connais depuis 30 ans, tout est juste, c'est fou, je n'en reviens pas ! 🤩

C'est étrange comme sensation de lire ce que je suis dans la réalité, juste à partir de mes informations de naissance. C'est impressionnant !

Maintenant que j'ai ce guide d'immersion dans mon Design, je trouve ça hyper apaisant et rassurant de constater que certains de mes fonctionnements ne sont pas juste une « lubie » de ma part, mais que ça fait partie de moi en fait !

Merci infiniment Marion ! 💖`,
  },
  {
    name: "Justine",
    photo: PHOTO("Justine.png"),
    text: `Déjà visuellement j'adore, ça donne vraiment envie de lire ! Le guide est super bien structuré, organisé, clair, beau et lumineux ! ✨

Et c'est super parce que tes explications sont concrètes et illustrées, ça rend les choses hyper compréhensibles. On sent qu'il y a eu un gros travail de vulgarisation pour clarifier des termes qui peuvent sembler abstraits, et rendre ça accessible à tout le monde, c'est trop chouette !

En bonus, les petites questions au fil du guide amènent vraiment à réfléchir et à conscientiser les choses.

Et tout ce que tu décris c'est exactement moi, truc de dingue ! Je m'y retrouve énormément, ça reflète vraiment qui je suis au fond de moi je trouve. C'est ultra intéressant, je vais le relire plusieurs fois parce qu'il y a beaucoup de choses à assimiler.

Et je pense sincèrement que le coaching avec toi est un vrai plus à s'offrir ! Franchement merci beaucoup Marion 🥰`,
  },
  {
    name: "Ludivine",
    photo: PHOTO("Ludivine.png"),
    text: `Coucou Marion, déjà merci !!! Beaucoup !!! J'adore comment c'est rédigé, la façon dont tu écris et expliques les choses, c'est très clair.

J'y ai retrouvé des choses tellement vraies, tellement moi ; un peu l'histoire de ma vie ! 😄

Et j'ai aussi appris plein de choses nouvelles complémentaires à ce que je n'avais jamais lu encore.

Wahou je trouve le HD vraiment magique, c'est ma plus belle découverte de l'année pour le moment ! Merci Marion c'est génial !! 😍`,
  },
  {
    name: "Fabienne",
    photo: PHOTO("Fabienne.png"),
    text: `Oh la la 🤩🤩🤩!! Je voulais te remercier 🙏 pour ton travail qui est remarquable, c'est une vraie pépite ! 💕

Franchement, chapeau, je me reconnais dans tout ce que tu décris, tout me fait écho !

Ça m'a provoqué beaucoup de joie de te lire, et ça a mis du sens sur certaines choses, en enlevant la peur que j'y associais ! Le HD est un outil remarquable, merci encore, tu déchires ! 🔥`,
  },
];

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
        src="/assets/smile.png"
        alt=""
        width={1200}
        height={800}
        priority={false}
        aria-hidden
        className="pointer-events-none absolute top-0 left-[68%] hidden h-auto w-[820px] -translate-x-1/2 opacity-20 mix-blend-multiply lg:block"
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
  isExpanded,
  onToggle,
}: Testimonial & {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`flex w-full flex-col rounded-md border border-ink/10 bg-white/80 p-7 backdrop-blur-sm md:p-9 ${
        // Hauteur fixe quand dépliée pour garder une cohérence visuelle dans la grille,
        // même si le texte est court.
        isExpanded ? "min-h-[520px]" : ""
      }`}
    >
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
      >
        {text}
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
