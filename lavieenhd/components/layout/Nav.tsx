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
 *  Le Quiz (offre 01, gratuit) renvoie vers le formulaire externe. */
const OFFRE_LINKS: { label: string; href: string; external: boolean }[] = [
  { label: "Toutes les offres", href: "/mes-offres", external: false },
  ...OFFRES.map((o) =>
    o.num === "01"
      ? { label: o.name, href: o.href, external: true }
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
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      {/* Fond paillettes doré (Fond doré 4) + voile blanc pour la lisibilité */}
      <Image
        src="/assets/header-glitter.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/55" />

      <div className="relative flex items-center justify-between px-6 py-2 md:px-20 md:py-2">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Accueil — La vie en HD">
          <Image
            src="/assets/logo-lavieenhd.png"
            alt=""
            width={80}
            height={80}
            priority
            className="h-16 w-16 object-contain md:h-[70px] md:w-[70px]"
          />
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.16em] text-ink-deep md:text-[13px]">
            Marion Chartier
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
                    <span aria-hidden className="text-[8px] transition-transform group-hover:rotate-180">
                      ▾
                    </span>
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
                            className="block rounded px-4 py-2.5 font-body text-[11px] font-normal uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white hover:text-turquoise"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.label}
                            href={link.href}
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

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[72px] z-40 h-[calc(100dvh-72px)] overflow-y-auto bg-paper px-6 py-10 lg:hidden">
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
