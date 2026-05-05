import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.brand}`,
    description: product.shortDescription,
    openGraph: {
      images: [{ url: product.imageUrl, width: 800, height: 600, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    sku: product.sku,
    image: product.imageUrl,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: "BT Engine Lab LLC" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-20">
        <div className="container-wide">
          <Breadcrumbs
            crumbs={[
              { label: "Products", href: "/products" },
              { label: product.category, href: `/products?category=${product.categorySlug}` },
              { label: product.name },
            ]}
          />

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 mt-4">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Thumbnail row placeholder */}
              <div className="flex gap-3">
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    className="relative w-20 h-16 rounded-lg overflow-hidden border-2 border-cyan-500 bg-slate-100"
                    aria-label={`View image ${n}`}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={`${product.name} view ${n}`}
                      fill
                      className="object-cover opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{product.brand}</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-slate-400 mb-5">SKU: {product.sku}</p>
              <p className="text-slate-600 leading-relaxed mb-8">{product.shortDescription}</p>

              {/* Applications */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Applications</p>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote CTA */}
              <div className="flex gap-3 flex-wrap">
                <Link
                  href={`/request-quote?product=${encodeURIComponent(product.name)}&sku=${product.sku}`}
                  className="btn-primary px-6 py-3"
                >
                  Request a Quote
                </Link>
                <Link href="/contact" className="btn-outline px-6 py-3">
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16 border-t border-slate-100 pt-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Overview + Specs */}
              <div className="lg:col-span-2 space-y-10">
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="text-xl font-bold text-brand-navy mb-4">Overview</h2>
                  <p className="text-slate-600 leading-relaxed">{product.description}</p>
                </section>

                <section aria-labelledby="specs-heading">
                  <h2 id="specs-heading" className="text-xl font-bold text-brand-navy mb-4">Specifications</h2>
                  <div className="rounded-xl border border-slate-100 overflow-hidden">
                    <table className="w-full text-sm" aria-label={`${product.name} specifications`}>
                      <tbody>
                        {Object.entries(product.specifications).map(([key, val], i) => (
                          <tr key={key} className={i % 2 === 0 ? "bg-brand-light" : "bg-white"}>
                            <th scope="row" className="px-5 py-3 text-left font-medium text-slate-700 w-44">{key}</th>
                            <td className="px-5 py-3 text-slate-600">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section aria-labelledby="docs-heading">
                  <h2 id="docs-heading" className="text-xl font-bold text-brand-navy mb-4">Documents</h2>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors"
                      aria-label="Download product datasheet (PDF)"
                    >
                      <PdfIcon />
                      Product Datasheet
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors"
                      aria-label="Download user manual (PDF)"
                    >
                      <PdfIcon />
                      User Manual
                    </a>
                  </div>
                </section>
              </div>

              {/* Inline quote form */}
              <aside aria-label="Request a quote">
                <div className="sticky top-24 rounded-2xl border border-slate-100 bg-brand-light p-6 shadow-card">
                  <h2 className="text-base font-bold text-brand-navy mb-1">Request a Quote</h2>
                  <p className="text-xs text-slate-500 mb-5">We&apos;ll respond within one business day.</p>
                  <QuoteForm prefillProduct={`${product.name} (${product.sku})`} compact />
                </div>
              </aside>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <section className="mt-20" aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-2xl font-bold text-brand-navy mb-8">Related Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

function PdfIcon() {
  return (
    <svg className="w-4 h-4 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  );
}
