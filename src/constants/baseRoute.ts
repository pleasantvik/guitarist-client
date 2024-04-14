import RootLayout from "@/Layout/RootLayout";
import { lazy } from "react";
import { BasePaths } from "./path";

// import RootLayout from "@/layout/RootLayout";
// import AuthLayout from "@/Layout/AuthLayout";

const BaseRoutes = [
  {
    path: "/*",
    exact: true,
    component: lazy(() => import("@/views/authentication/routes")),
    Layout: null,
    useAuth: false,
  },

  {
    path: `${BasePaths.ADMIN}/*`,
    exact: true,
    component: lazy(() => import("@/views/admin/routes")),
    Layout: RootLayout,
    useAuth: true, // value is true when authentication is done
  },
];

export default BaseRoutes;
