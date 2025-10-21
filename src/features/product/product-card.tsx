import Image from "next/image";
import Link from "next/link";

import { AddToCartButton } from "@/features/cart/add-to-cart-button";
import { formatMoney } from "@/lib/formatters";
import type { Product } from "@/lib/shopify/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.featuredImage?.url ?? "/images/placeholder-block.svg";
  const alt = product.featuredImage?.altText ?? product.title;
  const price = product.priceRange.min;

  return (
    <article className="group flex h-full flex-col overflow-hidden border-2 border-ink bg-paper shadow-[6px_6px_0_0_#0E0A08] transition hover:-translate-y-1">
      <Link
        href={`/products/${product.handle}`}
        className="relative block aspect-[4/5] overflow-hidden border-b-2 border-ink"
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 90vw"
          className="object-cover transition group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between gap-4 px-4 py-5">
        <div>
          <p className="font-mono text-xs uppercase text-ink/60">
            {product.tags.join(" • ")}
          </p>
          <h3 className="mt-2 text-xl font-bold text-ink">{product.title}</h3>
          <p className="mt-1 text-sm text-ink/70">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-black text-ink">
            {formatMoney(price.amount, price.currencyCode)}
          </span>
          <AddToCartButton
            item={{
              id: product.id,
              title: product.title,
              price: price.amount,
              image: {
                src: imageUrl,
                alt
              },
              quantity: 1,
              variantId: product.variants[0]?.id
            }}
          />
        </div>
      </div>
    </article>
  );
}
