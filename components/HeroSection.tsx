"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play, MessageCircle, AtSign, Calendar, TrendingUp } from "lucide-react";

const floatingStats = [
  { icon: TrendingUp, label: "+Prenotazioni", value: "+340%", color: "#7CFF00" },
  { icon: MessageCircle, label: "Risposta Auto", value: "< 3s", color: "#00FF88" },
  { icon: Calendar, label: "Attivo 24/7", value: "365gg", color: "#7CFF00" },
];

const badges = [
  { icon: MessageCircle, label: "WhatsApp AI", color: "#25D366" },
  { icon: AtSign, label: "Instagram DM", color: "#E1306C" },
  { icon: Calendar, label: "Prenotazioni", color: "#7CFF00" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,255,0,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial gradient center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,255,0,0.12),transparent)]" />

        {/* Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7CFF00]/5 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00FF88]/5 blur-[100px]"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CFF00]/10 border border-[#7CFF00]/20 text-[#7CFF00] text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#7CFF00] animate-pulse" />
              AI Automation per Locali e Ristoranti
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-white">I tuoi clienti</span>
              <br />
              <span className="text-white">ti scrivono.</span>
              <br />
              <span className="text-[#7CFF00]" style={{ textShadow: "0 0 30px rgba(124,255,0,0.4)" }}>
                Ma tu rispondi
              </span>
              <br />
              <span className="text-white">troppo tardi.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Automatizza{" "}
              <span className="text-white font-medium">WhatsApp</span>,{" "}
              <span className="text-white font-medium">Instagram</span> e{" "}
              <span className="text-white font-medium">prenotazioni</span> del tuo locale con
              l&apos;AI.{" "}
              <span className="text-[#7CFF00]">Più clienti. Meno stress.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(124,255,0,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#7CFF00] text-black font-bold text-base rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(124,255,0,0.3)]"
              >
                Richiedi Demo Gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#demo"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-medium text-base transition-all duration-200 bg-white/3 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#7CFF00]/20 transition-colors">
                  <Play className="w-3 h-3 ml-0.5" />
                </div>
                Guarda Come Funziona
              </motion.a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                >
                  <badge.icon className="w-3.5 h-3.5" style={{ color: badge.color }} />
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Floating Stats */}
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 200 }}
                style={{
                  position: "absolute",
                  top: i === 0 ? "5%" : i === 1 ? "50%" : "80%",
                  left: i === 0 ? "-5%" : i === 1 ? "-15%" : "5%",
                  zIndex: 20,
                }}
                className="glass rounded-xl px-4 py-3 border border-white/10 shadow-xl"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                    <span className="text-white/60 text-xs">{stat.label}</span>
                  </div>
                  <div
                    className="text-xl font-black mt-0.5"
                    style={{ color: stat.color, textShadow: `0 0 10px ${stat.color}60` }}
                  >
                    {stat.value}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Phone glow */}
                <div className="absolute inset-0 rounded-[40px] bg-[#7CFF00]/10 blur-[40px] scale-110" />

                {/* Phone shell */}
                <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gradient-to-b from-[#111118] to-[#0a0a10] rounded-[40px] border border-white/15 shadow-2xl overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

                  {/* WhatsApp UI */}
                  <div className="pt-12 h-full flex flex-col">
                    {/* Chat header */}
                    <div className="px-4 pb-3 border-b border-white/5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7CFF00]/30 to-[#00FF88]/20 flex items-center justify-center border border-[#7CFF00]/30">
                        <span className="text-[#7CFF00] font-bold text-sm">AI</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Pizzeria Da Mario</div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#7CFF00]" />
                          <span className="text-[#7CFF00] text-xs">AI Online</span>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-hidden">
                      {/* Customer message */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                        className="self-end max-w-[75%]"
                      >
                        <div className="bg-[#005C4B] text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm">
                          Ciao, avete un tavolo libero per stasera? Siamo in 4 🍕
                        </div>
                        <div className="text-right text-white/30 text-xs mt-1">18:34 ✓✓</div>
                      </motion.div>

                      {/* Typing indicator */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ delay: 1.4, duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
                        className="self-start"
                      >
                        <div className="bg-white/8 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                              className="w-2 h-2 rounded-full bg-[#7CFF00]/60"
                            />
                          ))}
                        </div>
                      </motion.div>

                      {/* AI response */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.9 }}
                        className="self-start max-w-[80%]"
                      >
                        <div className="bg-white/8 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm border border-[#7CFF00]/10">
                          Certo! 😊 Ho controllato per stasera: abbiamo disponibilità alle{" "}
                          <span className="text-[#7CFF00] font-semibold">20:00</span> e{" "}
                          <span className="text-[#7CFF00] font-semibold">21:30</span>. Quale preferite?
                        </div>
                        <div className="text-white/30 text-xs mt-1">18:34 AI ⚡</div>
                      </motion.div>

                      {/* Customer reply */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.6 }}
                        className="self-end max-w-[75%]"
                      >
                        <div className="bg-[#005C4B] text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm">
                          Perfetto! Le 20:00 va benissimo 👌
                        </div>
                        <div className="text-right text-white/30 text-xs mt-1">18:35 ✓✓</div>
                      </motion.div>

                      {/* Booking confirmed */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3.1, type: "spring" }}
                        className="self-start max-w-[85%]"
                      >
                        <div className="bg-[#7CFF00]/10 border border-[#7CFF00]/30 text-white text-sm px-4 py-3 rounded-2xl rounded-tl-sm">
                          <div className="flex items-center gap-2 text-[#7CFF00] font-bold mb-1">
                            <Calendar className="w-4 h-4" />
                            Prenotazione Confermata! ✅
                          </div>
                          <div className="text-white/70 text-xs">
                            📅 Oggi, 20:00 · 👥 4 persone · 📍 Pizzeria Da Mario
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Input bar */}
                    <div className="px-4 pb-4">
                      <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2.5 border border-white/10">
                        <span className="text-white/20 text-sm flex-1">Scrivi un messaggio...</span>
                        <div className="w-7 h-7 rounded-full bg-[#7CFF00] flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Locali Attivi" },
            { value: "2M+", label: "Messaggi Gestiti" },
            { value: "98%", label: "Soddisfazione" },
            { value: "< 3s", label: "Tempo di Risposta" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-3xl md:text-4xl font-black text-[#7CFF00]"
                style={{ textShadow: "0 0 20px rgba(124,255,0,0.4)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#7CFF00]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
