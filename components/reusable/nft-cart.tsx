import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/check.svg";
import ETHIcon from "@/assets/eth.svg";
import Arrow from "@/assets/arrow.svg";
import { nftCart } from "@/types/nft";

export default function NFTCart({ nft }: { nft: nftCart }) {
  const { img, name, user, userName, price } = nft;

  return (
    <div className="max-w-[358px] w-full relative justify-self-center sm:justify-self-start h-[400px]">
      <div className="w-full h-full">
        <Image
          src={img}
          alt={`NFT image for ${name}`}
          width={358}
          height={510}
          className="h-full object-cover"
        />
      </div>
      <div className="bg-blue-opacity border border-periwinkle px-2 py-3 sm:py-7 sm:px-6 flex justify-between absolute bottom-0 w-full">
        <div className="flex flex-col gap-3">
          <span
            className="text-white font-arabic text-lg"
            aria-label={`NFT name: ${name}`}
          >
            {name}
          </span>
          <div className="flex gap-2 items-center text-white font-rajdhani">
            <Image
              src={user}
              alt={`Profile of ${userName}`}
              width={34}
              height={34}
            />
            <span className="text-base font-semibold">{userName}</span>
            <CheckIcon aria-label="Verified" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white text-base font-rajdhani">
              Reserve price
            </span>
            <div className="flex items-center gap-2">
              <ETHIcon aria-label="ETH currency" />
              <span className="text-white text-base font-robot">
                ETH {price}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div></div>
          <button
            className="bg-purpleGradient py-2 px-3"
            aria-label={`Place bid for ${name}`}
          >
            <Link className="flex items-center gap-2" href="/">
              <span className="font-rajdhani text-white text-sm">
                Place Bid
              </span>
              <Arrow className="w-6" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
