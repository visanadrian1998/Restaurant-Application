import React from "react";
import Image from "./sosuri.jpg";
import {
  ImageWrapperCss,
  ProduseWrapperCss,
  PaginaProduseWrapper,
} from "../Pizza/index.css";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
const Sosuri = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/iasosuri", {
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
        <img src={Image} alt="Sosuri" />
      </ImageWrapperCss>
      <ProduseWrapperCss>
        {initialState.map((sos) => {
          return (
            <Produs
              key={sos.ProdusID}
              denumire={sos.Denumire}
              ingrediente={sos.Ingrediente}
              pret={sos.Pret}
              imagine={sos.Imagine_Path}
              id={sos.ProdusID}
            />
          );
        })}
      </ProduseWrapperCss>
    </PaginaProduseWrapper>
  );
};
export default Sosuri;
