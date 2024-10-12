import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    selectContacts(state, action) {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact, selectContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
