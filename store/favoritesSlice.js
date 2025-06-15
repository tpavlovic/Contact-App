import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.list.find(item => item.login.uuid === action.payload.login.uuid);
      if (!exists) state.list.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter(item => item.login.uuid !== action.payload.login.uuid);
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;