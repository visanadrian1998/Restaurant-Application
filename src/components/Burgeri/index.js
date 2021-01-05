import React from "react";
import Image from "./burger.jpg";
import { ImageWrapperCss, TextCss } from "../Pizza/index.css";
const Burgeri = () => {
  return (
    <>
      <ImageWrapperCss>
        <img src={Image} alt="Burgeri" />
      </ImageWrapperCss>
      <TextCss>
        Ingrediente proaspete si delicioase care asigura un gust desavarsit.
        Comanda si convinge-te!
      </TextCss>
    </>
  );
};
export default Burgeri;
