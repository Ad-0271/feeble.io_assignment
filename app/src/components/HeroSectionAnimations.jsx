import Image from "next/image";

export default function HeroSectionAnimations() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full opacity-0 animate-slide-up-clouds z-10">
        <div className="w-full absolute bottom-0">
          <Image
            src={"cloud-1.svg"}
            alt="cloud-1"
            width={1920}
            height={324}
            className="z-1 w-full absolute bottom-0"
          ></Image>
          <Image
            src={"cloud-2.svg"}
            alt="cloud-2"
            width={1920}
            height={282}
            className="z-2 w-full absolute bottom-0"
          ></Image>
          <Image
            src={"cloud-3.svg"}
            alt="cloud-3"
            width={1920}
            height={175}
            className="z-3 w-full absolute bottom-0"
          ></Image>
          <Image
            src={"cloud-4.svg"}
            alt="cloud-4"
            width={1920}
            height={106}
            className="z-4 w-full absolute bottom-0"
          ></Image>
        </div>
      </div>
      <div className="animate-slide-up absolute top-0 left-0 w-full h-full opacity-0 z-10">
        <Image
          src={"bird-t1.svg"}
          alt="bird-b1"
          width={43}
          height={14}
          className="z-5 absolute top-[26.94%] left-[15.5%] "
        ></Image>
        <Image
          src={"bird-t1.svg"}
          alt="bird-b2"
          width={43}
          height={14}
          className="z-5 absolute top-[30.4%] left-[25.78%] animate-bird-fade-out "
        ></Image>
        <Image
          src={"bird-t1.svg"}
          alt="bird-b3"
          width={43}
          height={14}
          className="z-5 absolute top-[28.2%] right-[24.53%] "
        ></Image>
        <Image
          src={"bird-t1.svg"}
          alt="bird-b4"
          width={43}
          height={14}
          className="z-5 absolute top-[43%] right-[22.44%] animate-bird-fade-out "
        ></Image>

        <Image
          src={"bird-b1.svg"}
          alt="bird-b1"
          width={104}
          height={77}
          className="z-5 absolute bottom-[7.22%] left-[19.37%] hidden md:block "
        ></Image>
        <Image
          src={"bird-b2.svg"}
          alt="bird-b2"
          width={88}
          height={57}
          className="z-5 absolute bottom-[13.15%] left-[34.6%] hidden md:block "
        ></Image>
        <Image
          src={"bird-b3.svg"}
          alt="bird-b3"
          width={129}
          height={55}
          className="z-5 absolute bottom-[6.5%] right-[27.5%] hidden md:block "
        ></Image>
        <Image
          src={"bird-b4.svg"}
          alt="bird-b4"
          width={129}
          height={102}
          className="z-5 absolute bottom-[8.88%] right-[11.15%] hidden md:block "
        ></Image>

        <Image
          src={"bird-b4.svg"}
          alt="bird-b5"
          width={129}
          height={102}
          className="z-5 absolute bottom-[400px] left-[-150px] fly-bird-from-left-to-right "
        ></Image>
        <Image
          src={"bird-b3.svg"}
          alt="bird-b6"
          width={129}
          height={55}
          className="z-5 absolute bottom-[300px] right-[-150px] fly-bird-from-right-to-left "
        ></Image>
      </div>
    </>
  );
}
