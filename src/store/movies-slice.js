import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { items: [], isLoading: true, isErrorHappen: false },
  reducers: {
    pushAllMovies(state, action) {
      state.items = action.payload;
    },
    moviesStopLoadingHandler: (state) => {
      state.isLoading = false;
    },
    errorHandler: (state) => {
      state.isErrorHappen = true;
    },
  },
});
export default moviesSlice;
export const moviesActions = moviesSlice.actions;
