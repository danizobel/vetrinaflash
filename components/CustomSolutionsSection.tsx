"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShoppingBag, Users, FileText, Wrench, ArrowRight, Sparkles } from "lucide-react";
import { waHref } from "@/lib/site";
import MagneticButton from "@/components/MagneticButton";

const solutions = [
  { icon: ShoppingBag, title: "E-commerce su misura", description: "Negozio online completo con catalogo, carrello, pagamenti integrati e gestione spedizioni. Progettato sul tuo brand, non un template uguale a mille altri.", points: ["Catalogo e varianti prodotto", "Pagamenti Stripe / Nexi / PayPal", "Gestione ordini e spedizioni"] },
  { icon: Users, title: "Gestionali ordini multi-utente", description: "Sistemi di gestione ordini con accessi separati per dipendenti e amministratori. Ognuno vede solo quello che gli serve, tu hai il controllo totale.", points: ["Ruoli dipendente e admin", "Permessi e storico attività", "Dashboard di controllo completa"] },
  { icon: FileText, title: "Sistemi di preventivazione", description: "Preventivi personalizzati generati in automatico: il cliente configura ciò che vuole, il sistema calcola e ti invia la richiesta già strutturata.", points: ["Configuratore personalizzato", "Calcolo automatico dei prezzi", "Richieste ordinate, zero caos"] },
  { icon: Wrench, title: "Soluzioni su misura", description: "Hai un processo particolare da digitalizzare? Lo analizziamo insieme e costruiamo lo strumento esatto che ti serve. Niente di più, niente di meno.", points: ["Analisi del tuo flusso di lavoro", "Sviluppo dedicato", "Tuo per sempre, una tantum"] },
];

function SolutionCard({ s, index }: { s: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia("(hover: none)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group animated-border card-lux rounded-3xl p-6 sm:p-8 transition-colors duration-300 relative"
    >
      <div style={{ transform: "translateZ(20px)" }} className="icon-glow w-12 h-12 rounded-2xl bg-[#7CFF00]/10 flex items-center justify-center mb-5 group-hover:bg-[#7CFF00]/20 group-hover:scale-110 transition-all duration-300 relative">
        <s.icon size={21} className="text-[#7CFF00] relative z-10" />
      </div>
      <h3 style={{ transform: "translateZ(15px)" }} className="font-display text-white font-bold text-xl mb-3">{s.title}</h3>
      <p style={{ transform: "translateZ(10px)" }} className="text-white/45 text-sm leading-relaxed mb-5">{s.description}</p>
      <ul className="space-y-2">
        {s.points.map((p: string, i: number) => (
          <motion.li
            key={p}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 + i * 0.1, duration: 0.4 }}
            className="flex items-center gap-2.5 text-white/55 text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7CFF00] flex-shrink-0" />
            {p}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function CustomSolutionsSection() {
  return (
    <section id="soluzioni" className="aurora relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_30%,rgba(124,255,0,0.05),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"><Sparkles size={12} />Oltre la ristorazione</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">Non solo menu QR.<br /><span className="gradient-text">Costruiamo quello che ti serve.</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/50 text-lg max-w-2xl mx-auto">La stessa filosofia — una tantum, zero canoni, tuo per sempre — applicata a qualsiasi strumento digitale per la tua attività.</motion.p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mb-12 perspective-[1000px]">
          {solutions.map((s, i) => (
            <SolutionCard key={s.title} s={s} index={i} />
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center flex justify-center">
          <MagneticButton>
            <a href={waHref("Ciao! Avrei bisogno di una soluzione su misura per la mia attività. Possiamo parlarne?")} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-[#7CFF00]/30 bg-[#7CFF00]/5 text-[#7CFF00] font-bold hover:bg-[#7CFF00]/12 transition-all duration-200">
              Raccontaci il tuo progetto<ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
