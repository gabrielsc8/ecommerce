import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  clearCart: () => void;
  totalQuantity: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const exists = state.items.find((i) => i.id === product.id);
          if (exists) {
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      increase: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        })),
      decrease: (id) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
      totalQuantity: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: () =>
        get().items.reduce((sum, i) => sum + i.quantity * i.price, 0),
    }),
    {
      name: "ecommerce-cart", // key no localStorage
    }
  )
);
