import React from "react";
import Image from "./sosuri.jpg";
import { ImageWrapperCss, TextCss } from "../Pizza/index.css";
const Sosuri = () => {
  return (
    <>
      <ImageWrapperCss>
        <img src={Image} alt="Sosuri" />
      </ImageWrapperCss>
      <TextCss>
        Ingrediente proaspete si delicioase care asigura un gust desavarsit.
        Comanda si convinge-te!
      </TextCss>
    </>
  );
};
export default Sosuri;
