import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
      <div className="relative text-white text-sm bg-slate-900 caret-transparent leading-[21px] min-w-0 w-full bottom-0 md:min-w-[1200px]">
        <div className="relative box-border caret-transparent max-w-[1180px] mx-auto pt-12 pb-[88px] px-5 md:pb-[65px]">
          <FooterContent />
          <FooterLinks />
          <FooterBottom />
          <div className="border-t-neutral-700 caret-transparent hidden mt-2 pt-[26px] border-b-white border-x-white border-t">
            <div className="caret-transparent mt-7 mb-[15px]">
              <p className="text-[15px] caret-transparent leading-[27px]">
                © 2011-2025 Sand Studio, Singapore
              </p>
              <p className="text-zinc-400 text-[10px] caret-transparent leading-[15px] max-w-[804px] opacity-70 mt-1">
                Watcher and its related products are developed by Sand Studio.
                They are not sponsored, endorsed, or approved by, or affiliated
                or associated with Google LLC, its Android trademarks, or its
                Android offerings.
              </p>
            </div>
          </div>
        </div>
        <div className="caret-transparent hidden">
          <i className="fixed text-[0px] italic bg-[url('https://cdn1.airdroid.com/assets/img/sprite_2x_default-316b7615b2.png')] bg-no-repeat bg-size-[120px_99.5px] caret-transparent block h-7 leading-[0px] opacity-60 indent-[-9999px] w-7 z-[99] bg-[position:0px_0px] right-5 bottom-[83px] md:right-10 md:bottom-[60px]"></i>
        </div>
      </div>
    </footer>
  );
};
