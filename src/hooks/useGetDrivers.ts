
import { useQuery } from "@tanstack/react-query";
import { EmployeeDataType } from "../types/components";

export const useGetDrivers= () => {
  return useQuery<EmployeeDataType[]>({
    queryKey: ["drivers"],
    queryFn: () =>
      fetch("http://localhost:3000/drivers", {
        method: "GET",
      }).then((response) => response.json())
  });
};
