import React from "react";
import Image from "./bauturi.jpg";
import {
  ImageWrapperCss,
  ProduseWrapperCss,
  PaginaProduseWrapper,
} from "../Pizza/index.css";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
const Bauturi = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/iabauturi", {
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
  }, []);
  return (
    <PaginaProduseWrapper>
      <ImageWrapperCss>
        <img src={Image} alt="Bauturi" />
      </ImageWrapperCss>
      <ProduseWrapperCss>
        {initialState.map((bautura) => {
          return (
            <Produs
              key={bautura.ProdusID}
              denumire={bautura.Denumire}
              ingrediente={bautura.Ingrediente}
              pret={bautura.Pret}
              imagine={bautura.Imagine_Path}
              id={bautura.ProdusID}
            />
          );
        })}
      </ProduseWrapperCss>
    </PaginaProduseWrapper>
  );
};
export default Bauturi;
