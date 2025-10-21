# Avant Grocery — Shopify Headless Starter

Avant Grocery is a modern headless Shopify storefront scaffolded with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. It ships with server components for product discovery, a persisted Zustand cart, GraphQL helpers, and styled marketing sections inspired by the Avant Grocery concept.

Use this project as the launchpad for a fully-realized Shopify headless build or as a sandbox to explore React Server Components + Shopify Storefront API patterns.

## ✨ Highlights

- **Next.js 14 App Router** setup with server + client component composition.
- **GraphQL storefront utilities** with React cache helpers and a local fallback dataset.
- **Zustand cart state** persisted to `localStorage` with ready-to-wire Add to Cart buttons.
- **Tailwind CSS design system** reflecting the terracotta / sage / teal palette.
- **Accessibility-first UI** including sticky navigation, marquee banner, and animated sections with `prefers-reduced-motion` support.
- **NextAuth stub** wired for future email login integration.
- **ISR utilities** via `/api/revalidate` route and structured environment variable handling.

## 🏁 Getting Started

```bash
pnpm install   # or npm install / yarn install
pnpm dev       # run the Next.js dev server on http://localhost:3000
```

> The first run will use the bundled sample products. Set real Shopify credentials to hydrate from your store.

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and fill in your secrets:

| Variable | Required | Description |
| --- | --- | --- |
| `SHOPIFY_STORE_DOMAIN` | ✅ | `your-store.myshopify.com` domain. |
| `SHOPIFY_STOREFRONT_API_VERSION` | ✅ | Storefront API version (default `2024-01`). |
| `SHOPIFY_STOREFRONT_TOKEN` | ✅ | Storefront API access token. |
| `SHOPIFY_ADMIN_TOKEN` | ➖ | Optional Admin API token for write operations. |
| `REVALIDATE_SECRET` | ➖ | Secret for `/api/revalidate` route. |
| `NEXTAUTH_SECRET` | ➖ | Secret for NextAuth JWT encryption. |
| `NEXTAUTH_URL` | ➖ | Base URL for NextAuth callbacks in production. |
| `AUTH_EMAIL_FROM` | ➖ | Sender email for the stubbed email provider. |

## 🧱 Project Structure

```
src/
  app/
    (storefront)/
      page.tsx                    # Main landing page composition
      layout.tsx                  # Header + footer shell
      cart/page.tsx               # Cart page with Zustand client bridge
      products/[handle]/page.tsx  # Product detail route (RSC)
      collections/[handle]/page.tsx
    api/
      auth/[...nextauth]/route.ts # NextAuth email provider stub
      revalidate/route.ts         # ISR web hook endpoint
  components/                     # Shared UI primitives
  features/                       # Domain-focused UI (marketing, product, cart)
  lib/                            # Shopify helpers, formatters, env parsing
  state/                          # Zustand cart store + hooks
  data/                           # Local sample dataset fallback
public/images/                    # Palette-aligned SVG placeholders
```

## 🛠️ Development Workflow

- **Styling**: Tailwind with CSS variables and custom keyframes in `tailwind.config.ts`.
- **State**: Use the `useCart()` hook from `src/state/cart-store.tsx` for cart interactions.
- **Data fetching**: Server components call helpers in `src/lib/shopify/product.ts`.
- **Incremental Static Regeneration**: Trigger via `fetch('/api/revalidate', { method: 'POST' })` with `x-revalidate-secret`.
- **Authentication**: Extend the NextAuth route with your providers when ready.

## 🚀 Roadmap Suggestions

1. Connect live Shopify products by swapping the sample dataset with Storefront API responses.
2. Replace the NextAuth email stub with OAuth or magic-link providers.
3. Implement Shopify cart mutations or checkout URL redirect for real transactions.
4. Add automated tests (Playwright for flows, Vitest for utilities) once business logic grows.

---

Crafted as a reference implementation for headless Shopify builds. Happy melting! 🧀
