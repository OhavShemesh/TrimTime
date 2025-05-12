import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTES, { routes } from "./routesModule";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePageManager />} />
    </Routes>
  );
}
