export const ChatWidget = () => {
  return (
    <div className="fixed text-sm caret-transparent leading-[21px] z-[999999] right-5 bottom-[131px] font-pingfang_sc md:text-base md:leading-6 md:right-10 md:bottom-[108px]">
      <div className="text-sm items-center bg-blue-600 shadow-[rgba(0,0,0,0.22)_0px_2px_10px_0px] box-border caret-transparent flex h-12 justify-center leading-[21px] w-12 rounded-[50%] md:text-base md:leading-6">
        <img
          src="https://Watcher-chatinsight.s3.amazonaws.com/w/ic_ball_2_white@2x.png?_v=1691725094"
          className="text-sm box-border caret-transparent h-8 leading-[21px] max-w-full w-8 rounded-full md:text-base md:leading-6"
        />
      </div>
    </div>
  );
};
