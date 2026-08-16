"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  onClick,
  strength = 0.3,
  as: Tag = "button",
  style,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
  as?: "button" | "a";
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const props = {
    href,
    target,
    rel,
    onClick,
    className,
    style,
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.2 }}
      className="inline-block"
    >
      {Tag === "a" ? (
        <a {...props}>{children}</a>
      ) : (
        <Tag {...props}>{children}</Tag>
      )}
    </motion.div>
  );
}
