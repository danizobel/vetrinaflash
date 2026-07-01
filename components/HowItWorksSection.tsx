"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, QrCode, Banknote } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Carica il tuo menu",
    time: "15 minuti",
    description:
      "Inserisci piatti, prezzi e foto direttamente dal pannello. Modifichi tutto in qualsiasi momento, anche da telefono.",
  },
  {
    icon: QrCode,
    step: "02",
    title: "Il cliente scansiona e ordina",
    time: "0 app da scaricare",
    description:
      "Stampi un QR code sul tavolo. Il cliente lo scansiona, vede il menu, ordina e paga. Tutto con la fotocamera del telefono.",
  },
  {
    icon: Banknote,
    step: "03",
    title: "Ricevi e incassi diretto",
    time: "istantaneo",
    description:
      "L'ordine arriva sul tuo dispositivo. Il pagamento va direttamente sul tuo conto. Nessun intermediario, nessuna commissione.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="come-funziona" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(124,255,0,0.04),transparent)]" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"
          >
            Tre step
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
          >
            Da zero a ordini che arrivano,
            <br />
            <span className="gradient-text">in meno di un&apos;ora.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            Nessun tecnico. Nessun corso. Nessuna complessità.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-9 left-[16%] right-[16%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-full origin-left bg-gradient-to-r from-[#7CFF00]/50 via-[#7CFF00]/25 to-[#7CFF00]/50"
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center group"
            >
              {/* Icon node */}
              <div className="relative inline-flex mb-7">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="relative w-[72px] h-[72px] rounded-2xl glass-green flex items-center justify-center"
                  style={{ boxShadow: "0 0 32px rgba(124,255,0,0.12)" }}
                >
                  <s.icon size={28} className="text-[#7CFF00]" />
                  <span className="absolute -top-2.5 -right-2.5 px-2 py-0.5 rounded-full bg-[#7CFF00] text-black text-[10px] font-black">
                    {s.step}
                  </span>
                </motion.div>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                {s.title}
              </h3>
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/8 text-[#7CFF00] text-[11px] font-semibold uppercase tracking-widest mb-4">
                {s.time}
              </div>
              <p className="text-white/45 text-sm leading-relaxed max-w-xs mx-auto">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
