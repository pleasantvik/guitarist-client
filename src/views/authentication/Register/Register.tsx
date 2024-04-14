/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthLayout from "@/Layout/AuthLayout";
import { AuthHelper } from "@/helpers/auth";
import { useRegisterMutation } from "@/services/auth.service";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { showToast } from "@/utils/toastConfig";
import { BasePaths } from "@/constants/path";

import { useFormik } from "formik";
import { registrationSchema } from "../validation";
import FieldLabel from "@/shared/FieldLabel";
import FieldInput from "@/shared/FieldInput";
import CustomButton from "@/shared/CustomButton";
import { CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";
import { formError } from "@/utils/formError";
import { useDispatch } from "react-redux";
import { currentUser } from "@/features/user/userSlice";

const Register = () => {
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const authHelper = new AuthHelper();

  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const registrationForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      lastname: "",
      firstname: "",
    },
    validationSchema: registrationSchema,
    onSubmit: async (values) => {
      try {
        const res = await register(values).unwrap();

        if (res) {
          dispatch(currentUser(res));
          showToast({
            msg: `Please check ${res?.user?.email} to verify your account`,
            type: "SUCCESS",
          });
        }

        const decoded: { roles: string } = jwtDecode(res?.token);

        authHelper.setToken(res?.token);

        console.log(decoded, "decoded");

        if (decoded.roles === "admin" || decoded.roles === "user") {
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

  return (
    <AuthLayout label="Register" text="Welcome to Waves">
      <form onSubmit={registrationForm.handleSubmit}>
        <div className="flex flex-col">
          <FieldLabel htmlFor="firstname">Firstname</FieldLabel>
          <FieldInput
            type="firstname"
            placeholder="firstname"
            name="firstname"
            onChange={registrationForm.handleChange}
            onBlur={registrationForm.handleBlur}
            value={registrationForm.values.firstname}
          />

          {registrationForm.touched.firstname &&
            registrationForm.errors.firstname && (
              <FieldLabel className="text-red-600">
                {registrationForm.errors.firstname}
              </FieldLabel>
            )}
        </div>

        <div className="flex flex-col">
          <FieldLabel htmlFor="lastname">Lastname</FieldLabel>
          <FieldInput
            type="lastname"
            placeholder="lastname"
            name="lastname"
            onChange={registrationForm.handleChange}
            onBlur={registrationForm.handleBlur}
            value={registrationForm.values.lastname}
          />

          {registrationForm.touched.lastname &&
            registrationForm.errors.lastname && (
              <FieldLabel className="text-red-600">
                {registrationForm.errors.lastname}
              </FieldLabel>
            )}
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldInput
            type="email"
            placeholder="Email"
            name="email"
            onChange={registrationForm.handleChange}
            onBlur={registrationForm.handleBlur}
            value={registrationForm.values.email}
          />

          {formError(registrationForm, "email") && (
            <FieldLabel className="text-red-600">
              {formError(registrationForm, "email")}
            </FieldLabel>
          )}
        </div>
        <div className="flex flex-col">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldInput
            type="password"
            placeholder="Password"
            name="password"
            onChange={registrationForm.handleChange}
            onBlur={registrationForm.handleBlur}
            value={registrationForm.values.password}
          />

          {registrationForm.touched.password &&
            registrationForm.errors.password && (
              <FieldLabel className="text-red-600">
                {registrationForm.errors.password}
              </FieldLabel>
            )}
        </div>
        <CustomButton variant="contained" className="w-full mt-2" type="submit">
          {isLoading ? <CircularProgress /> : "Submit"}
        </CustomButton>
      </form>
      <p>Already have an account? </p>
      <NavLink to="/signin">
        <CustomButton variant="contained" className="mt-2" type="submit">
          Sign in
        </CustomButton>
      </NavLink>
    </AuthLayout>
  );
};

export default Register;
