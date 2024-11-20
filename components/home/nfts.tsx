"use client";
import NFTCart from "../reusable/nft-cart";
import { useNft } from "@/api/nfts";

export default function Nfts() {
  const { data } = useNft();
  return (
    <>
      {data?.dataNft?.slice(0, 8).map((nft) => (
        <NFTCart key={nft.id} nft={nft} />
      ))}
    </>
  );
}
