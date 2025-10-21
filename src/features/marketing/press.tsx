import { ViewportFadeIn } from "@/components/viewport-fade-in";

const pressTiles = [
  {
    heading: "“1970s nostalgia meets the future of pantry.”",
    meta: "— Someone trustworthy"
  },
  {
    heading: "Small producers first",
    meta: "We partner with independent growers and share the upside."
  },
  {
    heading: "No cow. Big melt.",
    meta: "The texture you want, without the moo."
  }
];

export function PressSection() {
  return (
    <section
      id="press"
      className="border-b-2 border-ink bg-[#FFCFA7] py-16"
      aria-labelledby="press-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <ViewportFadeIn>
          <h2 id="press-heading" className="text-3xl font-black text-ink sm:text-4xl">
            As seen (and loved) in
          </h2>
        </ViewportFadeIn>
        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr_1fr]">
          {pressTiles.map((tile, index) => (
            <ViewportFadeIn key={tile.heading} delay={index * 100}>
              <article className="h-full rounded-3xl border-2 border-ink bg-paper p-6 shadow-[6px_6px_0_0_#0E0A08]">
                <h3 className="text-xl font-black text-ink">{tile.heading}</h3>
                <p className="mt-4 font-mono text-xs uppercase text-ink/70">
                  {tile.meta}
                </p>
              </article>
            </ViewportFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
