import { useQuery } from "@tanstack/react-query";
import { request } from "..";
import serverRequest from "../server_request";
import { PATH_GET_SELLERS } from "./path";
import { Sellers } from "@/types/seller";

const getNfts = async () => {
  const result = await request(PATH_GET_SELLERS);
  return result;
};
const useSellerServer = () => {
  return serverRequest({
    queryOptions: {
      queryKey: [PATH_GET_SELLERS],
      queryFn: getNfts,
    },
  });
};
const useSellers = () => {
  return useQuery<Sellers>({
    queryKey: [PATH_GET_SELLERS],
  });
};
export { useSellerServer, useSellers };
