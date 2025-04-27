// app/product/[id]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/produtos";
import { useCartStore } from "@/lib/cart";
import { Nav } from "@/components/nav";
import { Button } from "@/components/button";
import { Footer } from "@/components/footer";

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();          
  const product = products.find((p) => p.id === id);
  const addToCart = useCartStore((s) => s.addToCart);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-xl">Produto não encontrado.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const HandleCartAdicionar = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    router.push("/cart");               // vai pro cart pq antes nao iakkkk
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 max-w-6xl mx-auto my-10 p-6 shadow-xl border rounded-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Detalhes e botão */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-2xl font-semibold">
              R${product.price.toFixed(2)}
            </p>
            <Button className="cursor-pointer" onClick={HandleCartAdicionar}>
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
