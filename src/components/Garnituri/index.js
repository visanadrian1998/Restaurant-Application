import React from "react";
import Image from "./garnituri.jpg";
import {
  ImageWrapperCss,
  ProduseWrapperCss,
  PaginaProduseWrapper,
} from "../Pizza/index.css";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
const Garnituri = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/iasalate", {
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
        <img src={Image} alt="Garnituri" />
      </ImageWrapperCss>
      <ProduseWrapperCss>
        {initialState.map((salata) => {
          return (
            <Produs
              key={salata.ProdusID}
              denumire={salata.Denumire}
              ingrediente={salata.Ingrediente}
              pret={salata.Pret + " Lei"}
              imagine={salata.Imagine_Path}
            />
          );
        })}
      </ProduseWrapperCss>
    </PaginaProduseWrapper>
  );
};
export default Garnituri;
