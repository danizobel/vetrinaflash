"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Cosa significa \"pagamento una tantum\"?",
    a: "Paghi una volta sola, senza canoni mensili ricorrenti. Il sistema viene configurato sulle tue esigenze e poi è tuo. Il preventivo varia in base alla complessità del menu e alle funzionalità scelte.",
  },
  {
    q: "Il sito serve solo per il delivery o anche per l'asporto?",
    a: "Entrambi. Il cliente ordina online sia che voglia ritirare in negozio sia che voglia farsi consegnare l'ordine. Il flusso è lo stesso: ordina, paga, tu ricevi la notifica e incassi.",
  },
  {
    q: "I miei clienti devono scaricare un'app?",
    a: "No. Bastano browser e link: il cliente apre il tuo link, vede il menu, ordina, paga. Stessa semplicità di aprire una pagina web, nessuna registrazione obbligatoria.",
  },
  {
    q: "Posso comunque avere un QR per gli ordini al tavolo?",
    a: "Sì, è una funzione opzionale. Il cuore del sistema resta asporto e delivery via link diretto, ma se vuoi anche l'ordine in sala aggiungiamo un QR dedicato al tavolo nel tuo preventivo.",
  },
  {
    q: "Come funzionano i pagamenti? I soldi dove vanno?",
    a: "Tramite il tuo account Nexi, SumUp o Stripe. I soldi vanno direttamente sul tuo conto bancario: VetrinaFlash non tocca mai il denaro dei tuoi clienti, zero commissioni sulle transazioni oltre al gateway di pagamento scelto.",
  },
  {
    q: "Quanto tempo ci vuole per il setup?",
    a: "Di solito tra i 15 minuti e qualche ora, in base alla complessità del menu. Ci occupiamo noi della configurazione iniziale e ti consegniamo il sistema già pronto all'uso.",
  },
  {
    q: "Posso continuare a usare JustEat o Glovo in parallelo?",
    a: "Sì, nessuno ti obbliga a chiudere gli account sulle piattaforme esterne. Molti clienti usano VetrinaFlash in parallelo e riducono gradualmente la dipendenza man mano che gli ordini diretti crescono.",
  },
  {
    q: "Sono a posto con GDPR e privacy?",
    a: "Sì, VetrinaFlash è conforme al GDPR. I dati dei tuoi clienti sono tuoi: non vengono venduti né usati per pubblicità di terzi. Sei tu il titolare del dato, a differenza delle piattaforme di delivery.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className={`border rounded-sm overflow-hidden transition-colors ${
        open ? "border-ember/30 bg-ember/5" : "border-[var(--ink-line)] bg-ink-soft"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-cream font-medium">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className={open ? "text-ember" : "text-ash-dim"} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <p className="px-6 pb-5 text-ash text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-ink-soft">
      <FAQJsonLd />
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">Domande frequenti</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] text-cream">
            Risposte dirette.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-ash mb-4">Hai ancora dubbi? Parliamone direttamente.</p>
          <a
            href="https://wa.me/393505383769?text=Ciao!%20Ho%20una%20domanda%20su%20VetrinaFlash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-[var(--ink-line)] px-6 py-3 font-semibold text-cream hover:border-ember/40 transition-colors"
          >
            <MessageCircle size={18} />
            Scrivici su WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
