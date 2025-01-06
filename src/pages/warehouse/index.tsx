import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { warehouseColumns } from "../../config/constants/index.tsx";
import { setData } from "../../store/slice/dataSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { WarehouseDataType } from "../../types/components/index";
import { ColumnsType } from "antd/es/table/interface";
import { useGetData } from "../../hooks/useGetData.ts";

export const WarehousePage = () => {
  const { data, isLoading, error } = useGetData("/transaction/filter");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "warehouses", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Description data={data} />
      <ContentTable
        columns={warehouseColumns as ColumnsType<WarehouseDataType>}
        dataSource={data as WarehouseDataType[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};