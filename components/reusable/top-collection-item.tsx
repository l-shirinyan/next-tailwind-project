import { collectCart } from "@/types/nft";
import Image from "next/image";

export default function TopCollectCart({ cart }: { cart: collectCart }) {
  const { id, name, price, img } = cart;
  return (
    <div className="text-white flex gap-4 items-center sm:justify-center xl:justify-start">
      <span className="font-arabic text-3xl md:text-5xl">{id + 1}</span>
      <Image src={img} alt="collection" width={77} height={77} />
      <div className="flex flex-col font-rajdhani">
        <span className="font-semibold text-xl md:text-3xl">{name}</span>
        <span className="text-xl md:text-2xl">{price}</span>
      </div>
    </div>
  );
}
