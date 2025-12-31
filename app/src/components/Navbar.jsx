import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full max-w-[1200px] bg-white rounded-[50px] md:rounded-[100px] p-[12px] md:p-[20px] pl-[16px] md:pl-[24px] shadow-[0px_1px_4px_0px_#0C0C0D0D] mb-4 md:mb-0">
      <div>
        <Image src="/logo.svg" alt="logo" height={34} width={104} className="h-[24px] md:h-[34px] w-auto" />
      </div>
      <div className="hidden md:flex items-center gap-[16px] tracking-[0px] leaading-[100%] ">
        <div className="text-[#8C97A8] text-[16px] font-medium px-[12px] py-[8px] hover:text-black cursor-pointer transition-all duration-300 ">
          How it Works
        </div>
        <div className="text-[#8C97A8] text-[16px] font-medium px-[12px] py-[8px] hover:text-black cursor-pointer transition-all duration-300 ">
          Pricing
        </div>
        <div className="text-[#8C97A8] text-[16px] font-medium px-[12px] py-[8px] hover:text-black cursor-pointer transition-all duration-300 ">
          Use Case
        </div>
        <div className="text-[#8C97A8] text-[16px] font-medium px-[12px] py-[8px] hover:text-black cursor-pointer transition-all duration-300 ">
          FAQ
        </div>
      </div>
      <div className="relative text-[14px] md:text-[16px] font-medium px-[14px] md:px-[18px] py-[8px] md:py-[11px] rounded-[50px] text-white leading-[120%] bg-[#007AFF] cursor-pointer overflow-hidden group hover:bg-white hover:shadow-[2px_2px_12px_0px_#00000028] transition-all duration-300 ease-in-out">
        <div className="absolute top-0 right-0 w-[150%] h-full bg-white rounded-[50px] transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
        <span className="relative z-10 group-hover:text-[#007AFF] transition-colors duration-700">
          <span className="hidden md:inline">Contact Saless</span>
          <span className="md:hidden">Contact</span>
        </span>
      </div>
    </div>
  );
}
