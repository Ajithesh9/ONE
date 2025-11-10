export const CompatibilityTabs = () => {
  return (
    <ul className="text-sm bg-slate-100 caret-transparent flex justify-center leading-[21px] min-w-0 w-full m-auto p-[3px] rounded-[32px] md:text-base md:leading-6 md:min-w-[500px] md:w-fit">
      <li className="relative text-blue-500 text-sm items-center caret-transparent flex basis-[0%] grow justify-center leading-[21px] list-none w-60 z-[2] px-2.5 py-[9px] rounded-[32px] md:text-base md:leading-6 md:py-3">
        <picture className="text-[0px] caret-transparent block leading-[0px]">
          <img
            src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_compatibility_android_choose@1-5b3a771189.5x.png"
            alt=""
            className="caret-transparent hidden h-[30px] w-[30px] mr-1.5 md:block"
          />
        </picture>
        <picture className="text-[0px] caret-transparent block leading-[0px]">
          <img
            src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_compatibility_android_nor@1-88836fd9b0.5x.png"
            alt=""
            className="caret-transparent hidden h-[30px] w-[30px] mr-1.5"
          />
        </picture>
        <h3 className="text-sm font-semibold caret-transparent leading-[21px] text-center md:text-lg md:leading-[27px] md:text-start">
          For Kid&#39;s Android
        </h3>
      </li>
      <li className="relative text-gray-700 text-sm items-center caret-transparent flex basis-[0%] grow justify-center leading-[21px] list-none w-60 px-2.5 py-[9px] rounded-[32px] md:text-base md:leading-6 md:py-3 after:accent-auto after:bg-[url('https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_kidnew@1-0d60efb4eb.5x.png')] after:bg-center after:bg-no-repeat after:bg-contain after:caret-transparent after:text-gray-700 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-4 after:tracking-[normal] after:leading-[21px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:translate-x-[-17px] after:visible after:w-[34px] after:border-separate after:left-2/4 after:right-0 after:-top-3 after:font-poppins after:md:bg-[url('https://img-4-cdn.airdroid.com/assets/img/parentalControl/home/pic_new@1-e8bc2935ec.5x.png')] after:md:text-base after:md:h-11 after:md:leading-6 after:md:right-[-60px] after:md:transform-none after:md:w-[104px] after:md:left-auto after:md:top-5">
        <picture className="text-[0px] caret-transparent block leading-[0px]">
          <img
            src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_compatibility_ios_choose@1-beb95d23d2.5x.png"
            alt=""
            className="caret-transparent hidden h-[30px] w-[30px] mr-1.5"
          />
        </picture>
        <picture className="text-[0px] caret-transparent block leading-[0px]">
          <img
            src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_compatibility_ios_nor@1-9fa527f8ef.5x.png"
            alt=""
            className="caret-transparent hidden h-[30px] w-[30px] mr-1.5 md:block"
          />
        </picture>
        <h3 className="text-sm font-semibold caret-transparent leading-[21px] text-center md:text-lg md:leading-[27px] md:text-start">
          For Kid&#39;s iOS
        </h3>
      </li>
    </ul>
  );
};
