import Image from "next/image";

import { ViewportFadeIn } from "@/components/viewport-fade-in";

export function EditorialSection() {
  return (
    <section
      id="story"
      className="border-b-2 border-ink bg-[#FFDCC8] py-16"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <ViewportFadeIn className="rounded-3xl border-2 border-ink bg-teal p-8 text-[#032] shadow-[10px_10px_0_0_#0E0A08]">
          <h2 id="story-heading" className="text-3xl font-black text-[#032] sm:text-5xl">
            Plant dairy, trained like noodles.
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#032]/20 bg-[#032]/10">
            <div className="grid divide-y divide-[#032]/15 text-sm font-bold uppercase tracking-wide">
              <div className="px-5 py-4">🔥 Loves cast iron</div>
              <div className="px-5 py-4">🧲 Clings to noodles</div>
              <div className="px-5 py-4">🎈 Bubbles under broil</div>
              <div className="px-5 py-4">🧂 Salty / Funky / Clean</div>
            </div>
          </div>
        </ViewportFadeIn>
        <ViewportFadeIn delay={120} className="rounded-3xl border-2 border-ink bg-paper shadow-[8px_8px_0_0_#0E0A08]">
          <Image
            src="/images/placeholder-editorial.svg"
            width={720}
            height={460}
            alt="Natural wine and plant dairy pairing"
            className="h-auto w-full border-b-2 border-ink object-cover"
          />
          <div className="space-y-4 p-6 text-ink/80">
            <p>
              We borrow the joy of discovery from pop-up grocery culture and the
              craft of plant science from our friends in the lab. Culture →
              press → brine → fry. That&apos;s the choreography.
            </p>
            <a
              href="/collections/blocks"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-5 py-2 font-black uppercase tracking-wide shadow-[6px_6px_0_0_#0E0A08] transition hover:-translate-y-0.5 hover:bg-mustard"
            >
              Shop Blocks
            </a>
          </div>
        </ViewportFadeIn>
      </div>
    </section>
  );
}
