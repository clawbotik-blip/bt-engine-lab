"use client";

import { useState } from "react";
import { z } from "zod";

const quoteSchema = z.object({
  firstName:     z.string().min(1, "First name is required"),
  lastName:      z.string().min(1, "Last name is required"),
  email:         z.string().email("Enter a valid email address"),
  phone:         z.string().optional(),
  organization:  z.string().min(1, "Organization is required"),
  jobTitle:      z.string().optional(),
  products:      z.string().min(1, "Please describe the products you need"),
  quantity:      z.string().optional(),
  timeline:      z.string().optional(),
  notes:         z.string().optional(),
});

type QuoteData = z.infer<typeof quoteSchema>;
type FieldErrors = Partial<Record<keyof QuoteData, string>>;

interface Props {
  prefillProduct?: string;
  prefillSku?: string;
  compact?: boolean;
}

export default function QuoteForm({ prefillProduct = "", compact = false }: Props) {
  const [values, setValues]   = useState<QuoteData>({
    firstName:    "",
    lastName:     "",
    email:        "",
    phone:        "",
    organization: "",
    jobTitle:     "",
    products:     prefillProduct,
    quantity:     "",
    timeline:     "",
    notes:        "",
  });
  const [errors, setErrors]   = useState<FieldErrors>({});
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");

  function set(field: keyof QuoteData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((er) => ({ ...er, [field]: undefined }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = quoteSchema.safeParse(values);
    if (!result.success) {
      const fe: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof QuoteData;
        fe[key] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(result.data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-cyan-50 border border-cyan-200 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">Quote Request Received</h3>
        <p className="text-slate-600 text-sm max-w-sm mx-auto">
          Thank you — we&apos;ll review your request and follow up within one business day. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Quote request form">
      <div className={compact ? "space-y-4" : "space-y-6"}>
        {/* Name row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="First Name *" error={errors.firstName} id="firstName">
            <input id="firstName" type="text" autoComplete="given-name" className="form-input" value={values.firstName} onChange={set("firstName")} aria-describedby={errors.firstName ? "firstName-err" : undefined} />
          </Field>
          <Field label="Last Name *" error={errors.lastName} id="lastName">
            <input id="lastName" type="text" autoComplete="family-name" className="form-input" value={values.lastName} onChange={set("lastName")} aria-describedby={errors.lastName ? "lastName-err" : undefined} />
          </Field>
        </div>

        {/* Contact row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Email *" error={errors.email} id="email">
            <input id="email" type="email" autoComplete="email" className="form-input" value={values.email} onChange={set("email")} aria-describedby={errors.email ? "email-err" : undefined} />
          </Field>
          <Field label="Phone" error={errors.phone} id="phone">
            <input id="phone" type="tel" autoComplete="tel" className="form-input" value={values.phone} onChange={set("phone")} />
          </Field>
        </div>

        {/* Org row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Organization *" error={errors.organization} id="organization">
            <input id="organization" type="text" autoComplete="organization" className="form-input" value={values.organization} onChange={set("organization")} aria-describedby={errors.organization ? "organization-err" : undefined} />
          </Field>
          <Field label="Job Title" error={errors.jobTitle} id="jobTitle">
            <input id="jobTitle" type="text" autoComplete="organization-title" className="form-input" value={values.jobTitle} onChange={set("jobTitle")} />
          </Field>
        </div>

        {/* Products */}
        <Field label="Products of Interest *" error={errors.products} id="products">
          <textarea
            id="products"
            rows={3}
            className="form-input resize-none"
            placeholder="Product name, catalog number, or describe what you're looking for…"
            value={values.products}
            onChange={set("products")}
            aria-describedby={errors.products ? "products-err" : undefined}
          />
        </Field>

        {/* Quantity + timeline */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Quantities" error={errors.quantity} id="quantity">
            <input id="quantity" type="text" className="form-input" placeholder="e.g. 2 units, 50 mL, bulk" value={values.quantity} onChange={set("quantity")} />
          </Field>
          <Field label="Timeline" error={errors.timeline} id="timeline">
            <select id="timeline" className="form-input" value={values.timeline} onChange={set("timeline")}>
              <option value="">Select…</option>
              <option value="asap">ASAP</option>
              <option value="1-2-weeks">1–2 weeks</option>
              <option value="1-month">Within 1 month</option>
              <option value="flexible">Flexible</option>
            </select>
          </Field>
        </div>

        {/* Notes */}
        <Field label="Additional Notes" error={errors.notes} id="notes">
          <textarea
            id="notes"
            rows={compact ? 2 : 4}
            className="form-input resize-none"
            placeholder="Specific configurations, purity requirements, special shipping needs…"
            value={values.notes}
            onChange={set("notes")}
          />
        </Field>

        {status === "error" && (
          <p role="alert" className="text-sm text-red-600">
            Something went wrong — please try again or email us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "loading" ? "Submitting…" : "Submit Quote Request"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, id, children }: { label: string; error?: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">{label}</label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
