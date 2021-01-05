import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  NavigationWrapperCss,
  NavigationListCss,
  NavigationItemCss,
  NavigationItemSpan,
} from "./index.css";
const Navigation = () => {
  const history = useHistory();

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    const offsetNavBar = document.getElementById("NavBar").offsetTop;
    if (offset > offsetNavBar) {
      setScrolled(true);
    }
    if (
      offset <=
      document.getElementById("HeaderWrapper").offsetTop +
        document.getElementById("HeaderWrapper").offsetHeight
    ) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <NavigationWrapperCss>
      <NavigationListCss id="NavBar" className={scrolled ? "sticky" : ""}>
        <NavigationItemCss>
          <NavigationItemSpan onClick={() => history.push("/pizza")}>
            Pizza
          </NavigationItemSpan>
        </NavigationItemCss>
        <NavigationItemCss>
          <NavigationItemSpan onClick={() => history.push("/paste")}>
            Paste
          </NavigationItemSpan>
        </NavigationItemCss>
        <NavigationItemCss>
          <NavigationItemSpan onClick={() => history.push("/burgeri")}>
            Burgeri
          </NavigationItemSpan>
        </NavigationItemCss>
        <NavigationItemCss>
          <NavigationItemSpan onClick={() => history.push("/salate")}>
            Salate
          </NavigationItemSpan>
        </NavigationItemCss>
        <NavigationItemCss>
          <NavigationItemSpan onClick={() => history.push("/garnituri")}>
            Garnituri
          </NavigationItemSpan>
        </NavigationItemCss>
        <NavigationItemCss>
          <NavigationItemSpan onClick={() => history.push("/sosuri")}>
            Sosuri
          </NavigationItemSpan>
        </NavigationItemCss>
        <NavigationItemCss>
          <NavigationItemSpan onClick={() => history.push("/bauturi")}>
            Bauturi
          </NavigationItemSpan>
        </NavigationItemCss>
      </NavigationListCss>
    </NavigationWrapperCss>
  );
};
export default Navigation;
