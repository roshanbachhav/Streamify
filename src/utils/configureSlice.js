import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
    name: "configure",
    initialState: {
        smartAssist: false,
        darkTheme: false
    },
    reducers: {
        clickSmartAssist: (state) => {
            state.smartAssist = !state.smartAssist;
        },
        resetSmartAssist : (state) => {
            state.smartAssist = false
        },
        toggleTheme : (state) => {
            state.darkTheme = !state.darkTheme;
        }
    }
})

export const { clickSmartAssist , resetSmartAssist , toggleTheme } = configureSlice.actions;
export default configureSlice.reducer;