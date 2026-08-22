"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, BadgeCheck } from "lucide-react";

const clients = [
  { name: "'N Farinati", type: "Modern Pizza & More", city: "Caserta", logo: "/clients/nfarinati.jpg", logoBg: "#2B4A2E", quote: "Da quando usiamo VetrinaFlash i clienti ordinano direttamente dal QR al tavolo. Zero commissioni a ogni pizza, e il menu si aggiorna in pochi secondi. Non torneremo mai più alle piattaforme.", highlight: "Zero commissioni a ogni pizza" },
  { name: "TORB", type: "Birreria Carnivora", city: "Caserta", logo: "/clients/torb.png", logoBg: "#ffffff", quote: "Per una birreria carnivora come la nostra, avere il menu sempre aggiornato è fondamentale. Setup velocissimo, pannello intuitivo. I clienti adorano scansionare il QR direttamente al tavolo.", highlight: "La birra arriva, le commissioni no" },
  { name: "Peter Bun", type: "La 1ª Paninoteca Dolce d'Italia", city: "Campania", logo: "/clients/peterbun.png", logoBg: "#ffffff", quote: "Essere la prima paninoteca dolce d'Italia significa essere innovativi. VetrinaFlash ci ha permesso di portare l'esperienza digitale anche all'ordinazione. I clienti rimangono stupiti.", highlight: "Dolce come i loro panini" },
];

function ClientCard({ c, index }: { c: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia("(hover: none)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group animated-border card-lux rounded-3xl p-6 sm:p-8 flex flex-col text-center transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(124,255,0,0.15),0_0_24px_rgba(124,255,0,0.1)] relative"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1.5 }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl mx-auto mb-6 sm:mb-7 overflow-hidden border border-white/10"
          style={{ background: c.logoBg }}
        >
          <Image src={c.logo} alt={c.name} width={128} height={128} className="w-full h-full object-contain p-2" />
        </motion.div>
      </div>
      <div style={{ transform: "translateZ(20px)" }}>
        <h3 className="font-display text-white font-bold text-lg sm:text-xl mb-1">{c.name}</h3>
      </div>
      <div style={{ transform: "translateZ(15px)" }}>
        <div className="text-[#7CFF00] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] mb-1.5 sm:mb-2">{c.type}</div>
      </div>
      <div style={{ transform: "translateZ(10px)" }}>
        <div className="inline-flex items-center justify-center gap-1.5 text-white/35 text-xs mb-5 sm:mb-6"><MapPin size={11} />{c.city}</div>
      </div>
      <div style={{ transform: "translateZ(25px)" }} className="flex-1 mb-5 sm:mb-6 text-left border-l-2 border-[#7CFF00]/40 pl-3.5 sm:pl-4">
        <p className="text-white/55 text-xs sm:text-sm leading-relaxed italic">
          &ldquo;{c.quote}&rdquo;
        </p>
      </div>
      <div style={{ transform: "translateZ(30px)" }}>
        <div className="shimmer inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#7CFF00]/8 border border-[#7CFF00]/20 text-[#7CFF00] text-[11px] sm:text-xs font-bold relative overflow-hidden">{c.highlight}</div>
      </div>
    </motion.div>
  );
}

export default function ClientsSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section id="clienti" className="aurora relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,255,0,0.045),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"><BadgeCheck size={13} />Chi si fida di noi</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">I nostri clienti. Reali.<br /><span className="neon-text">Liberi dalle commissioni.</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-white/50 text-lg max-w-2xl mx-auto">Non numeri inventati — questi sono i locali che ogni giorno usano VetrinaFlash per incassare il <span className="text-white font-medium">100% dei loro ordini</span>.</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 perspective-[1000px]">
          {clients.map((c, i) => (
            <ClientCard key={c.name} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
