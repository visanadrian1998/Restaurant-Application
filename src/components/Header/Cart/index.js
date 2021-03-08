import React from "react";
import { CartWrapperCss, SearchButton, SearchBox, Cauta } from "./index.css";
import { ReactComponent as ShoppingCart } from "./svg/cart.svg";
import { ReactComponent as Loupe } from "./svg/loupe.svg";

class Cart extends React.Component {
  render() {
    return (
      <CartWrapperCss>
        <SearchBox>
          <Cauta type="text" placeholder="Cauta..." />
          <SearchButton>
            <Loupe />
          </SearchButton>
        </SearchBox>
        <ShoppingCart />
      </CartWrapperCss>
    );
  }
}
export default Cart;
