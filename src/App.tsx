import Drawer from "@material-ui/core/Drawer";
import Linearprogress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddToCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { StyledButton, Wrapper } from "./App.styles";
import { CartItemType } from "./state/reducers/cartReducer";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./queries";
import Item from "./components/Item";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Cart from "./components/Cart";

const App = () => {
  const { openCartAction } = useActions();
  const { isCartOpen } = useTypedSelector((state) => state.cart);
  const totalAmount = useTypedSelector((state) => {
    return state.cart.items.reduce((acc: number, item) => acc + item.amount, 0);
  });

  const { data, error, isLoading } = useQuery<CartItemType[]>(
    ["products"],
    getProducts
  );

  if (isLoading) {
    return <Linearprogress />;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <Wrapper>
      <Drawer anchor="right" open={isCartOpen} onClose={() => openCartAction()}>
        <Cart />
      </Drawer>
      <StyledButton onClick={() => openCartAction()}>
        <Badge badgeContent={totalAmount} color="error">
          <AddToCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid key={item.id} item xs={12} md={6} sm={4}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
