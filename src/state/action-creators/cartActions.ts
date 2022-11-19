import { createAction } from "@reduxjs/toolkit";
import { ActionTypes } from "../action-types";

export const addToCartAction = createAction(ActionTypes.ADD_TO_CART);
