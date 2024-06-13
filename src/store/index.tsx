import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./conterSlice";
import userSlice from "./userSlice";


const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});

const counterStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof counterStore.getState>;
export type AppDispatch = typeof counterStore.dispatch;

export const counterActions = counterSlice.actions;
export default counterStore;
