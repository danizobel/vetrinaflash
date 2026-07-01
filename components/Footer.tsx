"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EMAIL, PHONE_DISPLAY, WA_DEFAULT } from "@/lib/site";

const productLinks = [
  { label: "Il Problema", href: "#problema" },
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Demo", href: "#demo" },
  { label: "Confronto", href: "#confronto" },
  { label: "Soluzioni su misura", href: "#soluzioni" },
];

const companyLinks = [
  { label: "I nostri clienti", href: "#clienti" },
  { label: "Prezzi", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const badges = ["🔒 SSL", "✅ GDPR", "🇮🇹 Made in Italy", "💎 Una Tantum"];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(124,255,0,0.04),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7CFF00]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 mb-14"
        >
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2.5 mb-5">
              <Image
                src="/logo.png"
                alt="VetrinaFlash"
                width={36}
                height={36}
                className="rounded-full object-contain"
              />
              <span className="font-display font-bold text-lg">
                <span className="text-white">Vetrina</span>
                <span className="text-[#7CFF00]">Flash</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              Sistema di ordini online, menu digitale QR e gestione pagamenti
              per ristoranti e bar italiani. Investimento una tantum, zero
              canoni mensili, 0% commissione.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-white/40 text-[11px]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Prodotto</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-[#7CFF00] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Azienda</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-[#7CFF00] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contatti</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/40 hover:text-[#7CFF00] transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="text-white/25">Privacy Policy</li>
              <li className="text-white/25">Termini di Servizio</li>
              <li className="text-white/25">Cookie Policy</li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} VetrinaFlash — Tutti i diritti riservati
          </p>
          <p className="text-white/25 text-xs">
            Sistema ordini diretti · 0% commissioni · Investimento una tantum
          </p>
        </div>
      </div>
    </footer>
  );
}
