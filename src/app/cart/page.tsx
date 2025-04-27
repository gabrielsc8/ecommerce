"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cart";
import { CartItem } from "@/components/CartItem";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function CartPage() {
  const { items, totalQuantity, totalPrice, clearCart } = useCartStore();

  return (
    <div className="">
      <Nav />
      <div className="flex flex-col max-h-screen h-max ">
      <main className="flex-1 max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Seu Carrinho</h2>

        {items.length === 0 ? (
          <p className="text-center">Seu carrinho está vazio.</p> // agora funciona acho
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <p>Quantidade total: {totalQuantity()}</p>
                <p className="text-xl font-semibold">
                  Total: R$ {totalPrice().toFixed(2)}
                </p>
              </div>

              <div className="ml-10 space-x-4">
                <button
                  onClick={clearCart}
                  className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Limpar Carrinho
                </button>

                <Link href="/checkout">
                  <button className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Finalizar Compra
                  </button> 
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
      </div>
      <Footer />
    </div>
  );
}
