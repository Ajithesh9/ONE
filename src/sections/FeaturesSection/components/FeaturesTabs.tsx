export const FeaturesTabs = () => {
  return (
    <div className="text-sm items-center caret-transparent flex justify-center leading-[21px] mb-10 md:text-base md:leading-6 md:mb-[30px]">
      <div className="text-gray-500 text-base font-semibold items-center self-stretch bg-slate-100 caret-transparent flex justify-center leading-6 min-h-0 min-w-0 text-center w-max mr-2.5 px-5 py-2 rounded-[32px] md:min-h-[auto] md:min-w-[auto] hover:text-zinc-800 hover:bg-blue-50 hover:border-zinc-800">
        <p className="caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Remote Monitoring
        </p>
      </div>
      <div className="text-gray-500 text-base font-semibold items-center self-stretch bg-slate-100 caret-transparent flex justify-center leading-6 min-h-0 min-w-0 text-center w-max mr-2.5 px-5 py-2 rounded-[32px] md:text-zinc-800 md:bg-indigo-50 md:min-h-[auto] md:min-w-[auto] hover:text-zinc-800 hover:bg-indigo-50 hover:border-zinc-800">
        <p className="text-gray-500 caret-transparent min-h-0 min-w-0 md:text-zinc-800 md:min-h-[auto] md:min-w-[auto]">
          Content Monitoring
        </p>
      </div>
      <div className="text-gray-500 text-base font-semibold items-center self-stretch bg-slate-100 caret-transparent flex justify-center leading-6 min-h-0 min-w-0 text-center w-max mr-2.5 px-5 py-2 rounded-[32px] md:min-h-[auto] md:min-w-[auto] hover:text-zinc-800 hover:bg-green-50 hover:border-zinc-800">
        <p className="caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Usage Limits
        </p>
      </div>
      <div className="text-zinc-800 text-base font-semibold items-center self-stretch bg-orange-50 caret-transparent flex justify-center leading-6 min-h-0 min-w-0 text-center w-max mr-2.5 px-5 py-2 rounded-[32px] md:text-gray-500 md:bg-slate-100 md:min-h-[auto] md:min-w-[auto] hover:text-zinc-900 hover:bg-orange-150 hover:border-zinc-800">
        <p className="text-zinc-800 caret-transparent min-h-0 min-w-0 md:text-gray-500 md:min-h-[auto] md:min-w-[auto]">
          Location Tracking
        </p>
      </div>
      <div className="text-gray-500 text-base font-semibold items-center self-stretch bg-slate-100 caret-transparent flex justify-center leading-6 min-h-0 min-w-0 text-center w-max px-5 py-2 rounded-[32px] md:min-h-[auto] md:min-w-[auto] hover:text-zinc-800 hover:bg-pink-50 hover:border-zinc-800">
        <p className="caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          More
        </p>
      </div>
    </div>
  );
};
