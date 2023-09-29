const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(state, action) {
      return action.payload;
    },
  },
});
export const { filterValue } = slice.actions;
export const filterReducer = slice.reducer;
export const getFilter = store => store.filter;
