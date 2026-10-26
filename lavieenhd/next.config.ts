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
      {
        source: "/inside.html",
        destination: "/mes-offres/inside",
        permanent: true,
      },
      {
        source: "/reveal.html",
        destination: "/mes-offres/reveal",
        permanent: true,
      },
      {
        source: "/the-place-to-be.html",
        destination: "/mes-offres/the-place-to-be",
        permanent: true,
      },
      {
        source: "/soin-energetique.html",
        destination: "/mes-offres/soin-energetique",
        permanent: true,
      },
      {
        source: "/reconnect.html",
        destination: "/mes-offres/reconnect",
        permanent: true,
      },
      /**
       * Lien imprimé dans la dernière page des guides PDF de Marion : ne jamais
       * le supprimer ni le renommer. Temporaire (307) pour que les navigateurs
       * ne mettent pas la cible en cache et qu'on puisse la changer plus tard.
       */
      {
        source: "/start",
        destination: "/#portes",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
