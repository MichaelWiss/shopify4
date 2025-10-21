import { Metadata } from "next";

import { CartView } from "@/features/cart/cart-view";

export const metadata: Metadata = {
  title: "Cart"
};

export default function CartPage() {
  return (
    <main className="bg-[#FFE3BC] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <CartView />
      </div>
    </main>
  );
}
