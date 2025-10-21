import { cache } from "react";

import { shopifyRequest } from "@/lib/shopify/client";
import {
  FEATURED_COLLECTION_QUERY,
  PRODUCT_CARD_QUERY,
  PRODUCT_PAGE_QUERY
} from "@/lib/shopify/queries";
import type { Product } from "@/lib/shopify/types";
import { featuredProducts } from "@/data/featured-products";

type ProductQueryResponse = {
  product: Product | null;
};

type FeaturedCollectionResponse = {
  collection: {
    id: string;
    title: string;
    description: string;
    products: {
      nodes: Product[];
    };
  } | null;
};

const FALLBACK_HANDLE = "featured";

const withFallback = <T>(fn: () => Promise<T>, fallback: T) =>
  fn().catch(() => fallback);

export const getProductByHandle = cache(async (handle: string) => {
  return withFallback(async () => {
    const data = await shopifyRequest<ProductQueryResponse>(
      PRODUCT_PAGE_QUERY,
      { handle }
    );
    return data.product ?? null;
  }, featuredProducts.find((product) => product.handle === handle) ?? null);
});

export const getFeaturedProducts = cache(async (handle = FALLBACK_HANDLE) => {
  return withFallback(async () => {
    const data = await shopifyRequest<FeaturedCollectionResponse>(
      FEATURED_COLLECTION_QUERY,
      { handle }
    );
    return data.collection?.products.nodes ?? featuredProducts;
  }, featuredProducts);
});

export const getProductCard = cache(async (handle: string) => {
  return withFallback(async () => {
    const data = await shopifyRequest<ProductQueryResponse>(
      PRODUCT_CARD_QUERY,
      { handle }
    );
    return data.product ?? null;
  }, featuredProducts.find((product) => product.handle === handle) ?? null);
});
