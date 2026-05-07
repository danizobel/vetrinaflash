"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, ArrowRight, Check, Star } from "lucide-react";

const perks = [
  "Setup completo assistito dal nostro team",
  "Primo mese completamente gratuito",
  "Nessun contratto a lungo termine",
  "Supporto italiano dedicato",
  "Attivo in 48–72 ore",
];

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [formState, setFormState] = useState({ name: "", phone: "", business: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-24 md:py-36 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Radial blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#7CFF00]/5 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00FF88]/5 blur-[80px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,255,0,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Emotional copy */}
          <div>
            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="flex gap-1 mb-6"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
              ))}
              <span className="text-white/40 text-sm ml-2 self-center">
                4.9/5 · 500+ locali attivi
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-white">Trasforma ogni</span>
              <br />
              <span className="text-white">messaggio in</span>
              <br />
              <span
                className="text-[#7CFF00]"
                style={{ textShadow: "0 0 40px rgba(124,255,0,0.5)" }}
              >
                un cliente.
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-xl leading-relaxed mb-8"
            >
              Il tuo locale può lavorare anche quando sei offline.{" "}
              <span className="text-white font-medium">
                L&apos;AI risponde, prenota e vende — 24 ore su 24, 365 giorni l&apos;anno.
              </span>
            </motion.p>

            {/* Urgency strip */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#7CFF00]/8 border border-[#7CFF00]/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#7CFF00] animate-pulse flex-shrink-0" />
              <p className="text-[#7CFF00] font-semibold text-sm">
                🔥 Offerta limitata — Il primo mese è <strong>gratuito</strong>. Nessuna carta
                richiesta.
              </p>
            </motion.div>

            {/* Perks */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              {perks.map((perk, i) => (
                <motion.li
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.06 }}
                  className="flex items-center gap-3 text-white/70"
                >
                  <div className="w-5 h-5 rounded-full bg-[#7CFF00]/20 border border-[#7CFF00]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#7CFF00]" />
                  </div>
                  <span className="text-sm font-medium">{perk}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative p-8 rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/3 backdrop-blur-sm overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,255,0,0.08),transparent)] pointer-events-none rounded-3xl" />

              {!submitted ? (
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-[#7CFF00]" />
                    <span className="text-[#7CFF00] font-bold text-sm uppercase tracking-wide">
                      Demo Gratuita
                    </span>
                  </div>
                  <h3 className="text-white font-black text-2xl mb-1">
                    Inizia in 48 ore.
                  </h3>
                  <p className="text-white/50 text-sm mb-7">
                    Compila il form — ti ricontatteremo entro oggi per configurare il tuo sistema AI.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wider">
                        Il tuo nome
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Es. Marco Esposito"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/12 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#7CFF00]/40 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wider">
                        Numero WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+39 333 000 0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/12 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#7CFF00]/40 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wider">
                        Tipo di locale
                      </label>
                      <select
                        required
                        value={formState.business}
                        onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/12 text-white text-sm focus:outline-none focus:border-[#7CFF00]/40 focus:bg-white/8 transition-all duration-200 appearance-none cursor-pointer"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" disabled className="bg-[#0a0a0f]">Seleziona...</option>
                        <option value="ristorante" className="bg-[#0a0a0f]">🍝 Ristorante</option>
                        <option value="pizzeria" className="bg-[#0a0a0f]">🍕 Pizzeria</option>
                        <option value="sushi" className="bg-[#0a0a0f]">🍣 Sushi Bar</option>
                        <option value="pub" className="bg-[#0a0a0f]">🍺 Pub / Birreria</option>
                        <option value="cocktail" className="bg-[#0a0a0f]">🍹 Cocktail Bar</option>
                        <option value="beach" className="bg-[#0a0a0f]">🏖️ Beach Club</option>
                        <option value="altro" className="bg-[#0a0a0f]">🏪 Altro locale</option>
                      </select>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 0 40px rgba(124,255,0,0.5)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#7CFF00] text-black font-black text-base rounded-xl shadow-[0_0_20px_rgba(124,255,0,0.3)] hover:bg-[#90FF1A] transition-colors duration-200"
                    >
                      <Zap className="w-5 h-5" />
                      Richiedi la Demo Gratuita
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <p className="text-center text-white/25 text-xs">
                      Nessuna carta di credito · Nessun contratto · Disdici quando vuoi
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-[#7CFF00]/20 border border-[#7CFF00]/40 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-[#7CFF00]" />
                  </motion.div>
                  <h3 className="text-white font-black text-2xl mb-3">
                    Perfetto, {formState.name}! 🎉
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-6">
                    Abbiamo ricevuto la tua richiesta. Un membro del nostro team ti contatterà su
                    WhatsApp{" "}
                    <span className="text-[#7CFF00] font-semibold">entro oggi</span> per
                    configurare il tuo sistema AI.
                  </p>
                  <div className="p-4 rounded-xl bg-[#7CFF00]/8 border border-[#7CFF00]/20">
                    <p className="text-[#7CFF00] font-semibold text-sm">
                      ⚡ Il tuo locale sarà attivo in 48–72 ore.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
