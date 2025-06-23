import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModule";
import HomePage from "../pages/HomePage";
import HomePageManager from "../pages/managers/HomePageManager";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePageManager />} />
    </Routes>
  );
}
