'use client';

import { useTransition } from "react";

import { useCart } from "@/state/cart-store";
import type { CartItem } from "@/state/cart-store";

type AddToCartButtonProps = {
  item: CartItem;
  label?: string;
};

export function AddToCartButton({ item, label = "Quick add" }: AddToCartButtonProps) {
  const store = useCart();
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() =>
        startTransition(() => {
          store.getState().addItem({ ...item, quantity: item.quantity ?? 1 });
        })
      }
      className="rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_0_#0E0A08] transition hover:-translate-y-0.5 hover:bg-mustard disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
    >
      {pending ? "Adding…" : label}
    </button>
  );
}
