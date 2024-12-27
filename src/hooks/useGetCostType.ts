
import { useQuery } from "@tanstack/react-query";
import { CostTypeDataType } from "../types/components";

export const useGetCostType= () => {
  return useQuery<CostTypeDataType[]>({
    queryKey: ["cost_type"],
    queryFn: () =>
      fetch("http://localhost:3000/costsType", {
        method: "GET",
      }).then((response) => response.json())
  });
};
