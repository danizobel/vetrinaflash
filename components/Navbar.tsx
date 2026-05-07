"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Come Funziona", href: "#solution" },
  { label: "Funzionalità", href: "#features" },
  { label: "Risultati", href: "#benefits" },
  { label: "Testimonianze", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050508]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-9 h-9 md:w-10 md:h-10">
                <div className="absolute inset-0 rounded-full bg-[#7CFF00]/20 blur-md group-hover:bg-[#7CFF00]/40 transition-all duration-300" />
                <Image
                  src="/logo.png"
                  alt="VetrinaFlash"
                  width={40}
                  height={40}
                  className="relative z-10 rounded-full object-contain"
                />
              </div>
              <span className="font-bold text-lg tracking-tight">
                <span className="text-white">Vetrina</span>
                <span className="text-[#7CFF00]">Flash</span>
                <span className="text-white/50 text-sm">.it</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-all duration-200" />
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="#cta"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#7CFF00] text-black font-semibold text-sm rounded-full hover:bg-[#90FF1A] transition-all duration-200 shadow-[0_0_20px_rgba(124,255,0,0.3)]"
              >
                <Zap className="w-4 h-4" />
                Richiedi Demo
              </motion.a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#080810]/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white text-lg font-medium py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-6 py-3 bg-[#7CFF00] text-black font-bold rounded-full"
              >
                <Zap className="w-4 h-4" />
                Richiedi Demo Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
