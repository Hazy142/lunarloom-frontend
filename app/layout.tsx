import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LunarLoom – Tarot, Rituale & Mondzyklen",
    template: "%s | LunarLoom",
  },
  description: "Tarot-Readings, Mondrituale und spirituelles Wachstum. Evidenzbasierte Spiritualität mit authentischer Interpretation von Rachel.",
  keywords: ["Tarot", "Rituale", "Mond", "Spiritualität", "Astrologie", "LunarLoom"],
  authors: [{ name: "Rachel" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "LunarLoom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <div className="page-container flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
