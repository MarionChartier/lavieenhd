"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Oracle "message du jour".
 *
 * Les messages sont gérés par Marion dans un Google Sheet (publié en lecture),
 * lus en direct par le site : toute modif dans la feuille apparaît sans redéploiement.
 * Colonnes : "Message" | "Actif" (les lignes "Actif" = non sont ignorées).
 *
 * Comportement : un message au hasard à chaque clic.
 */
const ORACLE_CSV =
  "https://docs.google.com/spreadsheets/d/1FAdSZ72jFt9S8oWhzx1rRZA_zY4jbl2UeGqCZevbJN8/gviz/tq?tqx=out:csv";

/** Messages de secours si la feuille est momentanément indisponible. */
const FALLBACK = [
  "Aujourd'hui, autorise-toi à ralentir : ton énergie sait où elle va.",
  "Tu n'as rien à prouver. Ta seule présence suffit.",
  "Respire. Ce qui est pour toi ne te manquera pas.",
];

/** Mini-parseur CSV gérant les champs entre guillemets et les guillemets échappés (""). */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c !== "\r") {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export function OracleDuJour() {
  const [messages, setMessages] = useState<string[]>(FALLBACK);
  const [current, setCurrent] = useState<string | null>(null);
  const [reveal, setReveal] = useState(0);
  const lastIndex = useRef(-1);

  // Lecture en direct de la feuille (les messages de Marion).
  useEffect(() => {
    let cancelled = false;
    fetch(ORACLE_CSV)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((csv) => {
        const rows = parseCsv(csv);
        const list = rows
          .slice(1) // saute l'en-tête
          .filter((r) => (r[1] ?? "").trim().toLowerCase() !== "non")
          .map((r) => (r[0] ?? "").trim())
          .filter(Boolean);
        if (!cancelled && list.length > 0) setMessages(list);
      })
      .catch(() => {
        /* on garde le repli */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const draw = useCallback(() => {
    if (messages.length === 0) return;
    let i = Math.floor(Math.random() * messages.length);
    // évite de retomber sur le même message deux fois de suite
    if (messages.length > 1 && i === lastIndex.current) {
      i = (i + 1) % messages.length;
    }
    lastIndex.current = i;
    setCurrent(messages[i]);
    setReveal((n) => n + 1);
  }, [messages]);

  return (
    <div className="relative h-full overflow-hidden rounded-[32px] p-4 shadow-[0_30px_70px_-30px_rgba(80,60,98,0.4)] md:p-6">
      {/* Bordure texturée (aquarelle violette/cyan + dorée) */}
      <Image
        src="/assets/oracle-frame.png"
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="pointer-events-none absolute inset-0 object-cover"
      />
      <div className="relative flex h-full flex-col items-center justify-center rounded-[18px] bg-white px-7 py-12 text-center md:px-10 md:py-14">
        <SunIcon className="mx-auto h-9 w-9 text-ink-lilac" />

            <p className="mt-4 font-body text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Oracle du jour
            </p>

            {current ? (
              <p
                key={reveal}
                style={{ animation: "oracleReveal 0.55s ease both" }}
                className="mx-auto mt-6 max-w-[600px] font-display text-[24px] font-light italic leading-snug text-ink-deep md:text-[32px]"
              >
                «&nbsp;{current}&nbsp;»
              </p>
            ) : (
              <h2 className="mx-auto mt-3 max-w-[520px] font-display text-[28px] font-light leading-tight text-ink-deep md:text-[40px]">
                Quel est ton <em className="italic text-turquoise">message du jour</em>&nbsp;?
              </h2>
            )}

            <button
              type="button"
              onClick={draw}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-ink-deep px-8 pt-[17px] pb-[15px] font-body text-[12px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-turquoise hover:text-ink-deep"
            >
              {current ? "Tirer un autre message" : "Révéler mon message"}
            </button>
      </div>
    </div>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.85" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 360) / 12;
          const rad = (a * Math.PI) / 180;
          // Arrondi pour que serveur et client produisent la même chaîne
          // (sinon mismatch d'hydratation sur les flottants type 17.5000…4).
          const round = (n: number) => Math.round(n * 1000) / 1000;
          const x1 = round(24 + Math.cos(rad) * 13);
          const y1 = round(24 + Math.sin(rad) * 13);
          const x2 = round(24 + Math.cos(rad) * 18);
          const y2 = round(24 + Math.sin(rad) * 18);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}
