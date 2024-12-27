import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slice/menuSlice";
import filterReducer from "./slice/filterSlice";
import dataReducer from "./slice/dataSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    filter: filterReducer,
    data: dataReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;