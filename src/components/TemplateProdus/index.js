import React from "react";
import {
  ProdusContainerCss,
  ProdusImageCss,
  ProdusDenumire,
  ProdusIngrediente,
  ProdusPret,
} from "./index.css";

const Produs = ({ denumire, ingrediente, pret, imagine }) => {
  return (
    <ProdusContainerCss>
      <ProdusImageCss>
        <img src={imagine} alt="pizza" />
      </ProdusImageCss>
      <ProdusDenumire>{denumire}</ProdusDenumire>
      <ProdusIngrediente>{ingrediente}</ProdusIngrediente>
      <ProdusPret>{pret}</ProdusPret>
    </ProdusContainerCss>
  );
};
export default Produs;
