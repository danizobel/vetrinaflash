"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Funzionalità", href: "#funzionalita" },
  { label: "Clienti", href: "#clienti" },
  { label: "Preventivo", href: "#preventivo" },
  { label: "FAQ", href: "#faq" },
];

const WHATSAPP_URL =
  "https://wa.me/393505383769?text=Ciao!%20Vorrei%20saperne%20di%20pi%C3%B9%20su%20VetrinaFlash";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-[var(--ink-line)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 md:h-[72px]">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/logo-mascot.png"
            alt="VetrinaFlash"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="font-display font-extrabold text-xl tracking-tight text-cream">
            Vetrina<span className="text-ember">Flash</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-mono text-ash hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center rounded-sm bg-ember px-4 py-2 text-sm font-semibold text-ink hover:bg-gold transition-colors"
        >
          Parla con noi
        </a>

        <button
          aria-label={mobileOpen ? "Chiudi il menu" : "Apri il menu"}
          className="lg:hidden p-2 text-cream"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-ink border-b border-[var(--ink-line)]"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm font-mono text-ash hover:text-cream"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-sm bg-ember px-4 py-2.5 text-sm font-semibold text-ink"
              >
                Parla con noi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
