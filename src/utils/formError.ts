/* eslint-disable @typescript-eslint/no-explicit-any */
export const formError = (formik: any, value: string) => {
  const errorHelper = {
    error: formik.errors[value] && formik.touched[value] ? true : false,
    helperText:
      formik.errors[value] && formik.touched[value]
        ? formik.errors[value]
        : null,
  };

  return errorHelper?.error && errorHelper?.helperText;
};
