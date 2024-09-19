import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "search",
  initialState: {
    item: [],
  },
  reducers: {
    setSearchItem: (state, action) => {
      state.item = action.payload;
    },
    clearSearchItem: (state) => {
      state.item = [];
    },
  },
});

export const {} = search.actions;
export default search.reducer;
