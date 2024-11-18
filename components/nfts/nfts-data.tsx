"use client"
import NFTCart from "@/components/reusable/nft-cart";
import { nftCart } from "@/types/nft";
import { useFetchData } from "@/utils/hooks/useFetchData";

export default function NftsData() {
    const { data } = useFetchData<{ dataNft: nftCart[] }>("/api/data.json");
    return (
        < >
            {data?.dataNft.map((nft) => {
                return <NFTCart key={nft.id} nft={nft} />;
            })}
        </>
    );
}
