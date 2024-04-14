import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  msg: "",
};

const notificationSlice = createSlice({
  initialState,
  name: "notification",
  reducers: {
    error(state, action) {
      return { ...state, msg: action.payload };
    },
    success(state, action) {
      return { ...state, msg: action.payload };
    },
  },
});
export const { error } = notificationSlice.actions;
export default notificationSlice.reducer;
