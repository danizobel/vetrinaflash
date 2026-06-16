"use client";

import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, BarChart3, Bell, Store, RefreshCw, QrCode } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Ordini diretti, asporto e delivery",
    text: "Il cliente ordina online, l'ordine arriva a te e i soldi arrivano a te. Fine della storia.",
  },
  {
    icon: CreditCard,
    title: "Pagamenti Nexi, SumUp, Stripe",
    text: "Carta, bancomat, Apple Pay, Google Pay. Tutto integrato, zero frizioni per il cliente.",
  },
  {
    icon: BarChart3,
    title: "Dashboard analytics mensili",
    text: "Incassi, ordini, piatti più venduti, fasce orarie. Sai cosa funziona e cosa no.",
  },
  {
    icon: Bell,
    title: "Notifiche push istantanee",
    text: "Ogni ordine arriva con una notifica in tempo reale su tablet, telefono o PC.",
  },
  {
    icon: Store,
    title: "Back office completo",
    text: "Gestisci orari, categorie, varianti, allergeni, promozioni. Pensato per la ristorazione italiana.",
  },
  {
    icon: RefreshCw,
    title: "Menu sempre aggiornabile",
    text: "Cambia un prezzo, aggiungi il piatto del giorno, disattiva un esaurito. In 30 secondi.",
  },
  {
    icon: QrCode,
    title: "QR da tavolo (opzionale)",
    text: "Se vuoi anche l'ordine in sala, attiviamo un QR code dedicato al tavolo, in più rispetto all'asporto e al delivery.",
    optional: true,
  },
];

export default function FeaturesSection() {
  return (
    <section id="funzionalita" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">Tutto incluso</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] text-cream">
            Un sistema. Tutto quello che serve.
          </h2>
          <p className="mt-5 text-ash text-lg">
            Dalla gestione del menu agli analytics avanzati, tutto in un
            unico pannello pensato per chi lavora in cucina.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className={`rounded-md border px-6 py-7 transition-colors ${
                f.optional
                  ? "border-dashed border-[var(--ink-line)] bg-transparent"
                  : "border-[var(--ink-line)] bg-ink-soft hover:border-ember/40"
              }`}
            >
              <f.icon size={22} className={f.optional ? "text-ash-dim" : "text-ember"} />
              <h3 className="font-display font-bold text-lg text-cream mt-4">{f.title}</h3>
              <p className="text-ash text-sm mt-2 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
