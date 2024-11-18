import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/check.svg";
import ETHIcon from "@/assets/eth.svg";
import Arrow from "@/assets/arrow.svg";
import { nftCart } from "@/types/nft";

export default function NFTCart({ nft }: { nft: nftCart }) {
  const { img, name, user, userName, price } = nft;
  
  return (
    <div className="max-w-[358px] w-full relative justify-self-center sm:justify-self-start">
      <div className="w-full">
        <Image src={img} alt="nft" width={358} height={510} />
      </div>
      <div className="bg-blue-opacity border border-periwinkle py-7 px-6 flex justify-between absolute bottom-0 w-full">
        <div className="flex flex-col gap-3">
          <span className="text-white font-arabic text-lg">{name}</span>
          <div className="flex gap-2 items-center text-white font-rajdhani">
            <Image src={user} alt="user" width={34} height={34} />
            <span className="text-base font-semibold">{userName}</span>
            <CheckIcon />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white text-base font-rajdhani">
              Reserve price
            </span>
            <div className="flex items-center gap-2">
              <ETHIcon />
              <span className="text-white text-base font-robot">
                ETH {price}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div></div>
          <button className="bg-purpleGradient py-2 px-3">
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
