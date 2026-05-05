import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Lab Equipment Services — Consultation, Outfitting & Support",
  description:
    "BT Engine Lab offers lab outfitting, equipment consultation, procurement support, and post-sale technical support for life science research teams.",
};

const services = [
  {
    title: "Lab Outfitting & Setup",
    description:
      "Standing up a new lab? We help you plan, source, and configure your entire instrument and consumable setup — from centrifuges and thermal cyclers to specialized proteomics platforms. We work within your budget and your timeline.",
    bullets: [
      "Needs assessment and equipment list generation",
      "Vendor comparison and selection",
      "Coordinated multi-vendor delivery and installation scheduling",
      "First-purchase consumable stocking",
    ],
  },
  {
    title: "Equipment Consultation & Speccing",
    description:
      "Not sure whether your workflow needs a nano-LC or UHPLC front-end? Whether you need a Q-TOF or an Orbitrap? We translate your scientific goals into instrument specifications — honestly, not just based on margin.",
    bullets: [
      "Workflow-specific instrument recommendations",
      "Head-to-head comparison of candidate platforms",
      "Budget-range alternatives",
      "Reference contacts at peer institutions using similar setups",
    ],
  },
  {
    title: "Procurement Support",
    description:
      "Institutional procurement is slow. We know. We work within your purchase-order and grant-billing systems, provide detailed quotes in the format your department requires, and track orders so you don't have to.",
    bullets: [
      "PO-based billing and institutional invoicing",
      "Grant-compliant quote documentation",
      "Order tracking and delivery confirmation",
      "Volume pricing and bundled order negotiations",
    ],
  },
  {
    title: "Post-Sale Technical Support",
    description:
      "When something doesn't work as expected, you need answers fast. We connect you directly with manufacturer technical teams and, where possible, troubleshoot with you before escalating.",
    bullets: [
      "Dedicated post-sale contact",
      "Warranty claim and RMA coordination",
      "Direct manufacturer escalation",
      "Preventive maintenance scheduling assistance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-navy py-20 px-6 md:px-10">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow mb-4 text-cyan-400">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            More Than a Catalog
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            BT Engine Lab is a specialist supplier and procurement partner — not just a webstore. We offer hands-on consultation, lab outfitting, and ongoing technical support.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="section-padding" aria-labelledby="services-heading">
        <div className="container-wide">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={service.title} className="rounded-2xl border border-slate-100 bg-white shadow-card p-8">
                <div className="w-8 h-8 rounded-md bg-navy-900 text-cyan-400 flex items-center justify-center text-sm font-bold mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-5 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-cyan-500/15 text-cyan-600 flex items-center justify-center">
                        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                          <polyline points="1.5 5 4 7.5 8.5 2.5"/>
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-light" aria-label="Service CTA">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <SectionHeader
            eyebrow="Get Started"
            title="Ready to Work Together?"
            lede="Tell us about your lab's needs and we'll follow up with a proposal within one business day."
            center
          />
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-3">Contact Us</Link>
            <Link href="/request-quote" className="btn-outline px-8 py-3">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
