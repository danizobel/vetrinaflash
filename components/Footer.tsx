import Image from "next/image";

const productLinks = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Funzionalità", href: "#funzionalita" },
  { label: "I nostri clienti", href: "#clienti" },
  { label: "Preventivo", href: "#preventivo" },
];

const clientLinks = [
  { label: "'N Farinati", href: "https://nfarinatimodernpizza.it" },
  { label: "TORB", href: "https://torbcaserta.it" },
  { label: "Peter Bun", href: "https://peterbuns.it" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--ink-line)] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <Image src="/images/logo-mascot.png" alt="VetrinaFlash" width={32} height={32} className="rounded-md" />
              <span className="font-display font-extrabold text-lg text-cream">
                Vetrina<span className="text-ember">Flash</span>
              </span>
            </a>
            <p className="text-ash text-sm mt-4 leading-relaxed max-w-xs">
              Ordini diretti per asporto e delivery, menu digitale e
              pagamenti integrati per ristoranti e bar italiani. Una tantum,
              0% commissioni.
            </p>
            <p className="font-mono text-[11px] text-ash-dim mt-4">
              🔒 SSL · ✅ GDPR · 🇮🇹 Made in Italy
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-ash-dim uppercase mb-4">Prodotto</p>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ash text-sm hover:text-cream transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-ash-dim uppercase mb-4">Locali che usano VetrinaFlash</p>
            <ul className="space-y-2.5">
              {clientLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash text-sm hover:text-cream transition-colors"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-ash-dim uppercase mb-4">Contatti</p>
            <ul className="space-y-2.5">
              <li>
                <a href="https://wa.me/393505383769" target="_blank" rel="noopener noreferrer" className="text-ash text-sm hover:text-cream transition-colors">
                  WhatsApp: 350 538 3769
                </a>
              </li>
              <li><a href="#" className="text-ash text-sm hover:text-cream transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-ash text-sm hover:text-cream transition-colors">Termini di Servizio</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--ink-line)] flex flex-col sm:flex-row justify-between gap-3 text-xs text-ash-dim">
          <p>© {new Date().getFullYear()} VetrinaFlash · Sistema ordini diretti, 0% commissioni</p>
          <p>Investimento una tantum</p>
        </div>
      </div>
    </footer>
  );
}
