import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { tripColumns, truckColumns } from "../../config/constants/index.tsx";
import { setData } from "../../store/slice/dataSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { TruckDataType } from "../../types/components/index";
import { ColumnsType } from "antd/es/table/interface";
import { useGetData } from "../../hooks/useGetData.ts";

export const TruckPage = () => {
  const { data, isLoading, error } = useGetData("/trucks");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "trucks", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Description data={data} />
      <ContentTable
        columns={truckColumns as ColumnsType<TruckDataType>}
        dataSource={data as TruckDataType[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};