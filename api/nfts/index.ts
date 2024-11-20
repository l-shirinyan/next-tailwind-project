import { useQuery } from "@tanstack/react-query";
import { request } from "..";
import serverRequest from "../server_request";
import { PATH_GET_NFTS } from "./path";
import { nftCart } from "@/types/nft";

const getNfts = async () => {
  const result = await request(PATH_GET_NFTS);
  return result;
};
const useNftServer = () => {
  return serverRequest({
    queryOptions: {
      queryKey: [PATH_GET_NFTS],
      queryFn: getNfts,
    },
  });
};
const useNft = () => {
  return useQuery<{ dataNft: nftCart[] }>({
    queryKey: [PATH_GET_NFTS],
  });
};
export { useNftServer, useNft };
