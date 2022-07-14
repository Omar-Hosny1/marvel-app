import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { items: [] },
  reducers: {
    addToFavorite(state, action) {
      const newItem = action.payload;
      let isHere = false;
      state.items.map((ele) => {
        if (ele.id === newItem.id) isHere = true;
      });
      if (!isHere) {
        state.items.push(newItem);
        window.alert("Added");
      } else {
        window.alert("Movie already in the favorite items");
      }
    },
    removeFromFavorite(state, action) {
      const id = action.payload;
      state.items = state.items.filter((ele) => ele.id !== id);
    },
  },
});

export default favoriteSlice;
export const favoriteActions = favoriteSlice.actions;
