"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Category } from "@/lib/products";

const icons: Record<string, React.ReactNode> = {
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M9 3v7l-4 8a2 2 0 001.8 2.9h10.4A2 2 0 0019 18l-4-8V3"/>
    </svg>
  ),
  dna: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
      <path d="M5 3c2 3 5 4 7 4s5-1 7-4M5 21c2-3 5-4 7-4s5 1 7 4"/>
      <path d="M5 12c2 1.5 5 2 7 2s5-.5 7-2M5 12c2-1.5 5-2 7-2s5 .5 7 2"/>
      <line x1="12" y1="3"  x2="12" y2="21"/>
    </svg>
  ),
  columns: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="4" height="18" rx="1"/>
      <rect x="10" y="3" width="4" height="18" rx="1"/>
      <rect x="17" y="3" width="4" height="18" rx="1"/>
    </svg>
  ),
  atom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
      <ellipse cx="12" cy="12" rx="9" ry="4"/>
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  ),
  vial: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
      <path d="M10 2v8l-3 5a2 2 0 001.7 3h6.6A2 2 0 0017 15l-3-5V2"/>
      <line x1="8" y1="2" x2="16" y2="2"/>
    </svg>
  ),
  tube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
      <path d="M14.5 2H9.5a.5.5 0 00-.5.5V16a4 4 0 008 0V2.5a.5.5 0 00-.5-.5z"/>
      <line x1="9" y1="9" x2="15" y2="9"/>
    </svg>
  ),
};

interface Props {
  category: Category;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        href={`/products?category=${category.slug}`}
        className="group flex flex-col bg-white rounded-xl border border-slate-100 shadow-card overflow-hidden card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        aria-label={`Browse ${category.name}`}
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-slate-50">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Icon badge */}
          <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-navy-900/80 backdrop-blur-sm flex items-center justify-center text-cyan-400 p-2">
            {icons[category.icon] ?? icons.flask}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5">
          <h3 className="font-semibold text-brand-navy mb-2 group-hover:text-cobalt-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">{category.blurb}</p>
        </div>

        <div className="px-5 pb-5">
          <span className="inline-flex items-center text-xs font-semibold text-cyan-500 group-hover:text-cyan-600 transition-colors">
            Browse products
            <ArrowRight />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function ArrowRight() {
  return (
    <svg className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="2" y1="7" x2="12" y2="7" />
      <polyline points="8,3 12,7 8,11" />
    </svg>
  );
}
