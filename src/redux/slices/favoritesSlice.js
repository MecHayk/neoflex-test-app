import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesItems: [],
};

export const favoritesSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsFavorites: (state, action) => {
      if (state.favoritesItems.find((favObj) => favObj.id === action.payload.id)) {
        state.favoritesItems = state.favoritesItems.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.favoritesItems.push(action.payload);
      }
    },
  },
});

export const { addItemsFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
