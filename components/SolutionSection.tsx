"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Calendar, ShoppingBag, Star, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Il cliente scrive su WhatsApp o Instagram",
    description:
      "Un cliente manda un messaggio. Normalmente aspetterebbe ore. Con VetrinaFlash, riceve risposta entro 3 secondi — di notte, nei weekend, durante il servizio.",
    badge: "Risposta Istantanea",
    color: "#25D366",
    align: "left",
  },
  {
    icon: Zap,
    number: "02",
    title: "L'AI capisce e risponde in modo personalizzato",
    description:
      "Il nostro assistente AI conosce il tuo menù, gli orari, le promozioni e risponde esattamente come faresti tu — con il tono del tuo locale, sempre professionale.",
    badge: "AI Personalizzata",
    color: "#7CFF00",
    align: "right",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Prenotazione confermata automaticamente",
    description:
      "L'AI verifica i posti disponibili, conferma la prenotazione, invia un reminder al cliente e aggiorna il tuo registro. Zero lavoro manuale.",
    badge: "Zero Lavoro Manuale",
    color: "#00BFFF",
    align: "left",
  },
  {
    icon: ShoppingBag,
    number: "04",
    title: "Ordini diretti senza commissioni",
    description:
      "I clienti ordinano direttamente da te su WhatsApp. Nessuna piattaforma di delivery a prendere il 30%. Il tuo incasso, tutto tuo.",
    badge: "0% Commissioni",
    color: "#7CFF00",
    align: "right",
  },
  {
    icon: Star,
    number: "05",
    title: "Retention e marketing automatico",
    description:
      "Dopo ogni visita, l'AI manda automaticamente messaggi di follow-up, chiede recensioni, propone offerte personalizzate. I clienti tornano.",
    badge: "Clienti Fidelizzati",
    color: "#FFD700",
    align: "left",
  },
  {
    icon: BarChart3,
    number: "06",
    title: "Dashboard analytics in tempo reale",
    description:
      "Visualizza messaggi gestiti, prenotazioni confermate, ordini ricevuti e fatturato generato dall'AI. Tutto in un'unica dashboard elegante.",
    badge: "Analytics Live",
    color: "#7CFF00",
    align: "right",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: step.align === "left" ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-6 items-start ${step.align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center relative group"
          style={{
            background: `${step.color}12`,
            border: `1px solid ${step.color}25`,
            boxShadow: `0 0 30px ${step.color}10`,
          }}
        >
          <step.icon className="w-7 h-7" style={{ color: step.color }} />
          <div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black border"
            style={{
              background: step.color,
              color: "#000",
              borderColor: step.color,
            }}
          >
            {index + 1}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
          style={{ background: `${step.color}15`, color: step.color }}
        >
          <Zap className="w-3 h-3" />
          {step.badge}
        </div>
        <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
        <p className="text-white/50 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function SolutionSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-10%" });

  return (
    <section id="solution" className="relative py-24 md:py-32 overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(124,255,0,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CFF00]/10 border border-[#7CFF00]/20 text-[#7CFF00] text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            La Soluzione
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6"
          >
            <span className="text-white">Il tuo locale parla</span>
            <br />
            <span className="text-[#7CFF00]" style={{ textShadow: "0 0 30px rgba(124,255,0,0.4)" }}>
              da solo.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            VetrinaFlash installa un sistema di AI nel tuo locale che risponde, prenota, vende e
            fidelizza — in automatico, ogni ora del giorno.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#7CFF00]/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-2">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Central visual: AI brain */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative w-full max-w-2xl">
            {/* Glowing card */}
            <div className="relative p-8 rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/3 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,255,0,0.06),transparent_70%)]" />

              <div className="relative">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#7CFF00] animate-pulse" />
                  <span className="text-[#7CFF00] font-semibold">Sistema AI Attivo</span>
                  <div className="w-3 h-3 rounded-full bg-[#7CFF00] animate-pulse" />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Messaggi oggi", value: "847" },
                    { label: "Prenotazioni", value: "34" },
                    { label: "Ordini diretti", value: "23" },
                  ].map((m) => (
                    <div key={m.label} className="p-4 rounded-xl bg-white/3 border border-white/8">
                      <div className="text-2xl font-black text-[#7CFF00]">{m.value}</div>
                      <div className="text-white/40 text-xs mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-white/40 text-sm">
                  Il sistema ha lavorato per te mentre tu cucinavi, servivi e riposavi.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
