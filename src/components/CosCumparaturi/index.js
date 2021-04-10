import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { emptyCart } from "../../redux/Shopping/shopping-actions";
import ElementCos from "../ElementCos";
import { useHistory } from "react-router-dom";

import {
  CartFooter,
  TotalText,
  CartFooterButoane,
  ButonGoleste,
  ButonHome,
  ButonFinalizeaza,
  FinalizeazaWrapper,
  CosGol,
} from "./index.css";

const CosCumparaturi = ({ emptyCart, cart }) => {
  const history = useHistory();
  const [pretTotal, setPretTotal] = useState(0);
  useEffect(() => {
    let pret = 0;
    cart.forEach((item) => {
      pret += item.qty * item.pret;
    });
    setPretTotal(pret);
  }, [cart, pretTotal, setPretTotal]);
  return (
    <>
      {cart.length > 0 ? (
        cart.map((element) => {
          return (
            <ElementCos
              id={element.id}
              denumire={element.denumire}
              pret={element.pret}
              cantitate={element.qty}
            />
          );
        })
      ) : (
        <CosGol>Cosul de cumparaturi este gol</CosGol>
      )}
      {cart.length > 0 ? (
        <>
          <CartFooter>
            <CartFooterButoane>
              <ButonGoleste onClick={() => emptyCart()}>
                Goleste Cos
              </ButonGoleste>
              <ButonHome onClick={() => history.push(`/`)}>
                Continua Cumparaturile
              </ButonHome>
            </CartFooterButoane>
            <TotalText>
              <span style={{ color: "black" }}>Total:</span> {pretTotal} Lei
            </TotalText>
          </CartFooter>
          <FinalizeazaWrapper>
            <ButonFinalizeaza>Finalizeaza Comanda</ButonFinalizeaza>
          </FinalizeazaWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch(emptyCart()),
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CosCumparaturi);
