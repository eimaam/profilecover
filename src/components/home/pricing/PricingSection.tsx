import { PricingCard } from "./PricingCard";

export function PricingSection() {
  return (
    <section className="container mx-auto px-4 py-24 bg-card rounded-3xl">
      <h2 className="text-3xl font-bold text-center mb-16">
        Simple, Transparent Pricing
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard 
          title="Free"
          price="$0"
          features={[
            "5 banner exports per month",
            "Basic templates",
            "Standard customization",
            "720p export quality"
          ]}
          buttonText="Get Started"
          buttonVariant="outline"
        />
        
        <PricingCard 
          title="Lifetime Pro"
          price="$10"
          badge="Best Value"
          features={[
            "Unlimited cover exports",
            "Premium tech templates",
            "Advanced customization",
            "4K export quality",
            "Custom code snippets",
            "Priority support"
          ]}
          buttonText="Get Lifetime Access"
          buttonVariant="default"
        />
      </div>
    </section>
  );
}