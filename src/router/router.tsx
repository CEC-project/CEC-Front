import { Routes, Route } from "react-router-dom";
import { prefix, route } from "./route";
import Login from "../pages/login";

const Router = () => {
  return (
    <Routes>
      <Route path={`${prefix}${route.default}`} element={<Login />} />
      <Route path={`${prefix}${route.login}`} element={<Login />} />
    </Routes>
  );
};

export default Router;
