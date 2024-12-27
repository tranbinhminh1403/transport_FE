import { useLocation } from "react-router-dom";
import { FilterDisplay } from "./FilterDisplay";
import { filterConfigs } from "./config";
import { MenuKeyType } from "./types";
import { ContentData } from "../../types/components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetData } from "../../store/slice/dataSlice";
import { resetFilter } from "../../store/slice/filterSlice";

interface FilterProps {
  data?: ContentData[];
}

export const Filter = ({ data }: FilterProps) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = location.pathname.split('/management/')[1] as MenuKeyType;
  const config = filterConfigs[currentPath];

  useEffect(() => {
    dispatch(resetData());
    dispatch(resetFilter());
  }, [dispatch]);

  return (
    <div>
      <FilterDisplay 
        config={config} 
        warehouseData={currentPath === "warehouses" ? data : undefined} 
      />
    </div>
  );
};
