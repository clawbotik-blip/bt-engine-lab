import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Life Science Solutions by Application",
  description:
    "BT Engine Lab supports proteomics, genomics, cell biology, and biochemistry research workflows with curated instrument and consumable recommendations.",
};

const solutionAreas = [
  {
    slug:  "proteomics",
    name:  "Proteomics",
    icon:  "🔬",
    description:
      "End-to-end support for protein identification, quantification, and characterization — from sample prep through LC-MS/MS analysis and data interpretation.",
    highlights: ["LC-MS/MS sample prep", "2D gel electrophoresis", "Western blot", "Protein quantification"],
    featured: true,
  },
  {
    slug:  "genomics",
    name:  "Genomics",
    icon:  "🧬",
    description:
      "Instruments and reagents for DNA/RNA extraction, library preparation, PCR amplification, and next-generation sequencing support.",
    highlights: ["Nucleic acid extraction", "Real-time PCR", "Library prep reagents", "Electrophoresis systems"],
    featured: false,
  },
  {
    slug:  "cell-biology",
    name:  "Cell Biology",
    icon:  "🔭",
    description:
      "Microscopy, flow cytometry consumables, cell culture reagents, and assay kits for live-cell and fixed-cell research.",
    highlights: ["Flow cytometry reagents", "Cell culture media", "Viability assays", "Imaging consumables"],
    featured: false,
  },
  {
    slug:  "biochemistry",
    name:  "Biochemistry",
    icon:  "⚗️",
    description:
      "Enzymes, substrates, assay kits, and analytical instruments for enzymatic assays, protein-protein interaction studies, and metabolite analysis.",
    highlights: ["Enzyme kits", "Binding assays", "Metabolite detection", "Spectrophotometry"],
    featured: false,
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-brand-light border-b border-slate-100 py-14 px-6 md:px-10">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Application Areas"
            title="Solutions for Every Research Workflow"
            lede="We think beyond the catalog. Our team maps your specific scientific goals to the right instruments, consumables, and workflow configurations."
            center
          />
        </div>
      </div>

      <div className="container-wide mt-14">
        <div className="grid md:grid-cols-2 gap-6">
          {solutionAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/solutions/${area.slug}`}
              className={`group relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                area.featured
                  ? "bg-navy-900 border-navy-800 text-white"
                  : "bg-white border-slate-100 shadow-card text-brand-navy"
              }`}
            >
              <div className="text-4xl mb-4" aria-hidden="true">{area.icon}</div>
              <h2 className={`text-xl font-bold mb-3 ${area.featured ? "text-white" : "text-brand-navy"}`}>
                {area.name}
              </h2>
              <p className={`text-sm leading-relaxed mb-5 ${area.featured ? "text-slate-300" : "text-slate-500"}`}>
                {area.description}
              </p>
              <ul className="space-y-1.5">
                {area.highlights.map((h) => (
                  <li key={h} className={`flex items-center gap-2 text-xs font-medium ${area.featured ? "text-cyan-400" : "text-slate-500"}`}>
                    <span className="w-1 h-1 rounded-full bg-current flex-shrink-0" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className={`mt-6 text-sm font-semibold inline-flex items-center gap-1 ${area.featured ? "text-cyan-400" : "text-cobalt-600"}`}>
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="2" y1="8" x2="13" y2="8"/>
                  <polyline points="9,4 13,8 9,12"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
