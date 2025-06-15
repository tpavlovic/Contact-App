import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;