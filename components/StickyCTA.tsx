"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadForm } from "./LeadFormProvider";

export default function StickyCTA() {
  const { open } = useLeadForm();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 760);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-ink/95 backdrop-blur-md border-t border-[var(--ink-line)] px-4 py-3"
        >
          <button
            onClick={() => open()}
            className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-5 py-3.5 font-semibold text-ink"
          >
            Richiedi il preventivo gratuito
            <ArrowRight size={18} />
          </button>
        </motion.div>
      )}
      {visible && (
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => open()}
          className="hidden sm:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 rounded-sm bg-ember px-5 py-3.5 font-semibold text-ink shadow-lg hover:bg-gold transition-colors"
        >
          Richiedi il preventivo
          <ArrowRight size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
