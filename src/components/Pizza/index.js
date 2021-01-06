import React from "react";
import Image from "./images/pizza.jpg";
import {
  ImageWrapperCss,
  TextCss,
  PizzasWrapperCss,
  OnePizzaWrapperCss,
} from "./index.css";
const Pizza = () => {
  const pizzas = [
    {
      name: "Quatro Stagioni",
      Pret: "23",
    },
    {
      name: "Prosciuto",
      Pret: "26",
    },
    {
      name: "Capriciosa",
      Pret: "25",
    },
    {
      name: "Diavola",
      Pret: "24",
    },
  ];
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
        {pizzas.map((pizza) => {
          return (
            <OnePizzaWrapperCss>
              <h1>{pizza.name}</h1>
              <h3>{pizza.Pret}</h3>
            </OnePizzaWrapperCss>
          );
        })}
      </PizzasWrapperCss>
    </>
  );
};
export default Pizza;
