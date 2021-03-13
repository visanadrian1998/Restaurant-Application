import React from "react";
import {
  NuAmGasitRezultate,
  PaginaCautareProduseWrapper,
} from "../CautareProdus/index.css";
import { LinkCss } from "./index.css";
import { ProduseWrapperCss } from "../Pizza/index.css";
import { Link, useHistory } from "react-router-dom";

const InregistrareSucces = () => {
  const history = useHistory();
  const mergiLaLogare = () => {
    history.push(`/contul-meu`);
  };
  return (
    <PaginaCautareProduseWrapper>
      <ProduseWrapperCss>
        <NuAmGasitRezultate>
          Felicitari! Contul tau a fost creat. Te poti loga in cont de{" "}
          <LinkCss onClick={mergiLaLogare}>aici</LinkCss>
        </NuAmGasitRezultate>
      </ProduseWrapperCss>
    </PaginaCautareProduseWrapper>
  );
};
export default InregistrareSucces;
