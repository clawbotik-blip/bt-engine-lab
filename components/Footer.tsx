import Link from "next/link";

const productsLinks = [
  { label: "Lab Equipment",            href: "/products?category=lab-equipment" },
  { label: "Proteomics Instruments",   href: "/products?category=proteomics-instruments" },
  { label: "Chromatography",           href: "/products?category=chromatography" },
  { label: "Mass Spectrometry",        href: "/products?category=mass-spectrometry" },
  { label: "Consumables & Reagents",   href: "/products?category=consumables-reagents" },
  { label: "Sample Prep",              href: "/products?category=sample-prep" },
];

const solutionsLinks = [
  { label: "Proteomics",    href: "/solutions/proteomics" },
  { label: "Genomics",      href: "/solutions/genomics" },
  { label: "Cell Biology",  href: "/solutions/cell-biology" },
  { label: "Biochemistry",  href: "/solutions/biochemistry" },
];

const companyLinks = [
  { label: "About Us",       href: "/about" },
  { label: "Services",       href: "/services" },
  { label: "Resources",      href: "/resources" },
  { label: "Contact",        href: "/contact" },
  { label: "Request a Quote",href: "/request-quote" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" aria-label="Site footer">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-bold text-base">BT Engine Lab</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Precision lab equipment, proteomics instruments, and life science supplies — sourced and supported by researchers, for researchers.
            </p>
            {/* NAP */}
            <address className="not-italic text-sm text-slate-400 space-y-1">
              <div>6200 Variel Ave, Apt 617</div>
              <div>Woodland Hills, CA 91367</div>
              <div>
                <a href="tel:+13477773990" className="hover:text-cyan-400 transition-colors">
                  (347) 777-3990
                </a>
              </div>
            </address>
          </div>

          {/* Products */}
          <nav aria-label="Products links">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Products</h3>
            <ul className="space-y-2" role="list">
              {productsLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Solutions */}
          <nav aria-label="Solutions links">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Solutions</h3>
            <ul className="space-y-2" role="list">
              {solutionsLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Company</h3>
            <ul className="space-y-2" role="list">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BT Engine Lab LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms"          className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml"    className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#06B6D4" />
      <circle cx="14" cy="10" r="3"   fill="white" />
      <circle cx="8"  cy="20" r="2.5" fill="white" fillOpacity="0.7" />
      <circle cx="20" cy="20" r="2.5" fill="white" fillOpacity="0.7" />
      <line x1="14" y1="13" x2="8"  y2="17.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="14" y1="13" x2="20" y2="17.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="8"  y1="20" x2="20" y2="20"   stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    </svg>
  );
}
