"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Clock } from "lucide-react";
import { useLeadForm } from "./LeadFormProvider";

const included = [
  "Setup personalizzato sul tuo locale",
  "Ordini illimitati per asporto e delivery",
  "Integrazione pagamenti (Nexi, SumUp, Stripe…)",
  "Dashboard analytics inclusa",
  "Notifiche ordine in tempo reale",
  "Supporto in italiano dedicato",
  "Aggiornamenti e modifiche inclusi",
];

const addons = [
  "Dominio e branding personalizzato",
  "Integrazione con cassa/POS",
  "Gestione multi-sede",
  "Menu multilingua",
  "QR da tavolo dedicato",
  "Servizio fotografico prodotti",
];

export default function PricingSection() {
  const { open } = useLeadForm();
  return (
    <section id="preventivo" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">Investimento intelligente</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] text-cream">
            Una tantum.
            <br />
            Adattato a te.
          </h2>
          <p className="mt-5 text-ash text-lg">
            Nessun canone mensile che pesa sul bilancio ogni 30 giorni. Paghi
            una volta, il sistema è tuo. Il prezzo finale dipende dal tuo
            locale: te lo diciamo nel preventivo, senza sorprese.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-md border border-ember/30 bg-ink-soft p-8 sm:p-10"
          >
            <p className="font-mono text-xs tracking-widest text-ember uppercase mb-5">
              Sempre incluso
            </p>
            <ul className="space-y-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-cream">
                  <Check size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-md border border-dashed border-[var(--ink-line)] p-8 sm:p-10"
          >
            <p className="font-mono text-xs tracking-widest text-ash-dim uppercase mb-5">
              Extra disponibili su richiesta
            </p>
            <div className="flex flex-wrap gap-2.5">
              {addons.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-[var(--ink-line)] px-3.5 py-2 text-sm text-ash"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-ash-dim text-sm mt-6 leading-relaxed">
              Parliamone nel preventivo: aggiungiamo solo quello che serve al
              tuo locale.
            </p>
          </motion.div>
        </div>

        {/* Capacity note — honest, real constraint of a hands-on setup */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 inline-flex items-center gap-2.5 rounded-sm border border-gold/25 bg-gold/10 px-4 py-2.5 font-mono text-xs text-gold"
        >
          <Clock size={14} />
          Setup curato a mano: accettiamo un numero limitato di nuovi locali ogni mese
        </motion.div>

        {/* CTA — price lives here, under the quote request */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
        >
          <button
            onClick={() => open()}
            className="group inline-flex items-center gap-2 rounded-sm bg-ember px-7 py-4 font-semibold text-ink hover:bg-gold transition-colors shrink-0"
          >
            Richiedi il tuo preventivo
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <p className="font-mono text-xs text-ash-dim">
            Risposta entro poche ore · Preventivo gratuito e senza impegno · 350 538 3769
          </p>
        </motion.div>
      </div>
    </section>
  );
}
