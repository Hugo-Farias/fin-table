import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";

const store = configureStore({
  reducer: {
    dataSlice: dataSlice,
  },
});

export default store;
