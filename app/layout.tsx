import type { Metadata } from "next";
import { Big_Shoulders, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-shoulders",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
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
  title: {
    default: "VetrinaFlash — Ordini diretti per asporto e delivery. 0% commissioni.",
    template: "%s · VetrinaFlash",
  },
  description:
    "Il sistema per ricevere ordini di asporto e delivery senza pagare commissioni alle piattaforme. Pagamenti integrati, investimento una tantum, attivo in poche ore.",
  keywords:
    "ordini asporto online, delivery senza commissioni, alternativa JustEat, alternativa Glovo, alternativa Deliveroo, sistema ordini ristorante, menu digitale QR, software ristorante italia",
  alternates: {
    canonical: "https://vetrinaflash.it",
  },
  openGraph: {
    title: "VetrinaFlash — Ordini diretti per asporto e delivery. 0% commissioni.",
    description: "Il tuo locale incassa il 100% di ogni ordine. Investimento una tantum, nessun canone.",
    url: "https://vetrinaflash.it",
    siteName: "VetrinaFlash",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "VetrinaFlash — 0% commissioni su asporto e delivery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VetrinaFlash",
    description: "Ordini diretti per asporto e delivery. 0% commissioni, per sempre.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vetrinaflash.it/#organization",
      name: "VetrinaFlash",
      url: "https://vetrinaflash.it",
      logo: "https://vetrinaflash.it/images/logo-mascot.png",
      areaServed: "IT",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+39-350-538-3769",
        availableLanguage: "Italian",
      },
    },
    {
      "@type": "Service",
      "@id": "https://vetrinaflash.it/#service",
      name: "VetrinaFlash — Sistema ordini diretti per asporto e delivery",
      description:
        "Sistema che permette a ristoranti, pizzerie e bar di ricevere ordini diretti per asporto e delivery senza pagare commissioni alle piattaforme esterne. Pagamenti integrati, investimento una tantum.",
      provider: { "@id": "https://vetrinaflash.it/#organization" },
      areaServed: { "@type": "Country", name: "Italia" },
      audience: {
        "@type": "Audience",
        audienceType: "Ristoranti, pizzerie, bar, gelaterie",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        description: "Investimento una tantum, prezzo su preventivo personalizzato",
      },
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${bigShoulders.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="bg-ink text-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
