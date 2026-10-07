import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Pages indexables du site vitrine. Les pages de vente encore statiques
 *  (/public/*.html) et le quiz sont volontairement exclus (contenu géré côté
 *  systeme.io / outils tiers) ; celles reconstruites en route Next y entrent. */
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/mes-offres", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mes-offres/blooming", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mes-offres/inside", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mes-offres/reveal", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mes-offres/the-place-to-be", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mes-offres/soin-energetique", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mes-offres/body-bloom", priority: 0.9, changeFrequency: "monthly" },
  { path: "/test-gratuit", priority: 0.8, changeFrequency: "monthly" },
  { path: "/qui-je-suis", priority: 0.7, changeFrequency: "yearly" },
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
  { path: "/confidentialite", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cgv", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
