/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "@/store";
import { useFormik } from "formik";
import { userSchema } from "./validation";
import CustomButton from "@/shared/CustomButton";
import FieldInput from "@/shared/FieldInput";
import FieldLabel from "@/shared/FieldLabel";
import { Modal } from "@mui/material";
import { useEditUserProfileMutation } from "@/services/auth.service";
import { showToast } from "@/utils/toastConfig";
import { currentUser } from "@/features/user/userSlice";
import { useState } from "react";

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [editProfile] = useEditUserProfileMutation();
  const userForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: loggedInUser?.data?.user?.firstname,
      lastname: loggedInUser?.data?.user?.lastname,
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      try {
        const res = await editProfile(values).unwrap();

        dispatch(currentUser(res));
      } catch (error: any) {
        showToast({
          background: "#FCD9DC",
          color: "#720B18",
          msg: error?.data?.message || "Something went wrong",
          type: "ERROR",
        });
      } finally {
        setOpenModal(false);
      }
    },
  });
  return (
    <div>
      <div className="bg-primary-faint flex flex-col gap-2">
        <span>{loggedInUser?.data?.user?.firstname}</span>
        <span>{loggedInUser?.data?.user?.lastname}</span>
        <CustomButton
          variant="contained"
          className=" mt-2 self-end"
          type="submit"
          onClick={() => setOpenModal(true)}
        >
          Edit Profile
        </CustomButton>
      </div>

      <Modal
        open={openModal}
        className="w-[400px] mx-auto flex justify-center items-center"
      >
        <form onSubmit={userForm.handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
            <FieldLabel htmlFor="firstname">Firstname</FieldLabel>
            <FieldInput
              type="text"
              placeholder="firstname"
              name="firstname"
              onChange={userForm.handleChange}
              onBlur={userForm.handleBlur}
              value={userForm.values.firstname as unknown as string}
            />

            {userForm.touched.firstname && userForm.errors.firstname && (
              <FieldLabel className="text-red-600">
                {userForm.errors.firstname}
              </FieldLabel>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <FieldLabel htmlFor="lastname">Lastname</FieldLabel>
            <FieldInput
              type="text"
              placeholder="lastname"
              name="lastname"
              onChange={userForm.handleChange}
              onBlur={userForm.handleBlur}
              value={userForm.values.lastname as unknown as string}
            />

            {userForm.touched.lastname && userForm.errors.lastname && (
              <FieldLabel className="text-red-600">
                {userForm.errors.lastname}
              </FieldLabel>
            )}
          </div>

          <div>
            <CustomButton variant="contained" className=" mt-2" type="submit">
              Submit
            </CustomButton>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserInfo;
