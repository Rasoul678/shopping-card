import React from "react";
import { CartItemType } from "../../state/reducers/cartReducer";
import { Wrapper } from "./Item.styles";
import Button from "@material-ui/core/Button";
import { useActions } from "../../hooks/useActions";

interface IProps {
  item: CartItemType;
}

const Item: React.FC<IProps> = ({ item }) => {
  const { addToCartAction } = useActions();

  const handleAddToCart = () => {
    addToCartAction(item);
  };
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
      <Button onClick={handleAddToCart}>add to cart</Button>
    </Wrapper>
  );
};

export default Item;
