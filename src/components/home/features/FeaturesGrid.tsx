import { Code2, Palette, Layers } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function FeaturesGrid() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-center mb-16">
        Crafted for Techies
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Code2 />}
          title="Tech-focused Templates"
          description="Specialized designs for developers, cloud architects, and tech leaders"
        />
        <FeatureCard 
          icon={<Palette />}
          title="Smart Customization"
          description="Easily customize colors, code snippets, and tech stack badges"
        />
        <FeatureCard 
          icon={<Layers />}
          title="Multi-platform Export"
          description="Perfect sizes for LinkedIn, Twitter, Instagram, and more"
        />
      </div>
    </section>
  );
}