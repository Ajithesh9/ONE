import icon from "../assets/icon.png";

export const Logo = () => {
  return (
    <div className="relative text-[0px] caret-transparent h-full leading-[0px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] after:accent-auto after:caret-transparent after:text-sky-950 after:inline-block after:text-[0px] after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[0px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:align-middle after:visible after:w-0 after:border-separate after:font-poppins">
      <a
        href="https://www.airdroid.com/"
        className="text-blue-700 bg-no-repeat bg-contain caret-transparent inline-block h-8 align-middle w-[200px] bg-[position:left_50%] m-auto"
      >
        <img
          src="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/logo_bz-white@2x-7be3df0327.png"
          alt="logo"
          className="caret-transparent hidden max-h-full"
        />
        <img src={icon} alt="logo" className="caret-transparent max-h-full" />
      </a>
    </div>
  );
};
