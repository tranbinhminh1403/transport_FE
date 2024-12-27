import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  dateRange: null,
  warehouse: null,
  costType: null,
  vehicle: null,
  driver: null
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilter: () => initialState
  }
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer; 