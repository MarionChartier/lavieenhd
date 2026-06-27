"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Bandeau "Transit solaire actuel".
 *
 * Les données sont gérées par Marion dans un Google Sheet (publié en lecture),
 * lu en direct par le site : la ligne dont la période contient la date du jour
 * est sélectionnée automatiquement. Toute modif dans la feuille apparaît sans
 * redéploiement.
 * Colonnes : Date début | Date fin | Porte | Nom | Message | Phase lunaire
 * Dates au format JJ/MM/AAAA.
 */
const TRANSIT_CSV =
  "https://docs.google.com/spreadsheets/d/1Vh4NuX8EFQHFMJoJy8W7DqYD-M9sf5Y01DzCLV2UMgU/gviz/tq?tqx=out:csv";

interface Transit {
  porte: string;
  nom: string;
  periode: string;
  resume: string;
  phase: string;
}

/** Repli si la feuille est momentanément indisponible. */
const FALLBACK: Transit = {
  porte: "12",
  nom: "La Prudence",
  periode: "du 1 au 6 juin",
  resume:
    "Une période pour choisir tes mots avec soin et n'exprimer que ce qui est vraiment juste pour toi.",
  phase: "",
};

const MOIS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
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

/** "13/06/2026" -> { key, day, month } ; null si invalide. */
function parseDateFr(s: string): { key: number; day: number; month: number } | null {
  const m = s.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  const day = Number(m[1]);
  const month = Number(m[2]);
  const year = Number(m[3]);
  return { key: year * 10000 + month * 100 + day, day, month };
}

function formatPeriode(
  start: { day: number; month: number },
  end: { day: number; month: number },
): string {
  if (start.month === end.month) {
    return `du ${start.day} au ${end.day} ${MOIS[end.month - 1]}`;
  }
  return `du ${start.day} ${MOIS[start.month - 1]} au ${end.day} ${MOIS[end.month - 1]}`;
}

export function TransitSolaireBanner() {
  const [transit, setTransit] = useState<Transit>(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch(TRANSIT_CSV)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((csv) => {
        const rows = parseCsv(csv).slice(1); // saute l'en-tête
        const now = new Date();
        const todayKey =
          now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
        for (const r of rows) {
          const start = parseDateFr(r[0] ?? "");
          const end = parseDateFr(r[1] ?? "");
          if (!start || !end) continue;
          if (todayKey >= start.key && todayKey <= end.key) {
            if (!cancelled) {
              setTransit({
                porte: (r[2] ?? "").trim(),
                nom: (r[3] ?? "").trim(),
                periode: formatPeriode(start, end),
                resume: (r[4] ?? "").trim(),
                phase: (r[5] ?? "").trim(),
              });
            }
            break;
          }
        }
      })
      .catch(() => {
        /* on garde le repli */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-white px-6 py-10 md:px-20 md:py-14">
      <div className="mx-auto max-w-(--container-content)">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[32px] border border-[#d8bf8b]/40 px-6 py-8 text-center shadow-[0_24px_55px_-30px_rgba(80,60,98,0.22)] md:flex-row md:justify-center md:gap-10 md:px-12 md:py-9 md:text-left">
          {/* Fond paillettes doré (même que le header) + voile blanc pour mieux se fondre */}
          <Image
            src="/assets/header-glitter.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 object-cover"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/75" />

          {/* Soleil + porte */}
          <div className="relative flex flex-none items-center gap-4">
            <SunIcon className="h-12 w-12 flex-none text-[#b8975a]" />
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.26em] text-ink-deep/60">
                Transit solaire actuel
              </p>
              <p className="mt-2 font-body text-[15px] uppercase tracking-[0.16em] text-ink-deep">
                Porte {transit.porte} · {transit.nom}
              </p>
              <p className="mt-2 font-body text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                {transit.periode}
                {transit.phase ? ` · ${transit.phase}` : ""}
              </p>
            </div>
          </div>

          {/* Séparateur vertical (desktop) */}
          <span aria-hidden className="relative hidden h-14 w-px bg-ink-deep/20 md:block" />

          {/* Mini explication */}
          <p className="relative max-w-[460px] font-display text-[17px] leading-relaxed text-ink-deep md:text-[18px]">
            {transit.resume}
          </p>
        </div>
      </div>
    </section>
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
          // Arrondi pour que serveur et client produisent exactement la même
          // chaîne (sinon mismatch d'hydratation sur les flottants type 17.5000…4).
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
