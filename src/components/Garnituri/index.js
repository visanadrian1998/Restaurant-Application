import React from "react";
import Image from "./garnituri.jpg";
import { ImageWrapperCss, TextCss } from "../Pizza/index.css";
const Garnituri = () => {
  return (
    <>
      <ImageWrapperCss>
        <img src={Image} alt="Garnituri" />
      </ImageWrapperCss>
      <TextCss>
        Ingrediente proaspete si delicioase care asigura un gust desavarsit.
        Comanda si convinge-te!
      </TextCss>
    </>
  );
};
export default Garnituri;
