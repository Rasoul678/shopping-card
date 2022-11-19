import { CartItemType } from "../state/reducers/cartReducer";

export const getProducts = async (): Promise<CartItemType[]> => {
    return await (await fetch("https://fakestoreapi.com/products")).json();
  }