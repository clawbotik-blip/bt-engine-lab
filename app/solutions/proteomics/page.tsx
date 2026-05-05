import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Proteomics Solutions — LC-MS, 2D Gel, Sample Prep",
  description:
    "BT Engine Lab's proteomics solutions cover the entire workflow: protein extraction, separation by 2D gel or LC, detection by mass spectrometry, and data analysis. Find instruments and consumables for every stage.",
};

const workflow = [
  {
    step: "01",
    title: "Sample Preparation",
    description: "Protein extraction, denaturation, reduction, alkylation, and enzymatic digestion — optimized for downstream LC-MS or gel-based analysis.",
    products: ["Protein extraction kits", "Protease inhibitor cocktails", "Digestion reagents (trypsin, Lys-C)", "Desalting & cleanup columns"],
  },
  {
    step: "02",
    title: "Separation",
    description: "High-resolution separation of proteins or peptides by 2D gel electrophoresis or nano-LC/UHPLC before detection.",
    products: ["IEF / 2D gel systems", "Nano-LC and UHPLC systems", "Reversed-phase columns", "IPG strips & SDS-PAGE gels"],
  },
  {
    step: "03",
    title: "Detection",
    description: "Mass spectrometric detection and identification — high-resolution MS platforms and consumables for sensitive, reproducible results.",
    products: ["Nano-ESI spray tips", "Sample plates (MTP/96-well)", "Calibration standards", "MS maintenance kits"],
  },
  {
    step: "04",
    title: "Analysis",
    description: "Gel imaging, quantification, and database search — platforms and reagents to extract biological meaning from your data.",
    products: ["2D gel imaging systems", "Protein stains (Coomassie, SYPRO)", "Quantitative western blot platforms", "Protein quantification assays"],
  },
];

const proteomicsProducts = products.filter((p) =>
  ["proteomics-instruments", "sample-prep", "mass-spectrometry"].includes(p.categorySlug)
).slice(0, 4);

export default function ProteomicsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative bg-gradient-navy overflow-hidden py-20 px-6 md:px-10">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #06B6D4 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-cyan-400">Core Specialty</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Proteomics Solutions
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We support the complete proteomics pipeline — from sample extraction through mass spectrometric identification and quantification. Every product is chosen for workflow compatibility, sensitivity, and reproducibility.
            </p>
            <Link href="/request-quote" className="btn-primary text-base px-6 py-3">
              Get a Workflow Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Workflow diagram */}
      <section className="section-padding" aria-labelledby="workflow-heading">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Workflow"
            title="Sample to Discovery"
            lede="BT Engine Lab carries curated instruments and consumables at every stage of the proteomics pipeline."
            center
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {workflow.map((stage, i) => (
              <div key={stage.step} className="relative">
                {/* Connector */}
                {i < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-1/2 h-px bg-cyan-200 z-0" aria-hidden="true" />
                )}
                <div className="relative z-10 p-6">
                  <div className="w-12 h-12 rounded-full bg-navy-900 text-cyan-400 flex items-center justify-center text-xs font-bold mb-5 ring-4 ring-white">
                    {stage.step}
                  </div>
                  <h3 className="font-bold text-brand-navy mb-2">{stage.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{stage.description}</p>
                  <ul className="space-y-1">
                    {stage.products.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="mt-1 w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured proteomics products */}
      <section className="section-padding bg-brand-light" aria-labelledby="products-heading">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <SectionHeader eyebrow="Products" title="Featured Proteomics Equipment" />
            <Link href="/products?category=proteomics-instruments" className="btn-outline text-sm">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proteomicsProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Image + CTA */}
      <section className="section-padding" aria-label="Consultation CTA">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=900&q=80"
                alt="Scientist working at a proteomics mass spectrometry instrument"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Expert Support"
                title="Don't Over-Spec or Under-Buy"
                lede="Choosing the wrong instrument or protocol can cost months. Our team has hands-on proteomics experience and can help you match the right tool to your specific workflow, throughput, and budget."
              />
              <div className="mt-8 space-y-3">
                <Link href="/request-quote" className="btn-primary block text-center py-3">
                  Request a Proteomics Quote
                </Link>
                <Link href="/contact" className="btn-outline block text-center py-3">
                  Talk to a Proteomics Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
