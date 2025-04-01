import { Routes, Route } from "react-router-dom";
import { route } from "./route";
import Login from "../pages/login";
import Home from "../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path={`${route.default}`} element={<Login />} />
      <Route path={`${route.login}`} element={<Login />} />
      <Route path={`${route.home}`} element={<Home />} />
    </Routes>
  );
};

export default Router;
