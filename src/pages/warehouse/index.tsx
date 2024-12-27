import { useGetWarehouses } from "../../hooks/useGetWarehouses";
import { Filter } from "../../components/filter";
import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { warehouseColumns } from "../../config/constants/index.tsx";
import { setData } from "../../store/slice/dataSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { ContentData, WarehouseDataType } from "../../types/components/index";
import { ColumnsType } from "antd/es/table/interface";
import { TableProps } from "antd";
import { useFetchGoods } from "../../api/goods/useFetchGoods.ts";

export const WarehousePage = () => {
  const { data, isLoading, error } = useFetchGoods();
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
        columns={warehouseColumns || []}
        dataSource={data as ContentData[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};