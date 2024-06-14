import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./conterSlice";
import userSlice from "./userSlice";
import userIdSlice from "./userIdSlice";


const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
  userId: userIdSlice.reducer,
});

const counterStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof counterStore.getState>;
export type AppDispatch = typeof counterStore.dispatch;

export const counterActions = counterSlice.actions;
export default counterStore;
