"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { WA_DEFAULT } from "@/lib/site";
import MagneticButton from "@/components/MagneticButton";

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <section className="relative py-20 sm:py-28 md:py-40 overflow-hidden aurora">
      <div className="absolute inset-0"><div className="absolute inset-0 bg-grid" /><motion.div animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#7CFF00]/[0.08] blur-[120px]" /></div>
      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4 sm:mb-6">Agisci adesso</motion.p>
        <motion.h2 initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ delay: 0.1, type: "spring", stiffness: 180, damping: 20 }} className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] sm:leading-[1.05] mb-5 sm:mb-7">Il tuo concorrente<br />lo sta già usando. <span className="neon-text italic">Tu?</span></motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }} className="text-white/50 text-base sm:text-xl mb-8 sm:mb-11 max-w-xl mx-auto px-2">Ogni giorno che aspetti è un giorno in cui regali soldi a Glovo. <span className="text-white font-medium">Un messaggio cambia tutto.</span></motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ delay: 0.35, type: "spring", stiffness: 200, damping: 18 }}>
          <MagneticButton className="w-full sm:w-auto">
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-[#7CFF00] text-black font-black text-sm sm:text-lg overflow-hidden hover:scale-105 transition-transform duration-200 pulse-multi shimmer w-full sm:w-auto text-center" style={{ boxShadow: "0 0 54px rgba(124,255,0,0.6), 0 0 120px rgba(124,255,0,0.25)" }}>
              <motion.span animate={{ x: ["-150%", "250%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1 }} className="absolute inset-0 w-1/3 bg-white/30 skew-x-[-20deg] blur-sm pointer-events-none" />
              <MessageCircle size={20} className="relative shrink-0" />
              <span className="relative">Scrivici su WhatsApp — è gratis</span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
      
      {/* Floating Mascot - Hidden on small screens */}
      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -10 }} 
        animate={inView ? { opacity: 0.35, y: 0, rotate: 0 } : {}} 
        transition={{ delay: 0.8, type: "spring", stiffness: 100, damping: 15 }}
        className="absolute bottom-10 right-10 hidden md:block animate-float-delay pointer-events-none"
      >
        <Image src="/images/logo-mascot.png" width={90} height={90} alt="VetrinaFlash Mascot" className="object-contain filter drop-shadow-[0_0_15px_rgba(124,255,0,0.5)]" />
      </motion.div>
    </section>
  );
}
