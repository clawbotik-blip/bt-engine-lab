import type { Metadata } from "next";
import { Suspense } from "react";
import QuoteFormWrapper from "./QuoteFormWrapper";

export const metadata: Metadata = {
  title: "Request a Quote — Lab Equipment & Supplies",
  description:
    "Request a quote for lab equipment, proteomics instruments, chromatography systems, and consumables from BT Engine Lab. We respond within one business day.",
};

export default function RequestQuotePage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-navy py-16 px-6 md:px-10">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow mb-4 text-cyan-400">Get Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Request a Quote
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Fill out the form below and our team will follow up with pricing, availability, and lead times within one business day.
          </p>
        </div>
      </div>

      <div className="container-wide mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Suspense>
              <QuoteFormWrapper />
            </Suspense>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6" aria-label="Quote process info">
            <div className="rounded-2xl border border-slate-100 bg-brand-light p-6 shadow-card">
              <h2 className="font-bold text-brand-navy mb-4">What Happens Next</h2>
              <ol className="space-y-4" role="list">
                {[
                  { step: "1", text: "We review your request and check availability" },
                  { step: "2", text: "You receive a formal quote via email within 1 business day" },
                  { step: "3", text: "We discuss options, alternatives, and timelines" },
                  { step: "4", text: "PO-based ordering or credit card payment" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-900 text-cyan-400 text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="text-sm text-slate-600 leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-brand-navy mb-3">Prefer to Call?</h2>
              <p className="text-sm text-slate-500 mb-3">We&apos;re available Monday–Friday, 9 AM–6 PM PT.</p>
              <a
                href="tel:+13477773990"
                className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (347) 777-3990
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
