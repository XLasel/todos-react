import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface TabsState {
  selectedTab: "all" | "completed" | "active";
}

const initialState: TabsState = {
  selectedTab: "all",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    selectTabAll: (state) => {
      state.selectedTab = "all";
    },
    selectTabCompleted: (state) => {
      state.selectedTab = "completed";
    },
    selectTabActive: (state) => {
      state.selectedTab = "active";
    },
  },
});

export const returnActiveTab = (state: RootState) => state.tabs.selectedTab;
export const { selectTabAll, selectTabCompleted, selectTabActive } =
  tabsSlice.actions;
export default tabsSlice.reducer;
