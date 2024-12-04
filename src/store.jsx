import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cartState: cartSlice,
  }
})