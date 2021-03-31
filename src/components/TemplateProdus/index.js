import React from "react";
import {
  ProdusContainerCss,
  ProdusImageCss,
  ProdusDenumire,
  ProdusIngrediente,
  ProdusPret,
  ButonCumparare,
} from "./index.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
const Produs = ({ denumire, ingrediente, pret, imagine, id, addToCart }) => {
  return (
    <ProdusContainerCss>
      <ProdusImageCss>
        <img src={imagine} alt="imagine_produs" />
        <ButonCumparare onClick={() => addToCart(id)}></ButonCumparare>
      </ProdusImageCss>
      <ProdusDenumire>{denumire}</ProdusDenumire>
      <ProdusIngrediente>{ingrediente}</ProdusIngrediente>
      <ProdusPret>{pret}</ProdusPret>
    </ProdusContainerCss>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Produs);
