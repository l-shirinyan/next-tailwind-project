import HomeBanner from "@/components/home/banner";
import MusicNFTs from "@/components/home/music-nfts";
import TopCollection from "@/components/home/top-collection";
import TopNFTs from "@/components/home/top-nfts";
import { arabic, rajdhani } from "@/fonts/fonts";
import Link from "next/link";
import Arrow from "@/assets/arrow.svg";
import Nfts from "@/components/home/nfts";

export default function Home() {
  return (
    <div className={`${rajdhani.variable} ${arabic.variable}`}>
      <HomeBanner />
      <TopNFTs
        renderRightMenu={() => {
          return (
            <Link className="flex items-center gap-5" href="/nfts">
              <span className="font-rajdhani text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
                View all
              </span>
              <Arrow className="w-10 md:w-[65px]" />
            </Link>
          );
        }}
      >
     <Nfts/>
      </TopNFTs>
      <TopCollection />
      <MusicNFTs />
    </div>
  );
}
