import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useGetReport } from '../../hooks/useGetReport';
import { setData } from '../../store/slice/dataSlice';
import { Filter } from '../../components/filter';
import { Description } from '../../components/description';
import { ContentTable } from '../../components/table';
import { reportColumns } from '../../config/constants/index.tsx';

export const ReportPage = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const { data, isLoading, error } = useGetReport(filterState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ type: "reports", data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Filter />
      <Description data={data} />
      <ContentTable
        columns={reportColumns}
        dataSource={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

