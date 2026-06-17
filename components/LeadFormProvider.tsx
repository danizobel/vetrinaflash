"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, MessageCircle } from "lucide-react";

const PHONE = "393505383769";

type Prefill = {
  savings?: string;
};

type LeadFormContextValue = {
  open: (prefill?: Prefill) => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) throw new Error("useLeadForm must be used within LeadFormProvider");
  return ctx;
}

const venueTypes = ["Ristorante", "Pizzeria", "Bar", "Gelateria / Pasticceria", "Altro"];

function buildMessage(data: {
  name: string;
  venue: string;
  type: string;
  city: string;
  savings?: string;
}) {
  const lines = [
    `Ciao! Vorrei un preventivo per VetrinaFlash.`,
    ``,
    `Nome: ${data.name}`,
    `Locale: ${data.venue}${data.type ? ` (${data.type})` : ""}`,
    data.city ? `Città: ${data.city}` : null,
    data.savings ? `Stima commissioni perse/anno: ${data.savings}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

export default function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<Prefill>({});
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", venue: "", type: "", city: "", phone: "" });

  const open = useCallback((p?: Prefill) => {
    setPrefill(p || {});
    setSent(false);
    setIsOpen(true);
  }, []);

  const close = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildMessage({ ...form, savings: prefill.savings });
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <LeadFormContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-md bg-ink-soft border border-[var(--ink-line)] p-7 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={close}
                aria-label="Chiudi"
                className="absolute top-4 right-4 text-ash-dim hover:text-cream"
              >
                <X size={20} />
              </button>

              {!sent ? (
                <>
                  <p className="font-mono text-xs tracking-widest text-gold uppercase mb-2">
                    Preventivo gratuito
                  </p>
                  <h3 className="font-display font-black text-2xl text-cream leading-tight">
                    Raccontaci il tuo locale
                  </h3>
                  <p className="text-ash text-sm mt-2">
                    Due righe e ti scriviamo su WhatsApp con un preventivo su misura.
                  </p>

                  {prefill.savings && (
                    <div className="mt-4 rounded-sm border border-ember/30 bg-ember/10 px-4 py-3 text-sm text-cream">
                      Stima di quanto stai perdendo ogni anno:{" "}
                      <span className="text-ember font-bold">{prefill.savings}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3.5">
                    <input
                      required
                      placeholder="Il tuo nome"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-sm border border-[var(--ink-line)] bg-ink px-4 py-3 text-sm text-cream placeholder:text-ash-dim outline-none focus:border-ember/50"
                    />
                    <input
                      required
                      placeholder="Nome del locale"
                      value={form.venue}
                      onChange={(e) => setForm({ ...form, venue: e.target.value })}
                      className="w-full rounded-sm border border-[var(--ink-line)] bg-ink px-4 py-3 text-sm text-cream placeholder:text-ash-dim outline-none focus:border-ember/50"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full rounded-sm border border-[var(--ink-line)] bg-ink px-3 py-3 text-sm text-cream outline-none focus:border-ember/50"
                      >
                        <option value="">Tipo di locale</option>
                        {venueTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <input
                        placeholder="Città"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full rounded-sm border border-[var(--ink-line)] bg-ink px-4 py-3 text-sm text-cream placeholder:text-ash-dim outline-none focus:border-ember/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 group inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-6 py-3.5 font-semibold text-ink hover:bg-gold transition-colors"
                    >
                      Invia su WhatsApp
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center font-mono text-[11px] text-ash-dim">
                      Risposta entro poche ore · Nessun impegno
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ember/15 text-ember mb-4">
                    <MessageCircle size={22} />
                  </div>
                  <h3 className="font-display font-black text-xl text-cream">Aperto su WhatsApp</h3>
                  <p className="text-ash text-sm mt-2">
                    Se non si è aperto automaticamente,{" "}
                    <a
                      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
                        buildMessage({ ...form, savings: prefill.savings })
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ember underline"
                    >
                      clicca qui
                    </a>
                    .
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LeadFormContext.Provider>
  );
}
