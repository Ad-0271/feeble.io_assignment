import Image from "next/image";
import Navbar from "./src/components/Navbar";
import HeroSectionAnimations from "./src/components/HeroSectionAnimations";
import HeroSection from "./src/components/HeroSection";

export default function Home() {
  
  return (
    <div className="bg-white w-full h-full text-black">
      <div className="w-full font-['General_Sans',sans-serif] tracking-[-2%] h-screen relative overflow-hidden">
        <div className="z-20 w-full bg-[color-mix(in_srgb,white_90%,#007AFF_10%)] h-full flex flex-col items-center">
            <div className="w-full md:w-[87.5%] flex-1 mt-[20px] md:mt-[40px] px-4 md:px-0 flex flex-col justify-start items-center min-h-0 fade-in-the-content opacity-0 relative z-50">
                <Navbar />
                <HeroSection />
                <Image src={'bird-t1.svg'} alt="bird-b1" width={43} height={14} className="z-5 absolute top-[289.02px] left-[22.33%] hidden md:block"></Image>
                <Image src={'bird-t1.svg'} alt="bird-b1" width={43} height={14} className="z-5 absolute top-[425px] right-[18.53%] hidden md:block"></Image>
            </div>
        </div>
        <HeroSectionAnimations />
    </div>
    </div>
  );
}
