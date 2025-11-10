import { DesktopNavbar } from "@/sections/Header/components/DesktopNavbar";
import { MobileNavbar } from "@/sections/Header/components/MobileNavbar";
import { AlternateDesktopNavbar } from "@/sections/Header/components/AlternateDesktopNavbar";
import { AlternateMobileNavbar } from "@/sections/Header/components/AlternateMobileNavbar";


export const Header = () => {
  return (
    <header className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
      <DesktopNavbar />
      <div className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6"></div>
      <MobileNavbar />
      <div className="relative text-sm caret-transparent block h-[60px] leading-[21px] w-full md:text-base md:hidden md:h-[90px] md:leading-6"></div>
      <div className="text-sm caret-transparent hidden leading-[21px] md:text-base md:leading-6"></div>
      <AlternateDesktopNavbar />
      <AlternateMobileNavbar />
    </header>
  );
};

