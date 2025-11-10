export const VideoModal = () => {
  return (
    <div className="fixed text-sm bg-black/80 caret-transparent hidden h-full leading-[21px] overflow-x-hidden overflow-y-auto w-full z-[1050] left-0 top-0 md:text-base md:leading-6">
      <div className="text-sm items-center box-border caret-transparent flex h-full justify-center leading-[21px] max-w-[calc(100%_-_40px)] min-h-[96.5%] w-full mx-auto py-[45px] md:text-base md:leading-6 md:max-w-[calc(100%_-_60px)]">
        <div className="text-sm bg-white box-border caret-transparent flex flex-col leading-[21px] max-w-[946px] w-full p-3 md:text-base md:leading-6 md:p-4">
          <div className="relative text-sm bg-size-[16px_16px] border-b-zinc-300 caret-transparent flex float-right h-6 leading-[21px] w-full z-[8] bg-[position:0px_0px] mb-3 border-b md:text-base md:bg-auto md:h-8 md:leading-6 md:mb-4">
            <img
              src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_video_close@2x-ad9472cbfb.png"
              alt=""
              className="text-sm bg-contain caret-transparent shrink-0 h-5 leading-[21px] w-5 ml-auto md:text-base md:leading-6"
            />
          </div>
          <div className="relative text-sm caret-transparent h-0 leading-[21px] pb-[56.25%] md:text-base md:leading-6 before:accent-auto before:bg-black before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:top-0 before:font-poppins before:md:text-base before:md:leading-6">
            <div className="absolute text-sm bg-black box-border caret-transparent h-full leading-[21px] w-full left-0 top-0 md:text-base md:leading-6"></div>
          </div>
          <div className="text-sm border-t-zinc-300 caret-transparent leading-[21px] text-center mt-3 pt-3 border-t md:text-base md:leading-6 md:mt-4 md:pt-4">
            <a
              href="/download/Watcher-parental-control/"
              className="relative text-white text-base font-semibold bg-blue-500 caret-transparent inline-block leading-6 m-auto px-[30px] py-2.5 rounded-bl rounded-br rounded-tl rounded-tr md:px-[50px] md:py-3 hover:bg-blue-600"
            >
              {" "}
              Try It Free{" "}
            </a>
            <div className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
              <a
                href="/guide/parental-control/"
                className="text-blue-500 text-sm font-semibold caret-transparent inline-block leading-[21px] mt-2.5 md:text-base md:leading-6 after:accent-auto after:bg-[url('https://img-1-cdn.airdroid.com/assets/img/parentalControl/icon/ic_arrow_right_blue@2x-4f564938e2.png')] after:bg-center after:bg-no-repeat after:bg-contain after:caret-transparent after:text-blue-500 after:inline-block after:text-sm after:not-italic after:normal-nums after:font-semibold after:h-[23px] after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:align-middle after:visible after:w-4 after:ml-2 after:border-separate after:font-poppins after:md:text-base after:md:leading-6 after:md:w-[22px] after:md:ml-2.5"
              >
                Tutorial{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
