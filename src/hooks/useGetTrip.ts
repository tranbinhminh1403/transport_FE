import { useQuery } from "@tanstack/react-query";
import { TripDataType } from "../types/components";

export const useGetTrip= () => {
  return useQuery<TripDataType[]>({
    queryKey: ["trip"],
    queryFn: () =>
      fetch("http://localhost:3000/travels", {
        method: "GET",
      }).then((response) => response.json())
  });
};
