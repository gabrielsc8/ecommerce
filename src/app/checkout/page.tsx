"use client";

import { Nav } from "@/components/nav";
import { useCartStore } from "@/lib/cart";
import { useEffect } from "react";
import { Footer } from "@/components/footer";
export default function CheckoutPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <Nav />
      <main className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-2">Obrigado pela sua compra</h1>
        <p>Seu pedido foi processado com sucesso!</p>
      </main>
      <Footer />
    </div>
  );
}
