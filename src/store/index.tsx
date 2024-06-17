import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./conterSlice";
import userSlice from "./userSlice";
import userIdSlice from "./userIdSlice";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    userId: userIdSlice.reducer,
  },
});

export type RootState = ReturnType<typeof counterStore.getState>;
export type AppDispatch = typeof counterStore.dispatch;

export const counterActions = counterSlice.actions;
export default counterStore;
