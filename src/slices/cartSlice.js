import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },

    removeFromCart: (state, action) => {
      const index = state.products.findIndex(
        (cartProduct) => cartProduct.id === action.payload
      );

      const CART = [...state.products];

      if (index >= 0) {
        CART.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in cart!`
        );
      }

      state.products = CART;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;

export const selectTotalPrice = (state) =>
  state.cart.products.reduce(
    (totalPrice, product) => totalPrice + product.price,
    0
  );

export default cartSlice.reducer;
