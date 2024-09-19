import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.items.find(
        (item) => item.id == action.payload.id
      );

      if (!findProduct) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeDelCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart, removeDelCart } = cartSlice.actions;
export default cartSlice.reducer;
