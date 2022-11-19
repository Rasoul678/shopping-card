import { createReducer } from "@reduxjs/toolkit";
import {
  addToCartAction,
  openCartAction,
  removeFromCartAction,
} from "../action-creators";

export type CartItemType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: { rate: number; count: number };
  amount: number;
};

interface CartState {
  items: CartItemType[];
  isCartOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isCartOpen: false,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCartAction, (state, action) => {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (foundIndex === -1) {
        state.items.push({ ...action.payload, amount: 1 });
      } else {
        state.items[foundIndex].amount += 1;
      }
    })
    .addCase(openCartAction, (state, action) => {
      state.isCartOpen = !state.isCartOpen;
    })
    .addCase(removeFromCartAction, (state, action) => {
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (foundIndex !== -1) {
        if (action.payload.amount > 1) {
          state.items[foundIndex].amount -= 1;
        } else {
          state.items.splice(foundIndex, 1);
        }
      }
    });
});
