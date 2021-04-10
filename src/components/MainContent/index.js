import React from "react";
import Slider from "./Slider/index";
import {
  ImageWrapperCss,
  TextCss,
  ProduseWrapperCss,
  PaginaProduseWrapper,
} from "../Pizza/index.css";
import {
  RecomandariTitle,
  TransportGratuitWrapper,
  TransportGratuitSubtitle,
  TransportGratuitTitle,
} from "./Slider/index.css";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
const MainContent = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/iarecomandate", {
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
    <>
      <Slider />
      <PaginaProduseWrapper>
        <RecomandariTitle>Recomandarile Noastre</RecomandariTitle>
        <ProduseWrapperCss>
          {initialState.map((recomandare) => {
            return (
              <Produs
                key={recomandare.ProdusID}
                denumire={recomandare.Denumire}
                ingrediente={recomandare.Ingrediente}
                pret={recomandare.Pret}
                imagine={recomandare.Imagine_Path}
                id={recomandare.ProdusID}
              />
            );
          })}
        </ProduseWrapperCss>
        <TransportGratuitWrapper>
          <TransportGratuitTitle>Transport Gratuit</TransportGratuitTitle>
          <TransportGratuitSubtitle>
            Pentru comenzile de peste 35 lei
          </TransportGratuitSubtitle>
        </TransportGratuitWrapper>
      </PaginaProduseWrapper>
    </>
  );
};
export default MainContent;
