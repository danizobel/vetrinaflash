"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulse: number;
}

export default function ParticleField({
  count = 35,
  color = "124, 255, 0",
  className = "",
}: {
  count?: number;
  color?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const isVisibleRef = useRef(true);

  const initParticles = useCallback(
    (w: number, h: number) => {
      const isMobile = w < 768;
      const actualCount = isMobile ? Math.min(count, 12) : count;
      const particles: Particle[] = [];
      for (let i = 0; i < actualCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.8 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          pulse: Math.random() * Math.PI * 2,
        });
      }
      return particles;
    },
    [count]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let isMobile = window.innerWidth < 768;

    const updateSize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      isMobile = rect.width < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      particlesRef.current = initParticles(rect.width, rect.height);
    };

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    if (!isMobile) {
      canvas.addEventListener("mousemove", handleMouse, { passive: true });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !animRef.current) {
          animRef.current = requestAnimationFrame(draw);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const draw = () => {
      if (!isVisibleRef.current) {
        animRef.current = 0;
        return;
      }

      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2));
      ctx.clearRect(0, 0, w, h);

      const ps = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        // Wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Mouse repulsion on desktop
        if (!isMobile) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = ((120 - dist) / 120) * 0.02;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
          p.vx *= 0.99;
          p.vy *= 0.99;
        }

        const pulseOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${pulseOpacity})`;
        ctx.fill();

        // Draw connections only on desktop to maintain 60fps on mobile
        if (!isMobile) {
          for (let j = i + 1; j < ps.length; j++) {
            const p2 = ps[j];
            const cdx = p.x - p2.x;
            const cdy = p.y - p2.y;
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
            if (cdist < 130) {
              const lineOpacity = (1 - cdist / 130) * 0.12;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${color}, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, [color, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none md:pointer-events-auto ${className}`}
      style={{ opacity: 0.7 }}
    />
  );
}
