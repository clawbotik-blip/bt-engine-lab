import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About BT Engine Lab — Life Science Equipment Supplier",
  description:
    "BT Engine Lab LLC was founded to provide life science researchers with reliable, precision lab equipment and expert procurement support. Based in Woodland Hills, CA.",
};

const values = [
  {
    title: "Quality",
    description: "We carry only vendor-vetted products with demonstrated lot-to-lot consistency. Your results depend on your reagents — we take that seriously.",
  },
  {
    title: "Precision",
    description: "Science requires the right tool for the right job. We recommend specifically, not broadly, and we're transparent about instrument capabilities and limitations.",
  },
  {
    title: "Service",
    description: "From pre-sale specification through post-delivery support, we're available to troubleshoot, source documentation, and connect you with manufacturer technical teams.",
  },
  {
    title: "Partnership",
    description: "We think of ourselves as an extension of your procurement team. We track your needs across orders, anticipate supply chain issues, and keep your lab running.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-brand-light border-b border-slate-100 py-14 px-6 md:px-10">
        <div className="container-wide max-w-3xl">
          <SectionHeader
            eyebrow="About Us"
            title="Equipping Discovery Since Day One"
            lede="BT Engine Lab LLC was built on a simple conviction: life science researchers deserve a supplier that understands their science — not just their purchase orders."
          />
        </div>
      </div>

      {/* Founder section */}
      <section className="section-padding" aria-labelledby="founder-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 id="founder-heading" className="text-2xl font-bold text-brand-navy mb-6">Our Founder</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong className="text-brand-navy">Berdia Tsutskiridze</strong> founded BT Engine Lab LLC to bridge the gap between high-quality life science instrumentation and the researchers who need it most — without the friction of traditional supply-chain complexity.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  With a background rooted in life science procurement and a deep appreciation for the demands of academic and biotech research labs, Berdia built BT Engine Lab around a philosophy of expert guidance and genuine partnership.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Every product in our catalog has been evaluated not just for technical specifications, but for real-world performance in demanding research workflows.
                </p>
              </div>
            </div>

            {/* Founder card */}
            <div className="rounded-2xl border border-slate-100 bg-brand-light p-8 shadow-card">
              <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center text-white text-2xl font-bold mb-5">
                BT
              </div>
              <h3 className="font-bold text-brand-navy text-lg">Berdia Tsutskiridze</h3>
              <p className="text-sm text-slate-500 mb-4">Founder & Owner, BT Engine Lab LLC</p>
              <address className="not-italic text-sm text-slate-500 space-y-1">
                <div>6200 Variel Ave, Apt 617</div>
                <div>Woodland Hills, CA 91367</div>
                <div>
                  <a href="tel:+13477773990" className="text-cyan-600 hover:text-cyan-500 transition-colors">
                    (347) 777-3990
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-navy-900" aria-labelledby="mission-heading">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4 text-cyan-400">Our Mission</p>
          <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Equip Your Lab. Accelerate Your Science.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We exist to equip life science researchers with reliable, precision tools that get out of the way of discovery. The best instrument is the one you don&apos;t have to think about — it just works.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" aria-labelledby="values-heading">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Our Values</p>
            <h2 id="values-heading" className="text-3xl font-bold text-brand-navy tracking-tight">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-slate-100 bg-white shadow-card p-6">
                <h3 className="font-bold text-brand-navy mb-3 text-lg">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="section-padding bg-brand-light" aria-labelledby="location-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="location-heading" className="text-2xl font-bold text-brand-navy mb-4">Where We&apos;re Based</h2>
              <p className="text-slate-600 mb-2">
                BT Engine Lab LLC is headquartered in <strong>Woodland Hills, CA</strong> — in the heart of Southern California&apos;s growing biotech corridor.
              </p>
              <p className="text-slate-600 mb-6">
                We serve researchers across the United States and can accommodate special shipping requirements for temperature-sensitive or international orders on request.
              </p>
              <address className="not-italic rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600 space-y-1">
                <div className="font-semibold text-brand-navy">BT Engine Lab LLC</div>
                <div>6200 Variel Ave, Apt 617</div>
                <div>Woodland Hills, CA 91367</div>
                <div><a href="tel:+13477773990" className="text-cyan-600 hover:text-cyan-500 transition-colors">(347) 777-3990</a></div>
              </address>
            </div>
            <div className="space-y-4">
              <Link href="/contact" className="btn-primary block text-center py-3">Contact Us</Link>
              <Link href="/request-quote" className="btn-outline block text-center py-3">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
