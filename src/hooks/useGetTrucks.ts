import { useQuery } from "@tanstack/react-query";
import { TruckDataType } from "../types/components";

export const useGetTrucks= () => {
  return useQuery<TruckDataType[]>({
    queryKey: ["trucks"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BASE_API_URL}/trucks`, {
        method: "GET",
      }).then((response) => response.json())
        .then(data => {
          console.log('Trucks response:', data);
          return data;
        })
  });
};
