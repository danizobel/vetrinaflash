"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

type Cell = string | boolean;

const rows: { label: string; justeat: Cell; glovo: Cell; deliveroo: Cell; vf: Cell }[] = [
  { label: "Commissione per ordine", justeat: "~30%", glovo: "~35%", deliveroo: "~32%", vf: "0%" },
  { label: "Costo mensile stimato (15 ord/g)", justeat: "~€337", glovo: "~€394", deliveroo: "~€360", vf: "Una tantum" },
  { label: "Dati del cliente tuoi", justeat: false, glovo: false, deliveroo: false, vf: true },
  { label: "Ordini diretti senza app", justeat: false, glovo: false, deliveroo: false, vf: true },
  { label: "Pagamenti diretti integrati", justeat: false, glovo: false, deliveroo: false, vf: true },
  { label: "Supporto in italiano", justeat: false, glovo: false, deliveroo: false, vf: true },
  { label: "Dashboard analytics", justeat: "Limitata", glovo: "Limitata", deliveroo: "Limitata", vf: "Completa" },
  { label: "Nessun canone mensile", justeat: false, glovo: false, deliveroo: false, vf: true },
];

function CellValue({ value, highlight, delay = 0 }: { value: Cell; highlight?: boolean; delay?: number }) {
  if (typeof value === "boolean") {
    return value ? (
      <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.6, delay: delay }} viewport={{ once: true }} className="inline-flex w-6 h-6 rounded-full bg-[#7CFF00]/15 items-center justify-center">
        <Check size={13} className="text-[#7CFF00]" strokeWidth={3} />
      </motion.span>
    ) : (
      <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.6, delay: delay }} viewport={{ once: true }} className="inline-flex w-6 h-6 rounded-full bg-red-500/10 items-center justify-center">
        <X size={13} className="text-red-400/70" strokeWidth={3} />
      </motion.span>
    );
  }
  return <span className={highlight ? "text-[#7CFF00] font-bold" : "text-white/50"}>{value}</span>;
}

export default function ComparisonSection() {
  return (
    <section id="confronto" className="relative py-24 md:py-32 overflow-hidden aurora">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">Confronto diretto</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">Metti i numeri in fila.<br /><span className="gradient-text">Poi decidi.</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/50 text-lg">Nessun paragone creativo. Questi sono i dati reali delle piattaforme. Tu scegli.</motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="card-lux rounded-3xl overflow-hidden glow-pulse">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[620px]">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left px-4 sm:px-6 py-5 text-white/35 text-xs uppercase tracking-[0.15em] font-semibold sticky left-0 z-10 bg-[#0a0c08] sm:static sm:bg-transparent max-w-[170px] sm:max-w-none">Caratteristica</th>
                  {["JustEat", "Glovo", "Deliveroo"].map((n, idx) => (
                    <th key={n} className="px-4 py-5 text-white/40 font-semibold text-center">
                      <span className="relative inline-block">
                        {n}
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                          className="absolute left-0 top-1/2 h-[1px] bg-red-400/50 -translate-y-1/2"
                        />
                      </span>
                    </th>
                  ))}
                  <th className="px-4 py-5 text-center relative"><div className="absolute inset-0 bg-[#7CFF00]/[0.15] border-x border-t border-[#7CFF00]/30 glow-pulse" /><span className="relative font-display font-bold text-[#7CFF00]">VetrinaFlash</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr 
                    key={row.label} 
                    initial={{ opacity: 0, x: -14, backgroundPosition: "200% 0" }} 
                    whileInView={{ opacity: 1, x: 0, backgroundPosition: "-100% 0" }} 
                    viewport={{ once: true, margin: "-5%" }} 
                    transition={{ delay: i * 0.05, duration: 0.7 }} 
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors bg-[length:200%_100%] bg-gradient-to-r from-transparent via-[#7CFF00]/5 to-transparent"
                  >
                    <td className="px-4 sm:px-6 py-4 text-white/70 font-medium sticky left-0 z-10 bg-[#0a0c08] sm:static sm:bg-transparent max-w-[170px] sm:max-w-none">{row.label}</td>
                    <td className="px-4 py-4 text-center"><CellValue value={row.justeat} delay={i * 0.05 + 0.2} /></td>
                    <td className="px-4 py-4 text-center"><CellValue value={row.glovo} delay={i * 0.05 + 0.3} /></td>
                    <td className="px-4 py-4 text-center"><CellValue value={row.deliveroo} delay={i * 0.05 + 0.4} /></td>
                    <td className="px-4 py-4 text-center relative"><div className={`absolute inset-0 bg-[#7CFF00]/[0.15] border-x border-[#7CFF00]/30 glow-pulse ${i === rows.length - 1 ? "border-b rounded-b" : ""}`} /><span className="relative"><CellValue value={row.vf} highlight delay={i * 0.05 + 0.5} /></span></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <p className="sm:hidden text-center text-white/30 text-xs mt-4">Scorri la tabella verso sinistra per vedere VetrinaFlash →</p>
      </div>
    </section>
  );
}
