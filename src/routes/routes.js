import SearchNasaLibraryPage from "src/pages/search-nasa-library-page";
import SearchNasaLibrarySinglePage from "src/pages/search-nasa-library-single-page";


export const routes = [
  {
    path: "/",
    component: SearchNasaLibraryPage,
  },
  {
    path: "/:id",
    component: SearchNasaLibrarySinglePage,
  },
];
