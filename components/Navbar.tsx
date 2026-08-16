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

const menuVars = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      staggerChildren: 0.05, 
      delayChildren: 0.1 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 0.25,
      staggerChildren: 0.05, 
      staggerDirection: -1 
    } 
  }
};

const mobileLinkVars = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      // Active link detection
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on typical header height and reading position
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050607]/85 backdrop-blur-3xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress */}
        <motion.div
          style={{ 
            scaleX: progress,
            boxShadow: "0 0 12px 2px rgba(124, 255, 0, 0.6)"
          }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#7CFF00] via-[#b7ff5c] to-[#7CFF00] z-50"
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
                <motion.div 
                  animate={{ 
                    opacity: [0.4, 0.8, 0.4], 
                    scale: [1, 1.15, 1] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-full bg-[#7CFF00] blur-md z-0" 
                />
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
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                    className={`link-underline relative px-3.5 py-2 text-[13px] transition-colors duration-300 rounded-lg hover:bg-white/5 ${
                      isActive ? "text-white font-medium" : "text-white/55 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 border border-white/10 rounded-lg bg-white/[0.03] -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                );
              })}
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
              className="shimmer hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7CFF00] text-black text-sm font-bold relative overflow-hidden group"
              style={{ boxShadow: "0 0 24px rgba(124,255,0,0.4)" }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <MessageCircle size={15} className="relative z-10" />
              <span className="relative z-10">Parla con noi</span>
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
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-x-0 top-16 z-40 bg-[#050607]/95 backdrop-blur-3xl border-b border-white/5 py-4 px-4 lg:hidden min-h-[calc(100vh-4rem)] flex flex-col"
          >
            <div className="flex flex-col gap-1 mb-6 flex-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    variants={mobileLinkVars}
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3.5 text-base rounded-xl transition-all ${
                      isActive 
                        ? "text-white bg-white/10 font-medium" 
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
            <motion.div variants={mobileLinkVars} className="pb-8">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="shimmer flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#7CFF00] text-black text-sm font-bold relative overflow-hidden group"
                style={{ boxShadow: "0 0 24px rgba(124,255,0,0.3)" }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-active:translate-y-0 transition-transform duration-300 ease-out" />
                <MessageCircle size={18} className="relative z-10" />
                <span className="relative z-10">Scrivici su WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
