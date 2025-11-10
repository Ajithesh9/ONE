import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <div className="relative text-sm bg-[url('https://img-5-cdn.airdroid.com/assets/img/parentalControl/home/bg_banenr@1-3d17ff4c61.5x.png')] bg-no-repeat bg-cover caret-transparent leading-[21px] bg-bottom md:text-base md:leading-6">
      <div className="relative text-[0px] box-border caret-transparent flex flex-col-reverse leading-[0px] text-center z-[1] pt-0 pb-6 md:text-base md:block md:flex-row md:leading-6 md:pt-[105px] md:pb-[30px]">
        <HeroContent />
      </div>
      <div className="text-sm bg-white caret-transparent flex leading-[21px] md:text-base md:leading-6">
        <picture className="text-[0px] caret-transparent block leading-[0px]">
          <img
            src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/bg_banner_down@1-2132c9bed8.5x.png"
            alt=""
            className="caret-transparent max-w-full"
          />
        </picture>
      </div>
    </div>
  );
};
