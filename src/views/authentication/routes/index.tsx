import { AuthPaths } from "@/constants/path";
import { AuthHelper } from "@/helpers/auth";
import PageNotFound from "@/views/PageNotFound";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Register from "../Register/Register";

const Login = lazy(() => import("@/views/authentication/Login/Login"));

const index = () => {
  const authHelper = new AuthHelper();

  const isAuthenticated = authHelper.isAuthenticated();
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to="/home" replace />} />
        <Route path={AuthPaths.HOME} element={<HomePage />} />
        <Route path={AuthPaths.SIGNIN} element={<Login />} />
        <Route path={AuthPaths.REGISTER} element={<Register />} />
        {/* <Route path={AuthPaths.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={AuthPaths.VERIFY_TOKEN} element={<VerifyToken />} />
        <Route path={AuthPaths.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={AuthPaths.USER_SIGNUP} element={<CreatePassword />} />
        <Route
          path={AuthPaths.CREATE_PASSWORD_SUCCESS}
          element={<CreatePasswordSuccess />}
        /> */}

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default index;
