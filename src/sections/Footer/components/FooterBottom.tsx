export const FooterBottom = () => {
  return (
    <div className="relative caret-transparent">
      <div className="caret-transparent mt-7 mb-[15px]">
        <p className="text-[15px] caret-transparent leading-[27px]">
          © 2011-2025 Sand Studio, Singapore
        </p>
        <p className="text-zinc-400 text-[10px] caret-transparent leading-[15px] max-w-[804px] opacity-70 mt-1">
          Watcher and its related products are developed by Sand Studio. They
          are not sponsored, endorsed, or approved by, or affiliated or
          associated with Google LLC, its Android trademarks, or its Android
          offerings.
        </p>
      </div>
      <div className="relative bottom-[calc(50%_-_14px)] caret-transparent inline-block text-right z-[11] ml-5 right-2.5 md:absolute md:block md:ml-0">
        <div className="caret-transparent inline-block border px-2.5 rounded-sm border-solid border-white">
          <a
            href="javascript://;"
            className="text-xs caret-transparent h-[25px] leading-[25px]"
          >
            English
          </a>
          <span className="border-b-slate-400 caret-transparent inline-block h-0 w-0 ml-2.5 mb-0.5 border-t-white border-b-[5px] border-x-transparent border-x-4"></span>
        </div>
      </div>
    </div>
  );
};
