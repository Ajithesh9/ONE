import { FeaturesTabs } from "@/sections/FeaturesSection/components/FeaturesTabs";
import { FeaturesCarousel } from "@/sections/FeaturesSection/components/FeaturesCarousel";


export const FeaturesSection = () => {
  return (
    <div className="text-sm caret-transparent leading-[21px] px-0 py-10 md:text-base md:leading-6 md:px-10 md:py-20">
      <div className="text-sm caret-transparent leading-[21px] max-w-[1300px] w-[calc(100%_-_40px)] mx-auto md:text-base md:leading-6 md:w-[calc(100%_-_80px)]">
        <h2 className="text-zinc-800 text-2xl font-semibold caret-transparent tracking-[normal] leading-[31.2px] max-w-[1000px] text-center mb-9 mx-auto md:text-[32px] md:tracking-[1px] md:leading-[41.6px] md:mb-[60px]">
          {" "}
          All-in-1 Protection for Your Kids, Online &amp; Real-Life{" "}
        </h2>
        <div className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
          <div className="text-sm caret-transparent hidden leading-[21px] md:text-base md:block md:leading-6">
            <FeaturesTabs />
          </div>
          <FeaturesCarousel />
        </div>
      </div>
    </div>
  );
};

