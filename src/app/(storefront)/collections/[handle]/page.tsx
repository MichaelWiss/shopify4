import { Metadata } from "next";

import { ProductGrid } from "@/features/product/product-list";
import { getFeaturedProducts } from "@/lib/shopify/product";

type CollectionPageProps = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({
  params
}: CollectionPageProps): Promise<Metadata> {
  const { handle } = await params;
  const title = handle.replace(/-/g, " ");
  return {
    title: title.charAt(0).toUpperCase() + title.slice(1)
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { handle } = await params;
  const products = await getFeaturedProducts(handle);

  return (
    <main className="bg-[#FFE3BC] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-black capitalize text-ink">
          {handle.replace(/-/g, " ")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink/70">
          Server Component example: this page is generated on the server with
          caching via React cache() helper and incremental static regeneration
          at the route level.
        </p>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  );
}
