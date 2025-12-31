import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col items-center gap-[32px] md:gap-[48px] justify-between flex-1 min-h-0 w-full pt-[32px] md:pt-[64px] pb-[40px] md:pb-[70px] px-4 md:px-0">
        <div className="flex flex-col items-center gap-[32px] md:gap-[48px] max-w-[736px] w-full">
          <div className="flex flex-col gap-[16px] md:gap-[24px] text-center">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-[6px] md:gap-[8px] bg-white rounded-[16px] md:rounded-[20px] px-[6px] md:px-[8px] py-[4px] md:py-[5px]">
                <div className="w-[24px] md:w-[32px] h-[13px] md:h-[17px] rounded-[185px] bg-[#007AFF] flex items-center justify-center gap-[3px] md:gap-[4px]">
                  <div className="w-[2px] md:w-[3px] h-[2px] md:h-[3px] rounded-full bg-white"></div>
                  <div className="w-[2px] md:w-[3px] h-[2px] md:h-[3px] rounded-full bg-white"></div>
                  <div className="w-[2px] md:w-[3px] h-[2px] md:h-[3px] rounded-full bg-white"></div>
                </div>
                <div className="text-[#006FE8] text-[12px] md:text-[16px] leading-[120%] font-medium">
                  #1 iMessage Automation Tool
                </div>
              </div>
            </div>
            <div className="text-[#1D2026] text-[32px] md:text-[48px] lg:text-[64px] leading-[120%] font-bold px-2">
              <span className="text-[#006FE8]">iMessage</span> Automation for
              Teams and AI Workflows.
            </div>
            <div className="text-black text-[14px] md:text-[16px] lg:text-[18px] leading-[130%] px-2">
              Coup lets you, your team, or AI workflows send iMessages directly
              from your phone number, running securely on your Mac or Mac Mini.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-[12px] w-full sm:w-auto">
            <div className="text-[16px] md:text-[18px] font-medium rounded-[50px] text-white bg-[#007AFF] px-[20px] py-[12px] w-full sm:w-auto text-center">
              Get Started
            </div>
            <div className="flex items-center justify-center gap-[12px] px-[20px] py-[12px] rounded-[50px] border-[#6C788F] border-[.7px] w-full sm:w-auto">
              <div>
                <Image
                  src={"mac-logo.svg"}
                  alt="mac-logo"
                  height={22}
                  width={18}
                ></Image>
              </div>
              <div className="w-[18px] rotate-90 border-[#6C788F] border-[.5px]"></div>
              <div className="text-[#1D2026] text-[16px] md:text-[18px] font-medium">
                <span className="hidden sm:inline">Download the Mac app</span>
                <span className="sm:hidden">Download</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[8px]">
          <div className="text-[#1D2026] text-[14px] md:text-[18px] font-medium leading-[130%]">
            Scroll to learn more
          </div>
          <div>
            <Image
              src={"arrow-down.svg"}
              alt="scroll-down"
              height={24}
              width={24}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
