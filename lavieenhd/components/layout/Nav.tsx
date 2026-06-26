"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OFFRES } from "@/lib/content/offres";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/test-gratuit", label: "TEST HD gratuit" },
  { href: "/mes-offres", label: "Mes offres", dropdown: true },
  { href: "/qui-je-suis", label: "Qui suis-je ?" },
] as const;

/** Liens du menu déroulant "Mes offres" : vue d'ensemble + chaque offre.
 *  Le Quiz (offre 01, gratuit) mène à la page interne "Quiz gratuits" (/quiz). */
const OFFRE_LINKS: { label: string; href: string; external: boolean }[] = [
  { label: "Toutes les offres", href: "/mes-offres", external: false },
  ...OFFRES.map((o) =>
    o.num === "01"
      ? { label: o.name, href: o.href, external: false }
      : { label: o.name, href: `/mes-offres/${o.slug}`, external: false },
  ),
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
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
      <div className="relative rounded-[20px] p-1.5 shadow-[0_18px_40px_-20px_rgba(80,60,98,0.4)] md:p-2">
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
      <div className="relative flex items-center justify-between px-6 py-2 md:px-10 md:py-2">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Accueil — La vie en HD">
          <Image
            src="/assets/logo-lavieenhd.png"
            alt=""
            width={80}
            height={80}
            priority
            className="h-16 w-16 object-contain md:h-[70px] md:w-[70px]"
          />
          <span className="flex flex-col items-center leading-none">
            <span className="font-script text-[23px] leading-none text-ink-deep md:text-[27px]">
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
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
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
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="min-w-[280px] rounded-md border border-ink/10 bg-paper p-2 shadow-[0_30px_60px_-25px_rgba(80,60,98,0.3)]">
                      {OFFRE_LINKS.map((link) =>
                        link.external ? (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => (document.activeElement as HTMLElement | null)?.blur()}
                            className="block rounded px-4 py-2.5 font-body text-[11px] font-normal uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white hover:text-turquoise"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => (document.activeElement as HTMLElement | null)?.blur()}
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
          onClick={() => setMobileOpen((v) => !v)}
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
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-3 font-display text-[28px] ${
                        isActive ? "text-turquoise" : "text-ink"
                      }`}
                    >
                      {item.label}
                      <span className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                        →
                      </span>
                    </Link>
                    <div className="mt-1 flex flex-col gap-1 pl-1">
                      {OFFRE_LINKS.slice(1).map((link) =>
                        link.external ? (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1.5 font-body text-[14px] text-ink-soft"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.label}
                            href={link.href}
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
