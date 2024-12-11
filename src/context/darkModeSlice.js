// features/darkModeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem("theme") || "light", // default "light"
};

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload); // Saqlash
        },
    },
});

export const { setTheme } = darkModeSlice.actions;
export default darkModeSlice.reducer;
