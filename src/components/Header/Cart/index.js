import React from "react";
import { CartWrapperCss } from "./index.css";
import { ReactComponent as ShoppingCart } from "./svg/cart.svg";
class Cart extends React.Component {
  render() {
    return (
      <CartWrapperCss>
        <ShoppingCart />
      </CartWrapperCss>
    );
  }
}
export default Cart;
