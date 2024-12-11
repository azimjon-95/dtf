// store.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import { authSlice } from "./authSlice";
import { userInfoSlice } from "./userInfoSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    auth: authSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

export default store;
