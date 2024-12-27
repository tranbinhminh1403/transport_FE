import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useGetWarehouses } from "../../hooks/useGetWarehouses";
import { useEffect } from "react";
import { setData } from "../../store/slice/dataSlice";
import { Filter } from "../../components/filter";
import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { tripColumns } from "../../config/constants/index.tsx";
import { useGetTrip } from "../../hooks/useGetTrip.ts";

export const TripPage = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const { data, isLoading, error } = useGetTrip(filterState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "trips", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Filter />
      <Description data={data} />
      <ContentTable
        columns={tripColumns}
        dataSource={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
