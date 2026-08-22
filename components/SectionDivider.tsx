"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full py-1 overflow-hidden ${className}`}>
      <div className="section-divider mx-auto max-w-4xl" />
      <motion.div
        animate={{
          x: ["-10%", "110%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="absolute top-1/2 -translate-y-1/2 w-12 h-[3px] rounded-full bg-[#7CFF00]/60 blur-[2px]"
        style={{
          boxShadow: "0 0 12px rgba(124, 255, 0, 0.5), 0 0 24px rgba(124, 255, 0, 0.2)",
        }}
      />
    </div>
  );
}
