import React from "react";
import { HeaderWrapperCss, HeaderContentCss } from "./index.css";
import ContactInfo from "./ContactInfo/index";
import Title from "./Title/index";
import Cart from "./Cart/index";
const Header = () => {
  return (
    <HeaderWrapperCss id="HeaderWrapper">
      <HeaderContentCss>
        <ContactInfo />
        <Title />
        <Cart />
      </HeaderContentCss>
    </HeaderWrapperCss>
  );
};
export default Header;
