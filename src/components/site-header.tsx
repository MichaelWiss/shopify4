import Link from "next/link";

import { CartButton } from "@/features/cart/cart-button";

const navLinks = [
  { href: "/#products", label: "Shop" },
  { href: "/#story", label: "Story" },
  { href: "/#press", label: "Press" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-gradient-to-r from-[#FFE4AF] via-[#FFD39B] to-[#FFE4AF]">
      <div className="hidden items-center justify-center gap-2 bg-gradient-to-r from-mustard via-terracotta to-teal px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-ink sm:flex">
        <span className="rounded-full border border-ink px-2 py-0.5">New</span>
        Limited edition bundle • Free shipping over $50
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-end gap-2">
          <span className="rounded-xl border-2 border-ink bg-mustard px-3 py-1 text-2xl font-black shadow-[6px_6px_0_0_#0E0A08]">
            AVANT
          </span>
          <span className="text-lg font-black tracking-wide">GROCERY</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent pb-1 transition hover:border-ink"
            >
              {link.label}
            </Link>
          ))}
          <CartButton />
        </nav>
      </div>
    </header>
  );
}
