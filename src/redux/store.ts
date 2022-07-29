import { configureStore } from "@reduxjs/toolkit";
import UserProducts from "./slices/UserProductsSlice";

export const store = configureStore({
  reducer: {
    userProducts: UserProducts
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
