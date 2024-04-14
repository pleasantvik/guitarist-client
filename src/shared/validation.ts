import * as yup from "yup";

export const picSchema = yup.object({
  pic: yup.mixed().required("A file is require"),
});
