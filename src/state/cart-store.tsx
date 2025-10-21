'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useRef
} from "react";
import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import type { StateStorage, StoreApi } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: {
    src: string;
    alt?: string;
  };
  quantity: number;
  variantId?: string;
};

export type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: () => number;
};

const createNoopStorage = (): StateStorage => ({
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined
});

const storage: StateStorage =
  typeof window !== "undefined"
    ? {
        getItem: (name: string) => window.localStorage.getItem(name) ?? null,
        setItem: (name: string, value: string) =>
          window.localStorage.setItem(name, value),
        removeItem: (name: string) => window.localStorage.removeItem(name)
      }
    : createNoopStorage();

type CartStore = StoreApi<CartState>;

const CartContext = createContext<CartStore | null>(null);

const createCartStore = () =>
  createStore<CartState>()(
    persist(
      (set, get) => ({
        items: [],
        addItem: (item) => {
          const existing = get().items.find((i) => i.id === item.id);
          if (existing) {
            set({
              items: get().items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              )
            });
            return;
          }
          set({ items: [...get().items, item] });
        },
        removeItem: (id) =>
          set({ items: get().items.filter((i) => i.id !== id) }),
        updateQuantity: (id, quantity) =>
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantity: Math.max(quantity, 1) } : i
            )
          }),
        clearCart: () => set({ items: [] }),
        subtotal: () =>
          get().items.reduce((acc, item) => acc + item.price * item.quantity, 0)
      }),
      {
        name: "avant-cart",
        skipHydration: true,
        storage
      }
    )
  );

export function CartProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<CartStore>();
  if (!storeRef.current) {
    storeRef.current = createCartStore();
  }

  const value = useMemo(() => storeRef.current!, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const store = useContext(CartContext);
  if (!store) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return store;
}
