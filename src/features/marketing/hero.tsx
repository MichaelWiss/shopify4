import Image from "next/image";
import Link from "next/link";

import { AnimatedMarquee } from "@/components/animated-marquee";
import { ViewportFadeIn } from "@/components/viewport-fade-in";

const heroMarqueePhrases = [
  "Melt",
  "Stretch",
  "Pop",
  "Drip",
  "Cast Iron",
  "Ramen Party",
  "Sheet Pan",
  "Broil",
  "Natural Wine",
  "K-Pastry",
  "Umami",
  "Gouzle"
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-2 border-ink bg-[#FFE3BC]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute -left-10 top-24 hidden h-40 w-40 rounded-full border-2 border-ink bg-teal/20 blur-sm mix-blend-multiply lg:block" />
      <div className="absolute right-0 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full border-2 border-ink bg-mustard/30 blur-sm mix-blend-multiply lg:block" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-14 lg:flex-row lg:items-end lg:gap-16">
        <div className="space-y-6 lg:flex-1">
          <ViewportFadeIn className="inline-flex">
            <span className="inline-flex h-32 w-32 items-center justify-center rounded-full border-2 border-ink bg-white/70 font-mono text-xs font-extrabold uppercase tracking-[0.4em] shadow-[6px_6px_0_0_#0E0A08]">
              No Cow
            </span>
          </ViewportFadeIn>
          <ViewportFadeIn delay={120}>
            <h1
              id="hero-heading"
              className="text-4xl font-black leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl"
            >
              Grocery joy, but make it{" "}
              <span className="rounded-full border-2 border-ink bg-mustard px-4 py-1 text-terracotta shadow-[4px_4px_0_0_#0E0A08]">
                melty
              </span>
              .
            </h1>
          </ViewportFadeIn>
          <ViewportFadeIn delay={200}>
            <p className="max-w-xl text-lg text-ink/80 sm:text-xl">
              Plant dairy engineered for crisp edges, lunar pulls, and weeknight
              noodle chaos. Built on Shopify, delivered with Next.js server
              components.
            </p>
          </ViewportFadeIn>
          <ViewportFadeIn delay={260}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/collections/featured"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-terracotta px-6 py-2 text-lg font-black uppercase text-white shadow-[6px_6px_0_0_#0E0A08] transition hover:-translate-y-0.5"
              >
                Shop the goods
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-2 text-lg font-black uppercase text-ink shadow-[6px_6px_0_0_#0E0A08] transition hover:-translate-y-0.5"
              >
                How it&apos;s made
              </Link>
            </div>
          </ViewportFadeIn>
        </div>
        <ViewportFadeIn delay={180} className="lg:flex-1">
          <div className="overflow-hidden rounded-[24px] border-2 border-ink bg-paper shadow-[10px_10px_0_0_#0E0A08]">
            <Image
              src="/images/placeholder-hero.svg"
              alt="Avant Grocery hero collage"
              width={760}
              height={760}
              priority
              className="h-full w-full object-cover"
            />
            <div className="border-t-2 border-ink bg-paper/80 p-4 font-mono text-sm uppercase">
              From farm to slice — cultured protein trained to behave under
              heat.
            </div>
          </div>
        </ViewportFadeIn>
      </div>
      <AnimatedMarquee phrases={heroMarqueePhrases} density="dense" />
    </section>
  );
}
