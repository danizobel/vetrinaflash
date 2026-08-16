"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ShoppingCart, CreditCard, BarChart3, Bell, QrCode, Store } from "lucide-react";

const features = [
  { icon: ShoppingCart, title: "Ordini Online Diretti", description: "I clienti ordinano dal tuo QR code. L'ordine arriva a te, i soldi arrivano a te. Fine della storia.", tag: "Zero intermediari" },
  { icon: CreditCard, title: "Pagamenti Nexi, SumUp, Stripe", description: "Tutte le modalità integrate. Carta, bancomat, Apple Pay, Google Pay. Zero frizioni per il cliente.", tag: "Sul tuo conto" },
  { icon: BarChart3, title: "Dashboard Analytics", description: "Grafici chiari su incassi, ordini, piatti più venduti, fasce orarie. Sai cosa funziona e cosa no.", tag: "Dati tuoi" },
  { icon: Bell, title: "Notifiche Push Istantanee", description: "Ogni ordine arriva con una notifica in tempo reale su tablet, telefono o PC. Nessun ordine perso, mai.", tag: "Tempo reale" },
  { icon: QrCode, title: "Menu QR Sempre Aggiornabile", description: "Cambia un prezzo, aggiungi il piatto del giorno, disattiva un prodotto esaurito. In 30 secondi da qualsiasi dispositivo.", tag: "No-code" },
  { icon: Store, title: "Back Office Completo", description: "Gestisci orari, categorie, varianti, allergeni, promozioni. Pensato per la ristorazione italiana, non per Silicon Valley.", tag: "Tutto incluso" },
];

function SpotlightCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(124,255,0,0.15), transparent 80%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: (index % 3) * 0.1, type: "spring", stiffness: 100, damping: 20 }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mx.set(-300); my.set(-300); }}
      className="group relative p-7 rounded-3xl glass animated-border hover:border-[#7CFF00]/25 transition-colors duration-300"
    >
      <motion.div style={{ background: spotlight }} className="absolute inset-0 rounded-3xl pointer-events-none" />
      <div className="relative">
        <div className="flex items-start justify-between mb-5">
          <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 15, delay: (index % 3) * 0.1 + 0.1 }}
            className="w-12 h-12 rounded-2xl bg-[#7CFF00]/10 flex items-center justify-center group-hover:bg-[#7CFF00]/20 group-hover:scale-110 transition-all duration-300 icon-glow"
          >
            <feature.icon size={20} className="text-[#7CFF00]" />
          </motion.div>
          <span className="relative overflow-hidden text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-white/5 text-white/35 before:absolute before:inset-0 before:-translate-x-full group-hover:before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
            {feature.tag}
          </span>
        </div>
        <h3 className="font-display text-white font-bold text-lg mb-2.5 leading-tight">{feature.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section id="features" className="relative py-24 md:py-32 aurora">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(124,255,0,0.04),transparent)]" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">Tutto incluso</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">Un sistema. <span className="gradient-text">Tutto quello che serve.</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/50 text-lg max-w-2xl mx-auto">Dalla gestione del menu agli analytics avanzati, tutto in un unico pannello pensato per chi lavora in cucina.</motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => <SpotlightCard key={feature.title} feature={feature} index={i} />)}
        </div>
      </div>
    </section>
  );
}
