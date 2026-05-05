import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Biochemistry Solutions — Enzymes, Assay Kits & Analytical Instruments",
  description:
    "Enzymes, substrates, assay kits, and analytical instruments for enzymatic analysis, protein interaction studies, and metabolite detection.",
};

export default function BiochemistryPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative bg-gradient-navy overflow-hidden py-20 px-6 md:px-10">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-cyan-400">Solutions</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">Biochemistry Solutions</h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Enzymes, substrates, assay kits, and analytical instruments for enzymatic assays, protein–protein interaction studies, and metabolite analysis.
            </p>
            <Link href="/request-quote" className="btn-primary text-base px-6 py-3">Request a Quote</Link>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Application Areas"
            title="Biochemistry Workflow Support"
            lede="Reagents and instruments for enzymatic and binding assays, metabolite detection, and spectrophotometric analysis."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Enzyme Assay Kits", "Binding & Interaction Assays", "Metabolite Detection", "Spectrophotometry Reagents", "Substrate Libraries", "Buffer Systems & Salts"].map((name) => (
              <div key={name} className="rounded-xl bg-white border border-slate-100 shadow-card p-6">
                <h3 className="font-semibold text-brand-navy mb-2">{name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Precision {name.toLowerCase()} for biochemical research and assay development.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products" className="btn-outline mr-4">Browse Products</Link>
            <Link href="/request-quote" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
