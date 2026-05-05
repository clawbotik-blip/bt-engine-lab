"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

function MolecularCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const nodes     = useRef<Node[]>([]);

  useEffect(() => {
    const canvas  = canvasRef.current;
    if (!canvas) return;
    const ctx     = canvas.getContext("2d");
    if (!ctx) return;

    const COUNT   = 38;
    const MAX_DIST = 160;
    const SPEED   = 0.18;

    function resize() {
      canvas!.width  = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }

    function init() {
      nodes.current = Array.from({ length: COUNT }, () => ({
        x:  Math.random() * canvas!.width,
        y:  Math.random() * canvas!.height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r:  1.5 + Math.random() * 2,
      }));
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      const ns = nodes.current;
      for (const n of ns) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < ns.length; i++) {
        for (let j = i + 1; j < ns.length; j++) {
          const dx   = ns[i].x - ns[j].x;
          const dy   = ns[i].y - ns[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx!.beginPath();
            ctx!.moveTo(ns[i].x, ns[i].y);
            ctx!.lineTo(ns[j].x, ns[j].y);
            ctx!.strokeStyle = `rgba(6,182,212,${alpha})`;
            ctx!.lineWidth   = 1;
            ctx!.stroke();
          }
        }
      }

      for (const n of ns) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(6,182,212,0.35)";
        ctx!.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

export default function HeroMolecular() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-navy overflow-hidden" aria-label="Hero">
      {/* Animated molecular background */}
      <MolecularCanvas />

      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 55% 50%, rgba(30,64,175,0.35) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-wide py-28 lg:py-36">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4 text-cyan-400"
          >
            Life Science & Proteomics Equipment
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Engineering the Tools{" "}
            <span className="text-cyan-400">of Discovery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl"
          >
            Precision instruments, consumables, and supplies for life science and proteomics research — curated for quality, backed by expert guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/products" className="btn-primary text-base px-6 py-3">
              Browse Products
            </Link>
            <Link href="/request-quote" className="btn-secondary text-base px-6 py-3">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
        aria-hidden="true"
      />
    </section>
  );
}
