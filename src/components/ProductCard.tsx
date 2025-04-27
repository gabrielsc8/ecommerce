'use client';

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/cart"

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const addToCart = useCartStore((s) => s.addToCart)
  return (
    <Link
      href={`/product/${id}`}
      className="block border rounded-lg p-4 hover:shadow-lg transition"
    >
      <div className="w-full h-48 relative mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">R$ {price.toFixed(2)}</p>
    </Link>
  );
}
