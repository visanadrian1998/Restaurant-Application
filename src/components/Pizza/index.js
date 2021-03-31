import React from "react";
import Image from "./images/pizza.jpg";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
import {
  ImageWrapperCss,
  ProduseWrapperCss,
  PaginaProduseWrapper,
} from "./index.css";
const Pizza = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/iapizzele", {
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
        <img src={Image} alt="Pizza" />
      </ImageWrapperCss>
      <ProduseWrapperCss>
        {initialState.map((pizza) => {
          return (
            <Produs
              key={pizza.ProdusID}
              denumire={pizza.Denumire}
              ingrediente={pizza.Ingrediente}
              pret={pizza.Pret + " Lei"}
              imagine={pizza.Imagine_Path}
              id={pizza.ProdusID}
            />
          );
        })}
      </ProduseWrapperCss>
    </PaginaProduseWrapper>
  );
};
export default Pizza;
