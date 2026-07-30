import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  /**
   * Anciennes URL des pages de vente HTML, conservées vivantes après leur
   * reconstruction en route Next : elles circulent dans les mails déjà envoyés,
   * sur systeme.io et dans la bio Instagram.
   *
   * Les redirections sont évaluées avant le système de fichiers, donc avant
   * /public : le fichier .html laissé en place n'est plus servi.
   */
  async redirects() {
    return [
      {
        source: "/blooming.html",
        destination: "/mes-offres/blooming",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
