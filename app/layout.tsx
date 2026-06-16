import type { Metadata } from "next";
import { Big_Shoulders, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vetrinaflash.it"),
  title: "VetrinaFlash — Ordini diretti per asporto e delivery. 0% commissioni.",
  description:
    "Il sistema per ricevere ordini di asporto e delivery senza pagare commissioni alle piattaforme. Pagamenti integrati, investimento una tantum, attivo in poche ore.",
  keywords:
    "ordini asporto online, delivery senza commissioni, alternativa JustEat, alternativa Glovo, alternativa Deliveroo, sistema ordini ristorante, menu digitale QR",
  openGraph: {
    title: "VetrinaFlash — Ordini diretti per asporto e delivery. 0% commissioni.",
    description: "Il tuo locale incassa il 100% di ogni ordine. Investimento una tantum, nessun canone.",
    url: "https://vetrinaflash.it",
    siteName: "VetrinaFlash",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetrinaFlash",
    description: "Ordini diretti per asporto e delivery. 0% commissioni, per sempre.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${bigShoulders.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
