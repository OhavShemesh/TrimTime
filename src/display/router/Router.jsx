import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModule";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
}
