import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useGetDrivers } from "../../hooks/useGetDrivers";
import { useEffect } from "react";
import { setData } from "../../store/slice/dataSlice";
import { Filter } from "../../components/filter";
import { Description } from "../../components/description";
import { ContentTable } from "../../components/table";
import { employeeColumns } from "../../config/constants/index.tsx";

export const DriverPage = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const { data, isLoading, error } = useGetDrivers(filterState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "employees", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Filter />
      <Description data={data} />
      <ContentTable
        columns={employeeColumns}
        dataSource={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

