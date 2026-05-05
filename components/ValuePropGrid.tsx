"use client";

import { motion } from "framer-motion";

const valueProps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4"/>
        <path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9a12.02 12.02 0 00-.382-3.016z"/>
      </svg>
    ),
    title: "Curated Quality",
    body: "Every product in our catalog is vendor-vetted for manufacturing quality, lot-to-lot consistency, and performance in life science workflows.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Expert Guidance",
    body: "Our team understands proteomics and life science workflows from the bench up. We help you spec the right instrument or consumable — not just the one in stock.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Fast US Shipping",
    body: "In-stock items ship same or next business day. We partner with trusted logistics providers to deliver temperature-sensitive supplies safely and on time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Competitive Procurement",
    body: "Institutional pricing, volume discounts, and purchase-order billing. We work within your procurement workflow — not against it.",
  },
];

export default function ValuePropGrid() {
  return (
    <section className="section-padding bg-brand-light" aria-labelledby="why-bt-heading">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-3">Why BT Engine Lab</p>
          <h2 id="why-bt-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            Built for Serious Research
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            We're a specialist supplier — not a general catalog. Everything we carry is chosen to support rigorous life science work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((vp, i) => (
            <motion.div
              key={vp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-navy-900 text-cyan-400 flex items-center justify-center p-2.5 mb-5">
                {vp.icon}
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">{vp.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{vp.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
