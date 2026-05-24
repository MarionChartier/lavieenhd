"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/test-gratuit", label: "TEST gratuit" },
  { href: "/mes-offres", label: "Mes offres" },
  { href: "/qui-je-suis", label: "Qui je suis" },
] as const;

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
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-(--container-content) items-center justify-between px-6 py-4 md:px-20 md:py-[18px]">
        <Link href="/" className="flex items-center gap-3" aria-label="Accueil">
          <Image
            src="/assets/logo-main.png"
            alt=""
            width={42}
            height={42}
            className="h-9 w-9 object-cover md:h-[42px] md:w-[42px]"
            priority
          />
          <span className="font-script text-[13px] tracking-wide text-ink-deep">
            La vie en HD
          </span>
        </Link>

        <div className="hidden items-center gap-11 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1.5 font-body text-[12px] uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-ink-deep" : "text-ink hover:text-turquoise"
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

        <Link
          href="/test-gratuit"
          className="hidden rounded-full border border-ink-deep px-5 py-3 font-body text-[11px] uppercase tracking-[0.18em] text-ink-deep transition-colors hover:bg-ink-deep hover:text-paper lg:inline-flex"
        >
          Découvre ton Type →
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 block h-px w-6 bg-ink-deep transition-transform ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-px w-6 bg-ink-deep transition-transform ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[72px] z-40 h-[calc(100dvh-72px)] overflow-y-auto bg-white px-6 py-10 lg:hidden">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between border-b border-line py-3 font-display text-[28px] ${
                    isActive ? "text-turquoise" : "text-ink-deep"
                  }`}
                >
                  {item.label}
                  <span className="font-body text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                    →
                  </span>
                </Link>
              );
            })}
            <Link
              href="/test-gratuit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ink-deep px-6 py-4 font-body text-[12px] uppercase tracking-[0.18em] text-paper"
            >
              Découvre ton Type →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
