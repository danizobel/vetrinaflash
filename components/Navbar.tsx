"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/lib/site";

const navLinks = [
  { label: "Il Problema", href: "#problema" },
  { label: "Come Funziona", href: "#come-funziona" },
  { label: "Demo", href: "#demo" },
  { label: "Confronto", href: "#confronto" },
  { label: "Clienti", href: "#clienti" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

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
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050607]/85 backdrop-blur-2xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#7CFF00] via-[#b7ff5c] to-[#7CFF00]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-8 h-8 md:w-9 md:h-9">
                <div className="absolute inset-0 rounded-full bg-[#7CFF00]/25 blur-md group-hover:bg-[#7CFF00]/45 transition-all duration-300" />
                <Image
                  src="/logo.png"
                  alt="VetrinaFlash"
                  width={36}
                  height={36}
                  className="relative z-10 rounded-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                <span className="text-white">Vetrina</span>
                <span className="text-[#7CFF00]">Flash</span>
              </span>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="relative px-3.5 py-2 text-[13px] text-white/55 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7CFF00] text-black text-sm font-bold"
              style={{ boxShadow: "0 0 24px rgba(124,255,0,0.35)" }}
            >
              <MessageCircle size={15} />
              Parla con noi
            </motion.a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#050607]/95 backdrop-blur-2xl border-b border-white/5 py-4 px-4 lg:hidden"
          >
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#7CFF00] text-black text-sm font-bold"
            >
              <MessageCircle size={15} />
              Scrivici su WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
