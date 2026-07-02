"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { TrendingDown, ArrowRight } from "lucide-react";

const platforms = [
  {
    name: "Glovo",
    percent: 35,
    order: 30,
    keep: "19,50",
    lost: "10,50",
    delay: 0,
  },
  {
    name: "JustEat",
    percent: 30,
    order: 30,
    keep: "21,00",
    lost: "9,00",
    delay: 0.12,
  },
  {
    name: "Deliveroo",
    percent: 32,
    order: 30,
    keep: "20,40",
    lost: "9,60",
    delay: 0.24,
  },
];

function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1.4,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const count = useMotionValue(0);
  const text = useTransform(
    count,
    (v) => `${prefix}${Math.round(v).toLocaleString("it-IT")}${suffix}`
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}

export default function ProblemSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section id="problema" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(255,61,61,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/25 bg-red-500/5 text-red-400 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"
          >
            <TrendingDown size={12} />
            Il problema vero
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
          >
            Quanto stai pagando
            <br />
            <span className="text-red-400" style={{ textShadow: "0 0 40px rgba(255,61,61,0.4)" }}>
              le piattaforme ogni mese?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Per ogni ordine da una piattaforma esterna cedi fino a un terzo
            dell&apos;incasso. Non è una commissione —{" "}
            <span className="text-white font-medium">
              è un affitto che non finisce mai.
            </span>
          </motion.p>
        </div>

        {/* Commission cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {platforms.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: p.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative p-7 rounded-3xl border border-red-500/15 bg-gradient-to-b from-red-500/[0.06] to-transparent overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              <div className="text-white/45 text-sm font-semibold uppercase tracking-widest mb-4">
                {p.name}
              </div>
              <div className="font-display text-6xl sm:text-7xl font-extrabold text-red-400 mb-1 tabular-nums" style={{ textShadow: "0 0 44px rgba(255,61,61,0.35)" }}>
                <CountUp to={p.percent} suffix="%" duration={1.2 + p.delay} />
              </div>
              <div className="text-white/30 text-xs uppercase tracking-widest mb-6">
                di commissione per ordine
              </div>
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 text-sm leading-relaxed">
                <div className="flex justify-between text-white/45">
                  <span>Ordine da</span>
                  <span className="text-white font-semibold">€{p.order},00</span>
                </div>
                <div className="flex justify-between text-white/45">
                  <span>Tu incassi</span>
                  <span className="text-white/70 font-semibold">€{p.keep}</span>
                </div>
                <div className="flex justify-between pt-1.5 mt-1.5 border-t border-white/8">
                  <span className="text-red-400/80">Regali a {p.name}</span>
                  <span className="text-red-400 font-bold">−€{p.lost}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-14"
        >
          <span className="text-white/40 text-base line-through decoration-red-400/60">
            Fino al 35% di commissione
          </span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="text-[#7CFF00]"
          >
            <ArrowRight size={22} />
          </motion.span>
          <span className="font-display text-xl sm:text-2xl font-bold neon-text">
            Con VetrinaFlash: 0%. Mai.
          </span>
        </motion.div>

        {/* Annual savings counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="card-lux rounded-3xl p-8 sm:p-12 text-center"
        >
          <p className="text-white/50 text-sm sm:text-base mb-4">
            Con 15 ordini al giorno da €25 medi, con VetrinaFlash risparmieresti{" "}
            <span className="text-white font-semibold">ogni anno</span>:
          </p>
          <div className="font-display text-5xl sm:text-8xl font-extrabold neon-text tabular-nums mb-3">
            <CountUp to={41063} prefix="€" duration={2.2} />
          </div>
          <p className="text-white/25 text-xs">
            calcolato su commissione media del 30% · stima su volumi medi di un locale tipo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
