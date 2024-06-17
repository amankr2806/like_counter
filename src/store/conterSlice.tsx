import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counterVal: Record<number, number>;
}
const initialState: CounterState = {
  counterVal: {},
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const userId = action.payload;
      if (!state.counterVal[userId]) state.counterVal[userId] = 0;
      state.counterVal[userId]++;
    },
    decrement: (state, action) => {
      const userId = action.payload;
      if (!state.counterVal[userId]) state.counterVal[userId] = 0;
      state.counterVal[userId]--;
    },
    reset: (state, action) => {
      const userId = action.payload;
      state.counterVal[userId] = 0;
    },
  },
});

export default counterSlice;
