import { dataState } from "./reducers/dataSlice";
import store from "./store";

export type dataSliceState = ReturnType<typeof store.getState>;
