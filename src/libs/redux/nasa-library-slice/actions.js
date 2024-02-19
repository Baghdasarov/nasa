import { createAsyncThunk } from "@reduxjs/toolkit";
import { nasaLibraryApi } from "./services";

export const SLICE_NAME = "nasaLibrary";

export const searchNasaLibrary = createAsyncThunk(
  `${SLICE_NAME}/searchNasaLibrary`,
  async (params, { rejectWithValue }) => {
    try {
      const response = await nasaLibraryApi.searchNasaLibrary(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getNasaAssetsById = createAsyncThunk(
  `${SLICE_NAME}/getNasaAssetsById`,
  async (id, { rejectWithValue }) => {
    try {
      const response = await nasaLibraryApi.getNasaAssetsById(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
