import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroMolecular from "@/components/HeroMolecular";
import SectionHeader from "@/components/SectionHeader";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ValuePropGrid from "@/components/ValuePropGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { categories, getFeaturedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "BT Engine Lab — Life Science & Proteomics Equipment Supplier",
  description:
    "Precision lab equipment, proteomics instruments, chromatography systems, and consumables for life science and biotech research. Based in Woodland Hills, CA. Request a quote today.",
};

const trustLogos = [
  "University Research Lab",
  "Biotech R&D",
  "Pharma Core Facility",
  "Clinical Research Institute",
  "Proteomics Core",
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* 1. Hero */}
      <HeroMolecular />

      {/* 2. Trust strip */}
      <section className="bg-brand-light border-b border-slate-100 py-8" aria-label="Trusted by">
        <div className="container-wide">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Trusted by researchers at leading institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustLogos.map((name) => (
              <div key={name} className="px-4 py-2 rounded-lg bg-white border border-slate-100 shadow-card">
                <span className="text-sm font-medium text-slate-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product categories */}
      <section className="section-padding" aria-labelledby="categories-heading">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Catalog"
            title="Equipment for Every Workflow"
            lede="From bench-level consumables to advanced LC-MS instrumentation — curated for life science and proteomics research."
            center
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.slug} category={cat} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Value props */}
      <ValuePropGrid />

      {/* 5. Proteomics Spotlight */}
      <section className="section-padding" aria-labelledby="proteomics-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Core Specialty"
                title="Built for Proteomics"
                lede="From sample preparation to high-resolution LC-MS/MS detection, we carry instruments and consumables optimized for every stage of the proteomics pipeline."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Sample extraction & digestion kits",
                  "Nano-LC and UHPLC front-ends",
                  "2D gel electrophoresis systems",
                  "Western blot imaging",
                  "MS spray tips, sample plates & calibrants",
                  "Protein quantification platforms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-600 flex items-center justify-center mt-0.5">
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <polyline points="2 6 5 9 10 3"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/solutions/proteomics" className="btn-primary">
                  Explore Proteomics Solutions
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=900&q=80"
                alt="Proteomics LC-MS instrumentation setup in a research laboratory"
                width={800}
                height={560}
                className="w-full h-auto object-cover"
                priority={false}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-900/80 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-sm">
                <span className="font-semibold text-cyan-400">LC-MS/MS · 2D Gel · Western Blot · Sample Prep</span>
                <p className="text-slate-300 text-xs mt-0.5">End-to-end proteomics workflow support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured products */}
      <section className="section-padding bg-brand-light" aria-labelledby="featured-heading">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <SectionHeader
              eyebrow="Featured Products"
              title="Instruments & Supplies"
            />
            <Link href="/products" className="btn-outline text-sm">
              Browse all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <TestimonialCarousel />

      {/* 8. CTA band */}
      <section className="section-padding" aria-labelledby="cta-heading">
        <div className="container-wide">
          <div className="relative rounded-2xl bg-gradient-navy overflow-hidden px-8 py-16 text-center">
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #06B6D4 1px, transparent 1px)", backgroundSize: "32px 32px" }}
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="eyebrow mb-4 text-cyan-400">Ready to get started?</p>
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Need Help Speccing Your Lab?
              </h2>
              <p className="text-slate-300 mb-8">
                Whether you&apos;re outfitting a new space or upgrading a single workflow, our team will help you identify the right tools and get a competitive quote — fast.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/request-quote" className="btn-primary text-base px-8 py-3">
                  Request a Quote
                </Link>
                <Link href="/contact" className="btn-secondary text-base px-8 py-3">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
