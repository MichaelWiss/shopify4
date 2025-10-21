import { ViewportFadeIn } from "@/components/viewport-fade-in";
import { ProductCard } from "@/features/product/product-card";
import { getFeaturedProducts } from "@/lib/shopify/product";

export async function ProductGridSection() {
  const products = await getFeaturedProducts();

  return (
    <section
      id="products"
      className="border-b-2 border-ink bg-[#FFD2A3] py-16"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <ViewportFadeIn>
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-terracotta">
              Featured
            </p>
            <h2 id="products-heading" className="text-3xl font-black text-ink sm:text-4xl">
              Featured products
            </h2>
          </div>
        </ViewportFadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ViewportFadeIn key={product.id} delay={index * 80}>
              <ProductCard product={product} />
            </ViewportFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
