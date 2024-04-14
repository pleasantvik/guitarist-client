import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("please enter a valid email"),
  password: yup.string().required().min(8),
});
export const registrationSchema = yup.object({
  firstname: yup.string().required("please enter your firstname"),
  lastname: yup.string().required("please enter your lastname"),
  email: yup.string().email("please enter a valid email"),
  password: yup.string().required().min(8),
});
