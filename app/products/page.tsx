import type { Metadata } from "next";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { products, getCategoryBySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Lab Equipment & Supplies Catalog",
  description:
    "Browse BT Engine Lab's full catalog of lab equipment, proteomics instruments, chromatography systems, mass spectrometry accessories, consumables, and sample prep kits.",
};

interface Props {
  searchParams: Promise<{ category?: string; application?: string; price?: string; q?: string }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const { category, q } = await searchParams;

  const filtered = products.filter((p) => {
    if (category && p.categorySlug !== category) return false;
    if (q) {
      const query = q.toLowerCase();
      return (
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const currentCategory = category ? getCategoryBySlug(category) : null;

  return (
    <div className="pt-24 pb-20">
      {/* Page header */}
      <div className="bg-brand-light border-b border-slate-100 py-10 px-6 md:px-10">
        <div className="container-wide">
          <p className="eyebrow mb-2">Catalog</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            {currentCategory ? currentCategory.name : "All Products"}
          </h1>
          {currentCategory && (
            <p className="mt-3 text-slate-500 max-w-2xl">{currentCategory.description}</p>
          )}
        </div>
      </div>

      <div className="container-wide mt-10">
        {/* Search bar */}
        <form method="get" className="mb-8 flex gap-3 max-w-lg">
          <label htmlFor="q" className="sr-only">Search products</label>
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={q}
            placeholder="Search products, brands, SKUs…"
            className="form-input flex-1"
          />
          <button type="submit" className="btn-primary px-5">Search</button>
        </form>

        <div className="flex gap-10">
          {/* Sidebar */}
          <div className="hidden lg:block w-52 flex-shrink-0">
            <Suspense>
              <FilterSidebar />
            </Suspense>
          </div>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-500 mb-6">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            </p>
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-slate-100 bg-brand-light p-16 text-center">
                <p className="text-slate-500 mb-4">No products match your filters.</p>
                <a href="/products" className="btn-outline text-sm">Clear filters</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
