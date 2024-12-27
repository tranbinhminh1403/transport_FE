
import { useQuery } from "@tanstack/react-query";
import { DistanceDataType } from "../types/components";

export const useGetDistances= () => {
  return useQuery<DistanceDataType[]>({
    queryKey: ["distances"],
    queryFn: () =>
      fetch("http://localhost:3000/distances", {
        method: "GET",
      }).then((response) => response.json())
  });
};
