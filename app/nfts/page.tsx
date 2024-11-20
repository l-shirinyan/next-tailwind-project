import { useNftServer } from "@/api/nfts";
import TopNFTs from "@/components/home/top-nfts";
import NftsData from "@/components/nfts/nfts-data";
import { arabic, rajdhani } from "@/fonts/fonts";

export default async function NFTs() {
  const { HydrateProvider } = await useNftServer();
  return (
    <div
      className={`${rajdhani.variable} ${arabic.variable} bg-gradient bg-no-repeat bg-cover bg-top -mt-[100px]`}
    >
      <HydrateProvider>
        <TopNFTs>
          <NftsData />
        </TopNFTs>
      </HydrateProvider>
    </div>
  );
}
