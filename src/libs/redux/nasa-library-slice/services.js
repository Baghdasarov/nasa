import axios from "axios";
import { API } from "src/configs/api";

const DEFAULT_BASE_URL = process.env.VITE_API_URL;

axios.defaults.baseURL = DEFAULT_BASE_URL;

export const nasaLibraryApi = {
  searchNasaLibrary: (params) => axios.get(API.search, { params }),
  getNasaAssetsById: (id) => axios.get(`${API.asset}/${id}`),
};
