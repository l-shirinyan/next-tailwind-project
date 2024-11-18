import Arrow from "@/assets/arrow.svg";
import Image from "next/image";
import ScullImg from "@/assets/images/scull.png";
import RoundOne from "@/assets/round-one.svg";
import RoundTwo from "@/assets/round-two.svg";
import Link from "next/link";

const txt = "Discover, Collect, And \n Sell Extraordinary Digital Art";

export default function HomeBanner() {
  return (
    <div className="bg-gradient bg-no-repeat bg-cover bg-top -mt-[121px]">
      <div className="container pt-24 flex flex-col items-center px-5 sm:px-0">
        <h1 className="font-arabic text-3xl md:text-6xl xl:text-8xl text-white max-w-[1271px] m-auto w-full text-center whitespace-pre-line mt-20 sm:mt-24">
          {txt}
        </h1>
        <div className="pt-14 flex justify-between items-end w-full">
          <div className="hidden gap-5 items-center mb-9 flex-col md:flex 2xl:flex-row">
            <RoundOne className="w-20 lg:w-[111px]" />
            <span className="max-w-[200px] w-full text-white text-center 2xl:text-start">
              NFTs are Birth Certificates For The Offspring Of Cretors
            </span>
          </div>
          <div className="max-w-[600px] max-h-[800px] w-full h-full">
            <Image
              src={ScullImg.src}
              alt="best seller"
              width={400}
              height={400}
              priority
              className="w-full h-full"
            />
          </div>
          <div className="hidden gap-5 items-center mb-9 flex-col md:flex 2xl:flex-row">
            <RoundTwo className="w-20 lg:w-[111px]" />
            <span className="max-w-[200px] w-full text-white text-center 2xl:text-start">
              NFTs are Birth Certificates For The Offspring Of Cretors
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
