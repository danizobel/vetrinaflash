"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/lib/site";

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#7CFF00]/[0.06] blur-[110px]"
        />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.25em] mb-6"
        >
          Agisci adesso
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-7"
        >
          Il tuo concorrente
          <br />
          lo sta già usando.{" "}
          <span className="neon-text italic">Tu?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="text-white/50 text-lg sm:text-xl mb-11 max-w-xl mx-auto"
        >
          Ogni giorno che aspetti è un giorno in cui regali soldi a Glovo.{" "}
          <span className="text-white font-medium">
            Un messaggio cambia tutto.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.35, type: "spring", stiffness: 200, damping: 18 }}
        >
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#7CFF00] text-black font-black text-lg overflow-hidden hover:scale-105 transition-transform duration-200"
            style={{
              boxShadow:
                "0 0 44px rgba(124,255,0,0.5), 0 0 100px rgba(124,255,0,0.18)",
            }}
          >
            <motion.span
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 w-1/3 bg-white/30 skew-x-[-20deg] blur-sm pointer-events-none"
            />
            <MessageCircle size={21} className="relative" />
            <span className="relative">Scrivici su WhatsApp — è gratis</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
