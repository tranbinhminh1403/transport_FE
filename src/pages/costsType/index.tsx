import { useEffect } from "react";
import { Filter } from "../../components/filter";
import { useDispatch, useSelector } from "react-redux";
import { ContentTable } from "../../components/table";
import { RootState } from "../../store";
import { useGetCostType } from "../../hooks/useGetCostType";
import { setData } from "../../store/slice/dataSlice";
import { Description } from "../../components/description";
import { costTypeColumns } from "../../config/constants/index.tsx";
import { CostTypeDataType } from "../../types/components";

export const CostTypePage = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const { data, isLoading, error } = useGetCostType(filterState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "costTypes", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Filter />
      <Description data={data} />
      <ContentTable
        columns={costTypeColumns}
        dataSource={data as CostTypeDataType[]}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );  
}

