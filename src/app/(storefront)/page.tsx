import { HeroSection } from "@/features/marketing/hero";
import { EditorialSection } from "@/features/marketing/editorial";
import { PressSection } from "@/features/marketing/press";
import { RecipesSection } from "@/features/marketing/recipes";
import { ProductGridSection } from "@/features/product/product-grid";
import { BeltMarquee } from "@/features/marketing/belt";
import { SchoolSection } from "@/features/marketing/school";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BeltMarquee />
      <ProductGridSection />
      <EditorialSection />
      <SchoolSection />
      <RecipesSection />
      <PressSection />
    </main>
  );
}
