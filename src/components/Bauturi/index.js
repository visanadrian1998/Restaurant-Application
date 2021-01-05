import React from "react";
import Image from "./bauturi.jpg";
import { ImageWrapperCss, TextCss } from "../Pizza/index.css";
const Bauturi = () => {
  return (
    <>
      <ImageWrapperCss>
        <img src={Image} alt="Bauturi" />
      </ImageWrapperCss>
      <TextCss>
        Ingrediente proaspete si delicioase care asigura un gust desavarsit.
        Comanda si convinge-te!
      </TextCss>
    </>
  );
};
export default Bauturi;
