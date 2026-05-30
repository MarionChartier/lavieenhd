import Link from "next/link";

const CONTACT = {
  email: "hello@marionchartier-lavieenhd.com",
  instagramUrl: "https://www.instagram.com/marionchartier_lavieenhd/",
} as const;

const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Confidentialité", href: "/confidentialite" },
] as const;

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="flex flex-col gap-5 px-6 pt-8 pb-6 md:flex-row md:items-center md:justify-between md:gap-10 md:px-20 md:pt-9 md:pb-7">
        <p className="font-script text-[15px] leading-none tracking-wide text-white">La vie en HD</p>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10">
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-display text-[16px] font-semibold italic text-white/85 transition-colors hover:text-white"
          >
            Contactez-moi par mail
          </a>

          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 font-display text-[16px] font-semibold italic text-white/85 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
            Rejoignez-moi sur Instagram
          </a>
        </div>
      </div>

      <div className="mx-6 border-t border-white/15 md:mx-20" />

      <div className="flex flex-col gap-3 px-6 py-5 text-[11px] tracking-[0.1em] text-white/55 md:flex-row md:items-center md:justify-between md:px-20">
        <div>© {new Date().getFullYear()} Marion Chartier · La vie en HD</div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
