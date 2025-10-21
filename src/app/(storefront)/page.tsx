import { HeroSection } from "@/features/marketing/hero";
import { NewsletterSection } from "@/features/marketing/newsletter";
import { EditorialSection } from "@/features/marketing/editorial";
import { PressSection } from "@/features/marketing/press";
import { RecipesSection } from "@/features/marketing/recipes";
import { ProductGridSection } from "@/features/product/product-grid";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductGridSection />
      <RecipesSection />
      <EditorialSection />
      <PressSection />
      <NewsletterSection />
    </main>
  );
}
