"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Come funziona l'attivazione? Quanto tempo ci vuole?",
    a: "Tutto ciò che devi fare è darci i dettagli del tuo locale: menu, orari, regole di prenotazione e tono di comunicazione. Il nostro team configura il sistema per te in 48–72 ore. Non devi toccare nulla di tecnico. Ti consegniamo tutto pronto.",
  },
  {
    q: "Devo installare qualcosa sul telefono o sul computer?",
    a: "No. VetrinaFlash funziona tramite i canali che già usi — WhatsApp Business e Instagram. Non serve scaricare app, non serve hardware speciale. L'AI si collega ai tuoi profili esistenti e inizia a lavorare immediatamente.",
  },
  {
    q: "L'AI risponde davvero come se fossi io?",
    a: "Sì. Prima dell'attivazione personalizziamo il tono, le risposte e il carattere dell'AI sul tuo locale. Se hai una pizzeria informale, risponderà in modo caldo e scherzoso. Se gestisci un ristorante fine dining, sarà elegante e professionale. I tuoi clienti non si accorgono della differenza.",
  },
  {
    q: "Posso aggiornare il menu quando voglio?",
    a: "Assolutamente. Hai accesso a una dashboard semplice dove puoi aggiornare menu, prezzi, disponibilità e promozioni in tempo reale. Le modifiche vengono applicate all'AI entro pochi minuti.",
  },
  {
    q: "Come gestisce le prenotazioni? Si integra con il mio sistema?",
    a: "Il sistema di prenotazioni è completamente automatizzato: l'AI verifica la disponibilità, conferma il tavolo, manda un reminder al cliente e aggiorna il registro. Puoi visualizzare tutte le prenotazioni dalla dashboard. Per integrazioni con sistemi esistenti (come TheFork o specifici POS), il nostro team valuta caso per caso.",
  },
  {
    q: "Cosa succede se l'AI non sa rispondere a qualcosa?",
    a: "L'AI è progettata per gestire il 95%+ delle richieste comuni. Per le domande fuori dal suo raggio d'azione, reindirizza il cliente verso di te con un messaggio personalizzato: 'Per questa richiesta ti metto in contatto direttamente con il titolare.' Non lascia mai un cliente senza risposta.",
  },
  {
    q: "È compatibile con WhatsApp Business normale?",
    a: "Sì. L'integrazione avviene tramite le API ufficiali di WhatsApp Business. È completamente sicuro, conforme alle policy Meta e non rischi ban o blocchi dell'account.",
  },
  {
    q: "Posso usarlo anche per promozioni e marketing?",
    a: "Sì — è una delle funzioni più potenti. Puoi creare campagne di messaggi automatici per eventi speciali, offerte del giorno, promozioni stagionali o auguri di compleanno. I messaggi vengono inviati solo ai clienti che hanno dato il consenso, nel rispetto del GDPR.",
  },
  {
    q: "Qual è il costo? Ci sono contratti a lungo termine?",
    a: "Il primo mese è completamente gratuito — nessuna carta di credito richiesta. Dopo, i piani partono da una quota mensile accessibile per qualsiasi locale. Non ci sono contratti annuali: puoi disdire in qualsiasi momento. Contattaci per un preventivo personalizzato basato sulla tua tipologia di locale.",
  },
  {
    q: "Cosa succede se ho un problema? C'è supporto?",
    a: "Sì, supporto italiano dedicato. Non un chatbot generico — un team reale che conosce il settore della ristorazione. Puoi contattarci via WhatsApp (naturalmente), email o telefono. Ogni cliente ha un account manager di riferimento.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 5) * 0.06 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-[#7CFF00]/25 bg-[#7CFF00]/3"
          : "border-white/8 bg-white/2 hover:border-white/12"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-white font-medium text-base">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-[#7CFF00]/20" : "bg-white/8"
          }`}
        >
          <ChevronDown
            className="w-4 h-4"
            style={{ color: open ? "#7CFF00" : "rgba(255,255,255,0.5)" }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <div className="w-full h-px bg-white/6 mb-4" />
              <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
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
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(124,255,0,0.03),transparent)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            Domande Frequenti
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black tracking-tight mb-6"
          >
            <span className="text-white">Hai domande?</span>
            <br />
            <span className="text-[#7CFF00]">Abbiamo le risposte.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            Tutto ciò che devi sapere su VetrinaFlash, spiegato in modo semplice e diretto.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center p-6 rounded-2xl border border-white/8 bg-white/2"
        >
          <p className="text-white/60 text-base mb-4">
            Hai ancora dubbi? Parliamone direttamente.
          </p>
          <motion.a
            href="https://wa.me/39XXXXXXXXXX?text=Ciao!%20Vorrei%20sapere%20di%20più%20su%20VetrinaFlash"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#25D366]/30 bg-[#25D366]/8 text-[#25D366] font-semibold text-sm hover:bg-[#25D366]/15 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Scrivici su WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
