import { Nav } from "@/components/nav";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/footer";
import { ProdutoSection } from "@/components/ProdutoSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Nav />
        <Carousel />
        <ProdutoSection />
      </main>
      <Footer />
    </div>

  );
}
