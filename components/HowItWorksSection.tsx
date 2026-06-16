"use client";

import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Carica il menu",
    time: "15 minuti",
    text: "Inserisci piatti, prezzi e foto dal pannello. Modifichi tutto quando vuoi, anche dal telefono.",
  },
  {
    n: "02",
    title: "Il cliente ordina online",
    time: "asporto e delivery",
    text: "Il cliente apre il link del tuo locale, scelgli i prodotti, paga con carta o wallet. Nessuna app da installare.",
  },
  {
    n: "03",
    title: "Ricevi e incassi diretto",
    time: "istantaneo",
    text: "L'ordine arriva sul tuo dispositivo, il pagamento va sul tuo conto. Nessun intermediario, nessuna commissione.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="come-funziona" className="relative py-24 md:py-32 bg-ink-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">Tre step</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] text-cream">
            Da zero a ordini che arrivano
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <p className="font-mono text-5xl font-bold text-[var(--ink-line)] leading-none select-none">
                {step.n}
              </p>
              <h3 className="font-display font-bold text-2xl text-cream mt-3">{step.title}</h3>
              <p className="font-mono text-xs text-gold uppercase mt-1">{step.time}</p>
              <p className="text-ash mt-3 leading-relaxed">{step.text}</p>

              {i === 1 && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-sm border border-[var(--ink-line)] px-3 py-1.5 font-mono text-[11px] text-ash-dim">
                  <QrCode size={14} />
                  Disponibile anche un QR da tavolo, opzionale
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
