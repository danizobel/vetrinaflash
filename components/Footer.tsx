"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, AtSign } from "lucide-react";

const footerLinks = {
  Prodotto: [
    { label: "Come Funziona", href: "#solution" },
    { label: "Funzionalità", href: "#features" },
    { label: "Demo Live", href: "#demo" },
    { label: "Prezzi", href: "#cta" },
  ],
  "Per chi è": [
    { label: "Ristoranti", href: "#" },
    { label: "Pizzerie", href: "#" },
    { label: "Pub & Bar", href: "#" },
    { label: "Beach Club", href: "#" },
    { label: "Cocktail Bar", href: "#" },
  ],
  Azienda: [
    { label: "Chi Siamo", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Lavora con noi", href: "#" },
    { label: "Contatti", href: "#" },
  ],
  Legale: [
    { label: "Privacy Policy", href: "#" },
    { label: "Termini di Servizio", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7CFF00]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(124,255,0,0.03),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="pt-16 pb-12 flex flex-col lg:flex-row gap-10">
          {/* Brand col */}
          <div className="lg:w-[340px] shrink-0">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-full bg-[#7CFF00]/20 blur-md" />
                <Image
                  src="/logo.png"
                  alt="VetrinaFlash"
                  width={36}
                  height={36}
                  className="relative z-10 rounded-full object-contain"
                />
              </div>
              <span className="font-bold text-lg">
                <span className="text-white">Vetrina</span>
                <span className="text-[#7CFF00]">Flash</span>
                <span className="text-white/40 text-sm">.it</span>
              </span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              La piattaforma AI che automatizza WhatsApp, Instagram e prenotazioni per ristoranti e
              locali italiani. Più clienti. Meno stress.
            </p>

            {/* Social + Contact */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://wa.me/39XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href="https://instagram.com/vetrinaflash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center hover:bg-[#E1306C]/20 transition-colors"
              >
                <AtSign className="w-4 h-4 text-[#E1306C]" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/30">
              <span className="w-2 h-2 rounded-full bg-[#7CFF00] animate-pulse" />
              Sistema AI operativo · 500+ locali attivi
            </div>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/35 text-sm hover:text-white/70 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex items-center justify-center">
          <p className="text-white/25 text-xs text-center">
            © {new Date().getFullYear()} VetrinaFlash.it — Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
}
