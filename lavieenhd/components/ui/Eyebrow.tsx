type EyebrowProps = {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
};

/** Petit label en majuscules avec un trait à gauche — utilisé en tête de section */
export function Eyebrow({ children, centered = false, className = "" }: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft before:block before:h-px before:w-7 before:bg-ink-soft ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
