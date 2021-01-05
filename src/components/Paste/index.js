import React from "react";
import Image from "./images/pasta.jpg";
import { ImageWrapperCss, TextCss } from "../Pizza/index.css";
const Paste = () => {
  return (
    <>
      <ImageWrapperCss>
        <img src={Image} alt="Pasta" />
      </ImageWrapperCss>
      <TextCss>
        Ingrediente proaspete si delicioase care asigura un gust desavarsit.
        Comanda si convinge-te!
      </TextCss>
    </>
  );
};
export default Paste;
