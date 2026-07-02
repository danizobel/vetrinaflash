"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Users,
  FileText,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { waHref } from "@/lib/site";

const solutions = [
  {
    icon: ShoppingBag,
    title: "E-commerce su misura",
    description:
      "Negozio online completo con catalogo, carrello, pagamenti integrati e gestione spedizioni. Progettato sul tuo brand, non un template uguale a mille altri.",
    points: ["Catalogo e varianti prodotto", "Pagamenti Stripe / Nexi / PayPal", "Gestione ordini e spedizioni"],
  },
  {
    icon: Users,
    title: "Gestionali ordini multi-utente",
    description:
      "Sistemi di gestione ordini con accessi separati per dipendenti e amministratori. Ognuno vede solo quello che gli serve, tu hai il controllo totale.",
    points: ["Ruoli dipendente e admin", "Permessi e storico attività", "Dashboard di controllo completa"],
  },
  {
    icon: FileText,
    title: "Sistemi di preventivazione",
    description:
      "Preventivi personalizzati generati in automatico: il cliente configura ciò che vuole, il sistema calcola e ti invia la richiesta già strutturata.",
    points: ["Configuratore personalizzato", "Calcolo automatico dei prezzi", "Richieste ordinate, zero caos"],
  },
  {
    icon: Wrench,
    title: "Soluzioni su misura",
    description:
      "Hai un processo particolare da digitalizzare? Lo analizziamo insieme e costruiamo lo strumento esatto che ti serve. Niente di più, niente di meno.",
    points: ["Analisi del tuo flusso di lavoro", "Sviluppo dedicato", "Tuo per sempre, una tantum"],
  },
];

export default function CustomSolutionsSection() {
  return (
    <section id="soluzioni" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_30%,rgba(124,255,0,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"
          >
            <Sparkles size={12} />
            Oltre la ristorazione
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
          >
            Non solo menu QR.
            <br />
            <span className="gradient-text">Costruiamo quello che ti serve.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            La stessa filosofia — una tantum, zero canoni, tuo per sempre —
            applicata a qualsiasi strumento digitale per la tua attività.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group card-lux rounded-3xl p-8 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#7CFF00]/10 flex items-center justify-center mb-5 group-hover:bg-[#7CFF00]/20 group-hover:scale-110 transition-all duration-300">
                <s.icon size={21} className="text-[#7CFF00]" />
              </div>
              <h3 className="font-display text-white font-bold text-xl mb-3">
                {s.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-white/55 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7CFF00] flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <a
            href={waHref(
              "Ciao! Avrei bisogno di una soluzione su misura per la mia attività. Possiamo parlarne?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-[#7CFF00]/30 bg-[#7CFF00]/5 text-[#7CFF00] font-bold hover:bg-[#7CFF00]/12 transition-all duration-200"
          >
            Raccontaci il tuo progetto
            <ArrowRight
              size={17}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
