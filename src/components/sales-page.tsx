
"use client";

import { HeroSection } from "./sections/hero-section";
import { OfferSection } from "./sections/offer-section";
import { BonusSection } from "./sections/bonus-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { GuaranteeSection } from "./sections/guarantee-section";
import { FinalCallSection } from "./sections/final-call-section";
import { PageHeader } from "./sections/page-header";
import { Separator } from "./ui/separator";

export function SalesPage() {
  const testCheckoutUrl = 'https://www.ggcheckout.com/checkout/v2/dIRGB2gA0lYsqYANkqqJ'; // Placeholder
  const proCheckoutUrl = 'https://www.ggcheckout.com/checkout/v2/dIRGB2gA0lYsqYANkqqJ'; // Placeholder

  return (
    <div className="fade-in">
      <PageHeader />

      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
        <HeroSection />
        <Separator className="my-12 md:my-16" />
        <OfferSection testCheckoutUrl={testCheckoutUrl} proCheckoutUrl={proCheckoutUrl} />
        <Separator className="my-12 md:my-16" />
        <BonusSection />
        <Separator className="my-12 md:my-16" />
        <TestimonialsSection />
        <Separator className="my-12 md:my-16" />
        <GuaranteeSection />
        <Separator className="my-12 md:my-16" />
        <FinalCallSection checkoutUrl={proCheckoutUrl} />
      </main>
    </div>
  );
}
