import Image from "next/image";
import Link from "next/link";
import { EXTERNAL } from "@/lib/links";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/test-gratuit", label: "TEST gratuit" },
  { href: "/mes-offres", label: "Mes offres" },
  { href: "/qui-je-suis", label: "Qui je suis" },
] as const;

const PARCOURS = [
  { label: "00 · Quiz Environnement HD", href: EXTERNAL.quiz },
  { label: "01 · INSIDE", href: EXTERNAL.offre.insideClub },
  { label: "02 · THE PLACE TO BE", href: EXTERNAL.offre.thePlaceToBe },
  { label: "03 · REVEAL", href: EXTERNAL.offre.reveal },
  { label: "04 · Fleur de Talents Innés®", href: EXTERNAL.offre.fleurDeTalents },
  { label: "05 · RECONNECT", href: EXTERNAL.offre.reconnect },
] as const;

const BOTTOM_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Contact", href: "mailto:contact@lavieenhd.fr" },
] as const;

export function Footer() {
  return (
    <footer className="bg-dark px-6 pb-10 pt-20 text-[#d8c9e5] md:px-20 md:pt-[100px]">
      <div className="mx-auto grid max-w-(--container-content) gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-15">
        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white p-1">
            <Image
              src="/assets/logo-main.png"
              alt=""
              width={56}
              height={56}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mb-4 font-display text-[22px] italic text-white">La vie en HD.</p>
          <p className="max-w-[260px] text-[13px] leading-relaxed text-white/70">
            Praticienne en Human Design. Je t'accompagne à te rencontrer — vraiment — pour vivre
            en couleur, en grand, en toi.
          </p>
        </div>

        <div>
          <h4 className="mb-6 font-body text-[11px] uppercase tracking-[0.22em] text-turquoise">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] text-white/80 transition-colors hover:text-turquoise"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-body text-[11px] uppercase tracking-[0.22em] text-turquoise">
            Le parcours
          </h4>
          <ul className="flex flex-col gap-3">
            {PARCOURS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/80 transition-colors hover:text-turquoise"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-body text-[11px] uppercase tracking-[0.22em] text-turquoise">
            The Soul Letter
          </h4>
          <p className="mb-5 text-[13px] text-white/75">
            Une fois par semaine, je t'écris comme à une amie.
          </p>
          <a
            href={EXTERNAL.newsletter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-body text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
          >
            Rejoindre →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-15 flex max-w-(--container-content) flex-col gap-4 border-t border-white/10 pt-7 text-[12px] text-white/60 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Marion Chartier · La vie en HD</div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {BOTTOM_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-turquoise"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
