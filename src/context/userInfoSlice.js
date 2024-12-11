import { createSlice } from "@reduxjs/toolkit";
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: null,
  reducers: {
    sendUserInfo: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { sendUserInfo } = userInfoSlice.actions;
