import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <div className="pt-20">
        <Products />
      </div>
      <Footer />
    </main>
  );
}
