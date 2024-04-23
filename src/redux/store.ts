import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice.ts";


export const store = configureStore({
  reducer: {
    filter: filterReducer
  }
});

export type AppStore = ReturnType<typeof store.getState>;