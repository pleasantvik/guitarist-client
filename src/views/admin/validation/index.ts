import * as yup from "yup";

export const userSchema = yup.object({
  firstname: yup.string().required("please enter your firstname"),
  lastname: yup.string().required("please enter your lastname"),
});
export const registrationSchema = yup.object({
  firstname: yup.string().required("please enter your firstname"),
  lastname: yup.string().required("please enter your lastname"),
  email: yup.string().email("please enter a valid email"),
  password: yup.string().required().min(8),
});
