import { createSlice } from "@reduxjs/toolkit";
import Data from "../components/Data/Data";
const moviesSlice = createSlice({
  name: "movies",
  initialState: { items: Data },
  reducers: {
    pushAllMovies(state, action) {
      state.items.push(...action.payload);
      console.log(state.items);
    },
  },
});
export default moviesSlice;
export const moviesActions = moviesSlice.actions;
