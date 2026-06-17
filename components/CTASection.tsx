"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadForm } from "./LeadFormProvider";

export default function CTASection() {
  const { open } = useLeadForm();
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
          Ogni giorno conta
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display font-black uppercase text-[clamp(2.2rem,6vw,3.6rem)] leading-[0.98] text-cream"
        >
          Zero commissioni.
          <br />
          Da oggi, <span className="text-ember">non da domani.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-ash text-lg"
        >
          Ogni ordine che passa da una piattaforma esterna è un pezzo del
          tuo incasso che resta a qualcun altro. Due minuti per il preventivo,
          zero impegno.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <button
            onClick={() => open()}
            className="group inline-flex items-center gap-2 rounded-sm bg-ember px-8 py-4 font-semibold text-ink hover:bg-gold transition-colors"
          >
            Richiedi il tuo preventivo gratuito
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
