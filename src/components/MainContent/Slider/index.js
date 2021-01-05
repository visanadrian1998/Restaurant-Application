import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SliderWrapperCss, SliderImageCss } from "./index.css";
import Image1 from "./images/jpg.jfif";
import Image2 from "./images/image2.jpg";
import Image3 from "./images/image3.jpg";

const Slider = () => {
  const images = [Image1, Image2, Image3];

  const zoomInProperties = {
    indicators: false,
    scale: 1.4,
  };
  return (
    <SliderWrapperCss>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <SliderImageCss key={index} style={{ width: "100%" }}>
            <img
              style={{ objectFit: "cover", width: "100%" }}
              src={each}
              alt="pizza_image"
            />
          </SliderImageCss>
        ))}
      </Zoom>
    </SliderWrapperCss>
  );
};

export default Slider;
