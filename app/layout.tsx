import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VetrinaFlash — Menu QR e Ordini Diretti. 0% Commissioni.",
  description:
    "Il sistema che fa sparire le commissioni di delivery. Menu digitale QR, ordini diretti, pagamenti Nexi/SumUp/Stripe sul tuo conto. Investimento una tantum, zero canoni mensili.",
  keywords:
    "menu digitale ristorante, menu QR, ordini diretti ristorante, eliminare commissioni delivery, sistema ordinazione ristorante, vetrinaflash",
  openGraph: {
    title: "VetrinaFlash — Ordini Diretti. 0% Commissioni. Per Sempre.",
    description:
      "Menu QR, ordini diretti e pagamenti sul tuo conto. Una tantum, zero canoni mensili.",
    url: "https://vetrinaflash.it",
    siteName: "VetrinaFlash",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetrinaFlash",
    description:
      "Ordini diretti per ristoranti e bar. 0% commissioni, investimento una tantum.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable}`}
    >
      <body className="bg-[#050607] text-white overflow-x-hidden antialiased grain">
        {children}
      </body>
    </html>
  );
}
