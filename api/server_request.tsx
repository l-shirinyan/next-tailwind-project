import {
  dehydrate,
  FetchQueryOptions,
  HydrationBoundary,
} from "@tanstack/react-query";
import { IChildren } from "@/types";
import getQueryClient from "./get_query_client";

interface IProps<DataType> {
  queryOptions: FetchQueryOptions<DataType>;
}

async function serverRequest<DataType>({ queryOptions }: IProps<DataType>) {
  const queryClient = getQueryClient();

  const data = await queryClient.fetchQuery<DataType>(queryOptions);
  return {
    HydrateProvider: ({ children }: IChildren) => (
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    ),
    data,
  };
}

export default serverRequest;
