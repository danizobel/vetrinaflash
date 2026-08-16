"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ShoppingCart, Plus, Check, TrendingUp, Bell, ChefHat, X, Star, QrCode,
} from "lucide-react";

const menuItems = [
  { id: 1, name: "Pizza Margherita", price: 9.5, emoji: "🍕", category: "Pizze" },
  { id: 2, name: "Pasta Carbonara", price: 12.0, emoji: "🍝", category: "Primi" },
  { id: 3, name: "Tiramisù", price: 5.5, emoji: "🍰", category: "Dolci" },
  { id: 4, name: "Coca-Cola", price: 3.0, emoji: "🥤", category: "Bevande" },
];

const upsells = [
  { id: 101, name: "Patatine Fritte", price: 4.0, emoji: "🍟" },
  { id: 102, name: "Bibita a scelta", price: 3.0, emoji: "🥤" },
  { id: 103, name: "Dessert del giorno", price: 5.0, emoji: "🍰" },
];

interface CartItem { id: number; name: string; price: number; emoji: string; }
interface Order { id: number; items: CartItem[]; total: number; time: string; }

export default function ChatDemoSection() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [upsellVisible, setUpsellVisible] = useState(false);
  const [pendingItem, setPendingItem] = useState<CartItem | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [revenue, setRevenue] = useState(0);
  const [newOrderPulse, setNewOrderPulse] = useState(false);
  const [screenFlash, setScreenFlash] = useState(false);
  const [milestoneGlow, setMilestoneGlow] = useState(false);
  
  const prevRevenueRef = useRef(0);

  useEffect(() => {
    const prevMult = Math.floor(prevRevenueRef.current / 10);
    const currMult = Math.floor(revenue / 10);
    
    if (currMult > prevMult) {
      setMilestoneGlow(true);
      const t = setTimeout(() => setMilestoneGlow(false), 1500);
      prevRevenueRef.current = revenue;
      return () => clearTimeout(t);
    }
    prevRevenueRef.current = revenue;
  }, [revenue]);

  const handleAddItem = (item: (typeof menuItems)[0]) => {
    setPendingItem(item);
    setUpsellVisible(true);
  };

  const confirmAdd = (withUpsell?: (typeof upsells)[0]) => {
    const newItems: CartItem[] = pendingItem ? [pendingItem] : [];
    if (withUpsell) newItems.push(withUpsell);
    if (newItems.length === 0) return;
    const order: Order = {
      id: Date.now(),
      items: newItems,
      total: newItems.reduce((s, i) => s + i.price, 0),
      time: new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }),
    };
    setCart((prev) => [...prev, ...newItems]);
    setOrders((prev) => [order, ...prev.slice(0, 4)]);
    setRevenue((prev) => prev + order.total);
    
    setScreenFlash(true);
    setTimeout(() => setScreenFlash(false), 300);
    
    setNewOrderPulse(true);
    setTimeout(() => setNewOrderPulse(false), 2200);
    setUpsellVisible(false);
    setPendingItem(null);
  };

  const cartTotal = cart.reduce((s, i) => s + i.price, 0);

  const { scrollYProgress } = useScroll();
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden aurora">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(124,255,0,0.045),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-[#7CFF00] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6"><QrCode size={12} />Demo interattiva live</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-[clamp(1.75rem,8.4vw,2.125rem)] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">Provalo <span className="neon-text">adesso</span>.</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/50 text-lg max-w-2xl mx-auto">A sinistra: quello che vede il tuo cliente dopo aver scansionato il QR. A destra: il tuo back office che si aggiorna <span className="text-white font-medium">in tempo reale</span>. Tocca un piatto.</motion.p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Phone mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
            style={{ y: phoneY }}
            className="flex justify-center"
          >
            <div className="relative w-[300px] sm:w-[340px]">
              <motion.div 
                className="bg-[#0c0d0e] rounded-[42px] border-[6px] border-[#1b1d1e] overflow-hidden relative"
                animate={{ 
                  boxShadow: [
                    "0 10px 40px rgba(0,0,0,0.8), 0 0 36px rgba(124,255,0,0.05)", 
                    "0 20px 50px rgba(0,0,0,0.9), 0 0 50px rgba(124,255,0,0.15)", 
                    "0 10px 40px rgba(0,0,0,0.8), 0 0 36px rgba(124,255,0,0.05)"
                  ] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Screen Flash Overlay */}
                <AnimatePresence>
                  {screenFlash && (
                    <motion.div
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute inset-0 bg-[#7CFF00] z-40 pointer-events-none mix-blend-overlay"
                    />
                  )}
                </AnimatePresence>

                <div className="px-6 pt-4 pb-2 flex justify-between items-center relative z-10"><span className="text-white/50 text-xs font-medium">9:41</span><div className="w-24 h-5 bg-black rounded-full" /><div className="w-3.5 h-2.5 border border-white/40 rounded-[3px] flex items-center p-[1.5px]"><div className="w-full h-full bg-[#7CFF00] rounded-[1px]" /></div></div>
                <div className="px-5 py-3 bg-[#101211] border-b border-white/5 relative z-10">
                  <div className="flex items-center justify-between">
                    <div><div className="text-white font-bold text-sm">🍕 La Tua Pizzeria</div><div className="text-[#7CFF00] text-[11px]">● Tavolo 7 · Ordine diretto</div></div>
                    <div className="relative"><ShoppingCart size={18} className="text-white/50" /><AnimatePresence>{cart.length > 0 && (<motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#7CFF00] rounded-full text-black text-[9px] font-black flex items-center justify-center">{cart.length}</motion.span>)}</AnimatePresence></div>
                  </div>
                </div>
                <div className="px-4 py-4 space-y-2 min-h-[360px] relative z-10">
                  <div className="text-white/35 text-[10px] uppercase tracking-[0.2em] mb-3 px-1">Tocca per aggiungere</div>
                  {menuItems.map((item) => (
                    <motion.button key={item.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} onClick={() => handleAddItem(item)} className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white/3 border border-white/5 hover:border-[#7CFF00]/30 hover:bg-[#7CFF00]/5 transition-all duration-200 group text-left">
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="flex-1"><div className="text-white text-xs font-semibold">{item.name}</div><div className="text-white/35 text-[10px]">{item.category}</div></div>
                      <div className="flex items-center gap-2"><span className="text-[#7CFF00] text-xs font-bold">€{item.price.toFixed(2)}</span><div className="w-6 h-6 rounded-full bg-[#7CFF00]/15 group-hover:bg-[#7CFF00] flex items-center justify-center transition-colors"><Plus size={11} className="text-[#7CFF00] group-hover:text-black transition-colors" /></div></div>
                    </motion.button>
                  ))}
                </div>
                <AnimatePresence>{cart.length > 0 && (<motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} className="m-3 p-3.5 rounded-2xl bg-[#7CFF00] flex items-center justify-between relative z-10"><span className="text-black text-xs font-bold">{cart.length} articoli nel carrello</span><span className="text-black text-xs font-black">€{cartTotal.toFixed(2)}</span></motion.div>)}</AnimatePresence>
              </motion.div>
              <AnimatePresence>{upsellVisible && (
                <motion.div 
                  initial={{ scale: 0.7, opacity: 0, y: 30 }} 
                  animate={{ scale: 1, opacity: 1, y: 0 }} 
                  exit={{ scale: 0.85, opacity: 0, y: 16 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 25 }} 
                  className="absolute inset-x-2 bottom-2 rounded-3xl bg-[#101211] border border-[#7CFF00]/30 p-5 z-30" 
                  style={{ boxShadow: "0 0 50px rgba(124,255,0,0.25), 0 20px 60px rgba(0,0,0,0.8)" }}
                >
                  <button onClick={() => confirmAdd()} className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"><X size={12} /></button>
                  <div className="text-[#7CFF00] font-black text-sm mb-1">✨ Quasi fatto!</div>
                  <p className="text-white/55 text-xs mb-4 leading-relaxed">Vuoi aggiungere qualcosa alla <span className="text-white font-semibold">{pendingItem?.name}</span>?</p>
                  <div className="space-y-2 mb-3">
                    {upsells.map((u) => (
                      <motion.button key={u.id} whileTap={{ scale: 0.97 }} onClick={() => confirmAdd(u)} className="w-full flex items-center gap-3 p-2.5 rounded-xl border border-white/8 hover:border-[#7CFF00]/40 hover:bg-[#7CFF00]/5 transition-all group">
                        <span className="text-xl">{u.emoji}</span><span className="flex-1 text-xs text-white/80 text-left group-hover:text-white">{u.name}</span><span className="text-[#7CFF00] text-xs font-bold">+€{u.price.toFixed(2)}</span><div className="w-5 h-5 rounded-full bg-[#7CFF00]/15 group-hover:bg-[#7CFF00] flex items-center justify-center transition-colors"><Plus size={9} className="text-[#7CFF00] group-hover:text-black transition-colors" /></div>
                      </motion.button>
                    ))}
                  </div>
                  <button onClick={() => confirmAdd()} className="w-full py-2 rounded-xl bg-white/5 text-white/40 text-xs hover:text-white/60 transition-colors">No grazie, procedi senza</button>
                </motion.div>
              )}</AnimatePresence>
            </div>
          </motion.div>

          {/* Dashboard */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="space-y-4">
            <div className="glass glow-pulse rounded-2xl p-4 flex items-center justify-between"><div><div className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-0.5">app.vetrinaflash.it/backoffice</div><div className="text-white font-bold text-sm">Il tuo Back Office</div></div><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7CFF00] pulse-multi" /><span className="text-[#7CFF00] text-xs">Live</span></div></div>
            <motion.div 
              animate={
                milestoneGlow 
                ? { boxShadow: ["0 0 0px rgba(124,255,0,0)", "0 0 60px rgba(124,255,0,0.6)", "0 0 0px rgba(124,255,0,0)"] }
                : newOrderPulse 
                ? { boxShadow: ["0 0 0px rgba(124,255,0,0)", "0 0 34px rgba(124,255,0,0.4)", "0 0 0px rgba(124,255,0,0)"] } 
                : { boxShadow: "0 0 0px rgba(124,255,0,0)" }
              } 
              transition={{ duration: milestoneGlow ? 1.5 : 1 }} 
              className="glass glow-pulse rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-1"><span className="text-white/40 text-xs uppercase tracking-[0.2em]">Incassi oggi</span><TrendingUp size={14} className="text-[#7CFF00]" /></div>
              <div className={`font-display text-4xl font-extrabold mb-1 tabular-nums transition-colors duration-500 ${milestoneGlow ? "text-[#7CFF00] drop-shadow-[0_0_15px_rgba(124,255,0,0.8)]" : "neon-text"}`}>€{revenue.toFixed(2)}</div>
              <div className="text-white/25 text-xs">diretti sul tuo conto · 0% commissioni</div>
              <div className="flex gap-1 items-end mt-4 h-10">{[2, 5, 3, 7, 4, 8, Math.min(revenue > 0 ? revenue / 3 : 1, 10)].map((h, i) => (<motion.div key={i} initial={{ height: 0 }} animate={{ height: `${(h / 10) * 40}px` }} transition={{ delay: i * 0.06, duration: 0.4 }} className={`flex-1 rounded-sm ${i === 6 ? "bg-[#7CFF00]" : "bg-white/10"}`} />))}</div>
            </motion.div>
            <AnimatePresence>{newOrderPulse && (<motion.div initial={{ opacity: 0, y: -12, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.95 }} className="glass-green rounded-2xl p-4 flex items-center gap-3"><div className="w-9 h-9 rounded-full bg-[#7CFF00]/20 flex items-center justify-center flex-shrink-0"><Bell size={15} className="text-[#7CFF00]" /></div><div><div className="text-[#7CFF00] font-black text-sm">🔔 Nuovo ordine — Tavolo 7</div><div className="text-white/50 text-xs">€{orders[0]?.total.toFixed(2)} · {orders[0]?.time}</div></div></motion.div>)}</AnimatePresence>
            <div className="glass glow-pulse rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4"><span className="text-white/40 text-xs uppercase tracking-[0.2em]">Ordini recenti</span><span className="text-[#7CFF00] text-xs font-semibold">{orders.length} oggi</span></div>
              {orders.length === 0 ? (<div className="text-center py-8 text-white/20"><ChefHat size={28} className="mx-auto mb-2 opacity-30" /><div className="text-sm">Tocca un piatto sul telefono per vedere gli ordini</div></div>) : (<div className="space-y-2">{orders.map((order) => (<motion.div key={order.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between p-2.5 rounded-xl bg-white/3 border border-white/5"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-[#7CFF00]/15 flex items-center justify-center flex-shrink-0"><Check size={10} className="text-[#7CFF00]" /></div><span className="text-white/55 text-xs">{order.items.map((i) => i.emoji).join(" ")}</span></div><div className="flex items-center gap-3"><span className="text-[#7CFF00] text-xs font-bold">€{order.total.toFixed(2)}</span><span className="text-white/25 text-[10px]">{order.time}</span></div></motion.div>))}</div>)}
            </div>
            <div className="glass glow-pulse rounded-2xl p-4"><div className="flex items-center gap-2 mb-3"><Star size={12} className="text-[#7CFF00] fill-current" /><span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Piatto del mese</span></div><div className="flex items-center gap-3"><span className="text-3xl">🍕</span><div className="flex-1"><div className="text-white font-bold text-sm">Pizza Margherita</div><div className="text-[#7CFF00] text-xs">142 ordini questo mese</div></div><div className="text-right"><div className="text-white font-black">€1.349</div><div className="text-white/30 text-[10px]">fatturato</div></div></div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
