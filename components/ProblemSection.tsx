"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MessageCircleOff, CalendarX, TrendingDown, Smartphone, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Rispondi troppo tardi",
    description:
      "Il cliente aspetta 30 minuti la tua risposta su WhatsApp. Nel frattempo, ha già prenotato dalla concorrenza.",
    stat: "74%",
    statLabel: "dei clienti abbandona se non risponde entro 5 min",
    color: "#FF4444",
    delay: 0,
  },
  {
    icon: MessageCircleOff,
    title: "DM ignorati su Instagram",
    description:
      "Decine di messaggi in arrivo ogni giorno. Menu richiesti, informazioni, prenotazioni. Impossibile gestirli tutti.",
    stat: "60%",
    statLabel: "dei messaggi Instagram rimangono senza risposta",
    color: "#FF6B35",
    delay: 0.1,
  },
  {
    icon: CalendarX,
    title: "Prenotazioni perse",
    description:
      "Un cliente chiama mentre sei in cucina. Nessuno risponde. La prenotazione va persa. E con lei, una serata intera di incasso.",
    stat: "1 su 3",
    statLabel: "prenotazioni perse per mancata risposta",
    color: "#FF4444",
    delay: 0.2,
  },
  {
    icon: TrendingDown,
    title: "Margini distrutti dal delivery",
    description:
      "Glovo, Uber Eats, Deliveroo: paghi il 30% di commissione su ogni ordine. I clienti li hai tu, ma i soldi li prendono loro.",
    stat: "30%",
    statLabel: "di commissione media per ogni ordine delivery",
    color: "#FF6B35",
    delay: 0.3,
  },
  {
    icon: Smartphone,
    title: "Gestisci tutto da solo",
    description:
      "Telefono, WhatsApp, Instagram, email, recensioni. Un dipendente a tempo pieno sarebbe necessario solo per le comunicazioni.",
    stat: "4h/giorno",
    statLabel: "perse in comunicazioni manuali",
    color: "#FF4444",
    delay: 0.4,
  },
  {
    icon: DollarSign,
    title: "Soldi lasciati sul tavolo",
    description:
      "Ogni messaggio senza risposta è un cliente perso. Ogni cliente perso è fatturato che non ritornerà mai più al tuo locale.",
    stat: "€ 2.400",
    statLabel: "persi al mese in media per ogni locale non automatizzato",
    color: "#FF6B35",
    delay: 0.5,
  },
];

function ProblemCard({
  problem,
  index,
}: {
  problem: (typeof problems)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: problem.delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/15 transition-all duration-300 overflow-hidden"
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${problem.color}08 0%, transparent 70%)`,
        }}
      />

      {/* Number */}
      <div className="absolute top-4 right-4 text-5xl font-black text-white/3 leading-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${problem.color}15`,
          border: `1px solid ${problem.color}25`,
        }}
      >
        <problem.icon className="w-6 h-6" style={{ color: problem.color }} />
      </div>

      {/* Content */}
      <h3 className="text-white font-bold text-lg mb-2">{problem.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-5">{problem.description}</p>

      {/* Stat */}
      <div
        className="inline-flex flex-col px-4 py-3 rounded-xl"
        style={{ background: `${problem.color}10`, border: `1px solid ${problem.color}20` }}
      >
        <span className="font-black text-2xl" style={{ color: problem.color }}>
          {problem.stat}
        </span>
        <span className="text-white/40 text-xs leading-snug mt-0.5">{problem.statLabel}</span>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-10%" });

  return (
    <section id="problem" className="relative py-24 md:py-32 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,50,50,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Il Problema
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
          >
            Ogni messaggio ignorato
            <br />
            <span className="text-red-400">è un cliente perso.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Ogni giorno, i locali come il tuo perdono clienti, prenotazioni e fatturato — non perché
            il cibo sia cattivo, ma perché nessuno risponde abbastanza in fretta.
          </motion.p>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <ProblemCard key={problem.title} problem={problem} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-px rounded-2xl bg-gradient-to-r from-[#7CFF00]/20 via-[#7CFF00]/40 to-[#7CFF00]/20">
            <div className="bg-[#050508] rounded-2xl px-8 py-6">
              <p className="text-white/60 text-lg mb-2">
                Esiste una soluzione che risolve tutto questo.
              </p>
              <p className="text-2xl font-black text-[#7CFF00]">
                Automaticamente. 24 ore su 24.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
