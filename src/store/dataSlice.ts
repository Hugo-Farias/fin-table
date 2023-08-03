import { createSlice } from "@reduxjs/toolkit";

export interface dataState {
  value: number;
}

const initialState: dataState = {
  value: 0,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, { payload }: number) {
      state.value += payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = dataSlice.actions;
export default dataSlice.reducer;
