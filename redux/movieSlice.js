import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  searchResults: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setMovieList, setSearchResults } = movieSlice.actions;

export default movieSlice.reducer;
