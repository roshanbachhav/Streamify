import { createSlice } from "@reduxjs/toolkit";

const movieMemberSlice = createSlice({
    name: "cast",
    initialState: {
        castMembers: [],
        crewMembers: [],
    },
    reducers: {
        castMembers: (state , action) => {
            state.castMembers = action.payload;
        },
        crewMembers: (state , action) => {
            state.crewMembers = action.payload;
        }
    }
});

export const { castMembers , crewMembers } = movieMemberSlice.actions;
export default movieMemberSlice.reducer;