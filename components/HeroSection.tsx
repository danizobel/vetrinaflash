"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/393505383769?text=Ciao!%20Vorrei%20una%20demo%20gratuita%20di%20VetrinaFlash";

const orderLines = [
  { label: "1x Pizza Margherita", value: "€8,00" },
  { label: "2x Supplì al ragù", value: "€5,00" },
  { label: "1x Acqua 1L", value: "€1,50" },
];

const paymentLogos = ["NEXI", "SUMUP", "STRIPE", "PAYPAL", "SATISPAY"];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-ember/10 blur-3xl drift" />
      <div className="absolute top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left: thesis */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-gold uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold led" />
            Asporto &amp; delivery, senza intermediari
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-black uppercase leading-[0.95] text-[clamp(2.6rem,7vw,4.6rem)] tracking-tight text-cream"
          >
            Il tuo asporto.
            <br />
            Il tuo delivery.
            <br />
            <span className="text-ember">I tuoi soldi.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-ash max-w-md"
          >
            Ordini diretti per asporto e delivery, pagamenti integrati, zero
            commissioni alle piattaforme. Il cliente ordina, tu incassi il
            100%. Investimento una tantum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3.5 font-semibold text-ink hover:bg-gold transition-colors"
            >
              Richiedi una demo gratuita
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#come-funziona"
              className="inline-flex items-center gap-2 rounded-sm border border-[var(--ink-line)] px-6 py-3.5 font-semibold text-cream hover:border-ash transition-colors"
            >
              <PlayCircle size={18} />
              Guarda come funziona
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <p className="font-mono text-[11px] tracking-widest text-ash-dim uppercase mb-3">
              Pagamenti integrati
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {paymentLogos.map((p) => (
                <span key={p} className="font-mono text-sm text-ash">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: the receipt signature */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[320px]"
        >
          <div className="ticket px-6 pt-6 pb-10 font-mono text-[13px] leading-relaxed">
            <div className="text-center mb-3">
              <p className="font-bold tracking-widest text-[11px]">VETRINAFLASH</p>
              <p className="text-[11px] text-[#5c5040]">Comanda #1048 · Asporto · 18:42</p>
            </div>
            <div className="perf-row -mx-6 mb-3" style={{ background: "transparent" }} />
            <div className="ticket-line py-1.5" />

            {orderLines.map((line, i) => (
              <motion.div
                key={line.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.18 }}
                className="flex justify-between py-1.5 ticket-line"
              >
                <span>{line.label}</span>
                <span>{line.value}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-between py-1.5 ticket-line text-[#5c5040]"
            >
              <span>Commissione piattaforma</span>
              <span>€0,00</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              className="mt-4 pt-3 border-t-2 border-dashed border-[#2a2118]/30"
            >
              <div className="flex justify-between font-bold text-base">
                <span>TOTALE</span>
                <span>€14,50</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-sm bg-ember/15 px-2.5 py-1 text-ember font-bold text-xs">
                A TE: 100%
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
