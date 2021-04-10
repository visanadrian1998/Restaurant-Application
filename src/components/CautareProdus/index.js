import React from "react";
import { ProduseWrapperCss } from "../Pizza/index.css";
import { PaginaCautareProduseWrapper, NuAmGasitRezultate } from "./index.css";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
const CautareProdus = () => {
  const [initialState, setInitialState] = useState([]);
  useEffect(() => {
    fetch(`${window.location.pathname}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        setInitialState(response);
      });
  }, [window.location.pathname]);
  return (
    <PaginaCautareProduseWrapper>
      <ProduseWrapperCss>
        {initialState.length > 0 ? (
          initialState.map((produs) => {
            return (
              <Produs
                key={produs.ProdusID}
                denumire={produs.Denumire}
                ingrediente={produs.Ingrediente}
                pret={produs.Pret}
                imagine={produs.Imagine_Path}
                id={produs.ProdusID}
              />
            );
          })
        ) : (
          <NuAmGasitRezultate>
            Ne pare rau, dar nu am gasit rezultate.
          </NuAmGasitRezultate>
        )}
      </ProduseWrapperCss>
    </PaginaCautareProduseWrapper>
  );
};
export default CautareProdus;
