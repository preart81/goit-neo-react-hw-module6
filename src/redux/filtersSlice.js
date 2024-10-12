import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    selectFilter(state, action) {
      return action.payload;
    },
  },
});

export const { selectFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
