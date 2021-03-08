import React from "react";
import { useHistory } from "react-router-dom";

import { TitleWrapperCss, TitleTextCss } from "./index.css";
import Logo from "./svg/logo.png";
const Title = () => {
  const history = useHistory();

  return (
    <TitleWrapperCss>
      <img
        src={Logo}
        alt="Logo"
        width="100px"
        height="100px"
        onClick={() => history.push("/")}
      />
      <TitleTextCss onClick={() => history.push("/")}>
        Scandinavia Pizza
      </TitleTextCss>
    </TitleWrapperCss>
  );
};
export default Title;
