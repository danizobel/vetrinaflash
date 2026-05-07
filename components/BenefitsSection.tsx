"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, Heart, ShoppingBag, Calendar, Zap, Users, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    color: "#7CFF00",
    title: "Più prenotazioni, ogni settimana",
    headline: "+340%",
    headlineLabel: "Prenotazioni in più",
    description:
      "I locali che usano VetrinaFlash ricevono in media il 340% di prenotazioni in più. Ogni messaggio catturato, ogni cliente servito.",
    points: [
      "Nessuna prenotazione persa per mancata risposta",
      "Conferma automatica con reminder integrato",
      "Lista d'attesa gestita dall'AI",
    ],
  },
  {
    icon: Clock,
    color: "#00BFFF",
    title: "Risposta in meno di 3 secondi",
    headline: "< 3s",
    headlineLabel: "Tempo di risposta",
    description:
      "Nessun cliente aspetta piu. L'AI risponde immediatamente — di notte, nei weekend, durante il servizio. Sempre professionale.",
    points: [
      "Risposta istantanea 24/7",
      "Tono personalizzato sul tuo locale",
      "Mai piu messaggi non letti",
    ],
  },
  {
    icon: Heart,
    color: "#FF6B6B",
    title: "Zero stress. Davvero.",
    headline: "-87%",
    headlineLabel: "Stress operativo",
    description:
      "I nostri clienti riportano un calo dell'87% del tempo speso in comunicazioni manuali. Torna a concentrarti sul tuo lavoro.",
    points: [
      "Niente piu WhatsApp da gestire manualmente",
      "Niente piu DM Instagram ignorati",
      "Niente piu telefonate perse",
    ],
  },
  {
    icon: ShoppingBag,
    color: "#FF6B35",
    title: "Ordini diretti senza commissioni",
    headline: "0%",
    headlineLabel: "Commissioni esterne",
    description:
      "Con il sistema di ordini diretti su WhatsApp, ogni euro rimane nel tuo locale. Niente Glovo, niente Deliveroo, niente 30% che sparisce.",
    points: [
      "Ordini direttamente su WhatsApp",
      "Zero commissioni sulle consegne",
      "Margini al 100% tuoi",
    ],
  },
  {
    icon: Calendar,
    color: "#A78BFA",
    title: "Clienti che tornano sempre",
    headline: "+180%",
    headlineLabel: "Retention clienti",
    description:
      "Il sistema di customer retention ricontatta ogni cliente dopo la visita. Offerte personalizzate, auguri, promozioni esclusive.",
    points: [
      "Follow-up automatici post-visita",
      "Offerte personalizzate per clienti VIP",
      "Programma fedelta automatizzato",
    ],
  },
  {
    icon: DollarSign,
    color: "#7CFF00",
    title: "Piu incasso ogni mese",
    headline: "+2400EUR",
    headlineLabel: "Fatturato aggiuntivo medio",
    description:
      "Sommando prenotazioni recuperate, ordini diretti e clienti fidelizzati, i nostri locali guadagnano in media 2.400 euro in piu al mese.",
    points: [
      "Prenotazioni recuperate valorizzate",
      "Ordini aggiuntivi generati dall'AI",
      "ROI medio: 12x il costo mensile",
    ],
  },
];

const trustStats = [
  { icon: Users, value: "500+", label: "Locali attivi", color: "#7CFF00" },
  { icon: Zap, value: "2M+", label: "Messaggi gestiti", color: "#00BFFF" },
  { icon: TrendingUp, value: "98%", label: "Soddisfazione", color: "#7CFF00" },
  { icon: Calendar, value: "150K+", label: "Prenotazioni/mese", color: "#A78BFA" },
];

type Benefit = (typeof benefits)[0];

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-7 rounded-2xl border bg-white/2 hover:bg-white/4 transition-all duration-300 overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${benefit.color}30`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${benefit.color}08`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 20% 20%, ${benefit.color}06 0%, transparent 60%)` }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ background: `${benefit.color}15`, border: `1px solid ${benefit.color}25` }}
      >
        <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
      </div>
      <div
        className="text-4xl font-black mb-1"
        style={{ color: benefit.color, textShadow: `0 0 20px ${benefit.color}40` }}
      >
        {benefit.headline}
      </div>
      <div className="text-white/30 text-xs mb-4">{benefit.headlineLabel}</div>
      <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-5">{benefit.description}</p>
      <ul className="flex flex-col gap-2">
        {benefit.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-white/60">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${benefit.color}20` }}
            >
              <span className="text-[10px] font-bold" style={{ color: benefit.color }}>&#10003;</span>
            </div>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function BenefitsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-10%" });

  return (
    <section id="benefits" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(124,255,0,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CFF00]/10 border border-[#7CFF00]/20 text-[#7CFF00] text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Risultati Reali
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6"
          >
            <span className="text-white">Numeri che</span>
            <br />
            <span className="text-[#7CFF00]" style={{ textShadow: "0 0 30px rgba(124,255,0,0.4)" }}>
              parlano da soli.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Non promettiamo miracoli. Mostriamo i risultati reali dei locali che usano VetrinaFlash ogni giorno.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/2 border border-white/8 text-center group hover:border-white/15 transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
              <div
                className="text-3xl font-black"
                style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}50` }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/3 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(124,255,0,0.05),transparent)]" />
          <div className="relative">
            <p className="text-white/60 text-lg mb-2">
              Vuoi vedere questi risultati nel tuo locale?
            </p>
            <p className="text-white font-bold text-2xl mb-6">
              Il primo mese è{" "}
              <span className="text-[#7CFF00]">completamente gratuito.</span>
            </p>
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(124,255,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7CFF00] text-black font-bold rounded-full shadow-[0_0_20px_rgba(124,255,0,0.3)] transition-all duration-200"
            >
              <Zap className="w-5 h-5" />
              Inizia Ora — È Gratis
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
