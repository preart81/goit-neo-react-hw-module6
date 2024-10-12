import { configureStore } from '@reduxjs/toolkit';
import { conatactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: conatactsReducer,
    filters: filtersReducer,
  },
});

