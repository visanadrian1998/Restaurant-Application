import React from "react";
import Image from "./salate.jpg";
import {
  ImageWrapperCss,
  ProduseWrapperCss,
  PaginaProduseWrapper,
} from "../Pizza/index.css";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
const Salate = () => {
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
        <img src={Image} alt="Salate" />
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
              id={salata.ProdusID}
            />
          );
        })}
      </ProduseWrapperCss>
    </PaginaProduseWrapper>
  );
};
export default Salate;
