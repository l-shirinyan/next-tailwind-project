"use client";
import LoveIcon from "@/assets/love.svg";
import Image from "next/image";
import CheckIcon from "@/assets/check.svg";
import Arrow from "@/assets/arrow.svg";
import user1Img from "@/assets/images/user-1.png";
import Link from "next/link";
import CustomSwiper from "../reusable/swiper/custom-swiper";
import CustomSwiperSlide from "../reusable/swiper/custom-swiper-slide";
import NFTCart from "../reusable/nft-cart";
import { useNft } from "@/api/nfts";

export default function MusicNFTs() {
  const { data } = useNft();

  return (
    <section
      className="container px-5 sm:px-0 flex flex-col md:flex-row justify-between py-20 gap-10"
      aria-labelledby="music-nfts-heading"
    >
      <div className="text-white font-arabic md:w-1/2">
        <div>
          <span className="text-4xl">Music Nfts</span>
          <div className="flex justify-between">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-arabic">
              Macaco NFT Musics.
            </h2>
            <LoveIcon aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl md:text-2xl font-rajdhani">
              Everything You Need To Know About Real Estate Text
            </span>
            <div className="flex gap-2 items-center text-white font-rajdhani">
              <Image
                src={user1Img}
                alt="Profile image"
                width={34}
                height={34}
              />
              <span className="text-base font-semibold">
                Highest bid by Merry Rose
              </span>
              <CheckIcon aria-hidden="true" />
            </div>
            <span className="max-w-[700px] w-full text-xl md:text-3xl lg:text-5xl font-rajdhani block">
              We specialize in web development services and blockchain related
              solutions for businsses.
            </span>
            <button
              aria-label="Start your journey with us"
              className="bg-purpleGradient py-4 md:py-5 flex justify-center px-2 md:px-3 rounded self-center md:self-start max-w-72 w-full"
            >
              <Link className="flex items-center gap-2" href="/">
                <span className="font-arabic text-white text-lg md:text-xl">
                  Let’s Get Started
                </span>
                <Arrow className="w-6" />
              </Link>
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="md:w-1/2 flex justify-end">
        <div className="max-w-[600px] w-full">
          <CustomSwiper
            view={{ desktop: 1.5, laptop: 1, md: 1.5, mobile: 1.3 }}
            space={48}
            aria-live="polite"
          >
            {data?.dataNft.map((nft) => {
              return (
                <CustomSwiperSlide key={nft.id}>
                  <NFTCart key={nft.id} nft={nft} />;
                </CustomSwiperSlide>
              );
            })}
          </CustomSwiper>
        </div>
      </div>
    </section>
  );
}
