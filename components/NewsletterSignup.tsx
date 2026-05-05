"use client";

import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email();

export default function NewsletterSignup() {
  const [email,   setEmail]   = useState("");
  const [error,   setError]   = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) { setError("Enter a valid email address."); return; }
    setError("");
    setSuccess(true);
  }

  if (success) {
    return (
      <p className="text-sm text-cyan-400 font-medium">
        ✓ You&apos;re subscribed. Thank you!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Newsletter signup">
      <div className="flex gap-2 max-w-sm">
        <div className="flex-1">
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input
            id="nl-email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            className="block w-full rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-400 backdrop-blur-sm transition-colors focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            aria-describedby={error ? "nl-error" : undefined}
          />
          {error && <p id="nl-error" role="alert" className="mt-1 text-xs text-red-400">{error}</p>}
        </div>
        <button type="submit" className="btn-primary whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </form>
  );
}
