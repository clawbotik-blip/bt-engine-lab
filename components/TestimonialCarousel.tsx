"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "We needed to expand our LC-MS/MS sample prep capacity on a tight budget. BT Engine Lab helped us spec the right extraction kit and desalting columns in a single conversation — and had them on our bench within three days.",
    name: "Dr. Sarah Chen",
    title: "Senior Proteomics Scientist",
    org: "University of California, San Diego — Proteomics Core",
  },
  {
    quote:
      "Sourcing specialized chromatography columns for a non-standard workflow can be painful. BT Engine Lab was the first supplier that actually understood what we were trying to do analytically and got us the right product first time.",
    name: "Dr. Marcus Patel",
    title: "Principal Scientist, Analytical Chemistry",
    org: "Regeneron Pharmaceuticals",
  },
  {
    quote:
      "As a core facility manager, I need vendors I can rely on for consistent quality and fast turnaround. BT Engine Lab has delivered on both, and the procurement process is refreshingly straightforward for an academic setting.",
    name: "Dr. Yuki Tanaka",
    title: "Proteomics Core Facility Manager",
    org: "Fred Hutchinson Cancer Center",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="section-padding bg-navy-900" aria-label="Testimonials">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3 text-cyan-400">Researcher Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trusted by the Bench
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28 }}
                className="bg-white/5 border border-white/10 rounded-2xl px-8 py-10"
              >
                <QuoteIcon />
                <blockquote className="mt-5 text-lg text-slate-200 leading-relaxed">
                  &ldquo;{testimonials[index].quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                    {testimonials[index].name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonials[index].name}</div>
                    <div className="text-xs text-slate-400">{testimonials[index].title}</div>
                    <div className="text-xs text-slate-500">{testimonials[index].org}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${i === index ? "bg-cyan-400 scale-125" : "bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-8 h-8 text-cyan-500/40" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M9.333 20A5.333 5.333 0 014 14.667C4 8 9.333 5.333 14.667 5.333v2.134c-2.934 0-6.134 1.066-6.134 5.066C9.466 12 10.4 12 11.333 12A5.333 5.333 0 019.333 20zm13.334 0a5.333 5.333 0 01-5.334-5.333C17.333 8 22.667 5.333 28 5.333v2.134c-2.933 0-6.133 1.066-6.133 5.066.933-.533 1.866-.533 2.8-.533A5.333 5.333 0 0122.667 20z"/>
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <polyline points="10,3 5,8 10,13"/>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <polyline points="6,3 11,8 6,13"/>
    </svg>
  );
}
