import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./count/countSlice";
import wishReducer from "./wishList/wishSlice";
import productReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice";
import searchReducer from "./search/searchSlice";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    products: productReducer,
    wishlist: wishReducer,
    carts: cartReducer,
    search: searchReducer,
  },
});

export default store;
