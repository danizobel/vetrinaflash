"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { ClipboardList, QrCode, Banknote } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Carica il tuo menu", time: "15 minuti", description: "Inserisci piatti, prezzi e foto direttamente dal pannello. Modifichi tutto in qualsiasi momento, anche da telefono." },
  { icon: QrCode, step: "02", title: "Il cliente scansiona e ordina", time: "0 app da scaricare", description: "Stampi un QR code sul tavolo. Il cliente lo scansiona, vede il menu, ordina e paga. Tutto con la fotocamera del telefono." },
  { icon: Banknote, step: "03", title: "Ricevi e incassi diretto", time: "istantaneo", description: "L'ordine arriva sul tuo dispositivo. Il pagamento va direttamente sul tuo conto. Nessun intermediario, nessuna commissione." },
];

function StepCard({ s, i, inView }: { s: typeof steps[0], i: number, inView: boolean }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(hover: none)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 100, damping: 15 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative text-center group px-2 sm:px-0"
    >
      <div className="relative inline-flex mb-6 sm:mb-7">
        <motion.div whileHover={{ scale: 1.08 }} className="glow-pulse relative w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-2xl glass-green flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(124,255,0,0.25)]" style={{ boxShadow: "0 0 32px rgba(124,255,0,0.12)" }}>
          <s.icon size={26} className="text-[#7CFF00] icon-glow transition-all duration-300 group-hover:scale-110" />
          <span className="absolute -top-2 -right-2 sm:-top-2.5 sm:-right-2.5 px-2 py-0.5 rounded-full bg-[#7CFF00] text-black text-[10px] font-black relative">
            <span className="absolute inset-0 rounded-full bg-[#7CFF00] animate-ping opacity-60"></span>
            <span className="relative z-10">{s.step}</span>
          </span>
        </motion.div>
      </div>
      <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{s.title}</h3>
      <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/8 text-[#7CFF00] text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest mb-3 sm:mb-4">{s.time}</div>
      <p className="text-white/45 text-sm leading-relaxed max-w-xs mx-auto">{s.description}</p>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="come-funziona" className="aurora relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(124,255,0,0.04),transparent)]" />
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">Tre step</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">Da zero a ordini che arrivano,<br /><span className="gradient-text">in meno di un&apos;ora.</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-white/50 text-lg">Nessun tecnico. Nessun corso. Nessuna complessità.</motion.p>
        </div>
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          <div className="hidden md:block absolute top-9 left-[16%] right-[16%] h-px">
            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }} className="h-full origin-left bg-gradient-to-r from-[#7CFF00]/50 via-[#7CFF00]/25 to-[#7CFF00]/50 relative">
              {inView && (
                <motion.div
                  initial={{ left: "0%", opacity: 0 }}
                  animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                  transition={{ delay: 1.9, duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7CFF00] shadow-[0_0_12px_3px_rgba(124,255,0,0.8)]"
                />
              )}
            </motion.div>
          </div>
          {steps.map((s, i) => (
            <StepCard key={s.step} s={s} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
