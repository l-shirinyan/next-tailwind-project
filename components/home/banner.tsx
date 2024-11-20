import Image from "next/image";
import ScullImg from "@/assets/images/scull.png";
import RoundOne from "@/assets/round-one.svg";
import RoundTwo from "@/assets/round-two.svg";

const txt = "Discover, Collect, And \n Sell Extraordinary Digital Art";

export default function HomeBanner() {
  return (
    <div
      className="bg-gradient bg-no-repeat bg-cover bg-top -mt-[121px]"
      role="banner"
      aria-label="Homepage banner with digital art promotion"
    >
      <div className="container pt-24 flex flex-col items-center px-5 sm:px-0">
        <h1
          className="font-arabic text-3xl md:text-6xl xl:text-8xl text-white max-w-[1271px] m-auto w-full text-center whitespace-pre-line mt-20 sm:mt-24"
          role="heading"
        >
          {txt}
        </h1>
        <div
          className="pt-14 flex justify-between items-end w-full"
          role="region"
          aria-labelledby="banner-content"
        >
          <div
            className="hidden gap-5 items-center mb-9 flex-col md:flex 2xl:flex-row"
            role="group"
            aria-labelledby="left-info"
          >
            <RoundOne className="w-20 lg:w-[111px]" aria-hidden="true" />
            <span
              id="left-info"
              className="max-w-[200px] w-full text-white text-center 2xl:text-start"
            >
              NFTs are Birth Certificates For The Offspring Of Creators
            </span>
          </div>
          <div
            className="max-w-[600px] max-h-[800px] w-full h-full"
            role="img"
            aria-label="A decorative skull image representing best seller art"
          >
            <Image
              src={ScullImg.src}
              alt="Best seller digital art illustration"
              width={400}
              height={400}
              priority
              className="w-full h-full"
            />
          </div>
          <div
            className="hidden gap-5 items-center mb-9 flex-col md:flex 2xl:flex-row"
            role="group"
            aria-labelledby="right-info"
          >
            <RoundTwo className="w-20 lg:w-[111px]" aria-hidden="true" />
            <span
              id="right-info"
              className="max-w-[200px] w-full text-white text-center 2xl:text-start"
            >
              NFTs are Birth Certificates For The Offspring Of Creators
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
