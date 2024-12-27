import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  key: 'warehouses',
};

const menuReducer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeMenu: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
  },
});

export const { changeMenu } = menuReducer.actions;

export default menuReducer.reducer;