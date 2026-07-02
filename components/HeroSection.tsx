"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import Image from "next/image";
import { MessageCircle, Play, Zap } from "lucide-react";
import { WA_DEMO } from "@/lib/site";

const stats = [
  { value: "0%", label: "Commissioni, sempre" },
  { value: "1×", label: "Paghi una volta sola" },
  { value: "15min", label: "Setup del menu" },
];

const clients = [
  { src: "/clients/nfarinati.jpg", name: "'N Farinati", tag: "Modern Pizza · Caserta" },
  { src: "/clients/torb.png", name: "TORB", tag: "Birreria Carnivora · Caserta" },
  { src: "/clients/peterbun.png", name: "Peter Bun", tag: "Paninoteca Dolce · Campania" },
];

/* Contatore live: € di commissioni bruciate mentre l'utente legge.
   Un locale medio (15 ordini/g × €25 × 30%) perde ~€112/giorno → ~€0.078/s */
function BurnCounter() {
  const [burned, setBurned] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      setBurned(((Date.now() - start) / 1000) * 0.078);
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="inline-flex items-center max-w-full gap-3 px-4 sm:px-5 py-2.5 rounded-2xl border border-red-500/25 bg-red-500/5"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400" />
      </span>
      <span className="text-white/45 text-xs sm:text-sm">
        Da quando hai aperto questa pagina, un locale medio ha regalato{" "}
        <span className="text-red-400 font-bold font-mono tabular-nums">
          €{burned.toFixed(2)}
        </span>{" "}
        alle app di delivery
      </span>
    </motion.div>
  );
}

/* Headline con reveal parola per parola */
function StaggeredTitle() {
  return (
    <h1 className="font-display text-[clamp(1.9rem,8.6vw,2.6rem)] sm:text-6xl md:text-7xl font-extrabold leading-[1.06] sm:leading-[1.02] tracking-tight mb-7">
      {[
        { text: "Il sistema che fa", cls: "text-white" },
        { text: "sparire le commissioni", cls: "gradient-text" },
        { text: "di delivery.", cls: "text-white/35" },
      ].map((line, li) => (
        <span key={li} className="block overflow-hidden pb-1">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.3 + li * 0.14,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`block ${line.cls}`}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Glow che segue il mouse
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);

  const clientsRef = useRef<HTMLDivElement>(null);
  const clientsInView = useInView(clientsRef, { once: true });

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-10"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(124,255,0,0.14),transparent)]" />
        <motion.div
          style={{ left: glowX, top: glowY }}
          className="absolute w-[560px] h-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7CFF00]/[0.055] blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/5 w-[380px] h-[380px] rounded-full bg-[#4ade80]/5 blur-[100px] pointer-events-none"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex flex-wrap items-center justify-center max-w-full gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.2em] uppercase mb-8 text-center"
        >
          <Zap size={11} className="fill-current shrink-0" />
          Menu QR · Ordini Diretti · Pagamenti Tuoi
        </motion.div>

        <StaggeredTitle />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-9 leading-relaxed"
        >
          Menu digitale QR, ordini diretti e pagamenti con{" "}
          <span className="text-white font-semibold">Nexi, SumUp e Stripe</span>{" "}
          — direttamente sul tuo conto.
          <br className="hidden sm:block" />{" "}
          Investimento una tantum. Zero canoni. Zero commissioni.{" "}
          <span className="text-[#7CFF00] font-semibold">Per sempre.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href={WA_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full bg-[#7CFF00] text-black font-bold text-base overflow-hidden hover:scale-105 transition-transform duration-200"
            style={{ boxShadow: "0 0 36px rgba(124,255,0,0.45), 0 0 80px rgba(124,255,0,0.15)" }}
          >
            <motion.span
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
              className="absolute inset-0 w-1/3 bg-white/25 skew-x-[-20deg] blur-sm pointer-events-none"
            />
            <span className="relative flex items-center gap-2">
              <MessageCircle size={17} />
              Richiedi una demo gratuita
            </span>
          </a>
          <a
            href="#demo"
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/15 text-white/65 hover:text-white hover:border-[#7CFF00]/40 font-medium text-base transition-all duration-200"
          >
            <span className="w-7 h-7 rounded-full bg-white/8 group-hover:bg-[#7CFF00]/15 flex items-center justify-center transition-colors">
              <Play size={11} className="fill-current ml-0.5" />
            </span>
            Guarda come funziona
          </a>
        </motion.div>

        <BurnCounter />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-20 mt-12"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-extrabold neon-text">
                {s.value}
              </div>
              <div className="text-[11px] text-white/35 uppercase tracking-[0.18em] mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Clienti reali — trust strip */}
      <motion.div
        ref={clientsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={clientsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="relative z-10 mt-16 w-full max-w-3xl mx-auto px-4"
      >
        <div className="text-center text-white/25 text-[10px] uppercase tracking-[0.25em] mb-5">
          Già scelto da locali reali in Campania
        </div>
        <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={clientsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.5 + i * 0.12 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white/90 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={c.src}
                  alt={c.name}
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-white/70 group-hover:text-white text-sm font-semibold transition-colors">
                  {c.name}
                </div>
                <div className="text-white/30 text-[10px] uppercase tracking-wider">
                  {c.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
      >
        <div className="w-1 h-2 rounded-full bg-[#7CFF00]/60" />
      </motion.div>
    </section>
  );
}
