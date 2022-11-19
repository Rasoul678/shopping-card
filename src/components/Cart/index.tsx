import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { formatter } from "../../utils";
import CartItem from "../CartItem";
import { Wrapper } from "./Cart.styles";

interface IProps {}

const Cart: React.FC<IProps> = (props) => {
  const { items } = useTypedSelector((state) => state.cart);
  const total = useTypedSelector((state) => {
    return state.cart.items.reduce((acc, item) => {
      return +item.price * item.amount + acc;
    }, 0);
  });

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? <p>No items in cart.</p> : null}
      {items?.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <h2>Total: {formatter.format(total)}</h2>
    </Wrapper>
  );
};

export default Cart;
