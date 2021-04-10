import React from "react";
import {
  NuAmGasitRezultate,
  PaginaCautareProduseWrapper,
} from "../CautareProdus/index.css";
import { ProduseWrapperCss } from "../Pizza/index.css";

const ComandaPlasata = () => {
  return (
    <PaginaCautareProduseWrapper>
      <ProduseWrapperCss>
        <NuAmGasitRezultate>
          Felicitari! Comanda a fost plasata! In cel mai scurt timp va ajunge la
          dumneavoastra!
        </NuAmGasitRezultate>
      </ProduseWrapperCss>
    </PaginaCautareProduseWrapper>
  );
};
export default ComandaPlasata;
