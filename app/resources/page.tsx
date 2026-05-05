import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Resources — Proteomics Methods, Lab Best Practices & Buying Guides",
  description:
    "Technical articles, protocol guides, product spotlights, and buying guides from the BT Engine Lab team — written for life science researchers.",
};

const categories = [
  { label: "Proteomics Methods",    value: "proteomics-methods" },
  { label: "Lab Best Practices",    value: "lab-best-practices" },
  { label: "Product Spotlights",    value: "product-spotlights" },
  { label: "Buying Guides",         value: "buying-guides" },
];

const articles = [
  {
    slug:     "sample-prep-for-lc-ms-proteomics",
    title:    "Optimizing Sample Prep for LC-MS/MS Proteomics",
    category: "Proteomics Methods",
    excerpt:  "Protein extraction, denaturation, and digestion protocols are the most common source of variability in LC-MS proteomics experiments. Here's how to standardize them.",
    date:     "2024-11-12",
    readTime: "8 min read",
  },
  {
    slug:     "choosing-between-orbitrap-qtof",
    title:    "Orbitrap vs. Q-TOF: How to Choose for Your Proteomics Workflow",
    category: "Buying Guides",
    excerpt:  "Both platforms deliver high-resolution MS data for proteomics, but the right choice depends on your throughput, budget, and specific analytical goals. A practical comparison.",
    date:     "2024-10-28",
    readTime: "10 min read",
  },
  {
    slug:     "protease-inhibitor-cocktail-guide",
    title:    "Protease Inhibitor Selection: What You Actually Need (and What You Don't)",
    category: "Lab Best Practices",
    excerpt:  "Broad-spectrum cocktails are convenient, but not every application needs every inhibitor class. Here's a practical guide to selecting the right protease protection for your sample type.",
    date:     "2024-10-05",
    readTime: "6 min read",
  },
  {
    slug:     "nexera-uhplc-spotlight",
    title:    "Product Spotlight: Nexera UHPLC System",
    category: "Product Spotlights",
    excerpt:  "A look at the Nexera UHPLC's practical performance in nano-LC proteomics workflows — gradient accuracy, dwell volume, and MS source compatibility.",
    date:     "2024-09-18",
    readTime: "5 min read",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-brand-light border-b border-slate-100 py-14 px-6 md:px-10">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Resources"
            title="Technical Articles & Guides"
            lede="Written by scientists, for scientists. Practical methods, instrument comparisons, and purchasing guidance — no fluff."
          />
          {/* Category filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            <a href="/resources" className="px-4 py-1.5 rounded-full bg-navy-900 text-white text-xs font-semibold">
              All
            </a>
            {categories.map((cat) => (
              <a
                key={cat.value}
                href={`/resources?category=${cat.value}`}
                className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs font-medium hover:border-cyan-400 hover:text-cyan-600 transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <section className="section-padding" aria-label="Article list">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group rounded-2xl border border-slate-100 bg-white shadow-card p-7 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-xs">{article.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-brand-navy leading-snug mb-3 group-hover:text-cobalt-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="mt-5 text-xs font-medium text-slate-400">
                  {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
