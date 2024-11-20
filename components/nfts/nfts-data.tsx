"use client";
import { useNft } from "@/api/nfts";
import NFTCart from "@/components/reusable/nft-cart";

export default function NftsData() {
  const { data } = useNft();
  return (
    <>
      {data?.dataNft.map((nft) => {
        return <NFTCart key={nft.id} nft={nft} />;
      })}
    </>
  );
}
