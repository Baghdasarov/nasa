import { createSelector } from "@reduxjs/toolkit";
export const nasaLibraryState = (state) => state.nasaLibrary;

export const nasaLibrarySelector = createSelector(
  nasaLibraryState,
  (state) => state
);
