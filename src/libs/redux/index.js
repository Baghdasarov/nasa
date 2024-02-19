import { configureStore } from "@reduxjs/toolkit";
import { nasaLibraryReducer } from "./nasa-library-slice/slice";

export const store = configureStore({
  reducer: {
    nasaLibrary: nasaLibraryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
