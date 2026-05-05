"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Products",  href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services",  href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide flex h-16 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm" aria-label="BT Engine Lab home">
            <LogoMark scrolled={scrolled || !isHome} />
            <span className={`text-base font-bold tracking-tight transition-colors ${scrolled || !isHome ? "text-brand-navy" : "text-white"}`}>
              BT Engine Lab
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                      active
                        ? "text-cyan-500"
                        : scrolled || !isHome
                        ? "text-slate-600 hover:text-brand-navy"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/request-quote"
              className="hidden sm:inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:bg-cyan-400 hover:-translate-y-px hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              Request a Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled || !isHome ? "text-brand-navy hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              <span className="sr-only">{menuOpen ? "Close" : "Open"} menu</span>
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-white shadow-xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex h-16 items-center justify-between px-6 border-b border-slate-100">
                <span className="font-bold text-brand-navy">BT Engine Lab</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-md text-slate-500 hover:text-brand-navy hover:bg-slate-100 transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
                <ul className="space-y-1" role="list">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                          pathname.startsWith(link.href)
                            ? "bg-cyan-50 text-cyan-600"
                            : "text-slate-600 hover:text-brand-navy hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-4 border-t border-slate-100">
                <Link
                  href="/request-quote"
                  className="btn-primary w-full justify-center"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark({ scrolled }: { scrolled: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill={scrolled ? "#0B1F3A" : "#06B6D4"} />
      <circle cx="14" cy="10" r="3" fill="white" />
      <circle cx="8"  cy="20" r="2.5" fill="white" fillOpacity="0.7" />
      <circle cx="20" cy="20" r="2.5" fill="white" fillOpacity="0.7" />
      <line x1="14" y1="13" x2="8"  y2="17.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="14" y1="13" x2="20" y2="17.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="8"  y1="20" x2="20" y2="20"   stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="16" y1="4" x2="4"  y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="17" y2="6"  stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="15" y1="3" x2="3"  y2="15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
