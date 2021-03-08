import React from "react";
import {
  ProdusContainerCss,
  ProdusImageCss,
  ProdusDenumire,
  ProdusIngrediente,
  ProdusPret,
  ButonCumparare,
} from "./index.css";

const Produs = ({ denumire, ingrediente, pret, imagine }) => {
  return (
    <ProdusContainerCss>
      <ProdusImageCss>
        <img src={imagine} alt="imagine_produs" />
        <ButonCumparare></ButonCumparare>
      </ProdusImageCss>
      <ProdusDenumire>{denumire}</ProdusDenumire>
      <ProdusIngrediente>{ingrediente}</ProdusIngrediente>
      <ProdusPret>{pret}</ProdusPret>
    </ProdusContainerCss>
  );
};
export default Produs;
