import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
