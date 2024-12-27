import { useQuery } from "@tanstack/react-query";
import { WarehouseDataType } from "../types/components";
import { baseUrl } from "../config/constants";

export const useGetWarehouses = (status?: string) => {
  return useQuery<WarehouseDataType[]>({
    queryKey: ["warehouses", status],
    queryFn: () => {
      const url = new URL(`${baseUrl}/warehouse`);
      if (status) {
        url.searchParams.append('status', status);
      }
      console.log(url.toString());
      return fetch(url.toString(), {
        method: "GET",
      }).then((response) => response.json());
    },
    initialData: [],
      // select: (data) => data,
    // staleTime: 30000, // Data stays fresh for 30 seconds
    gcTime: 300000, //cache data for 5 minutes
  });
};
