import { z } from "zod";

const envSchema = z.object({
  SHOPIFY_STORE_DOMAIN: z.string().min(1),
  SHOPIFY_STOREFRONT_API_VERSION: z.string().default("2024-01"),
  SHOPIFY_STOREFRONT_TOKEN: z.string().min(1),
  SHOPIFY_ADMIN_TOKEN: z.string().optional(),
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().optional()
});

type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | null = null;

export function getEnv(): Env {
  if (cachedEnv) return cachedEnv;

  const parsed = envSchema.safeParse({
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_API_VERSION:
      process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2024-01",
    SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN,
    SHOPIFY_ADMIN_TOKEN: process.env.SHOPIFY_ADMIN_TOKEN,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  });

  if (!parsed.success) {
    throw new Error(
      `Missing required Shopify environment variables: ${parsed.error
        .flatten()
        .fieldErrors}`
    );
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}
