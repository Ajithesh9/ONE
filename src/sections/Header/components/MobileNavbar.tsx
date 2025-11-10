export const MobileNavbar = () => {
  return (
    <div className="fixed text-sky-950 text-sm bg-white shadow-[rgba(128,147,207,0.18)_0px_4px_10px_0px] box-border caret-transparent block leading-[21px] text-center w-full z-[15] top-0 inset-x-0 md:text-base md:hidden md:leading-6">
      <div className="text-sm items-center border-b-gray-100 border-l-sky-950 border-r-sky-950 border-t-sky-950 caret-transparent flex h-[60px] justify-between leading-[21px] px-4 border-b md:text-base md:leading-6">
        <div className="relative text-[0px] caret-transparent h-full leading-[0px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0 after:accent-auto after:caret-transparent after:text-sky-950 after:inline-block after:text-[0px] after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:align-middle after:visible after:w-0 after:border-separate after:font-poppins">
          <a
            href="https://www.airdroid.com/"
            className="text-blue-700 bg-no-repeat bg-size-[auto_100%] caret-transparent inline-block h-[33px] align-middle w-[140px] bg-[position:left_50%] m-auto"
          >
            <img
              src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/logo_bz-white@2x-7be3df0327.png"
              alt="logo"
              className="caret-transparent hidden max-h-full"
            />
            <img
              src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/logo_blue@2x-3c8f9f35c6.png"
              alt="logo"
              className="caret-transparent max-h-full"
            />
          </a>
        </div>
        <div className="text-sm items-center caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
          <a
            href="javascript://void(0)"
            className="relative text-blue-700 text-sm caret-transparent block h-3 leading-[21px] min-h-[auto] min-w-[auto] w-[22px] ml-3 md:text-base md:leading-6 md:min-h-0 md:min-w-0"
          >
            <span className="absolute text-sm bg-sky-950 caret-transparent block h-0.5 leading-[21px] w-[22px] rounded-[1px] top-0 md:text-base md:leading-6"></span>
            <span className="absolute text-sm bg-sky-950 caret-transparent block h-0.5 leading-[21px] w-[22px] rounded-[1px] top-1.5 md:text-base md:leading-6"></span>
            <span className="absolute text-sm bg-sky-950 caret-transparent block h-0.5 leading-[21px] w-[22px] rounded-[1px] right-0 top-3 md:text-base md:leading-6"></span>
          </a>
        </div>
      </div>
    </div>
  );
};
