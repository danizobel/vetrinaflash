"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

const clients = [
  {
    name: "'N Farinati",
    category: "Modern Pizza & More",
    location: "Caserta",
    logo: "/images/client-nfarinati.jpg",
    url: "https://nfarinatimodernpizza.it",
    quote:
      "Da quando usiamo VetrinaFlash i clienti ordinano direttamente per asporto e delivery. Zero commissioni a ogni pizza, e il menu si aggiorna in pochi secondi.",
  },
  {
    name: "TORB",
    category: "Birreria Carnivora",
    location: "Caserta",
    logo: "/images/client-torb.png",
    url: "https://torbcaserta.it",
    quote:
      "Avere il menu sempre aggiornato è fondamentale per noi. Setup velocissimo, pannello intuitivo, ordini diretti senza pensieri.",
  },
  {
    name: "Peter Bun",
    category: "La 1ª Paninoteca Dolce d'Italia",
    location: "Campania",
    logo: "/images/client-peterbun.png",
    url: "https://peterbuns.it",
    quote:
      "Essere la prima paninoteca dolce d'Italia significa essere innovativi. VetrinaFlash ci ha portato l'esperienza digitale anche nell'ordinazione.",
  },
];

export default function ClientsSection() {
  return (
    <section id="clienti" className="relative py-24 md:py-32 bg-ink-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">Chi si fida di noi</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] text-cream">
            Locali reali.
            <br />
            Liberi dalle commissioni.
          </h2>
          <p className="mt-5 text-ash text-lg">
            Non numeri inventati: questi locali usano VetrinaFlash ogni
            giorno per incassare il 100% dei loro ordini.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {clients.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-md border border-[var(--ink-line)] bg-ink p-7 hover:border-ember/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-md bg-paper p-2 shrink-0 overflow-hidden relative">
                  <Image src={c.logo} alt={`Logo ${c.name}`} fill className="object-contain p-1.5" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-cream">{c.name}</p>
                  <p className="text-xs text-ash">{c.category}</p>
                  <p className="text-xs text-ash-dim mt-0.5">📍 {c.location}</p>
                </div>
              </div>

              <p className="text-ash text-sm mt-5 leading-relaxed flex-1">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-ash group-hover:text-ember transition-colors">
                  Visita il sito
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
