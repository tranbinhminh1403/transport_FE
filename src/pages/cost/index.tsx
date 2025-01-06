import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { costColumns } from "../../config/constants/index.tsx";
import { setData } from "../../store/slice/dataSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { ContentData, CostDataType } from "../../types/components/index";
import { ColumnsType } from "antd/es/table/interface";
import { useGetData } from "../../hooks/useGetData.ts";

export const CostPage = () => {
  const { data, isLoading, error } = useGetData("/expenses");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "costs", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Description data={data} />
      <ContentTable
        columns={costColumns as ColumnsType<CostDataType>}
        dataSource={data as CostDataType[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};