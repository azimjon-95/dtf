import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "Auth",
  initialState: false,
  reducers: {
    auth: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { auth } = authSlice.actions;
