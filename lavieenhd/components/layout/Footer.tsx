import Image from "next/image";
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

/** Bulle de discussion avec « ... » (demandée par Marion à la place de l'enveloppe). */
function ChatIcon({ className }: { className?: string }) {
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
      <path d="M20.5 11.5a8 8 0 0 1-8.5 8 9 9 0 0 1-3.4-.7L3.5 20l1.2-4.6A8 8 0 0 1 12 3.5a8 8 0 0 1 8.5 8z" />
      <circle cx="8.5" cy="11.5" r="0.95" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11.5" r="0.95" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
    <footer className="relative overflow-hidden text-ink-deep">
      {/* Fond aquarelle du header (effet "bookend" haut/bas du site) */}
      <Image
        src="/assets/oracle-frame.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover"
      />
      {/* Voile blanc doux : garde l'aquarelle visible tout en assurant la lisibilité du texte */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/35" />
      {/* Fine ligne dorée en haut, pour séparer nettement de la page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(184,151,90,0.85),transparent)]"
      />

      <div className="relative flex flex-col gap-5 px-6 pt-9 pb-6 md:flex-row md:items-center md:justify-between md:gap-10 md:px-20 md:pt-11 md:pb-7">
        <div className="flex flex-col gap-1.5">
          <p className="font-script text-[20px] leading-none tracking-wide text-ink-deep">La vie en HD</p>
          <p className="font-body text-[10px] uppercase tracking-[0.24em] text-ink-soft">
            Human Design · Marion Chartier
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2.5 font-display text-[16px] font-semibold italic text-ink-deep transition-colors hover:text-turquoise"
          >
            <ChatIcon className="h-4 w-4" />
            Me contacter
          </a>

          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 font-display text-[16px] font-semibold italic text-ink-deep transition-colors hover:text-[#7a57b5]"
          >
            <InstagramIcon className="h-4 w-4" />
            Me rejoindre sur Instagram
          </a>
        </div>
      </div>

      <div className="relative mx-6 border-t border-ink/15 md:mx-20" />

      <div className="relative flex flex-col gap-3 px-6 py-5 text-[11px] tracking-[0.1em] text-ink-soft md:flex-row md:items-center md:justify-between md:px-20">
        <div>© {new Date().getFullYear()} Marion Chartier · La vie en HD</div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((item) => (
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
