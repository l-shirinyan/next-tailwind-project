import { collectCart } from "@/types/nft";
import Image from "next/image";

export default function TopCollectCart({ cart }: { cart: collectCart }) {
  const { id, name, price, img } = cart;

  return (
    <div
      className="text-white flex gap-4 items-center sm:justify-center xl:justify-start"
      role="listitem"
    >
      <span
        className="font-arabic text-3xl md:text-5xl"
        aria-label={`Rank number ${id + 1}`}
      >
        {id + 1}
      </span>
      <Image
        src={img}
        alt={`Collection item ${name}`}
        width={77}
        height={77}
        className="rounded-lg"
        priority
      />
      <div className="flex flex-col font-rajdhani">
        <span
          className="font-semibold text-xl md:text-3xl"
          aria-label={`Name of the collection: ${name}`}
        >
          {name}
        </span>
        <span className="text-xl md:text-2xl" aria-label={`Price: ${price}`}>
          {price}
        </span>
      </div>
    </div>
  );
}
