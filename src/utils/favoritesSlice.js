import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavoriteMovies: (state, action) => {
      const exists = state.some((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFavoriteMovies: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
  },
});

export const { addFavoriteMovies, removeFavoriteMovies } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
