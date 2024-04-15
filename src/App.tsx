import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";
// import "../public/resources/styles/styles.css";
import BaseRoutes from "./constants/baseRoute";
import PageNotFound from "./views/PageNotFound";
import PrivateRoute from "./routes/PrivateRoute";
import { Suspense } from "react";
import Loader from "./shared/Loader";
import { useIsAuthQuery } from "./services/auth.service";
import { useDispatch } from "react-redux";
import { currentUser } from "./features/user/userSlice";
function App() {
  const { data } = useIsAuthQuery({});
  const dispatch = useDispatch();
  console.log(data, "DATA");
  // if (data) {
  //   dispatch(currentUser(data));
  // }
  dispatch(currentUser(data));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {BaseRoutes.map(({ Layout, component: Component, path, useAuth }) =>
          Layout && useAuth ? (
            <Route
              key={path}
              path={path}
              element={
                <PrivateRoute>
                  <Layout key={path}>
                    <Component />
                  </Layout>
                </PrivateRoute>
              }
            />
          ) : (
            <Route key={path} path={path} element={<Component />} />
          )
        )}

        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </>
  );
}

export default App;
