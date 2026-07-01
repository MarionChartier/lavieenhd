import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} · Marion Chartier`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#503c62",
    lang: "fr",
    icons: [
      {
        src: "/assets/logo-lavieenhd.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
