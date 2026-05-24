export default function HomePage() {
  return (
    <div className="mx-auto max-w-(--container-content) px-6 py-20 md:px-20 md:py-32">
      <p className="font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
        Setup OK · prochaine étape
      </p>
      <h1 className="mt-4 font-display text-5xl font-light leading-tight text-ink-deep md:text-7xl">
        Page d'accueil <em className="font-display italic text-turquoise">à construire</em>.
      </h1>
      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink">
        Le scaffold est en place : tokens, fonts, Nav, Footer, route group <code>(site)</code>.
        Validation avant d'attaquer la Home complète.
      </p>
    </div>
  );
}
