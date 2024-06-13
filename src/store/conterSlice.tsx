import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    counterVal: number
  }
const initialState : CounterState = {
    counterVal: 0 
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      increment: (state) => {
        state.counterVal++;
      },
      decrement: (state) => {
        state.counterVal--;
      },
      reset: (state) => {
        state.counterVal = 0;
      },
    },
  });

  export default counterSlice;