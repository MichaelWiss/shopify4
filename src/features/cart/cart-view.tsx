'use client';

import Image from "next/image";
import Link from "next/link";
import { useStore } from "zustand";

import { formatMoney } from "@/lib/formatters";
import { useCart } from "@/state/cart-store";

export function CartView() {
  const store = useCart();
  const items = useStore(store, (state) => state.items);
  const subtotal = useStore(store, (state) => state.subtotal());
  const removeItem = store.getState().removeItem;
  const clearCart = store.getState().clearCart;

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border-2 border-ink bg-paper p-8 text-center shadow-[8px_8px_0_0_#0E0A08]">
        <h1 className="text-3xl font-black text-ink sm:text-4xl">Your cart is empty</h1>
        <p className="mt-3 text-sm text-ink/70">
          Add some plant-based magic to your cart and melt something tonight.
        </p>
        <Link
          href="/#products"
          className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-ink bg-terracotta px-6 py-2 font-black uppercase tracking-wide text-white shadow-[6px_6px_0_0_#0E0A08]"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_0_#0E0A08]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-ink sm:text-4xl">Cart</h1>
          <button
            type="button"
            onClick={() => clearCart()}
            className="font-mono text-xs uppercase tracking-wide text-ink/60 underline-offset-4 hover:underline"
          >
            Clear cart
          </button>
        </div>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col gap-4 border-b border-ink/20 pb-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl border-2 border-ink bg-paper">
                  {item.image?.src ? (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt ?? item.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-paper text-xs text-ink/50">
                      No image
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-lg font-bold text-ink">{item.title}</p>
                  <p className="font-mono text-xs uppercase text-ink/60">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl font-black text-ink">
                  {formatMoney(item.price * item.quantity)}
                </span>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="font-mono text-xs uppercase tracking-wide text-terracotta underline-offset-4 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-end gap-4 rounded-3xl border-2 border-ink bg-paper p-6 text-right shadow-[8px_8px_0_0_#0E0A08]">
        <span className="font-mono text-xs uppercase text-ink/60">Subtotal</span>
        <span className="text-3xl font-black text-ink">
          {formatMoney(subtotal)}
        </span>
        <p className="text-xs text-ink/50">
          Taxes and shipping calculated at checkout.
        </p>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-mustard px-6 py-3 font-black uppercase tracking-wide text-ink shadow-[6px_6px_0_0_#0E0A08] transition hover:-translate-y-0.5"
          aria-disabled="true"
        >
          Checkout (stub)
        </button>
      </div>
    </div>
  );
}
