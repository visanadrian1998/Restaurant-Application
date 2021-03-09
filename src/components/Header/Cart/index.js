import React from "react";
import { CartWrapperCss, SearchButton, SearchBox, Cauta } from "./index.css";
import { ReactComponent as ShoppingCart } from "./svg/cart.svg";
import { ReactComponent as Loupe } from "./svg/loupe.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    if (e.which === 13 && inputValue !== "") {
      history.push(`/cautare/${inputValue}`);
      setInputValue("");
    }
  };
  return (
    <CartWrapperCss>
      <SearchBox>
        <Cauta
          type="text"
          placeholder="Cauta..."
          onKeyDown={handleKeyDown}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <SearchButton>
          <Loupe />
        </SearchButton>
      </SearchBox>
      <ShoppingCart />
    </CartWrapperCss>
  );
};
export default Cart;
