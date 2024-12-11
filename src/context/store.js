// store.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import { authSlice } from "./authSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    auth: authSlice.reducer,
  },
});

export default store;
