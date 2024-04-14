import { AuthHelper } from "@/helpers/auth";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const authHelper = new AuthHelper();
  const isAuthenticatedUser = authHelper.isAuthenticated();

  const location = useLocation();
  if (!isAuthenticatedUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
