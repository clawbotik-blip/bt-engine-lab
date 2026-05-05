"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  lede?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, lede, center = false, light = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className={center ? "text-center" : ""}
    >
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? "text-cyan-400" : "text-cyan-500"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight leading-tight ${light ? "text-white" : "text-brand-navy"}`}>
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-slate-300" : "text-slate-500"}`}>
          {lede}
        </p>
      )}
    </motion.div>
  );
}
