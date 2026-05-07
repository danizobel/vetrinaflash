"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar, Clock, ChefHat, Check } from "lucide-react";

type MessageType = "customer" | "ai" | "system";

interface Message {
  id: number;
  type: MessageType;
  text: string;
  time: string;
  delay: number;
}

const scenarios = [
  {
    label: "Prenotazione",
    icon: Calendar,
    color: "#7CFF00",
    messages: [
      {
        id: 1,
        type: "customer" as MessageType,
        text: "Ciao! Avete un tavolo per stasera? Siamo in 5 persone 🍕",
        time: "19:42",
        delay: 0,
      },
      {
        id: 2,
        type: "ai" as MessageType,
        text: "Ciao! 😊 Ho controllato subito per te: stasera abbiamo disponibilità alle **20:00** e alle **21:30**. Quale orario preferite?",
        time: "19:42",
        delay: 1200,
      },
      {
        id: 3,
        type: "customer" as MessageType,
        text: "Le 20:30 è possibile? 😊",
        time: "19:43",
        delay: 2800,
      },
      {
        id: 4,
        type: "ai" as MessageType,
        text: "Perfetto! Ho trovato un tavolo per 5 alle **20:30** ✅\n\nNome per la prenotazione?",
        time: "19:43",
        delay: 4000,
      },
      {
        id: 5,
        type: "customer" as MessageType,
        text: "Marco Ferretti",
        time: "19:44",
        delay: 5400,
      },
      {
        id: 6,
        type: "system" as MessageType,
        text: "✅ Prenotazione Confermata\n📅 Stasera, 20:30 · 👥 5 persone · 📍 Nome: Marco Ferretti\n\nRiceverai un reminder 1 ora prima. A stasera! 🍕",
        time: "19:44",
        delay: 6500,
      },
    ],
  },
  {
    label: "Menu & Orari",
    icon: ChefHat,
    color: "#00BFFF",
    messages: [
      {
        id: 1,
        type: "customer" as MessageType,
        text: "Ciao, potete mandarmi il menu? E fino a che ora siete aperti?",
        time: "12:15",
        delay: 0,
      },
      {
        id: 2,
        type: "ai" as MessageType,
        text: "Certo! 🍽️ Ecco il nostro menu aggiornato:\n\n👉 [Visualizza Menu Completo]\n\nSiamo aperti:\n• Pranzo: 12:00 – 15:00\n• Cena: 19:00 – 23:30\n\nVuoi prenotare un tavolo? 😊",
        time: "12:15",
        delay: 900,
      },
      {
        id: 3,
        type: "customer" as MessageType,
        text: "Sì! Per domenica a pranzo, 2 persone",
        time: "12:16",
        delay: 2500,
      },
      {
        id: 4,
        type: "ai" as MessageType,
        text: "Domenica a pranzo per 2! Ho verificato la disponibilità… ✨\n\nHo un tavolo disponibile alle **12:30** o alle **13:00**. Quale preferisci?",
        time: "12:16",
        delay: 3600,
      },
    ],
  },
  {
    label: "Ordine Diretto",
    icon: Clock,
    color: "#FF6B35",
    messages: [
      {
        id: 1,
        type: "customer" as MessageType,
        text: "Voglio ordinare una pizza margherita e una marinara da asporto. Possibile per le 20:00?",
        time: "18:52",
        delay: 0,
      },
      {
        id: 2,
        type: "ai" as MessageType,
        text: "Ottima scelta! 🍕\n\n📋 **Il tuo ordine:**\n• 1x Pizza Margherita — €8,50\n• 1x Pizza Marinara — €7,50\n\n**Totale: €16,00** · Ritiro ore 20:00\n\nConfermi? 🙌",
        time: "18:52",
        delay: 1000,
      },
      {
        id: 3,
        type: "customer" as MessageType,
        text: "Sì confermo! Come pago?",
        time: "18:53",
        delay: 2600,
      },
      {
        id: 4,
        type: "ai" as MessageType,
        text: "Perfetto! 🎉 Puoi pagare:\n• 💳 Carta al ritiro\n• 💵 Contanti\n• 📱 Satispay\n\nOrdine inviato in cucina! Ti aspettiamo alle **20:00** 🍕",
        time: "18:53",
        delay: 3700,
      },
      {
        id: 5,
        type: "system" as MessageType,
        text: "✅ Ordine #0847 confermato\nPronti alle 20:00 · Nessuna commissione pagata",
        time: "18:53",
        delay: 4800,
      },
    ],
  },
];

function ChatBubble({ message, visible }: { message: Message; visible: boolean }) {
  const isCustomer = message.type === "customer";
  const isSystem = message.type === "system";

  const formatText = (text: string) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className="font-bold text-white">
              {part}
            </strong>
          ) : (
            part
          )
        )}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  if (!visible) return null;

  if (isSystem) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="mx-2 my-1"
      >
        <div className="bg-[#7CFF00]/10 border border-[#7CFF00]/30 rounded-2xl px-4 py-3 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Check className="w-4 h-4 text-[#7CFF00]" />
            <span className="text-[#7CFF00] font-bold text-sm">Sistema Confermato</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed whitespace-pre-line">
            {message.text}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: isCustomer ? 20 : -20, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`flex ${isCustomer ? "justify-end" : "justify-start"} mx-2 my-1.5`}
    >
      {!isCustomer && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7CFF00]/30 to-[#00FF88]/20 border border-[#7CFF00]/30 flex items-center justify-center mr-2 flex-shrink-0 mt-auto mb-1">
          <span className="text-[#7CFF00] font-black text-xs">AI</span>
        </div>
      )}
      <div className={`max-w-[75%]`}>
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
            isCustomer
              ? "bg-[#005C4B] text-white rounded-tr-sm"
              : "bg-[#1a1a2e] border border-[#7CFF00]/15 text-white/90 rounded-tl-sm"
          }`}
        >
          {formatText(message.text)}
        </div>
        <div className={`flex items-center gap-1 mt-1 ${isCustomer ? "justify-end" : ""}`}>
          <span className="text-white/25 text-[10px]">{message.time}</span>
          {isCustomer && (
            <span className="text-[#00BFFF] text-[10px]">✓✓</span>
          )}
          {!isCustomer && (
            <span className="text-[#7CFF00] text-[10px]">⚡ AI</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ChatDemoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-20%" });
  const [activeScenario, setActiveScenario] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Set<number>>(new Set());
  const [showTyping, setShowTyping] = useState(false);
  const [started, setStarted] = useState(false);

  const scenario = scenarios[activeScenario];

  // Auto-run animation when section comes into view
  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
    }
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;
    setVisibleMessages(new Set());
    setShowTyping(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    scenario.messages.forEach((msg, i) => {
      const isAI = msg.type === "ai";
      if (isAI && i > 0) {
        const typingTimer = setTimeout(() => setShowTyping(true), msg.delay - 700);
        timers.push(typingTimer);
      }
      const showTimer = setTimeout(() => {
        setShowTyping(false);
        setVisibleMessages((prev) => new Set([...prev, msg.id]));
      }, msg.delay);
      timers.push(showTimer);
    });

    return () => timers.forEach(clearTimeout);
  }, [activeScenario, started, scenario.messages]);

  const handleScenarioChange = (idx: number) => {
    setActiveScenario(idx);
    setStarted(true);
  };

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(124,255,0,0.05),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,255,0,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CFF00]/10 border border-[#7CFF00]/20 text-[#7CFF00] text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#7CFF00] animate-pulse" />
              Demo Live
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6"
            >
              <span className="text-white">Il tuo AI risponde</span>
              <br />
              <span
                className="text-[#7CFF00]"
                style={{ textShadow: "0 0 30px rgba(124,255,0,0.5)" }}
              >
                in 3 secondi.
              </span>
              <br />
              <span className="text-white">Sempre.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/55 text-lg leading-relaxed mb-8"
            >
              Mentre sei in cucina, al bancone o semplicemente a dormire — il tuo assistente AI
              risponde ai clienti, gestisce le prenotazioni e chiude ordini.{" "}
              <span className="text-white font-medium">Senza che tu faccia nulla.</span>
            </motion.p>

            {/* Scenario selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 mb-8"
            >
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">
                Scegli uno scenario:
              </p>
              {scenarios.map((s, i) => (
                <motion.button
                  key={s.label}
                  onClick={() => handleScenarioChange(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border text-left transition-all duration-200 ${
                    activeScenario === i
                      ? "border-[#7CFF00]/40 bg-[#7CFF00]/8 text-white"
                      : "border-white/8 bg-white/2 text-white/50 hover:border-white/15 hover:text-white/70"
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: activeScenario === i ? `${s.color}20` : "rgba(255,255,255,0.05)",
                      border: `1px solid ${activeScenario === i ? s.color + "40" : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    <s.icon
                      className="w-4 h-4"
                      style={{ color: activeScenario === i ? s.color : "rgba(255,255,255,0.4)" }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{s.label}</div>
                    <div className="text-xs text-white/30 mt-0.5">
                      {i === 0 && "Prenotazione tavolo in tempo reale"}
                      {i === 1 && "Menu e orari inviati in automatico"}
                      {i === 2 && "Ordine asporto senza commissioni"}
                    </div>
                  </div>
                  {activeScenario === i && (
                    <div
                      className="ml-auto w-2 h-2 rounded-full animate-pulse"
                      style={{ background: s.color }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8"
            >
              <div className="text-3xl font-black text-[#7CFF00]">97%</div>
              <div>
                <div className="text-white font-semibold text-sm">Soddisfazione clienti</div>
                <div className="text-white/40 text-xs mt-0.5">
                  dei clienti preferisce la risposta AI a nessuna risposta
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[44px] blur-[50px] scale-110 opacity-30"
                style={{ background: `radial-gradient(circle, ${scenario.color}40, transparent 70%)` }}
              />

              {/* Phone */}
              <div className="relative w-[300px] sm:w-[340px] h-[620px] sm:h-[680px] bg-gradient-to-b from-[#0d0d18] to-[#080812] rounded-[44px] border border-white/12 shadow-2xl overflow-hidden">
                {/* Top notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                  <div className="w-4 h-4 rounded-full bg-[#1a1a1a]" />
                </div>

                {/* Status bar */}
                <div className="absolute top-3.5 left-6 right-6 flex justify-between text-[10px] text-white/30 z-10">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>

                {/* WhatsApp-like header */}
                <div className="mt-11 px-4 py-3 border-b border-white/6 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border flex-shrink-0"
                    style={{
                      background: `${scenario.color}20`,
                      borderColor: `${scenario.color}40`,
                    }}
                  >
                    <span className="font-black text-xs" style={{ color: scenario.color }}>
                      AI
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm truncate">
                      {activeScenario === 0 && "Pizzeria Da Mario 🍕"}
                      {activeScenario === 1 && "Ristorante Il Borgo 🍝"}
                      {activeScenario === 2 && "Pizzeria Express 🍕"}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: scenario.color }}
                      />
                      <span className="text-xs" style={{ color: scenario.color }}>
                        AI Online · risponde in &lt; 3s
                      </span>
                    </div>
                  </div>
                </div>

                {/* Messages area */}
                <div className="h-[calc(100%-11rem)] overflow-y-auto py-3 flex flex-col justify-end">
                  <AnimatePresence>
                    {scenario.messages.map((msg) => (
                      <ChatBubble
                        key={`${activeScenario}-${msg.id}`}
                        message={msg}
                        visible={visibleMessages.has(msg.id)}
                      />
                    ))}
                  </AnimatePresence>

                  {/* Typing indicator */}
                  <AnimatePresence>
                    {showTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="flex items-center gap-2 mx-4 my-1"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#7CFF00]/20 border border-[#7CFF00]/30 flex items-center justify-center">
                          <span className="text-[#7CFF00] font-black text-xs">AI</span>
                        </div>
                        <div className="bg-[#1a1a2e] border border-[#7CFF00]/15 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: scenario.color }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Input bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-3 border border-white/10">
                    <span className="text-white/20 text-xs flex-1">Scrivi un messaggio…</span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: scenario.color }}
                    >
                      <span className="text-black text-xs font-bold">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge: response time */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 glass rounded-xl px-4 py-3 border border-[#7CFF00]/25 shadow-lg"
              >
                <div className="text-[#7CFF00] font-black text-xl">2.3s</div>
                <div className="text-white/50 text-xs">Risposta media</div>
              </motion.div>

              {/* Floating badge: 24/7 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -left-8 bottom-1/4 glass rounded-xl px-4 py-3 border border-white/10 shadow-lg"
              >
                <div className="text-white font-black text-base">24/7</div>
                <div className="text-white/40 text-xs">Sempre attivo</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
