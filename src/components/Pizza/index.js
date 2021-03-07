import React from "react";
import Image from "./images/pizza.jpg";
import Produs from "../TemplateProdus/index";
import { useEffect, useState } from "react";
import {
  ImageWrapperCss,
  TextCss,
  PizzasWrapperCss,
  OnePizzaWrapperCss,
} from "./index.css";
const Pizza = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/pizzas")
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
      <ImageWrapperCss>
        <img src={Image} alt="Pizza" />
      </ImageWrapperCss>
      <TextCss>
        Ingrediente proaspete si delicioase care asigura un gust desavarsit.
        Comanda si convinge-te!
      </TextCss>
      <PizzasWrapperCss>
        {initialState.map((pizza) => {
          return (
            <Produs
              key={pizza.PizzaID}
              denumire={pizza.Denumire}
              ingrediente={pizza.Ingrediente}
              pret={pizza.Pret}
              imagine={"./images/pizza-suprema.jpg"}
            />
            // <OnePizzaWrapperCss>
            //   <h1>{pizza.Denumire}</h1>
            //   <h3>{pizza.Pret}</h3>
            //   <h3>{pizza.Ingrediente}</h3>
            // </OnePizzaWrapperCss>
          );
        })}
      </PizzasWrapperCss>
    </>
  );
};
export default Pizza;
