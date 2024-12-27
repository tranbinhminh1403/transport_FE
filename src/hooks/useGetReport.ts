import { useQuery } from "@tanstack/react-query";
import { ReportDataType } from "../types/components";

export const useGetReport= () => {
  return useQuery<ReportDataType[]>({
    queryKey: ["report"],
    queryFn: () =>
      fetch("http://localhost:3000/reports", {
        method: "GET",
      }).then((response) => response.json())
  });
};
