"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import { FloatingCTA } from "./floating-cta";
import { PageHeader } from "./sections/page-header";
import { HeroSection } from "./sections/hero-section";
import { FinalCallSection } from "./sections/final-call-section";
import { Separator } from "./ui/separator";

const SymptomsSection = dynamic(() => import('./sections/symptoms-section').then(mod => mod.SymptomsSection));
const VideoSection = dynamic(() => import('./sections/video-section').then(mod => mod.VideoSection));
const OfferSection = dynamic(() => import('./sections/offer-section').then(mod => mod.OfferSection));
const ForYouSection = dynamic(() => import('./sections/for-you-section').then(mod => mod.ForYouSection));
const FeaturesSection = dynamic(() => import('./sections/features-section').then(mod => mod.FeaturesSection));
const SensationSection = dynamic(() => import('./sections/sensation-section').then(mod => mod.SensationSection));
const SpecialistSection = dynamic(() => import('./sections/specialist-section').then(mod => mod.SpecialistSection));
const CertificateSection = dynamic(() => import('./sections/certificate-section').then(mod => mod.CertificateSection));
const TestimonialsSection = dynamic(() => import('./sections/testimonials-section').then(mod => mod.TestimonialsSection));
const ValueSection = dynamic(() => import('./sections/value-section').then(mod => mod.ValueSection));
const GuaranteeSection = dynamic(() => import('./sections/guarantee-section').then(mod => mod.GuaranteeSection));
const FaqSection = dynamic(() => import('./sections/faq-section').then(mod => mod.FaqSection));

export function SalesPage() {
  const [isExpired, setIsExpired] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('https://www.ggcheckout.com/checkout/v2/dIRGB2gA0lYsqYANkqqJ');

  useEffect(() => {
    const baseUrl = 'https://www.ggcheckout.com/checkout/v2/dIRGB2gA0lYsqYANkqqJ';
    const searchParams = window.location.search;
    if (searchParams) {
      setCheckoutUrl(`${baseUrl}${searchParams}`);
    }
  }, []);

  const handleTimerEnd = () => {
    setIsExpired(true);
  };

  const handleBuyClick = () => {
    if (!isExpired) {
      window.location.href = checkoutUrl;
    }
  };

  return (
    <div className="fade-in bg-background text-foreground bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,57,53,0.1),rgba(255,255,255,0))]">
      <FloatingCTA disabled={isExpired} onClick={handleBuyClick} />
      <PageHeader />

      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
        <HeroSection />
        <Separator className="my-12 md:my-16" />
        <SymptomsSection />
        <Separator className="my-12 md:my-16" />
        <VideoSection />
        <Separator className="my-12 md:my-16" />
        <OfferSection isExpired={isExpired} onBuyClick={handleBuyClick} />
        <Separator className="my-12 md:my-16" />
        <ForYouSection />
        <Separator className="my-12 md:my-16" />
        <FeaturesSection />
        <Separator className="my-12 md:my-16" />
        <SensationSection />
        <Separator className="my-12 md:my-16" />
        <SpecialistSection />
        <Separator className="my-12 md:my-16" />
        <CertificateSection />
        <Separator className="my-12 md:my-16" />
        <TestimonialsSection />
        <Separator className="my-12 md:my-16" />
        <ValueSection />
        <Separator className="my-12 md:my-16" />
        <GuaranteeSection />
        <Separator className="my-12 md:my-16" />
        <FaqSection />
        <Separator className="my-12 md:my-16" />
        <FinalCallSection isExpired={isExpired} onTimerEnd={handleTimerEnd} onBuyClick={handleBuyClick} />
      </main>
    </div>
  );
}
