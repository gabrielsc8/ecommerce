"use client";

import Image from "next/image";
import { CartItem as CI, useCartStore } from "@/lib/cart";

export function CartItem({ item }: { item: CI }) {
  const { increase, decrease, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="w-24 h-24 relative">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain"
          sizes="100px"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => decrease(item.id)}
            className="cursor-pointer px-2 py-1 border rounded"
          >
            –
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => increase(item.id)}
            className="cursor-pointer px-2 py-1 border rounded"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="cursor-pointer text-red-500 hover:underline"
      >
        Remover
      </button>
    </div>
  );
}
