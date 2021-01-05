import React from "react";
import { HeaderWrapperCss, HeaderContentCss } from "./index.css";
import ContactInfo from "./ContactInfo/index";
import Title from "./Title/index";
import Cart from "./Cart/index";
class Header extends React.Component {
  render() {
    return (
      <HeaderWrapperCss id="HeaderWrapper">
        <HeaderContentCss>
          <ContactInfo />
          <Title />
          <Cart />
        </HeaderContentCss>
      </HeaderWrapperCss>
    );
  }
}
export default Header;
