import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { distanceColumns } from "../../config/constants/index.tsx";
import { setData } from "../../store/slice/dataSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { DistanceDataType } from "../../types/components/index";
import { ColumnsType } from "antd/es/table/interface";
import { useGetData } from "../../hooks/useGetData.ts";

export const DistancePage = () => {
  const { data, isLoading, error } = useGetData("/schedules/configs");
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
        columns={distanceColumns as ColumnsType<DistanceDataType>}
        dataSource={data as DistanceDataType[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};