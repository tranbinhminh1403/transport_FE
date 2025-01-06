import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { tripColumns } from "../../config/constants/index.tsx";
import { setData } from "../../store/slice/dataSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { TripDataType } from "../../types/components/index";
import { ColumnsType } from "antd/es/table/interface";
import { useGetData } from "../../hooks/useGetData.ts";

export const TripPage = () => {
  const { data, isLoading, error } = useGetData("/schedules");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "trips", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Description data={data} />
      <ContentTable
        columns={tripColumns as ColumnsType<TripDataType>}
        dataSource={data as TripDataType[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};