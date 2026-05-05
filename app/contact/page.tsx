"use client";

import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name:    z.string().min(1, "Name is required"),
  org:     z.string().optional(),
  email:   z.string().email("Enter a valid email address"),
  phone:   z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactData = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactData, string>>;

export default function ContactPage() {
  const [values, setValues] = useState<ContactData>({
    name: "", org: "", email: "", phone: "", message: "",
  });
  const [errors, setErrors]   = useState<FieldErrors>({});
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");

  function set(field: keyof ContactData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((er) => ({ ...er, [field]: undefined }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fe: FieldErrors = {};
      for (const issue of result.error.issues) {
        fe[issue.path[0] as keyof ContactData] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="bg-brand-light border-b border-slate-100 py-14 px-6 md:px-10">
        <div className="container-wide">
          <p className="eyebrow mb-3">Get in Touch</p>
          <h1 className="text-4xl font-bold text-brand-navy tracking-tight">Contact Us</h1>
          <p className="mt-3 text-slate-500 max-w-xl">
            Whether you have a product question, a quote request, or just want to talk through your lab needs — we&apos;re here.
          </p>
        </div>
      </div>

      <div className="container-wide mt-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form — 3 columns */}
          <section className="lg:col-span-3" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="text-xl font-bold text-brand-navy mb-6">Send a Message</h2>

            {status === "success" ? (
              <div className="rounded-xl bg-cyan-50 border border-cyan-200 p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Message Sent</h3>
                <p className="text-slate-600 text-sm">We&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input id="name" type="text" autoComplete="name" className="form-input" value={values.name} onChange={set("name")} aria-describedby={errors.name ? "name-err" : undefined} />
                    {errors.name && <p id="name-err" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="org" className="form-label">Organization</label>
                    <input id="org" type="text" autoComplete="organization" className="form-input" value={values.org} onChange={set("org")} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-email" className="form-label">Email *</label>
                    <input id="c-email" type="email" autoComplete="email" className="form-input" value={values.email} onChange={set("email")} aria-describedby={errors.email ? "c-email-err" : undefined} />
                    {errors.email && <p id="c-email-err" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="form-label">Phone</label>
                    <input id="c-phone" type="tel" autoComplete="tel" className="form-input" value={values.phone} onChange={set("phone")} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea id="message" rows={6} className="form-input resize-none" placeholder="How can we help?" value={values.message} onChange={set("message")} aria-describedby={errors.message ? "message-err" : undefined} />
                  {errors.message && <p id="message-err" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-600">Something went wrong — please try again or call us directly.</p>
                )}
                <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center py-3 disabled:opacity-60">
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </section>

          {/* Info — 2 columns */}
          <aside className="lg:col-span-2 space-y-6" aria-label="Contact information">
            <div className="rounded-2xl border border-slate-100 bg-brand-light p-6 shadow-card">
              <h3 className="font-bold text-brand-navy mb-4">Contact Information</h3>
              <address className="not-italic space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <LocationIcon />
                  <div className="text-slate-600">
                    <div>BT Engine Lab LLC</div>
                    <div>6200 Variel Ave, Apt 617</div>
                    <div>Woodland Hills, CA 91367</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon />
                  <a href="tel:+13477773990" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    (347) 777-3990
                  </a>
                </div>
              </address>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-400">Business hours</p>
                <p className="text-sm text-slate-600 mt-1">Monday – Friday, 9:00 AM – 6:00 PM PT</p>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6">
              <h3 className="font-bold text-brand-navy mb-2">Need a Quote Instead?</h3>
              <p className="text-sm text-slate-600 mb-4">Use our dedicated quote form for product inquiries — it routes directly to our procurement team.</p>
              <a href="/request-quote" className="btn-primary text-sm block text-center py-2.5">Request a Quote</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
