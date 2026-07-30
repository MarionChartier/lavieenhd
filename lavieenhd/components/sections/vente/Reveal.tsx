"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Apparition à l'entrée dans le viewport : opacité + translation courte + flou
 * léger, une seule fois. C'est la seule animation de scroll des pages de vente ;
 * le registre demandé est « discret et premium », donc pas de parallaxe ni de
 * mouvement continu.
 *
 * `delay` sert au décalage en cascade d'un même groupe (cartes, étapes) —
 * 80 ms par cran suffisent à donner de la profondeur sans faire attendre.
 *
 * `motion-reduce:` neutralise tout : l'élément est alors rendu dans son état
 * final sans transition.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      // Se déclenche assez tôt pour que l'animation soit finie quand l'élément
      // arrive au centre du regard.
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // Un seul type de nœud par usage ; le cast couvre les 3 balises autorisées.
      ref={ref as React.Ref<never>}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined }}
      className={`transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none ${
        visible
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[3px] translate-y-3 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:translate-y-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
