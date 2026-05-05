"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { categories } from "@/lib/products";

const priceTiers = [
  { value: "under-5k",  label: "Under $5,000" },
  { value: "5k-20k",   label: "$5,000 – $20,000" },
  { value: "20k-50k",  label: "$20,000 – $50,000" },
  { value: "over-50k", label: "Over $50,000" },
];

const applications = [
  "Proteomics",
  "Genomics",
  "Cell Biology",
  "Biochemistry",
  "Clinical Research",
  "Drug Discovery",
];

export default function FilterSidebar() {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const current      = searchParams.get("category") ?? "";
  const currentPrice = searchParams.get("price") ?? "";
  const currentApp   = searchParams.get("application") ?? "";

  function navigate(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <aside aria-label="Product filters" className="space-y-8">
      {/* Category */}
      <section aria-labelledby="filter-category">
        <h3 id="filter-category" className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
          Category
        </h3>
        <ul className="space-y-1" role="list">
          {categories.map((cat) => {
            const active = current === cat.slug;
            return (
              <li key={cat.slug}>
                <button
                  onClick={() => navigate("category", cat.slug)}
                  aria-pressed={active}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    active
                      ? "bg-cyan-50 text-cyan-600 font-medium"
                      : "text-slate-600 hover:text-brand-navy hover:bg-slate-50"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Application */}
      <section aria-labelledby="filter-application">
        <h3 id="filter-application" className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
          Application
        </h3>
        <ul className="space-y-1" role="list">
          {applications.map((app) => {
            const slug   = app.toLowerCase().replace(/\s/g, "-");
            const active = currentApp === slug;
            return (
              <li key={app}>
                <button
                  onClick={() => navigate("application", slug)}
                  aria-pressed={active}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    active
                      ? "bg-cyan-50 text-cyan-600 font-medium"
                      : "text-slate-600 hover:text-brand-navy hover:bg-slate-50"
                  }`}
                >
                  {app}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Price */}
      <section aria-labelledby="filter-price">
        <h3 id="filter-price" className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
          Price Tier
        </h3>
        <ul className="space-y-1" role="list">
          {priceTiers.map((tier) => {
            const active = currentPrice === tier.value;
            return (
              <li key={tier.value}>
                <button
                  onClick={() => navigate("price", tier.value)}
                  aria-pressed={active}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    active
                      ? "bg-cyan-50 text-cyan-600 font-medium"
                      : "text-slate-600 hover:text-brand-navy hover:bg-slate-50"
                  }`}
                >
                  {tier.label}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Clear */}
      {(current || currentPrice || currentApp) && (
        <button
          onClick={() => router.push(pathname)}
          className="w-full text-xs font-medium text-slate-400 hover:text-brand-navy transition-colors py-2 border-t border-slate-100"
        >
          Clear all filters
        </button>
      )}
    </aside>
  );
}
