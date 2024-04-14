import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login() {},
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
