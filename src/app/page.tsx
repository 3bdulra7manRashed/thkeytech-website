import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { ChallengesSection } from "@/components/home/ChallengesSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = createMetadata({
  title: "الرئيسية | حلول رقمية مبتكرة للمواقع والتطبيقات",
  description: "ذكي تك (TheKey Tech) هي شركة حلول برمجية وتطوير ويب رائدة. نبني مواقع وتطبيقات جوال مخصصة، وحلول أتمتة وذكاء اصطناعي ذكية لتمكين الشركات من التوسع والنمو.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <ServicesPreview />
      <WhyUsSection />
      <FinalCTA />
    </>
  );
}
