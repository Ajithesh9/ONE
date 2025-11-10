import { CompatibilityList } from "@/sections/CompatibilitySection/components/CompatibilityList";

export const CompatibilitySection = () => {
  return (
    <div className="relative text-sm bg-[url('https://img-3-cdn.airdroid.com/assets/img/parentalControl/home/bg_compatibility@1-6e13176da5.5x.png')] bg-no-repeat bg-contain caret-transparent leading-[21px] bg-[position:50%_top] py-10 md:text-base md:leading-6 md:py-[100px]">
      <div className="text-sm caret-transparent leading-[21px] max-w-[1300px] w-[calc(100%_-_40px)] mx-auto md:text-base md:leading-6 md:w-[calc(100%_-_80px)]">
        <h2 className="text-zinc-800 text-[22px] font-semibold caret-transparent tracking-[1px] leading-[30px] text-center mb-1.5 md:text-[32px] md:leading-[41.6px] md:mb-2.5">
          Watcher Parental Control Workable Compatibility
        </h2>
        <p className="text-gray-700 text-sm caret-transparent leading-[21px] text-center mb-9 md:text-lg md:leading-[27px] md:mb-[60px]">
          Feature availability varies depending on whether your child is using
          the Android or iOS operating system.
        </p>
        <div className="relative text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
          <div className="absolute text-sm bg-white caret-transparent h-[calc(100%_-_6px)] leading-[21px] translate-y-[-50.0%] w-[168px] rounded-[32px] left-[3px] top-2/4 md:text-base md:leading-6 md:w-[260px] md:left-[340px]"></div>
        </div>
        <CompatibilityList />
      </div>
    </div>
  );
};
