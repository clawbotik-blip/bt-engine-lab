import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Assets — BT Engine Lab",
  description: "Download BT Engine Lab logos and brand assets for all use cases.",
};

const logos = [
  {
    title: "Icon",
    desc: "Google Business, social media avatars, email signature",
    file: "icon.svg",
    bg: "bg-slate-100",
    size: "w-24 h-24",
  },
  {
    title: "Horizontal — Light (for dark backgrounds)",
    desc: "Email footers, dark presentations, dark banners",
    file: "logo-horizontal-light.svg",
    bg: "bg-brand-navy",
    size: "w-72 h-16",
  },
  {
    title: "Horizontal — Dark (for light backgrounds)",
    desc: "Word docs, letterhead, light-background slides",
    file: "logo-horizontal-dark.svg",
    bg: "bg-slate-100",
    size: "w-72 h-16",
  },
  {
    title: "Stacked — Light (for dark backgrounds)",
    desc: "LinkedIn company logo (square format), app stores",
    file: "logo-stacked-light.svg",
    bg: "bg-brand-navy",
    size: "w-36 h-40",
  },
  {
    title: "Stacked — Dark (for light backgrounds)",
    desc: "Print, business cards, white-background marketing",
    file: "logo-stacked-dark.svg",
    bg: "bg-slate-100",
    size: "w-36 h-40",
  },
];

const colors = [
  { name: "Navy", hex: "#0B1F3A", bg: "bg-[#0B1F3A]" },
  { name: "Cobalt", hex: "#1E40AF", bg: "bg-[#1E40AF]" },
  { name: "Cyan", hex: "#06B6D4", bg: "bg-[#06B6D4]" },
  { name: "Light", hex: "#F8FAFC", bg: "bg-[#F8FAFC] border border-slate-200" },
  { name: "Dark", hex: "#0F172A", bg: "bg-[#0F172A]" },
];

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow mb-3">Brand Assets</p>
          <h1 className="text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Logo &amp; Brand Files
          </h1>
          <p className="text-slate-500 max-w-xl">
            Download the correct logo variant for each use case. Use the light version on dark backgrounds and the dark version on light backgrounds.
          </p>
        </div>

        {/* Logo grid */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold text-brand-navy mb-8 border-b border-slate-100 pb-4">Logo Files</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {logos.map((logo) => (
              <div key={logo.file} className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                {/* Preview area */}
                <div className={`${logo.bg} flex items-center justify-center p-8 min-h-[160px]`}>
                  <img
                    src={`/logo/${logo.file}`}
                    alt={logo.title}
                    className={logo.size}
                  />
                </div>
                {/* Info + download */}
                <div className="p-5 bg-white">
                  <p className="font-semibold text-brand-navy text-sm mb-1">{logo.title}</p>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{logo.desc}</p>
                  <a
                    href={`/logo/${logo.file}`}
                    download={logo.file}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                    Download SVG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Auto-generated images note */}
        <section className="mb-20 rounded-2xl bg-slate-50 border border-slate-100 p-8">
          <h2 className="text-xl font-semibold text-brand-navy mb-2">Automatically Generated Images</h2>
          <p className="text-slate-500 text-sm mb-6">These are served automatically by your website — no download needed.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Browser Favicon", url: "/icon.png", desc: "32×32 — shown in browser tabs" },
              { label: "Apple Touch Icon", url: "/apple-icon.png", desc: "180×180 — iPhone home screen" },
              { label: "Social Share Image", url: "/opengraph-image.png", desc: "1200×630 — LinkedIn, iMessage previews" },
            ].map((item) => (
              <div key={item.url} className="bg-white rounded-xl border border-slate-100 p-4">
                <p className="font-medium text-brand-navy text-sm mb-1">{item.label}</p>
                <p className="text-xs text-slate-500 mb-3">{item.desc}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Preview
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Brand colors */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-brand-navy mb-8 border-b border-slate-100 pb-4">Brand Colors</h2>
          <div className="flex flex-wrap gap-4">
            {colors.map((c) => (
              <div key={c.hex} className="flex flex-col items-center gap-2">
                <div className={`w-16 h-16 rounded-xl ${c.bg} shadow-sm`} />
                <p className="text-xs font-semibold text-brand-navy">{c.name}</p>
                <p className="text-xs text-slate-400 font-mono">{c.hex}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Need a different format? Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
