import { GraphQLClient, RequestDocument, Variables } from "graphql-request";

import { getEnv } from "@/lib/shopify/env";

let client: GraphQLClient | null = null;

function resolveClient() {
  if (client) return client;

  const {
    SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_API_VERSION,
    SHOPIFY_STOREFRONT_TOKEN
  } = getEnv();

  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

  client = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN
    }
  });

  return client;
}

export function getShopifyClient() {
  return resolveClient();
}

export async function shopifyRequest<T>(
  query: RequestDocument,
  variables?: Variables
): Promise<T> {
  const shopify = resolveClient();
  return shopify.request<T>(query, variables);
}
