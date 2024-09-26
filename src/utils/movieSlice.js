import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addPopularMovies: [],
    addTopRatedMovies: [],
    addUpcomingMovies: [],
    addTrailers: [],
    searchMovies: [],
    aiSearchMovies: [],
    recommendedMovies: [],
    movieDetail: [],
    similarMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
    addTrailers: (state, action) => {
      state.addTrailers = action.payload;
    },
    searchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
    aiSearchMovies: (state, action) => {
      state.aiSearchMovies = action.payload;
    },
    recommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
    movieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    similarMovies: ( state , action ) => {
      state.similarMovies = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailers,
  searchMovies,
  aiSearchMovies,
  recommendedMovies,
  movieDetail,
  similarMovies
} = movieSlice.actions;
export default movieSlice.reducer;
