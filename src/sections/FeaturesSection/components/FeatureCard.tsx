export type FeatureCardProps = {
  variant: string;
  backgroundImageUrl: string;
  categoryText: string;
  categoryTextVariant: string;
  contentLayoutVariant: string;
  videoContainerVariant: string;
  videoPosterUrl: string;
  videoSrcUrl: string;
  videoVariant: string;
  textContainerVariant: string;
  title: string;
  description: string;
  listVariant: string;
  features: Array<{
    iconUrl: string;
    text: string;
    linkText: string;
    hasLink: boolean;
    linkUrl?: string;
    hasMoreIcon: boolean;
    moreIconUrl?: string;
    moreIconVariant?: string;
    hasComingSoonBadge: boolean;
    itemVariant: string;
    linkVariant: string;
  }>;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={`relative text-sm bg-no-repeat caret-transparent flex flex-col leading-[21px] mt-auto mx-auto px-[30px] rounded-[20px] md:text-base md:bg-transparent md:flex-row md:leading-6 md:mb-auto md:px-0 md:rounded-none before:accent-auto before:bg-center before:bg-no-repeat before:bg-contain before:caret-transparent before:text-black before:hidden before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:left-[-65px] before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[90px] before:z-[2] before:border-separate before:top-2/4 before:font-poppins before:md:block before:md:text-base before:md:leading-6 after:accent-auto after:bg-center after:bg-no-repeat after:bg-contain after:caret-transparent after:text-black after:hidden after:text-sm after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:right-[-65px] after:text-start after:indent-[0px] after:normal-case after:visible after:w-[90px] after:z-[2] after:border-separate after:top-2/4 after:font-poppins after:md:block after:md:text-base after:md:leading-6 ${props.variant}`}
    >
      <div className="absolute text-sm caret-transparent hidden h-full leading-[21px] w-full left-0 top-0 md:text-base md:block md:leading-6">
        <picture className="text-[0px] caret-transparent leading-[0px]">
          <img
            src={props.backgroundImageUrl}
            alt=""
            className="caret-transparent h-full w-full"
          />
        </picture>
      </div>
      <div className="relative text-sm caret-transparent block leading-[21px] min-h-[auto] min-w-[auto] pr-4 pt-5 pb-2.5 md:static md:text-base md:hidden md:leading-6 md:min-h-0 md:min-w-0 md:pr-0 md:py-0 hover:text-black hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-black">
        <p
          className={`text-sm font-semibold caret-transparent leading-[21px] md:text-black md:text-base md:font-normal md:leading-6 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none ${props.categoryTextVariant}`}
        >
          {props.categoryText}
        </p>
      </div>
      <div
        className={`relative text-sm items-center caret-transparent leading-[21px] z-[2] p-0 md:text-base md:leading-6 md:pt-20 md:pb-[60px] md:px-[70px] ${props.contentLayoutVariant}`}
      >
        <div
          className={`text-sm items-end caret-transparent flex shrink-0 h-full justify-center leading-[21px] max-h-[210px] max-w-[264px] w-full bg-[position:0px_0px] mr-0 mt-2.5 md:text-base md:items-center md:h-[350px] md:leading-6 md:max-h-none md:max-w-none md:w-[440px] md:mr-[60px] md:mt-0 ${props.videoContainerVariant}`}
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            poster={props.videoPosterUrl}
            src={props.videoSrcUrl}
            className={`text-sm caret-transparent h-full leading-[21px] object-cover w-full md:text-base md:leading-6 ${props.videoVariant}`}
          >
            <source
              type="video/mp4"
              className="text-base caret-transparent leading-[normal] font-times_new_roman"
            />
          </video>
        </div>
        <div
          className={`text-sm caret-transparent leading-[21px] md:text-base md:leading-6 ${props.textContainerVariant}`}
        >
          <h3 className="text-zinc-800 text-xl font-semibold caret-transparent leading-[30px] mb-3 md:text-[28px] md:leading-[36.4px] md:mb-5">
            {props.title}
          </h3>
          <p className="text-gray-700 text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
            {props.description}
          </p>
          <ul
            className={`text-sm caret-transparent flex flex-wrap justify-between leading-[21px] mt-3 pl-0 pt-3 md:text-base md:leading-6 md:mt-5 md:pt-5 ${props.listVariant}`}
          >
            {props.features.map((feature, index) => (
              <li
                key={index}
                className={`relative text-sm caret-transparent flex leading-[21px] list-none w-full mb-2 pl-7 md:text-base md:leading-6 md:w-[calc(50%_-_40px)] md:mb-5 md:pl-9 ${feature.itemVariant}`}
              >
                {feature.hasLink ? (
                  <a
                    href={feature.linkUrl}
                    className={`text-sky-600 text-sm caret-transparent flex leading-[21px] md:text-base md:leading-6 ${feature.linkVariant}`}
                  >
                    {feature.iconUrl.includes("ic_remote_screen") ||
                    feature.iconUrl.includes("ic_remote_camera") ||
                    feature.iconUrl.includes("ic_remote_audio") ? (
                      <picture className="text-[0px] caret-transparent block leading-[0px]">
                        <img
                          src={feature.iconUrl}
                          alt=""
                          className="absolute caret-transparent shrink-0 h-6 w-6 left-0 -top-0.5 md:h-8 md:w-8 md:-top-1"
                        />
                      </picture>
                    ) : (
                      <img
                        src={feature.iconUrl}
                        alt=""
                        className="absolute text-sm caret-transparent shrink-0 h-6 leading-[21px] w-6 left-0 -top-0.5 md:text-base md:h-8 md:leading-6 md:w-8 md:-top-1"
                      />
                    )}
                    <p
                      className={`text-gray-700 text-sm caret-transparent leading-[21px] md:text-base md:leading-6 ${feature.itemVariant}`}
                    >
                      {feature.text}
                      {feature.hasMoreIcon && (
                        <span className="text-sm caret-transparent leading-[21px] text-nowrap md:text-base md:leading-6">
                          {feature.linkText}
                          <picture
                            className={`text-[0px] caret-transparent leading-[0px] ${
                              feature.moreIconVariant || "text-nowrap"
                            }`}
                          >
                            <img
                              src={feature.moreIconUrl}
                              alt=""
                              className={
                                feature.moreIconVariant ===
                                "text-[0px] caret-transparent leading-[0px]"
                                  ? "caret-transparent h-2.5 w-[7px]"
                                  : "caret-transparent h-2.5 text-nowrap w-[7px]"
                              }
                            />
                          </picture>
                        </span>
                      )}
                      {feature.hasComingSoonBadge && (
                        <span className="text-sm bg-[url('https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_kidnew@1-0d60efb4eb.5x.png')] bg-no-repeat bg-contain caret-transparent inline-block h-4 leading-[21px] align-middle w-[34px] bg-center ml-1.5 md:text-base md:leading-6"></span>
                      )}
                    </p>
                  </a>
                ) : (
                  <>
                    <img
                      src={feature.iconUrl}
                      alt=""
                      className="absolute text-sm caret-transparent shrink-0 h-6 leading-[21px] w-6 left-0 -top-0.5 md:text-base md:h-8 md:leading-6 md:w-8 md:-top-1"
                    />
                    <p
                      className={`text-gray-700 text-sm caret-transparent leading-[21px] md:text-base md:leading-6 ${feature.itemVariant}`}
                    >
                      <span className="text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
                        {feature.text}
                      </span>
                      {feature.hasComingSoonBadge && (
                        <span className="text-sm bg-[url('https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_kidnew@1-0d60efb4eb.5x.png')] bg-no-repeat bg-contain caret-transparent inline-block h-4 leading-[21px] align-middle w-[34px] bg-center ml-1.5 md:text-base md:leading-6"></span>
                      )}
                    </p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
