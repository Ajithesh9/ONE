import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";
import { VideoModal } from "@/components/VideoModal";
import { ChatWidget } from "@/components/ChatWidget";

export const App = () => {
  return (
    <body className="text-black text-sm not-italic normal-nums font-normal accent-auto caret-transparent block tracking-[normal] leading-[21px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-poppins md:text-base md:leading-6">
      <div className="relative text-sm caret-transparent hidden leading-[21px] overflow-hidden md:text-base md:leading-6"></div>
      <Header />
      <Main />
      <Footer />
      <VideoModal />
      <div className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6"></div>
      <ChatWidget />
      <div className="fixed text-sm caret-transparent h-full leading-[21px] pointer-events-none w-full z-[9999] left-0 top-0 md:text-base md:leading-6"></div>
      <div className="fixed text-sm caret-transparent h-0 leading-[21px] pointer-events-none w-full z-[9998] left-0 bottom-0 md:text-base md:leading-6"></div>
      <div className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
        <div className="fixed text-sm caret-transparent leading-[21px] z-[9989] left-0 top-0 md:text-base md:leading-6"></div>
        <div className="fixed text-sm caret-transparent leading-[21px] z-[9989] right-0 top-0 md:text-base md:leading-6"></div>
        <div className="fixed text-sm caret-transparent leading-[21px] z-[9989] left-0 bottom-0 md:text-base md:leading-6"></div>
        <div className="fixed text-sm caret-transparent leading-[21px] z-[9989] right-0 bottom-0 md:text-base md:leading-6"></div>
      </div>
    </body>
  );
};
