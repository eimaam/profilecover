import { Button } from "@/components/button/button";
import { FeaturesGrid } from "@/components/home/features/FeaturesGrid";
import HowItWorks from "@/components/home/how-it-works";
import { Footer } from "@/components/home/layout/Footer";
import { Header } from "@/components/home/layout/Header";
import { TestimonialsSection } from "@/components/home/testimonials/TestimonialsSection";

const Homepage = () => {
  return (
    <div className="w-full lg:w-screen min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      <div className="bg-secondary">
        <FeaturesGrid />
      </div>
      <HowItWorks />

      <TestimonialsSection />

      <div className="bg-secondary">
        <section className="container mx-auto px-4 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Create Your Tech Banner?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join other tech professionals who are standing out with unique,
              code-inspired banners.
            </p>
            <Button
              className="mx-auto md:text-lg font-semibold"
            >
              Try for Free
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
