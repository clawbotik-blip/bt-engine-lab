import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Cell Biology Solutions — Imaging, Flow Cytometry & Culture",
  description:
    "Cell biology reagents, imaging consumables, and assay kits from BT Engine Lab — curated for live-cell and fixed-cell research.",
};

export default function CellBiologyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative bg-gradient-navy overflow-hidden py-20 px-6 md:px-10">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-cyan-400">Solutions</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">Cell Biology Solutions</h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Microscopy consumables, flow cytometry reagents, cell culture media, and viability assays for live-cell and fixed-cell research.
            </p>
            <Link href="/request-quote" className="btn-primary text-base px-6 py-3">Request a Quote</Link>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Application Areas"
            title="Cell Biology Workflow Support"
            lede="Reagents and consumables spanning imaging, cytometry, and cell culture."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Microscopy Consumables", "Flow Cytometry Reagents", "Cell Culture Media & Sera", "Viability & Apoptosis Assays", "Cell Lysis & Fractionation", "Immunofluorescence Reagents"].map((name) => (
              <div key={name} className="rounded-xl bg-white border border-slate-100 shadow-card p-6">
                <h3 className="font-semibold text-brand-navy mb-2">{name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  High-quality {name.toLowerCase()} for rigorous cell biology research.
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
