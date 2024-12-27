import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useGetTrucks } from "../../hooks/useGetTrucks";
import { useEffect } from "react";
import { setData } from "../../store/slice/dataSlice";
import { Filter } from "../../components/filter";
import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { truckColumns } from "../../config/constants/index.tsx";

export const TruckPage = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const { data, isLoading, error } = useGetTrucks(filterState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "trucks", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Filter />
      <Description data={data} />
      <ContentTable
        columns={truckColumns}
        dataSource={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
