import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { localStorageMiddleware, reHydrateStore } from "./api";

import tasksReducer from "./todosSlice";
import tabsReducer from "./tabsSlice";

const rootReducer = combineReducers({ todos: tasksReducer, tabs: tabsReducer });

const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
