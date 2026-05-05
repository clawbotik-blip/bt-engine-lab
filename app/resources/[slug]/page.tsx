import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Resource Article",
  description: "Technical articles, protocol guides, and buying resources from BT Engine Lab.",
};

export default async function ResourceArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide max-w-3xl">
        <Breadcrumbs crumbs={[{ label: "Resources", href: "/resources" }, { label: "Article" }]} />
        <article aria-labelledby="article-heading">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-4">
            Proteomics Methods
          </span>
          <h1 id="article-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
            Article: {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          <p className="text-slate-400 text-sm mb-10">
            Published by BT Engine Lab · 8 min read
          </p>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">
              This article is a placeholder. Real technical content will be authored here covering relevant life science topics, protocols, instrument comparisons, and buying guidance.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Contact us at <a href="tel:+13477773990" className="text-cyan-600">(347) 777-3990</a> or visit our <Link href="/contact" className="text-cyan-600">contact page</Link> if you have a specific question this article should address.
            </p>
          </div>
        </article>
        <div className="mt-16 rounded-xl border border-slate-100 bg-brand-light p-6">
          <h2 className="font-bold text-brand-navy mb-2">Need the Right Equipment?</h2>
          <p className="text-sm text-slate-500 mb-4">Our team can help you find the right instruments and consumables for your workflow.</p>
          <Link href="/request-quote" className="btn-primary">Request a Quote</Link>
        </div>
      </div>
    </div>
  );
}
