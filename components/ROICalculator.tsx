"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { TrendingDown, TrendingUp, Calculator, MessageCircle } from "lucide-react";
import { WA_QUOTE } from "@/lib/site";

function AnimatedCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const formatted = useTransform(
    count,
    (v) => "€" + Math.round(v).toLocaleString("it-IT")
  );

  useEffect(() => {
    const controls = animate(count, value, { duration: 0.7, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{formatted}</motion.span>;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="text-white/55 text-sm">{label}</label>
        <span className="font-display text-white font-extrabold text-2xl tabular-nums">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, #7CFF00 ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
        }}
      />
      <div className="flex justify-between text-white/25 text-xs mt-2">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [ordersPerDay, setOrdersPerDay] = useState(15);
  const [avgTicket, setAvgTicket] = useState(25);

  const monthly = ordersPerDay * avgTicket * 30;
  const commission = Math.round(monthly * 0.3);
  const annualLoss = commission * 12;

  return (
    <section id="roi" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(124,255,0,0.05),transparent)]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"
          >
            <Calculator size={12} />
            Calcolatore risparmio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Quanti soldi stai{" "}
            <span className="text-red-400" style={{ textShadow: "0 0 36px rgba(255,61,61,0.4)" }}>
              regalando
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            Imposta i numeri del tuo locale e scopri il costo reale delle
            piattaforme.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-lux rounded-3xl p-8 sm:p-10"
        >
          {/* Sliders */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <Slider
              label="Ordini al giorno da delivery"
              value={ordersPerDay}
              min={5}
              max={60}
              step={1}
              format={(v) => `${v}`}
              onChange={setOrdersPerDay}
            />
            <Slider
              label="Scontrino medio"
              value={avgTicket}
              min={10}
              max={60}
              step={1}
              format={(v) => `€${v}`}
              onChange={setAvgTicket}
            />
          </div>

          {/* Result cards */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown size={14} className="text-red-400" />
                <span className="text-red-400/70 text-[11px] uppercase tracking-[0.15em] font-semibold">
                  Regali ogni mese
                </span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-red-400 mb-1 tabular-nums">
                <AnimatedCounter value={commission} />
              </div>
              <div className="text-red-400/40 text-xs">
                il ~30% del fatturato da delivery
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#7CFF00]/5 border border-[#7CFF00]/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={14} className="text-[#7CFF00]" />
                <span className="text-[#7CFF00]/70 text-[11px] uppercase tracking-[0.15em] font-semibold">
                  Risparmieresti ogni anno
                </span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold neon-text mb-1 tabular-nums">
                <AnimatedCounter value={annualLoss} />
              </div>
              <div className="text-[#7CFF00]/40 text-xs">
                con VetrinaFlash — 0% commissioni
              </div>
            </div>
          </div>

          {/* Summary strip */}
          <div className="p-4 rounded-2xl bg-white/3 border border-white/8 mb-8 text-center">
            <p className="text-white/50 text-sm">
              In un anno perdi{" "}
              <span className="text-red-400 font-black text-base">
                €{annualLoss.toLocaleString("it-IT")}
              </span>{" "}
              in commissioni. Con VetrinaFlash sarebbero{" "}
              <span className="text-[#7CFF00] font-black text-base">€0</span> —
              e il sistema lo paghi una volta sola.
            </p>
          </div>

          <a
            href={WA_QUOTE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#7CFF00] text-black font-bold text-base hover:scale-[1.02] transition-transform"
            style={{ boxShadow: "0 0 32px rgba(124,255,0,0.4)" }}
          >
            <MessageCircle size={18} />
            Recupera i tuoi soldi — chiedi un preventivo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
