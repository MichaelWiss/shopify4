'use client';

import { FormEvent, useState } from "react";

import { ViewportFadeIn } from "@/components/viewport-fade-in";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="border-b-2 border-ink bg-[#FFD8B8] py-16"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <ViewportFadeIn>
          <h2 id="newsletter-heading" className="text-3xl font-black text-ink sm:text-4xl">
            Good emails only
          </h2>
        </ViewportFadeIn>
        <ViewportFadeIn delay={120}>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border-2 border-ink bg-paper px-5 py-3 text-base sm:w-auto sm:min-w-[260px]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-terracotta px-5 py-3 font-black uppercase tracking-wide text-white shadow-[6px_6px_0_0_#0E0A08] transition hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="mt-4 font-mono text-xs uppercase tracking-wide text-ink/70">
              Thanks — you’re on the list.
            </p>
          )}
        </ViewportFadeIn>
      </div>
    </section>
  );
}
