import { HeroSection } from "@/sections/HeroSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { CompatibilitySection } from "@/sections/CompatibilitySection";
import { StepsSection } from "@/sections/StepsSection";
import { FAQSection } from "@/sections/FAQSection";
import { VideosSection } from "@/sections/VideosSection";
import { CTASection } from "@/sections/CTASection";

export const Main = () => {
  return (
    <main className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
      <div className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
        <HeroSection />
        <FeaturesSection />
        <CompatibilitySection />
        <StepsSection />
        <FAQSection />
        <VideosSection />
        <CTASection />
      </div>
    </main>
  );
};
