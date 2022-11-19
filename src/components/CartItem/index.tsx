import React from "react";
import Button from "@material-ui/core/Button";
import { Wrapper } from "./CartItem.styles";
import { CartItemType } from "../../state/reducers/cartReducer";
import { useActions } from "../../hooks/useActions";
import { formatter } from "../../utils";

interface IProps {
  item: CartItemType;
}



const CartItem: React.FC<IProps> = ({ item }) => {
  const price = formatter.format(+item.price);
  const total = formatter.format(+item.price * item.amount);

  const { removeFromCartAction, addToCartAction } = useActions();

  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: {price}</p>
          <p>Total: {total}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCartAction(item)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCartAction(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
