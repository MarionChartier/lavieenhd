/**
 * Lecture du Google Sheet des transits solaires (publié en CSV).
 * Format : Date | Porte | Mots clés | Message | Phase lunaire | Description phase lunaire
 * — une ligne par jour, dates au format JJ/MM/AAAA.
 */

export interface Transit {
  porte: string;
  motsCles: string;
  message: string;
  /** Plage de jours contigus partageant la même porte ("du 16 au 20 juillet"). */
  periode: string;
  phase: string;
  phaseDescription: string;
}

/** Mini-parseur CSV gérant les champs entre guillemets, les guillemets échappés ("") et les retours à la ligne dans un champ. */
export function parseCsv(text: string): string[][] {
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

/** "19/07/2026" -> clé triable AAAAMMJJ ; null si invalide. */
function dateKey(s: string): number | null {
  const m = s.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  return Number(m[3]) * 10000 + Number(m[2]) * 100 + Number(m[1]);
}

function keyOf(d: Date): number {
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function shiftDay(d: Date, delta: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + delta);
  return next;
}

function formatPeriode(start: Date, end: Date): string {
  if (start.getTime() === end.getTime()) {
    return `le ${start.getDate()} ${MOIS[start.getMonth()]}`;
  }
  if (start.getMonth() === end.getMonth()) {
    return `du ${start.getDate()} au ${end.getDate()} ${MOIS[end.getMonth()]}`;
  }
  return `du ${start.getDate()} ${MOIS[start.getMonth()]} au ${end.getDate()} ${MOIS[end.getMonth()]}`;
}

/** Retire les guillemets décoratifs qui entourent le message dans la feuille. */
function stripQuotes(s: string): string {
  return s.trim().replace(/^["«\s]+/, "").replace(/["»\s]+$/, "");
}

/**
 * Trouve la ligne du jour et regroupe la plage de jours contigus qui partagent
 * la même porte pour construire la période affichée. Null si le jour est absent.
 */
export function findTransit(rows: string[][], today: Date): Transit | null {
  const byKey = new Map<number, string[]>();
  for (const r of rows.slice(1)) {
    const key = dateKey(r[0] ?? "");
    if (key !== null) byKey.set(key, r);
  }

  const todayRow = byKey.get(keyOf(today));
  if (!todayRow) return null;
  const porte = (todayRow[1] ?? "").trim();

  const samePorte = (d: Date) => {
    const r = byKey.get(keyOf(d));
    return r !== undefined && (r[1] ?? "").trim() === porte;
  };

  let start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let end = new Date(start);
  while (samePorte(shiftDay(start, -1))) start = shiftDay(start, -1);
  while (samePorte(shiftDay(end, 1))) end = shiftDay(end, 1);

  return {
    porte,
    motsCles: (todayRow[2] ?? "").trim(),
    message: stripQuotes(todayRow[3] ?? ""),
    periode: formatPeriode(start, end),
    phase: (todayRow[4] ?? "").trim(),
    phaseDescription: (todayRow[5] ?? "").trim(),
  };
}
