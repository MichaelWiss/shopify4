import Image from "next/image";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/features/cart/add-to-cart-button";
import { formatMoney } from "@/lib/formatters";
import { getFeaturedProducts, getProductByHandle } from "@/lib/shopify/product";

type ProductPageProps = {
  params: Promise<{ handle: string }>;
};

export async function generateStaticParams() {
  const products = await getFeaturedProducts();
  return products.map((product) => ({ handle: product.handle }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const primaryImage = product.featuredImage ?? product.media[0] ?? null;
  const price = product.priceRange.min;
  const variant = product.variants[0];

  return (
    <main className="bg-[#FFE3BC] py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
        <div className="grid gap-4">
          {primaryImage && (
            <div className="relative aspect-square overflow-hidden rounded-[32px] border-2 border-ink bg-paper shadow-[10px_10px_0_0_#0E0A08]">
              <Image
                src={primaryImage.url}
                alt={primaryImage.altText ?? product.title}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          )}
          {product.media.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {product.media.slice(1, 4).map((media, index) => (
                <div
                  key={media.url ?? index}
                  className="relative aspect-square overflow-hidden rounded-2xl border-2 border-ink"
                >
                  <Image
                    src={media.url}
                    alt={media.altText ?? product.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-6 rounded-[32px] border-2 border-ink bg-paper p-8 shadow-[10px_10px_0_0_#0E0A08]">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase text-terracotta">
              {product.tags.join(" • ")}
            </p>
            <h1 className="text-4xl font-black text-ink">{product.title}</h1>
            <p className="text-sm text-ink/70">{product.description}</p>
          </div>
          <div>
            <span className="text-3xl font-black text-ink">
              {formatMoney(price.amount, price.currencyCode)}
            </span>
            {variant?.compareAtPrice && (
              <span className="ml-3 text-sm font-semibold text-ink/40 line-through">
                {formatMoney(
                  variant.compareAtPrice.amount,
                  variant.compareAtPrice.currencyCode
                )}
              </span>
            )}
          </div>
          <AddToCartButton
            label="Add to cart"
            item={{
              id: product.id,
              title: product.title,
              price: price.amount,
              image: primaryImage
                ? {
                    src: primaryImage.url,
                    alt: primaryImage.altText ?? product.title
                  }
                : undefined,
              quantity: 1,
              variantId: variant?.id
            }}
          />
          <div className="rounded-2xl border border-ink/30 bg-white/60 p-4">
            <h2 className="text-sm font-semibold uppercase text-ink/60">
              Details
            </h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-ink/70">
              <li>Crafted with Shopify Storefront API data.</li>
              <li>Optimized images via Next.js Image component.</li>
              <li>Client-side cart state powered by Zustand.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
