'use client';

import Link from "next/link";
import { useStore } from "zustand";

import { useCart } from "@/state/cart-store";

export function CartButton() {
  const store = useCart();
  const itemCount = useStore(store, (state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );
  const subtotal = useStore(store, (state) => state.subtotal());

  return (
    <Link
      href="/cart"
      className="relative flex h-10 min-w-[3rem] items-center justify-center rounded-full border-2 border-ink bg-paper px-3 font-semibold transition hover:-translate-y-0.5 hover:bg-mustard"
      aria-label="Open cart"
    >
      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-white">
        {itemCount}
      </span>
      <span className="hidden text-sm sm:inline-block">
        ${subtotal.toFixed(2)}
      </span>
    </Link>
  );
}
