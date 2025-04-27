import { products } from "@/lib/produtos";
import { ProductCard } from "@/components/ProductCard";

export function ProdutoSection() {
    return (
        <div id="produtos" className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mt-12">
                Todos os Produtos
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                ) : (
                    <p className="text-center col-span-full">Nenhum produto encontrado.</p>
                )}
            </div>
        </div>
    );
}