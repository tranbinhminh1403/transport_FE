import { createSlice } from "@reduxjs/toolkit";

type DataState = typeof initialState;
type DataKeys = keyof Omit<DataState, 'loading' | 'error'>;

const initialState = {
  warehouses: [],
  costs: [],
  trips: [],
  drivers: [],
  trucks: [],
  reports: [],
  distances: [],
  costsType: [],
  loading: false,
  error: null
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      const { type, data } = action.payload;
      state[type as DataKeys] = data;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetData: () => initialState
  }
});

export const { setData, setLoading, setError, resetData } = dataSlice.actions;
export default dataSlice.reducer; 