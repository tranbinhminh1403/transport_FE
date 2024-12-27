import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useGetCost } from "../../hooks/useGetCost";
import { useEffect } from "react";
import { setData } from "../../store/slice/dataSlice";
import { Filter } from "../../components/filter";
import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { costColumns } from "../../config/constants/index.tsx";

export const CostPage = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const { data, isLoading, error } = useGetCost(filterState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "costs", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Filter />
      <Description data={data} />
      <ContentTable
        columns={costColumns}
        dataSource={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}