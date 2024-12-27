import { createSelector } from "@reduxjs/toolkit";
// import { RootState } from "../../store";

export const menuKey = createSelector(
  (state) => state.menu,
  (menu) => menu.key
);
