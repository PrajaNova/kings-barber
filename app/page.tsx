import FeaturedServices from "##/components/home/FeaturedServices";
import Hero from "##/components/home/Hero";
import LegacyPreview from "##/components/home/LegacyPreview";
import ProductHighlights from "##/components/home/ProductHighlights";
import Testimonials from "##/components/home/Testimonials";

const Page = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <LegacyPreview />
      <FeaturedServices />
      <ProductHighlights />
      <Testimonials />
    </main>
  );
};

export default Page;
