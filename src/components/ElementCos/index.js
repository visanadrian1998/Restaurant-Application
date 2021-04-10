import React from "react";
import {
  ElementCosWrapper,
  ElementCosPret,
  ElementCosDenumire,
  ElementCosCantitateText,
  ElementCosCantitate,
  ElementCantitateWrapper,
  DenumirePretWrapper,
  DeleteWrapper,
  AjusteazaCantitateWrapper,
  PlusMinusCantitate,
} from "./index.css";
import { ReactComponent as Delete } from "./svg/delete.svg";

import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../redux/Shopping/shopping-actions";
const ElementCos = ({
  denumire,
  pret,
  cantitate,
  id,
  removeFromCart,
  adjustQty,
}) => {
  const cresteCantitate = () => {
    adjustQty(id, cantitate + 1);
  };
  const scadeCantitate = () => {
    if (cantitate > 1) {
      adjustQty(id, cantitate - 1);
    }
  };
  return (
    <ElementCosWrapper>
      <DenumirePretWrapper>
        <ElementCosDenumire>{denumire}</ElementCosDenumire>
        <ElementCosPret>
          {pret}
          <span> Lei</span>
        </ElementCosPret>
      </DenumirePretWrapper>
      <ElementCantitateWrapper>
        <ElementCosCantitateText>Cantitate</ElementCosCantitateText>
        <AjusteazaCantitateWrapper>
          <PlusMinusCantitate onClick={scadeCantitate}>-</PlusMinusCantitate>
          <ElementCosCantitate value={cantitate} readonly disabled min="1" />
          <PlusMinusCantitate onClick={cresteCantitate}>+</PlusMinusCantitate>
        </AjusteazaCantitateWrapper>
      </ElementCantitateWrapper>
      <ElementCantitateWrapper>
        <ElementCosCantitateText>Pret total</ElementCosCantitateText>
        <ElementCosPret>
          {pret * cantitate}
          <span> Lei</span>
        </ElementCosPret>
      </ElementCantitateWrapper>
      <DeleteWrapper>
        <Delete onClick={() => removeFromCart(id)} />
      </DeleteWrapper>
    </ElementCosWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, qty) => dispatch(adjustQty(id, qty)),
  };
};

export default connect(null, mapDispatchToProps)(ElementCos);
