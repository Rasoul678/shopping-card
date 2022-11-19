import { createAction } from "@reduxjs/toolkit";
import { ActionTypes } from "../action-types";
import { CartItemType } from "../reducers/cartReducer";

export const addToCartAction = createAction<CartItemType>(
  ActionTypes.ADD_TO_CART
);
export const removeFromCartAction = createAction<CartItemType>(
  ActionTypes.REMOVE_FROM_CART
);
export const openCartAction = createAction(ActionTypes.OPEN_CART);
