import React from "react";
import Image from "./images/pizza.jpg";
import { ImageWrapperCss, TextCss } from "./index.css";
const Pizza = () => {
  return (
    <>
      <ImageWrapperCss>
        <img src={Image} alt="Pizza" />
      </ImageWrapperCss>
      <TextCss>
        Ingrediente proaspete si delicioase care asigura un gust desavarsit.
        Comanda si convinge-te!
      </TextCss>
    </>
  );
};
export default Pizza;
