/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthLayout from "@/Layout/AuthLayout";
import { AuthHelper } from "@/helpers/auth";
import { useLoginMutation } from "@/services/auth.service";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { showToast } from "@/utils/toastConfig";
import { BasePaths } from "@/constants/path";

import { useFormik } from "formik";
import { loginSchema } from "../validation";
import FieldLabel from "@/shared/FieldLabel";
import FieldInput from "@/shared/FieldInput";
import CustomButton from "@/shared/CustomButton";
import { CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentUser } from "@/features/user/userSlice";

const Login = () => {
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);

  const [loginUser, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const res = await loginUser(values).unwrap();

        console.log(res);

        dispatch(currentUser(res));
        const decoded: { roles: string } = jwtDecode(res?.token);

        authHelper.setToken(res?.token);

        if (decoded.roles === "admin") {
          navigate(BasePaths.ADMIN, { replace: true });
        }
      } catch (error: any) {
        showToast({
          background: "#FCD9DC",
          color: "#720B18",
          msg: error?.data?.message || "Something went wrong",
          type: "ERROR",
        });
      }
    },
  });

  const authHelper = new AuthHelper();

  // const handleSubmit = async (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   const email = emailRef.current!.value;
  //   const password = passwordRef.current!.value;

  //   try {
  //     const res = await login({ email, password }).unwrap();

  //     console.log(res);

  //     const decoded: { roles: string } = jwtDecode(res?.token);

  //     authHelper.setToken(res?.token);

  //     console.log(decoded, "decoded");

  //     if (decoded.roles === "admin") {
  //       navigate(BasePaths.ADMIN, { replace: true });
  //     }
  //   } catch (error: any) {
  //     showToast({
  //       background: "#FCD9DC",
  //       color: "#720B18",
  //       msg: error?.data?.message || "Something went wrong",
  //       type: "ERROR",
  //     });
  //   }
  // };
  return (
    <AuthLayout label="Login" text="Welcome to Waves">
      <form onSubmit={loginForm.handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldInput
            type="email"
            placeholder="Email"
            name="email"
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.email}
          />

          {loginForm.touched.password && loginForm.errors.password && (
            <FieldLabel className="text-red-600">
              {loginForm.errors.password}
            </FieldLabel>
          )}
        </div>
        <div className="flex flex-col">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldInput
            type="password"
            placeholder="Password"
            name="password"
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.password}
          />

          {loginForm.touched.password && loginForm.errors.password && (
            <FieldLabel className="text-red-600">
              {loginForm.errors.password}
            </FieldLabel>
          )}
        </div>
        <CustomButton variant="contained" className="w-full mt-2" type="submit">
          {isLoading ? <CircularProgress /> : "Submit"}
        </CustomButton>
      </form>
      <p>Don't have an account? </p>
      <NavLink to="/register">
        <CustomButton variant="contained" className="mt-2" type="submit">
          Create Account
        </CustomButton>
      </NavLink>
    </AuthLayout>
  );
};

export default Login;
