import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 301 Redirects für alte URLs auf neue IA-Struktur
  async redirects() {
    return [
      // Blog-Artikel: alte Root-URLs → /blog/slug
      {
        source: '/empowerment-durch-evidenzbasierte-spirituelle-praktiken',
        destination: '/blog/empowerment-durch-evidenzbasierte-spirituelle-praktiken',
        permanent: true,
      },
      {
        source: '/10-jahre-erfahrung-rachels-reise-zu-spiritualitaet',
        destination: '/blog/10-jahre-erfahrung-rachels-reise-zu-spiritualitaet',
        permanent: true,
      },
      {
        source: '/warum-emotionale-klarheit-so-wichtig-ist',
        destination: '/blog/warum-emotionale-klarheit-so-wichtig-ist',
        permanent: true,
      },
      {
        source: '/selbstreflexion-durch-tarot-ein-wegweiser',
        destination: '/blog/selbstreflexion-durch-tarot-ein-wegweiser',
        permanent: true,
      },
      {
        source: '/die-verbindung-von-tarot-und-psychologie-erklaert',
        destination: '/blog/die-verbindung-von-tarot-und-psychologie-erklaert',
        permanent: true,
      },
      {
        source: '/personalisierte-leitfaeden-fuer-spirituelles-wachstum',
        destination: '/blog/personalisierte-leitfaeden-fuer-spirituelles-wachstum',
        permanent: true,
      },
      {
        source: '/wie-mondrituale-ihr-leben-veraendern-koennen',
        destination: '/blog/wie-mondrituale-ihr-leben-veraendern-koennen',
        permanent: true,
      },
      {
        source: '/die-magie-der-tarot-lesungen-ein-leitfaden',
        destination: '/blog/die-magie-der-tarot-lesungen-ein-leitfaden',
        permanent: true,
      },
      // Datenschutz-Redirect
      {
        source: '/privacy-policy',
        destination: '/datenschutz',
        permanent: true,
      },
      // Demo-Content auf sinnvolle Ziele
      {
        source: '/sample-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world',
        destination: '/blog',
        permanent: true,
      },
    ];
  },

  // Bilder von WordPress erlauben
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.lunarloom.de',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'lunarloom.de',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
