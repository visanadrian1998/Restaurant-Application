import React from "react";
import Image from "./salate.jpg";
import { ImageWrapperCss, TextCss } from "../Pizza/index.css";
const Salate = () => {
  return (
    <>
      <ImageWrapperCss>
        <img src={Image} alt="Salate" />
      </ImageWrapperCss>
      <TextCss>
        Ingrediente proaspete si delicioase care asigura un gust desavarsit.
        Comanda si convinge-te!
      </TextCss>
    </>
  );
};
export default Salate;
