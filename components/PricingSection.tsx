"use client";

import { motion } from "framer-motion";
import { Check, Star, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, WA_QUOTE } from "@/lib/site";

const included = [
  "Setup personalizzato sul tuo locale",
  "Menu digitale QR illimitato",
  "Integrazione pagamenti (Nexi, SumUp, Stripe…)",
  "Dashboard analytics inclusa",
  "Notifiche ordine in tempo reale",
  "Supporto in italiano dedicato",
  "Aggiornamenti e modifiche inclusi",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="aurora relative py-24 md:py-32 overflow-hidden">
      <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-[#7CFF00]/[0.05] blur-[120px] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 44, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="glow-pulse relative card-lux rounded-[2rem] p-8 sm:p-12 overflow-hidden" style={{ boxShadow: "0 0 60px rgba(124,255,0,0.08)" }}>
          {/* Animated top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/5 overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }} 
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#7CFF00]/80 to-transparent" 
            />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-7">
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={12} className="fill-current" />
            </motion.div>
            Investimento intelligente
          </div>
          
          <h2 className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
            <span className="neon-text relative inline-block">
              Una tantum.
              <motion.span 
                animate={{ opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 2, repeat: Infinity }} 
                className="absolute inset-0 blur-[20px] bg-[#7CFF00]/20 -z-10 rounded-full"
              />
            </span>
            <br />
            <span className="gradient-text">Adattato a te.</span>
          </h2>
          
          <p className="text-white/50 text-lg leading-relaxed mb-9 max-w-xl">Nessun canone mensile che pesa sul bilancio ogni 30 giorni. Paghi una volta, il sistema è <span className="text-white font-semibold">tuo</span>. Adattiamo ogni soluzione alle esigenze specifiche del tuo locale.</p>
          
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10">
            {included.map((item, i) => (
              <motion.li key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.06 }} className="flex items-start gap-3">
                <motion.span 
                  initial={{ scale: 0 }} 
                  whileInView={{ scale: 1 }} 
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.06, type: "spring", stiffness: 300, damping: 15 }}
                  className="mt-0.5 w-5 h-5 rounded-full bg-[#7CFF00]/15 border border-[#7CFF00]/30 flex items-center justify-center flex-shrink-0"
                >
                  <Check size={11} className="text-[#7CFF00]" strokeWidth={3} />
                </motion.span>
                <span className="text-white/65 text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.a 
            href={WA_QUOTE} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            className="shimmer flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl bg-[#7CFF00] text-black font-bold text-base sm:text-lg overflow-hidden relative" 
            style={{ boxShadow: "0 0 36px rgba(124,255,0,0.4)" }}
          >
            <MessageCircle size={19} className="relative z-10" />
            <span className="relative z-10">Richiedi il tuo preventivo su WhatsApp</span>
          </motion.a>
          
          <p className="text-white/25 text-xs text-center mt-4">Risposta entro poche ore · Preventivo gratuito e senza impegno · {PHONE_DISPLAY}</p>
        </motion.div>
      </div>
    </section>
  );
}
