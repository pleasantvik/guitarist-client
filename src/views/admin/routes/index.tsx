import { getDecodedJwt, logOut, wavesToken } from "@/helpers/auth";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "..";
import { DashboardPath } from "@/constants/path";
import Dashboard from "../Dashboard";
import UserInfo from "../UserInfo";
import Product from "../Product";

const AdminRouter = () => {
  const token = localStorage.getItem(wavesToken);
  const userRole = getDecodedJwt(token)?.roles;

  useEffect(() => {
    if (userRole !== "admin") {
      logOut();
    }
  }, [userRole]);
  return (
    <Routes>
      <Route element={<Admin />}>
        <Route path="" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path={DashboardPath.DASHBOARD} element={<Dashboard />} />
        <Route path={DashboardPath.INFO} element={<UserInfo />} />
        <Route path={DashboardPath.PRODUCT} element={<Product />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
