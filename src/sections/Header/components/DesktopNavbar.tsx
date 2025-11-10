import { Logo } from "@/components/Logo";
import { NavMenu } from "@/sections/Header/components/NavMenu";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const DesktopNavbar = () => {
  return (
    <div className="absolute text-sky-950 text-sm border-l-sky-950 border-r-sky-950 border-t-sky-950 shadow-[rgba(128,147,207,0.18)_0px_4px_10px_0px] box-border caret-transparent hidden h-[90px] leading-[21px] max-w-[2560px] min-w-[1200px] text-center w-full z-[15] bg-[position:0px_0px] m-auto px-10 border-b-white/30 border-b top-0 inset-x-0 md:fixed md:text-base md:flex md:leading-6">
      <Logo />
      <NavMenu />
      <HeaderActions />
    </div>
  );
};