"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SavingsCalculator from "./SavingsCalculator";

const compareRows = [
  { label: "Commissione per ordine", justeat: "~30%", glovo: "~35%", deliveroo: "~32%", vf: "0%" },
  { label: "Costo mensile (15 ordini/g)", justeat: "~€337", glovo: "~€394", deliveroo: "~€360", vf: "Una tantum" },
  { label: "Dati del cliente tuoi", justeat: false, glovo: false, deliveroo: false, vf: true },
  { label: "Pagamenti diretti integrati", justeat: false, glovo: false, deliveroo: false, vf: true },
  { label: "Nessun canone mensile", justeat: false, glovo: false, deliveroo: false, vf: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={16} className="text-gold mx-auto" />
    ) : (
      <X size={16} className="text-ash-dim mx-auto" />
    );
  }
  return <span>{value}</span>;
}

export default function ProblemSection() {
  return (
    <section id="problema" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs tracking-widest text-rust uppercase mb-4">
            Il problema vero
          </p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] text-cream">
            Stesso ordine.
            <br />
            Incasso diverso.
          </h2>
          <p className="mt-5 text-ash text-lg">
            Per ogni ordine che arriva da una piattaforma esterna, cedi fino a
            un terzo dell&apos;incasso. Non è una commissione: è un affitto
            che non finisce mai.
          </p>
        </motion.div>

        {/* Receipt comparison */}
        <div className="mt-16 grid sm:grid-cols-2 gap-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="ticket px-6 pt-6 pb-9 font-mono text-[13px]"
          >
            <p className="font-bold tracking-widest text-[11px] mb-3">PIATTAFORMA DELIVERY</p>
            <div className="ticket-line py-1.5 flex justify-between">
              <span>Ordine</span><span>€30,00</span>
            </div>
            <div className="ticket-line py-1.5 flex justify-between text-rust">
              <span>Commissione (35%)</span><span>-€10,50</span>
            </div>
            <div className="mt-3 pt-3 border-t-2 border-dashed border-[#2a2118]/30 flex justify-between font-bold text-base">
              <span>Incassi tu</span><span>€19,50</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="ticket px-6 pt-6 pb-9 font-mono text-[13px]"
          >
            <p className="font-bold tracking-widest text-[11px] mb-3">VETRINAFLASH</p>
            <div className="ticket-line py-1.5 flex justify-between">
              <span>Ordine</span><span>€30,00</span>
            </div>
            <div className="ticket-line py-1.5 flex justify-between text-[#5c5040]">
              <span>Commissione</span><span>€0,00</span>
            </div>
            <div className="mt-3 pt-3 border-t-2 border-dashed border-[#2a2118]/30 flex justify-between font-bold text-base text-ember">
              <span>Incassi tu</span><span>€30,00</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive savings calculator */}
        <SavingsCalculator />

        {/* Comparison table */}
        <motion.div
          id="confronto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-x-auto"
        >
          <table className="w-full min-w-[560px] text-sm border-collapse">
            <thead>
              <tr className="font-mono text-xs uppercase tracking-wide text-ash-dim border-b border-[var(--ink-line)]">
                <th className="text-left py-3 pr-4 font-normal">Caratteristica</th>
                <th className="py-3 px-3 font-normal">JustEat</th>
                <th className="py-3 px-3 font-normal">Glovo</th>
                <th className="py-3 px-3 font-normal">Deliveroo</th>
                <th className="py-3 px-3 font-normal text-gold">VetrinaFlash</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.label} className="border-b border-[var(--ink-line)] text-center">
                  <td className="text-left py-3.5 pr-4 text-cream">{row.label}</td>
                  <td className="py-3.5 px-3 text-ash"><Cell value={row.justeat} /></td>
                  <td className="py-3.5 px-3 text-ash"><Cell value={row.glovo} /></td>
                  <td className="py-3.5 px-3 text-ash"><Cell value={row.deliveroo} /></td>
                  <td className="py-3.5 px-3 text-gold font-semibold"><Cell value={row.vf} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
