import { configureStore } from "@reduxjs/toolkit";
import dataSlice, { dataState } from "./dataSlice";

const store = configureStore({
  reducer: {
    dataSlice: dataSlice,
  },
});

// console.log(store.getState());

// const storeState = store.getState();

export type RootState = { dataSlice: dataState };
export type AppDispatch = typeof store.dispatch;
export default store;
