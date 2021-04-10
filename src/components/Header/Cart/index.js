import React from "react";
import {
  CartWrapperCss,
  SearchButton,
  SearchBox,
  Cauta,
  CartLogoWrapper,
  CartLogoQuantityNumber,
  CartLogoQuantity,
} from "./index.css";
import { ReactComponent as ShoppingCart } from "./svg/cart.svg";
import { ReactComponent as Loupe } from "./svg/loupe.svg";
import { ReactComponent as Account } from "./svg/user.svg";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    let quantity = 0;
    cart.forEach((element) => {
      quantity += element.qty;
    });
    setCartSize(quantity);
  }, [cart]);

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
      <CartLogoWrapper>
        <ShoppingCart onClick={() => history.push("/cos-cumparaturi")} />
        {cart.length > 0 ? (
          <CartLogoQuantity>
            <CartLogoQuantityNumber>{cartSize}</CartLogoQuantityNumber>
          </CartLogoQuantity>
        ) : (
          ""
        )}
      </CartLogoWrapper>
      <Account onClick={() => history.push(`/contul-meu`)} />
    </CartWrapperCss>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
