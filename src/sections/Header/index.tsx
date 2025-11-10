import { DesktopNavbar } from "@/sections/Header/components/DesktopNavbar";
import { MobileNavbar } from "@/sections/Header/components/MobileNavbar";
// Removed Alternate*Navbar imports, as they should not be rendered simultaneously.

export const Header = () => {
  return (
    <header className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
      <DesktopNavbar />
      <MobileNavbar />
      {/* The spacer divs that were here should be moved to your main layout file 
        (e.g., App.tsx) to push the <main> content down, 
        since the navbars are 'fixed'.
      */}
    </header>
  );
};