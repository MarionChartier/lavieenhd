"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { scrollToTopInstant } from "@/components/layout/ScrollToTop";
import { OFFRES } from "@/lib/content/offres";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/test-gratuit", label: "Test HD gratuit" },
  { href: "/mes-offres", label: "Mes offres", dropdown: true },
  { href: "/qui-je-suis", label: "Qui suis-je ?" },
] as const;

/** Liens du menu déroulant "Mes offres" : vue d'ensemble + chaque offre.
 *  Le Quiz (offre 01) mène à /quiz. Les offres avec une page dédiée pointent
 *  directement dessus ; les autres (page à venir) renvoient vers leur section
 *  dans la frise /mes-offres#slug. */
const OFFRE_LINKS: { label: string; href: string; external: boolean }[] = [
  { label: "Toutes les offres", href: "/mes-offres", external: false },
  ...OFFRES.map((o) =>
    o.href
      ? { label: o.name, href: o.href, external: o.href.startsWith("http") }
      : { label: o.name, href: `/mes-offres#${o.slug}`, external: false },
  ),
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  /** Sous-menu « Mes offres » du panneau mobile : replié par défaut, comme le
   *  survol sur desktop. */
  const [offresOpen, setOffresOpen] = useState(false);
  /** Panneau « Mes offres » du desktop : masqué après un clic sur l'entrée, le
   *  temps que la souris quitte la zone (sinon le survol le laisse ouvert
   *  par-dessus la page qu'on vient d'ouvrir). */
  const [offresDismissed, setOffresDismissed] = useState(false);

  /** Clic sur un lien du panneau « Mes offres » (desktop) : on relâche le focus
   *  et on masque le panneau. Sans ça, le survol le laisse ouvert par-dessus la
   *  page qu'on vient d'ouvrir tant que la souris n'a pas bougé. */
  const dismissOffres = () => {
    setOffresDismissed(true);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  /** Clic sur un lien du menu. Le menu mobile reste ouvert le temps du
   *  chargement : il masque la page qu'on quitte, et l'effet sur `pathname` le
   *  referme dès que la nouvelle page est rendue (en haut, via <ScrollToTop />).
   *  Sans ce voile (desktop, ou clic sur la page courante) on remonte tout de
   *  suite. Les liens d'ancre gardent leur défilement vers la section. */
  const handleNavClick = (href: string) => {
    const samePage = href === pathname;
    if (samePage) setMobileOpen(false);
    if (!href.includes("#") && (samePage || !mobileOpen)) scrollToTopInstant();
  };

  useEffect(() => {
    // Fermer le menu mobile à chaque changement de route (sync UI ↔ navigation).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      {/* Bandeau flottant, entouré d'une bordure texturée (aquarelle), coins arrondis */}
      <div className="relative z-[60] rounded-[20px] p-1 shadow-[0_18px_40px_-20px_rgba(80,60,98,0.4)] md:p-1.5">
        {/* Bordure texturée (aquarelle violette/cyan + dorée), même image que l'oracle */}
        <Image
          src="/assets/oracle-frame.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 rounded-[20px] object-cover"
        />
        <div className="relative rounded-2xl bg-white">
      <div className="relative flex items-center justify-between gap-3 px-4 py-2 min-[380px]:px-6 md:px-10 md:py-2">
        <Link
          href="/"
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-2 min-[380px]:gap-2.5"
          aria-label="Accueil — La vie en HD"
        >
          <Image
            src="/assets/logo-lavieenhd.png"
            alt=""
            width={80}
            height={80}
            priority
            className="h-14 w-14 object-contain min-[380px]:h-16 min-[380px]:w-16 md:h-[70px] md:w-[70px]"
          />
          {/* Le titre ne passe jamais à la ligne : coupé, « HD » retombait
              contre « Marion Chartier ». Sous 380px, logo et titre rétrécissent
              un peu pour tenir à côté du bouton du menu. */}
          <span className="flex flex-col items-center leading-none">
            <span className="whitespace-nowrap font-script text-[21px] leading-none text-ink-deep min-[380px]:text-[23px] md:text-[27px]">
              La vie en HD
            </span>
            <span className="mt-1.5 font-body text-[11px] font-normal not-italic leading-none tracking-[0.16em] text-ink-soft md:mt-2 md:text-[12px]">
              Marion Chartier
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-11 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            if ("dropdown" in item && item.dropdown) {
              return (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseLeave={() => setOffresDismissed(false)}
                  onFocus={() => setOffresDismissed(false)}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      dismissOffres();
                      handleNavClick(item.href);
                    }}
                    className={`relative flex items-center gap-1.5 py-1.5 font-body text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-turquoise ${
                      isActive ? "text-turquoise" : "text-ink"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-turquoise" />
                    )}
                  </Link>

                  {/* Panneau déroulant (pt-3 = pont de survol) */}
                  <div
                    className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
                      offresDismissed ? "hidden" : ""
                    }`}
                  >
                    <div className="min-w-[280px] rounded-md border border-ink/10 bg-paper p-2 shadow-[0_30px_60px_-25px_rgba(80,60,98,0.3)]">
                      {OFFRE_LINKS.map((link) =>
                        link.external ? (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={dismissOffres}
                            className="block rounded px-4 py-2.5 font-body text-[11px] font-normal uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white hover:text-turquoise"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.label}
                            href={link.href}
                            prefetch={link.href.endsWith(".html") ? false : undefined}
                            onClick={() => {
                              dismissOffres();
                              handleNavClick(link.href);
                            }}
                            className="block rounded px-4 py-2.5 font-body text-[11px] font-normal uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white hover:text-turquoise"
                          >
                            {link.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => handleNavClick(item.href)}
                className={`relative py-1.5 font-body text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-turquoise ${
                  isActive ? "text-turquoise" : "text-ink"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-turquoise" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            setMobileOpen((v) => !v);
            setOffresOpen(false);
          }}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 block h-px w-6 bg-ink transition-transform ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-px w-6 bg-ink transition-transform ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[100px] z-40 h-[calc(100dvh-100px)] overflow-y-auto bg-paper px-6 py-10 lg:hidden">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              if ("dropdown" in item && item.dropdown) {
                return (
                  <div key={item.href} className="border-b border-line pb-3">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`flex-1 py-3 font-display text-[28px] ${
                          isActive ? "text-turquoise" : "text-ink"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setOffresOpen((v) => !v)}
                        aria-expanded={offresOpen}
                        aria-label={
                          offresOpen ? "Masquer les offres" : "Voir toutes les offres"
                        }
                        // justify-end : le chevron s'aligne sur les flèches des
                        // autres entrées, la zone tactile de 44px déborde vers
                        // la gauche.
                        className="flex h-11 w-11 items-center justify-end font-body text-[20px] leading-none text-ink-soft"
                      >
                        <span
                          aria-hidden
                          className={`block transition-transform ${offresOpen ? "rotate-180" : ""}`}
                        >
                          ▾
                        </span>
                      </button>
                    </div>
                    <div className={`mt-1 flex-col gap-1 pl-1 ${offresOpen ? "flex" : "hidden"}`}>
                      {OFFRE_LINKS.map((link) =>
                        link.external ? (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="py-1.5 font-body text-[14px] text-ink-soft"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.label}
                            href={link.href}
                            prefetch={link.href.endsWith(".html") ? false : undefined}
                            onClick={() => handleNavClick(link.href)}
                            className="py-1.5 font-body text-[14px] text-ink-soft"
                          >
                            {link.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center justify-between border-b border-line py-3 font-display text-[28px] ${
                    isActive ? "text-turquoise" : "text-ink"
                  }`}
                >
                  {item.label}
                  <span className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
