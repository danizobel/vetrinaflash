"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, BadgeCheck } from "lucide-react";

const clients = [
  {
    name: "'N Farinati",
    type: "Modern Pizza & More",
    city: "Caserta",
    logo: "/clients/nfarinati.jpg",
    logoBg: "#2B4A2E",
    quote:
      "Da quando usiamo VetrinaFlash i clienti ordinano direttamente dal QR al tavolo. Zero commissioni a ogni pizza, e il menu si aggiorna in pochi secondi. Non torneremo mai più alle piattaforme.",
    highlight: "Zero commissioni a ogni pizza",
  },
  {
    name: "TORB",
    type: "Birreria Carnivora",
    city: "Caserta",
    logo: "/clients/torb.png",
    logoBg: "#ffffff",
    quote:
      "Per una birreria carnivora come la nostra, avere il menu sempre aggiornato è fondamentale. Setup velocissimo, pannello intuitivo. I clienti adorano scansionare il QR direttamente al tavolo.",
    highlight: "La birra arriva, le commissioni no",
  },
  {
    name: "Peter Bun",
    type: "La 1ª Paninoteca Dolce d'Italia",
    city: "Campania",
    logo: "/clients/peterbun.png",
    logoBg: "#ffffff",
    quote:
      "Essere la prima paninoteca dolce d'Italia significa essere innovativi. VetrinaFlash ci ha permesso di portare l'esperienza digitale anche all'ordinazione. I clienti rimangono stupiti.",
    highlight: "Dolce come i loro panini",
  },
];

export default function ClientsSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section id="clienti" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,255,0,0.045),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"
          >
            <BadgeCheck size={13} />
            Chi si fida di noi
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
          >
            I nostri clienti. Reali.
            <br />
            <span className="neon-text">Liberi dalle commissioni.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Non numeri inventati — questi sono i locali che ogni giorno usano
            VetrinaFlash per incassare il{" "}
            <span className="text-white font-medium">100% dei loro ordini</span>.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group card-lux rounded-3xl p-8 flex flex-col text-center transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(124,255,0,0.12)]"
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1.5 }}
                className="relative w-32 h-32 rounded-2xl mx-auto mb-7 overflow-hidden border border-white/10"
                style={{ background: c.logoBg }}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain p-2"
                />
              </motion.div>

              <h3 className="font-display text-white font-bold text-xl mb-1">
                {c.name}
              </h3>
              <div className="text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">
                {c.type}
              </div>
              <div className="inline-flex items-center justify-center gap-1.5 text-white/35 text-xs mb-6">
                <MapPin size={11} />
                {c.city}
              </div>

              <p className="text-white/55 text-sm leading-relaxed italic flex-1 mb-6 text-left border-l-2 border-[#7CFF00]/40 pl-4">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#7CFF00]/8 border border-[#7CFF00]/20 text-[#7CFF00] text-xs font-bold">
                {c.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
