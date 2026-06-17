"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadForm } from "./LeadFormProvider";

function formatEuro(n: number) {
  return new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export default function SavingsCalculator() {
  const { open } = useLeadForm();
  const [orders, setOrders] = useState(15);
  const [ticket, setTicket] = useState(25);
  const [commission, setCommission] = useState(30);

  const yearly = useMemo(() => {
    return orders * ticket * (commission / 100) * 365;
  }, [orders, ticket, commission]);

  const formatted = `€${formatEuro(yearly)}/anno`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 rounded-md border border-[var(--ink-line)] bg-ink-soft px-7 py-8 sm:px-9 sm:py-9 max-w-3xl"
    >
      <p className="font-mono text-xs tracking-widest text-gold uppercase mb-6">
        Calcola quanto stai perdendo
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="flex justify-between text-sm text-ash mb-2">
            <span>Ordini al giorno</span>
            <span className="text-cream font-mono">{orders}</span>
          </label>
          <input
            type="range"
            min={1}
            max={60}
            value={orders}
            onChange={(e) => setOrders(Number(e.target.value))}
            className="w-full accent-ember"
          />
        </div>
        <div>
          <label className="flex justify-between text-sm text-ash mb-2">
            <span>Scontrino medio</span>
            <span className="text-cream font-mono">€{ticket}</span>
          </label>
          <input
            type="range"
            min={5}
            max={80}
            value={ticket}
            onChange={(e) => setTicket(Number(e.target.value))}
            className="w-full accent-ember"
          />
        </div>
        <div>
          <label className="flex justify-between text-sm text-ash mb-2">
            <span>Commissione piattaforma</span>
            <span className="text-cream font-mono">{commission}%</span>
          </label>
          <input
            type="range"
            min={15}
            max={40}
            value={commission}
            onChange={(e) => setCommission(Number(e.target.value))}
            className="w-full accent-ember"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-[var(--ink-line)]">
        <div>
          <p className="font-mono text-[11px] text-ash-dim uppercase">Stai regalando</p>
          <p className="font-display font-black text-ember text-[clamp(2rem,5vw,2.8rem)] leading-none mt-1">
            {formatted}
          </p>
        </div>
        <button
          onClick={() => open({ savings: formatted })}
          className="group inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3.5 font-semibold text-ink hover:bg-gold transition-colors sm:ml-auto shrink-0"
        >
          Richiedi il preventivo
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
