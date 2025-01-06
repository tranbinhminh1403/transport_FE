import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { employeeColumns } from "../../config/constants/index.tsx";
import { setData } from "../../store/slice/dataSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { EmployeeDataType } from "../../types/components/index";
import { ColumnsType } from "antd/es/table/interface";
import { useGetData } from "../../hooks/useGetData.ts";

export const DriverPage = () => {
  const { data, isLoading, error } = useGetData("/users/driver");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "drivers", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Description data={data} />
      <ContentTable
        columns={employeeColumns as ColumnsType<EmployeeDataType>}
        dataSource={data as EmployeeDataType[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};