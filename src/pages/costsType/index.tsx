import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { costTypeColumns } from "../../config/constants/index.tsx";
import { setData } from "../../store/slice/dataSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { CostTypeDataType } from "../../types/components/index";
import { ColumnsType } from "antd/es/table/interface";
import { useGetData } from "../../hooks/useGetData.ts";

export const CostTypePage = () => {
  const { data, isLoading, error } = useGetData("/expenses/configs");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "costsType", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      {/* <Description data={data} /> */}
      <ContentTable
        columns={costTypeColumns as ColumnsType<CostTypeDataType>}
        dataSource={data as CostTypeDataType[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};