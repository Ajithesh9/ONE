import { FeatureCard } from "@/sections/FeaturesSection/components/FeatureCard";

export const FeaturesCarousel = () => {
  return (
    <div className="relative text-sm caret-transparent leading-[21px] md:text-base md:leading-6">
      <div className="text-sm caret-transparent leading-[21px] max-w-[1180px] m-auto md:text-base md:leading-6">
        <FeatureCard
          variant="bg-blue-50 pb-2.5 mb-3"
          backgroundImageUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/bg_blue@1-1c94a36c23.5x.png"
          categoryText="Remote Monitoring"
          categoryTextVariant="text-zinc-800 hover:text-zinc-900 md:text-black md:font-normal"
          contentLayoutVariant="hidden md:flex"
          videoContainerVariant=""
          videoPosterUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/pic_feature_01@1-08571002fb.5x.png"
          videoSrcUrl="https://img-4-cdn.airdroid.com/assets/video/parentalControl/home/pic_01-64ea781c98.mp4"
          videoVariant=""
          textContainerVariant=""
          title="24/7 Advanced Remote Monitoring"
          description="Stay connected and informed about your kids' Android devices' surroundings and digital activities, ensuring a safer environment and online experience."
          listVariant=""
          features={[
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_remote_screen@1-a2dc4f1a06.5x.png",
              text: "Screen",
              linkText: "Mirroring",
              hasLink: true,
              linkUrl:
                "/parental-control/content-monitoring/?monitoring_online_anchor=0",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant:
                "text-[0px] caret-transparent leading-[0px] text-nowrap",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_remote_camera@1-5d92dc18a5.5x.png",
              text: "Remote",
              linkText: "Camera",
              hasLink: true,
              linkUrl: "/parental-control/surrounding-around-child/",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant:
                "text-[0px] caret-transparent leading-[0px] text-nowrap",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_remote_audio@1-3a8be644e8.5x.png",
              text: "One-way",
              linkText: "Audio",
              hasLink: true,
              linkUrl: "/parental-control/surrounding-around-child/",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant:
                "text-[0px] caret-transparent leading-[0px] text-nowrap",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
          ]}
        />
        <FeatureCard
          variant="bg-indigo-50 mt-auto mb-3 pb-2.5 before:bg-none before:transform-none before:md:bg-[url('https://c.animaapp.com/mhrv5nlwlWHZB6/assets/pic_blue_left@1-59ec96c11f.5x.png')] before:md:translate-y-[-274.891px] after:bg-none after:transform-none after:md:bg-[url('https://c.animaapp.com/mhrv5nlwlWHZB6/assets/pic_green_right@1-be4ed586ec.5x.png')] after:md:translate-y-[-274.891px]"
          backgroundImageUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/bg_purple@1-02995bf728.5x.png"
          categoryText="Content Monitoring"
          categoryTextVariant="text-zinc-800 font-semibold hover:text-zinc-900 hover:border-zinc-800"
          contentLayoutVariant="hidden md:flex min-h-0 min-w-0"
          videoContainerVariant="min-h-0 min-w-0"
          videoPosterUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/pic_feature_02@1-a6dbb0aab4.5x.png"
          videoSrcUrl="https://img-2-cdn.airdroid.com/assets/video/parentalControl/home/pic_02-3d306de4a4.mp4"
          videoVariant="min-h-0 min-w-0"
          textContainerVariant="min-h-0 min-w-0"
          title="Know the Signs & Detect Explicit Content"
          description="Monitor and detect inappropriate content across social media, SMS, and albums in all directions, block unwanted calls/websites automatically, and receive alerts for unusual activity."
          listVariant="border-t-0 md:border-t-indigo-100 border-t-black"
          features={[
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_notifications@1-e21fb1735e.5x.png",
              text: "Sync",
              linkText: "Notifications",
              hasLink: true,
              linkUrl:
                "/parental-control/content-monitoring/?monitoring_online_anchor=2",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant: "text-[0px] caret-transparent leading-[0px]",
              hasComingSoonBadge: false,
              itemVariant: "min-h-0 min-w-0",
              linkVariant: "min-h-0 min-w-0",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_social@1-7382805a8f.5x.png",
              text: "Social Content",
              linkText: "Detection",
              hasLink: true,
              linkUrl: "/parental-control/social-content-monitoring/",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant: "text-[0px] caret-transparent leading-[0px]",
              hasComingSoonBadge: false,
              itemVariant: "min-h-0 min-w-0",
              linkVariant: "min-h-0 min-w-0",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_image@1-bd471ab643.5x.png",
              text: "Inappropriate Image Detection",
              linkText: "",
              hasLink: false,
              hasMoreIcon: false,
              hasComingSoonBadge: true,
              itemVariant: "min-h-0 min-w-0",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_calls@1-982a904901.5x.png",
              text: "Calls",
              linkText: "Filter",
              hasLink: true,
              linkUrl:
                "/parental-control/content-monitoring/?monitoring_online_anchor=3",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant: "text-[0px] caret-transparent leading-[0px]",
              hasComingSoonBadge: true,
              itemVariant: "min-h-0 min-w-0",
              linkVariant: "min-h-0 min-w-0",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_sms@1-804c8534ca.5x.png",
              text: "SMS",
              linkText: "Monitoring",
              hasLink: true,
              linkUrl:
                "/parental-control/content-monitoring/?monitoring_online_anchor=3",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant: "text-[0px] caret-transparent leading-[0px]",
              hasComingSoonBadge: true,
              itemVariant: "min-h-0 min-w-0",
              linkVariant: "min-h-0 min-w-0",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_websafe@1-df7a7e504b.5x.png",
              text: "Web Safe",
              linkText: "Search",
              hasLink: true,
              linkUrl: "/parental-control/kids-safe-search/",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant: "text-[0px] caret-transparent leading-[0px]",
              hasComingSoonBadge: false,
              itemVariant: "min-h-0 min-w-0",
              linkVariant: "min-h-0 min-w-0",
            },
          ]}
        />
        <FeatureCard
          variant="bg-green-50 mb-3 pb-2.5"
          backgroundImageUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/bg_green@1-9b3fb93a6b.5x.png"
          categoryText="Usage Limits"
          categoryTextVariant="text-zinc-800 hover:text-zinc-900 hover:border-zinc-800"
          contentLayoutVariant="hidden md:flex"
          videoContainerVariant=""
          videoPosterUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/transparent-42ea5ba3a8.png"
          videoSrcUrl=""
          videoVariant=""
          textContainerVariant=""
          title="Your Rules, Their Usage"
          description="Easily manage every aspect of your kids’ screen time throughout the day or week, guiding their digital habits simply at your fingertips."
          listVariant=""
          features={[
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_block@1-0129ee514f.5x.png",
              text: "Instant Block",
              linkText: "",
              hasLink: false,
              hasMoreIcon: false,
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_downtime@1-0e165928b6.5x.png",
              text: "Schedule",
              linkText: "Downtime",
              hasLink: true,
              linkUrl: "/parental-control/screen-time-limits/",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant:
                "text-[0px] caret-transparent leading-[0px] text-nowrap",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_applimits@1-739c30c143.5x.png",
              text: "App",
              linkText: "Limits",
              hasLink: true,
              linkUrl: "/parental-control/screen-time-limits/",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant:
                "text-[0px] caret-transparent leading-[0px] text-nowrap",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_appblocker@1-fd6dc22a4e.5x.png",
              text: "App",
              linkText: "Blocker",
              hasLink: true,
              linkUrl: "/parental-control/app-blocker/",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant:
                "text-[0px] caret-transparent leading-[0px] text-nowrap",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_weblimits@1-2f59a6a60a.5x.png",
              text: "Website Limits",
              linkText: "",
              hasLink: false,
              hasMoreIcon: false,
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
          ]}
        />
        <FeatureCard
          variant="bg-orange-50 mb-3 pb-2.5"
          backgroundImageUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/bg_orange@1-9acf862c5c.5x.png"
          categoryText="Location Tracking"
          categoryTextVariant="text-zinc-800 hover:text-zinc-900 hover:border-zinc-800"
          contentLayoutVariant="hidden md:flex"
          videoContainerVariant=""
          videoPosterUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/transparent-42ea5ba3a8.png"
          videoSrcUrl=""
          videoVariant=""
          textContainerVariant=""
          title="Real-time Family Location Tracker"
          description="Stop guessing, worry less. See your kids' current location and past movements in real time. Set geofences and get instant alerts for entries and exits."
          listVariant=""
          features={[
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_location@1-2d2e87d894.5x.png",
              text: "Location",
              linkText: "Tracking",
              hasLink: true,
              linkUrl: "/parental-control/family-locator/#realtime-locator",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant:
                "text-[0px] caret-transparent leading-[0px] text-nowrap",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_route@1-4ab7bd7edc.5x.png",
              text: "Route",
              linkText: "History",
              hasLink: true,
              linkUrl: "/parental-control/family-locator/#route-history",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant:
                "text-[0px] caret-transparent leading-[0px] text-nowrap",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_geofencing@1-06af3695ab.5x.png",
              text: "Geofencing",
              linkText: "",
              hasLink: true,
              linkUrl: "/parental-control/family-locator/#geo-fencing",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant: "text-[0px] caret-transparent leading-[0px]",
              hasComingSoonBadge: false,
              itemVariant: "",
              linkVariant: "",
            },
          ]}
        />
        <FeatureCard
          variant="bg-pink-50 md:bg-transparent md:hidden before:bg-[url('https://img-1-cdn.airdroid.com/assets/img/parentalControl/home/pic_orange_left@1-2d80cfd828.5x.png')] after:bg-[url('https://img-2-cdn.airdroid.com/assets/img/parentalControl/home/pic_blue_right@1-b6990fb9c9.5x.png')] mb-0"
          backgroundImageUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/bg_pink@1-45c0bcc9b4.5x.png"
          categoryText="More"
          categoryTextVariant="text-fuchsia-500 hover:text-fuchsia-600 hover:border-fuchsia-500"
          contentLayoutVariant="flex-col-reverse md:flex-row min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          videoContainerVariant=""
          videoPosterUrl="https://c.animaapp.com/mhrv5nlwlWHZB6/assets/transparent-42ea5ba3a8.png"
          videoSrcUrl=""
          videoVariant="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          textContainerVariant="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          title="Get Detailed Reports & Instant Alerts"
          description="Get full details of your kid's daily/weekly phone usage and better understand your kid's digital habits. Stay connected via family chat and instant alerts."
          listVariant="border-t-pink-100 border-t md:border-t-black md:border-t-0"
          features={[
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_report@1-a226702705.5x.png",
              text: "Activity",
              linkText: "Report",
              hasLink: true,
              linkUrl: "/parental-control/activity-report/",
              hasMoreIcon: true,
              moreIconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_more@1-d52659f84b.5x.png",
              moreIconVariant: "text-[0px] caret-transparent leading-[0px]",
              hasComingSoonBadge: false,
              itemVariant: "min-h-[auto] min-w-[auto]",
              linkVariant: "min-h-[auto] min-w-[auto]",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_alerts@1-53ea8b7a19.5x.png",
              text: "Alerts",
              linkText: "",
              hasLink: false,
              hasMoreIcon: false,
              hasComingSoonBadge: false,
              itemVariant: "min-h-[auto] min-w-[auto]",
              linkVariant: "",
            },
            {
              iconUrl:
                "https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_family@1-34fda31293.5x.png",
              text: "Family Chats",
              linkText: "",
              hasLink: false,
              hasMoreIcon: false,
              hasComingSoonBadge: false,
              itemVariant: "min-h-[auto] min-w-[auto]",
              linkVariant: "",
            },
          ]}
        />
      </div>
      <div className="absolute text-sm items-center caret-transparent hidden h-[42px] justify-between leading-[21px] max-w-[1180px] transform-none w-full z-[2] left-2/4 top-2/4 md:text-base md:flex md:leading-6 md:translate-x-[-50.0%] md:translate-y-[-50.0%]">
        <div className="absolute text-sm bg-[url('https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_arrow_left_nor@1-2767c3070f.5x.png')] bg-no-repeat bg-contain caret-transparent hidden h-[42px] left-[-7px] leading-[21px] transform-none w-[42px] bg-center top-2/4 md:text-base md:block md:leading-6 md:translate-y-[-50.0%]"></div>
        <div className="absolute text-sm bg-[url('https://c.animaapp.com/mhrv5nlwlWHZB6/assets/ic_arrow_right_nor@1-4585f9f01f.5x.png')] bg-no-repeat bg-contain caret-transparent hidden h-[42px] leading-[21px] right-[-7px] transform-none w-[42px] bg-center top-2/4 md:text-base md:block md:leading-6 md:translate-y-[-50.0%]"></div>
      </div>
    </div>
  );
};
