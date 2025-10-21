import "@/app/globals.css";

import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";

import { Providers } from "@/app/providers";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: {
    default: "Avant Grocery",
    template: "%s · Avant Grocery"
  },
  description:
    "Avant Grocery is a modern headless Shopify storefront custom-built with Next.js 14, Tailwind CSS, and a melty plant-based grocery experience.",
  applicationName: "Avant Grocery",
  authors: [{ name: "Avant Grocery" }],
  keywords: [
    "Shopify",
    "Next.js",
    "Headless Commerce",
    "E-commerce",
    "Tailwind CSS"
  ],
  openGraph: {
    type: "website",
    title: "Avant Grocery",
    description:
      "A headless Shopify experience delivering melty, plant-based pantry goods.",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@avantgrocery"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFE3BC"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="bg-background text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
