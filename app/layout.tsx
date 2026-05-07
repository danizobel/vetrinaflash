import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VetrinaFlash.it — Automatizza WhatsApp, Instagram e Prenotazioni con l'AI",
  description:
    "Più clienti, meno stress. Automatizza le risposte su WhatsApp e Instagram, gestisci le prenotazioni e aumenta le vendite del tuo locale con l'intelligenza artificiale.",
  keywords:
    "automazione whatsapp ristorante, AI chatbot pizzeria, prenotazioni automatiche, instagram automation locale, vetrinaflash",
  openGraph: {
    title: "VetrinaFlash.it — AI per Ristoranti e Locali",
    description: "Automatizza ogni messaggio. Trasforma ogni cliente.",
    url: "https://vetrinaflash.it",
    siteName: "VetrinaFlash.it",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetrinaFlash.it",
    description: "AI automation per ristoranti, pizzerie e locali.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#050508] text-white overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
