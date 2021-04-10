import React from "react";
import Image from "./burger.jpg";
import {
  ImageWrapperCss,
  ProduseWrapperCss,
  PaginaProduseWrapper,
} from "../Pizza/index.css";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
const Burgeri = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/iaburgeri", {
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
        <img src={Image} alt="Burgeri" />
      </ImageWrapperCss>
      <ProduseWrapperCss>
        {initialState.map((burger) => {
          return (
            <Produs
              key={burger.ProdusID}
              denumire={burger.Denumire}
              ingrediente={burger.Ingrediente}
              pret={burger.Pret}
              imagine={burger.Imagine_Path}
              id={burger.ProdusID}
            />
          );
        })}
      </ProduseWrapperCss>
    </PaginaProduseWrapper>
  );
};
export default Burgeri;
