"use client";
import { useFetchData } from "@/utils/hooks/useFetchData";
import NFTCart from "../reusable/nft-cart";
import { nftCart } from "@/types/nft";

export default function Nfts() {
  const { data } = useFetchData<{ dataNft: nftCart[] }>("/api/data.json");
  return (
    <>
      {data?.dataNft?.slice(0, 8).map((nft) => (
        <NFTCart key={nft.id} nft={nft} />
      ))}
    </>
  );
}
