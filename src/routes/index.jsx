import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import NotFoundPage from "src/pages/not-found-page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={`api-${index}`}
            element={<route.component />}
            path={route.path}
          />
        ))}
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
