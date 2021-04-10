import React from "react";
import Image from "./images/pasta.jpg";
import {
  ImageWrapperCss,
  ProduseWrapperCss,
  PaginaProduseWrapper,
} from "../Pizza/index.css";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
const Paste = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/iapastele", {
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
        <img src={Image} alt="Pasta" />
      </ImageWrapperCss>
      <ProduseWrapperCss>
        {initialState.map((paste) => {
          return (
            <Produs
              key={paste.ProdusID}
              denumire={paste.Denumire}
              ingrediente={paste.Ingrediente}
              pret={paste.Pret}
              imagine={paste.Imagine_Path}
              id={paste.ProdusID}
            />
          );
        })}
      </ProduseWrapperCss>
    </PaginaProduseWrapper>
  );
};
export default Paste;
