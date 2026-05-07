"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MessageCircle,
  AtSign,
  Calendar,
  BookOpen,
  RotateCcw,
  BarChart2,
  ShoppingCart,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "AI WhatsApp Assistant",
    description:
      "Risponde ai messaggi WhatsApp 24/7, gestisce domande, invia il menu e conferma prenotazioni in automatico.",
    color: "#25D366",
    badge: "Core",
    highlight: true,
  },
  {
    icon: AtSign,
    title: "Instagram Automation",
    description:
      "Risponde ai DM di Instagram, ai commenti con parole chiave e converte i follower in clienti paganti.",
    color: "#E1306C",
    badge: "Hot",
    highlight: false,
  },
  {
    icon: Calendar,
    title: "Prenotazioni Automatiche",
    description:
      "Sistema di prenotazione intelligente che verifica disponibilità, conferma tavoli e manda reminder.",
    color: "#00BFFF",
    badge: "Popolare",
    highlight: false,
  },
  {
    icon: BookOpen,
    title: "Menu Digitale",
    description:
      "Il cliente chiede il menu, l'AI lo invia in un secondo. Aggiornabile in tempo reale, con foto e prezzi.",
    color: "#7CFF00",
    badge: "Essenziale",
    highlight: false,
  },
  {
    icon: RotateCcw,
    title: "Customer Recovery",
    description:
      "Dopo una visita, l'AI ricontatta i clienti con offerte personalizzate. Aumenta la frequenza delle visite.",
    color: "#FFD700",
    badge: "Revenue",
    highlight: false,
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description:
      "Dashboard real-time con messaggi, prenotazioni, conversioni e fatturato generato dall'AI. Tutto visibile.",
    color: "#7CFF00",
    badge: "Insights",
    highlight: false,
  },
  {
    icon: ShoppingCart,
    title: "Delivery Diretto",
    description:
      "I clienti ordinano direttamente su WhatsApp. Zero commissioni a piattaforme esterne. Profitto 100% tuo.",
    color: "#FF6B35",
    badge: "Zero Fee",
    highlight: false,
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description:
      "Campagne automatiche per eventi, promozioni, compleanni. I clienti giusti, al momento giusto.",
    color: "#A78BFA",
    badge: "Growth",
    highlight: false,
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
        feature.highlight
          ? "border-[#7CFF00]/30 bg-[#7CFF00]/5"
          : "border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/15"
      } border`}
    >
      {/* Glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${feature.color}10 0%, transparent 65%)`,
          boxShadow: hovered ? `0 0 40px ${feature.color}10` : "none",
        }}
      />

      {/* Badge */}
      <div
        className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold"
        style={{ background: `${feature.color}18`, color: feature.color }}
      >
        {feature.badge}
      </div>

      {/* Icon */}
      <motion.div
        animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
        transition={{ duration: 0.2 }}
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: `${feature.color}15`,
          border: `1px solid ${feature.color}25`,
        }}
      >
        <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
      </motion.div>

      {/* Content */}
      <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4">{feature.description}</p>

      {/* CTA */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -5 }}
        className="flex items-center gap-1 text-sm font-medium"
        style={{ color: feature.color }}
      >
        Scopri di più <ArrowRight className="w-3.5 h-3.5" />
      </motion.div>

      {/* Shimmer on hover */}
      {hovered && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${feature.color}08, transparent)`,
          }}
        />
      )}
    </motion.div>
  );
}

export default function FeaturesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-10%" });

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(124,255,0,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CFF00]/10 border border-[#7CFF00]/20 text-[#7CFF00] text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#7CFF00] animate-pulse" />
            Funzionalità
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
          >
            Tutto ciò di cui
            <br />
            <span
              className="text-[#7CFF00]"
              style={{ textShadow: "0 0 30px rgba(124,255,0,0.4)" }}
            >
              hai bisogno.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Un sistema completo di AI automation progettato specificamente per ristoranti, pizzerie,
            pub e locali italiani.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom: integration logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-sm uppercase tracking-widest mb-6">
            Si integra con le piattaforme che già usi
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["WhatsApp", "Instagram", "Facebook", "Google", "TheFork", "Tripadvisor"].map(
              (name) => (
                <div
                  key={name}
                  className="px-5 py-2.5 rounded-full border border-white/10 bg-white/3 text-white/40 text-sm font-medium hover:border-white/20 hover:text-white/60 transition-all duration-200"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
