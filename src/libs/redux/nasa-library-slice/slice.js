import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME, getNasaAssetsById, searchNasaLibrary } from "./actions";
import { LOADING_STATUSES } from "src/utils/constansts";

const initialState = {
  nasaLibraryData: null,
  nasaLibraryOneData: null,
  nasaAssets: null,
  getNasaLibraryStatus: LOADING_STATUSES.idle,
  getNasaAssetsStatus: LOADING_STATUSES.idle,
};

export const nasaLibrarySlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    resetAllData: () => initialState,
    setNasaLibraryOneData: (state, { payload }) => {
      state.nasaLibraryOneData = payload;
    },
    resetNasaLibraryOneData: (state) => {
      state.nasaLibraryOneData = null;
      state.nasaAssets = null;
      state.getNasaAssetsStatus = LOADING_STATUSES.idle;
    },
  },
  extraReducers: ({ addCase }) => {
    //searchNasaLibrary
    addCase(searchNasaLibrary.pending, (state) => {
      state.getNasaLibraryStatus = LOADING_STATUSES.pending;
    });
    addCase(searchNasaLibrary.fulfilled, (state, { payload }) => {
      state.getNasaLibraryStatus = LOADING_STATUSES.succeeded;
      state.nasaLibraryData = payload.collection;
    });
    addCase(searchNasaLibrary.rejected, (state) => {
      state.getNasaLibraryStatus = LOADING_STATUSES.failed;
    });
    //getNasaAssetsById
    addCase(getNasaAssetsById.pending, (state) => {
      state.getNasaAssetsStatus = LOADING_STATUSES.pending;
    });
    addCase(getNasaAssetsById.fulfilled, (state, { payload }) => {
      state.getNasaAssetsStatus = LOADING_STATUSES.succeeded;

      const data = payload.collection?.items;
      data?.pop();
      data?.shift();
      state.nasaAssets = data;
    });
    addCase(getNasaAssetsById.rejected, (state) => {
      state.getNasaAssetsStatus = LOADING_STATUSES.failed;
    });
  },
});

export const nasaLibraryReducer = nasaLibrarySlice.reducer;

export const nasaLibraryActions = {
  ...nasaLibrarySlice.actions,
  searchNasaLibrary,
  getNasaAssetsById,
};
