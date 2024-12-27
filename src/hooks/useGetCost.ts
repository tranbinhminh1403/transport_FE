import { useQuery } from "@tanstack/react-query";
import { CostDataType } from "../types/components";

export const useGetCost= () => {
  return useQuery<CostDataType[]>({
    queryKey: ["costs"],
    queryFn: () =>
      fetch("http://localhost:3000/costs", {
        method: "GET",
      }).then((response) => response.json())
  });
};
