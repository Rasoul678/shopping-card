import { createReducer } from "@reduxjs/toolkit";
import { addToCartAction } from "../action-creators";

interface CartState {
  items: [];
}

const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToCartAction, (state, action) => {});
});
