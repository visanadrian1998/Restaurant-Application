import React from "react";
import { TitleWrapperCss, TitleTextCss } from "./index.css";
import Logo from "./svg/logo.png";
class Title extends React.Component {
  render() {
    return (
      <TitleWrapperCss>
        <img src={Logo} alt="Logo" width="100px" height="100px" />
        <TitleTextCss>SULEYMAN PIZZA</TitleTextCss>
      </TitleWrapperCss>
    );
  }
}
export default Title;
