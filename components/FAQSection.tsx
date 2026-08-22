"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, WA_DEFAULT } from "@/lib/site";

const faqs = [
  { q: "Cosa significa \"pagamento una tantum\"?", a: "Significa che paghi una volta sola, senza canoni mensili ricorrenti. Il sistema viene sviluppato e configurato sulle tue esigenze, e poi è tuo. Adattiamo il preventivo in base alla complessità del tuo menu e alle funzionalità che desideri." },
  { q: "Devo installare qualcosa sul mio PC o tablet?", a: "No. VetrinaFlash funziona completamente via browser. Apri il link, accedi con le tue credenziali, sei operativo. Funziona su qualsiasi dispositivo — tablet Android, iPad, PC Windows o Mac." },
  { q: "I miei clienti devono scaricare un'app per ordinare?", a: "Assolutamente no. Il cliente scansiona il QR code con la fotocamera del telefono, vede il menu, sceglie i prodotti, paga. È la stessa semplicità di aprire un link. Nessuna app, nessuna registrazione." },
  { q: "Come funzionano i pagamenti? I soldi dove vanno?", a: "I pagamenti avvengono tramite il tuo account Nexi, SumUp o Stripe. I soldi vanno direttamente sul tuo conto bancario — VetrinaFlash non tocca mai il denaro dei tuoi clienti. Zero commissioni sulle transazioni, solo il tuo gateway di pagamento." },
  { q: "Quanto tempo ci vuole per il setup?", a: "Solitamente tra i 15 minuti e qualche ora, dipende dalla complessità del menu. Ci occupiamo noi della configurazione iniziale e ti consegniamo il sistema già pronto. Tu devi solo cominciare a usarlo." },
  { q: "Posso continuare a usare JustEat o Glovo in parallelo?", a: "Sì. Nessuno ti obbliga a chiudere gli account sulle piattaforme esterne. Molti nostri clienti usano VetrinaFlash in parallelo e, man mano che gli ordini diretti crescono, decidono autonomamente di ridurre la dipendenza dalle piattaforme." },
  { q: "Fate anche altro oltre ai menu QR per ristoranti?", a: "Sì. Realizziamo e-commerce su misura, gestionali per ordini con accessi separati per dipendenti e amministratori, sistemi di preventivazione personalizzati e in generale soluzioni digitali su misura per qualsiasi attività. Sempre con la stessa formula: una tantum, zero canoni." },
  { q: "Sono al sicuro con i dati? GDPR e privacy?", a: "VetrinaFlash è conforme al GDPR. I dati dei tuoi clienti sono tuoi — non vengono venduti, non vengono usati per pubblicità. A differenza delle piattaforme di delivery, con VetrinaFlash sei tu il titolare del dato." },
  { q: "C'è un supporto dedicato?", a: `Sì. Il supporto è italiano, risponde in italiano, conosce le esigenze della ristorazione italiana. Ci puoi contattare direttamente su WhatsApp al ${PHONE_DISPLAY.replaceAll(" ", "")}. Nessun bot, nessun call center.` },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: (index % 5) * 0.06 }} className={`relative border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-[#7CFF00]/25 bg-[#7CFF00]/[0.03]" : "border-white/8 bg-white/[0.02] hover:border-white/12"}`}>
      {open && (
        <motion.div
          className="absolute top-0 left-0 w-[200%] h-full pointer-events-none opacity-20"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,255,0,0.1), transparent)" }}
        />
      )}
      <button onClick={() => setOpen(!open)} className="relative w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left z-10">
        <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${open ? "bg-[#7CFF00]/20" : "bg-white/8"}`} style={{ filter: open ? "drop-shadow(0 0 8px rgba(124,255,0,0.6))" : "none" }}>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: open ? "#7CFF00" : "rgba(255,255,255,0.5)" }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: "spring", stiffness: 280, damping: 22 }} className="relative z-10">
            <div className="px-4 sm:px-6 pb-4 sm:pb-5"><div className="w-full h-px bg-white/6 mb-3 sm:mb-4" /><p className="text-white/60 text-xs sm:text-sm leading-relaxed">{faq.a}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-10%" });
  return (
    <section id="faq" className="relative py-20 sm:py-24 md:py-32 overflow-hidden aurora">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(124,255,0,0.03),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div ref={headingRef} className="text-center mb-10 sm:mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={headingInView ? { opacity: 1, y: 0 } : {}} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"><MessageCircle size={13} />Domande frequenti</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={headingInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-5">Risposte dirette.<br /><span className="neon-text">Nessun giro di parole.</span></motion.h2>
        </div>
        <div className="flex flex-col gap-2.5 sm:gap-3">{faqs.map((faq, i) => <FAQItem key={faq.q} faq={faq} index={i} />)}</div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8 sm:mt-10 text-center p-5 sm:p-7 rounded-3xl border border-white/8 bg-white/[0.02] glow-pulse animated-border relative overflow-hidden">
          <p className="text-white/60 text-sm sm:text-base mb-3 sm:mb-4 relative z-10">Hai ancora dubbi? Parliamone direttamente.</p>
          <motion.a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="relative z-10 inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#25D366]/30 bg-[#25D366]/8 text-[#25D366] font-semibold text-xs sm:text-sm hover:bg-[#25D366]/15 transition-all duration-200 shimmer text-center max-w-full"><MessageCircle size={16} className="shrink-0" /><span className="truncate">Scrivici su WhatsApp — {PHONE_DISPLAY}</span></motion.a>
        </motion.div>
      </div>
    </section>
  );
}
