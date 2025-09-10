
"use client";

import { HeroSection } from "./sections/hero-section";
import { OfferSection } from "./sections/offer-section";
import { BonusSection } from "./sections/bonus-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { GuaranteeSection } from "./sections/guarantee-section";
import { FinalCallSection } from "./sections/final-call-section";
import { PageHeader } from "./sections/page-header";
import { Separator } from "./ui/separator";
import { SymptomsSection } from "./sections/symptoms-section";
import { SensationSection } from "./sections/sensation-section";
import VideoSection from "./sections/video-section";
import SpecialistSection from "./sections/specialist-section";
import { ForYouSection } from "./sections/for-you-section";
import { FeaturesSection } from "./sections/features-section";
import { FaqSection } from "./sections/faq-section";


export function SalesPage() {
  const testCheckoutUrl = 'https://www.ggcheckout.com/checkout/v2/dIRGB2gA0lYsqYANkqqJ'; // Placeholder
  const proCheckoutUrl = 'https://www.ggcheckout.com/checkout/v2/dIRGB2gA0lYsqYANkqqJ'; // Placeholder

  return (
    <div className="fade-in">
      <PageHeader />

      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
        <HeroSection />
        <Separator className="my-12" />
        <SymptomsSection />
        <Separator className="my-12" />
        <SensationSection />
        <Separator className="my-12" />
        <VideoSection videoId="j4z3w2qj5z" />
        <Separator className="my-12" />
        <SpecialistSection />
        <Separator className="my-12" />
        <ForYouSection />
        <Separator className="my-12" />
        <FeaturesSection />
        <Separator className="my-12" />
        <OfferSection testCheckoutUrl={testCheckoutUrl} proCheckoutUrl={proCheckoutUrl} />
        <Separator className="my-12" />
        <BonusSection />
        <Separator className="my-12" />
        <TestimonialsSection />
        <Separator className="my-12" />
        <GuaranteeSection />
        <Separator className="my-12" />
        <FaqSection />
        <Separator className="my-12" />
        <FinalCallSection checkoutUrl={proCheckoutUrl} />
      </main>
    </div>
  );
}
