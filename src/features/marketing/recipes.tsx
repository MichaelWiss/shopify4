import Image from "next/image";

import { ViewportFadeIn } from "@/components/viewport-fade-in";

const recipes = [
  {
    title: "Crispy-Edge Baked Ziti",
    description: "Broiled finish for bubbly tops and golden corners.",
    image: "/images/placeholder-recipe-1.svg"
  },
  {
    title: "Weeknight Ramen + Shreds",
    description: "Sticky strands cling to noodles — low effort, high joy.",
    image: "/images/placeholder-recipe-2.svg"
  },
  {
    title: "Sheet-Pan Toast Melts",
    description: "All crunch, no fuss. Tray bake and slice.",
    image: "/images/placeholder-recipe-3.svg"
  }
];

export function RecipesSection() {
  return (
    <section
      id="recipes"
      className="border-y-2 border-ink bg-[#FFD8B6] py-16"
      aria-labelledby="recipes-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <ViewportFadeIn>
          <h2 id="recipes-heading" className="text-3xl font-black text-ink sm:text-4xl">
            Recipes that love a good melt
          </h2>
        </ViewportFadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          {recipes.map((recipe, index) => (
            <ViewportFadeIn key={recipe.title} delay={index * 120}>
              <article className="flex h-full flex-col overflow-hidden border-2 border-ink bg-paper shadow-[8px_8px_0_0_#0E0A08]">
                <div className="relative aspect-[4/3] border-b-2 border-ink">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-xl font-black text-ink">{recipe.title}</h3>
                  <p className="text-sm text-ink/70">{recipe.description}</p>
                </div>
              </article>
            </ViewportFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
