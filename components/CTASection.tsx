"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-ember/10 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-widest text-rust uppercase mb-5"
        >
          Agisci adesso
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display font-black uppercase text-[clamp(2.2rem,6vw,3.6rem)] leading-[0.98] text-cream"
        >
          Il tuo concorrente
          <br />
          lo sta già usando. <span className="text-ember">Tu?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-ash text-lg"
        >
          Ogni giorno che aspetti è un giorno in cui regali soldi alle
          piattaforme. Una chiamata cambia tutto.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/393505383769?text=Ciao!%20Ho%20visto%20VetrinaFlash%20e%20vorrei%20saperne%20di%20pi%C3%B9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-ember px-8 py-4 font-semibold text-ink hover:bg-gold transition-colors"
          >
            <MessageCircle size={18} />
            Scrivici su WhatsApp — è gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
