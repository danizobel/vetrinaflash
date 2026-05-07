"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, TrendingUp, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marco Esposito",
    role: "Titolare",
    business: "Pizzeria Napoli Vera",
    location: "Napoli",
    avatar: "ME",
    avatarColor: "#7CFF00",
    stars: 5,
    text: "Prima perdevo almeno 15 prenotazioni a settimana perché non riuscivo a rispondere ai messaggi durante il servizio. Con VetrinaFlash l'AI risponde al mio posto — meglio di come avrei fatto io. In un mese ho recuperato quasi €3.000 di fatturato.",
    highlight: "€3.000 recuperati in 30 giorni",
    metrics: [
      { label: "Prenotazioni", before: "12/sett", after: "47/sett" },
      { label: "Risposte perse", before: "15/sett", after: "0/sett" },
    ],
    tag: "Pizzeria",
    featured: true,
  },
  {
    name: "Chiara Romano",
    role: "Proprietaria",
    business: "Sushi Hanami",
    location: "Milano",
    avatar: "CR",
    avatarColor: "#E1306C",
    stars: 5,
    text: "Gestisco un ristorante sushi da sola. I messaggi su Instagram e WhatsApp erano diventati impossibili da gestire. Adesso l'AI risponde a tutto, manda il menu, gestisce le prenotazioni. Ho guadagnato 3 ore al giorno. La mia vita è cambiata.",
    highlight: "+3 ore libere ogni giorno",
    metrics: [
      { label: "Ore risparmiate", before: "0h", after: "3h/gg" },
      { label: "Ordini diretti", before: "5/sett", after: "34/sett" },
    ],
    tag: "Sushi Bar",
    featured: false,
  },
  {
    name: "Luca De Santis",
    role: "Bar Manager",
    business: "Cocktail Bar \"Neon\"",
    location: "Roma",
    avatar: "LD",
    avatarColor: "#A78BFA",
    stars: 5,
    text: "Il sabato sera avevamo decine di DM su Instagram di gente che chiedeva posti e info sugli eventi. Non riuscivamo mai a rispondere. Adesso l'AI gestisce tutto da sola — risponde, informa sugli eventi, raccoglie prenotazioni. Il locale è sempre pieno.",
    highlight: "Locale sempre pieno il weekend",
    metrics: [
      { label: "Prenotazioni sett.", before: "18", after: "67" },
      { label: "DM senza risposta", before: "40+/sett", after: "0" },
    ],
    tag: "Cocktail Bar",
    featured: false,
  },
  {
    name: "Giuseppe Ferrara",
    role: "Proprietario",
    business: "Pub The Irish Corner",
    location: "Torino",
    avatar: "GF",
    avatarColor: "#FF6B35",
    stars: 5,
    text: "Ero scettico sull'AI per il mio pub. Pensavo fosse roba da startup di Silicon Valley, non per me. Mi sbagliavo di grosso. In 2 settimane il sistema era attivo e funzionava perfettamente. I clienti non si accorgono nemmeno che è un'AI.",
    highlight: "Attivo in 2 settimane, risultati immediati",
    metrics: [
      { label: "Setup time", before: "—", after: "2 settimane" },
      { label: "Incasso mensile", before: "baseline", after: "+28%" },
    ],
    tag: "Pub",
    featured: false,
  },
  {
    name: "Sara Conti",
    role: "Direttrice",
    business: "Beach Club Azzurra",
    location: "Rimini",
    avatar: "SC",
    avatarColor: "#00BFFF",
    stars: 5,
    text: "D'estate i messaggi erano una follia. Lettini, menu, orari, eventi — tutto su WhatsApp. Il nostro staff non ce la faceva. VetrinaFlash ha risolto tutto. L'AI gestisce centinaia di messaggi al giorno senza sbagliare mai. Impagabile.",
    highlight: "100+ messaggi/giorno gestiti in automatico",
    metrics: [
      { label: "Msg gestiti/gg", before: "manuale", after: "100+ auto" },
      { label: "Prenotazioni ombrelloni", before: "30/gg", after: "89/gg" },
    ],
    tag: "Beach Club",
    featured: false,
  },
  {
    name: "Antonio Vitale",
    role: "Chef Patron",
    business: "Osteria del Borgo",
    location: "Firenze",
    avatar: "AV",
    avatarColor: "#7CFF00",
    stars: 5,
    text: "Avevo paura che l'AI rispondesse in modo freddo e impersonale. Invece l'hanno configurata con il tono del mio locale — caldo, accogliente, toscano. I clienti pensano di parlare con noi. Solo che lo fa 24 ore su 24.",
    highlight: "Tono personalizzato, risultati autentici",
    metrics: [
      { label: "Soddisfazione clienti", before: "—", after: "4.9/5 ⭐" },
      { label: "Recensioni Google", before: "47", after: "189" },
    ],
    tag: "Osteria",
    featured: false,
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group flex flex-col p-7 rounded-2xl border transition-all duration-300 ${
        t.featured
          ? "border-[#7CFF00]/30 bg-[#7CFF00]/4 col-span-1 md:col-span-2 lg:col-span-1"
          : "border-white/8 bg-white/2 hover:border-white/15 hover:bg-white/4"
      }`}
    >
      {t.featured && (
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(124,255,0,0.06),transparent_65%)] pointer-events-none" />
      )}

      {/* Quote icon */}
      <Quote
        className="w-6 h-6 mb-4 opacity-30 flex-shrink-0"
        style={{ color: t.avatarColor }}
      />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Highlight */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
        style={{ background: `${t.avatarColor}15`, color: t.avatarColor }}
      >
        <TrendingUp className="w-3 h-3" />
        {t.highlight}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {t.metrics.map((metric) => (
          <div
            key={metric.label}
            className="p-3 rounded-xl bg-white/3 border border-white/6"
          >
            <div className="text-white/30 text-xs mb-1">{metric.label}</div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-white/40 line-through">{metric.before}</span>
              <span>→</span>
              <span className="font-bold" style={{ color: t.avatarColor }}>
                {metric.after}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/6">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
          style={{ background: `${t.avatarColor}20`, color: t.avatarColor, border: `1px solid ${t.avatarColor}30` }}
        >
          {t.avatar}
        </div>
        <div className="min-w-0">
          <div className="text-white font-semibold text-sm truncate">{t.name}</div>
          <div className="text-white/40 text-xs truncate">
            {t.role} · {t.business}
          </div>
        </div>
        <div
          className="ml-auto px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
          style={{ background: `${t.avatarColor}12`, color: t.avatarColor }}
        >
          {t.tag}
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-10%" });

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,255,0,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-[#FFD700]" />
            Storie di Successo
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6"
          >
            <span className="text-white">I nostri clienti</span>
            <br />
            <span className="text-[#7CFF00]" style={{ textShadow: "0 0 30px rgba(124,255,0,0.4)" }}>
              non tornerebbero indietro.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Ristoranti, pizzerie, pub e beach club in tutta Italia hanno trasformato il loro locale
            con VetrinaFlash. Queste sono le loro parole.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              { value: "4.9/5", label: "Rating medio", icon: "⭐" },
              { value: "500+", label: "Locali attivi", icon: "🍕" },
              { value: "100%", label: "Configurazione assistita", icon: "⚡" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/4 border border-white/8 text-sm"
              >
                <span>{t.icon}</span>
                <span className="text-[#7CFF00] font-bold">{t.value}</span>
                <span className="text-white/40">{t.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
