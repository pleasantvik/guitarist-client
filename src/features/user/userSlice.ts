import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    user: {
      _id: null,
      email: null,
      firstname: "",
      lastname: "",
      history: [],
      verified: null,
      roles: null,
    },
  },
  auth: false,
  cart: [],
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    currentUser(state, action) {
      return { ...state, auth: true, data: action.payload };
    },
  },
});

export const { currentUser } = userSlice.actions;

export default userSlice.reducer;
