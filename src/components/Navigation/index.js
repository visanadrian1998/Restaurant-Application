import React from "react";
import { useHistory } from "react-router-dom";

import {
  NavigationWrapperCss,
  NavigationListCss,
  NavigationItemCss,
  NavigationItemSpan,
} from "./index.css";
const Navigation = () => {
  const history = useHistory();

  return (
    <NavigationWrapperCss>
      <NavigationListCss>
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
