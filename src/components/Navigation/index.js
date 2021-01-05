import React from "react";
import {
  NavigationWrapperCss,
  NavigationListCss,
  NavigationItemCss,
  NavigationItemSpan,
} from "./index.css";
class Navigation extends React.Component {
  render() {
    return (
      <NavigationWrapperCss>
        <NavigationListCss>
          <NavigationItemCss>
            <NavigationItemSpan>Pizza</NavigationItemSpan>
          </NavigationItemCss>
          <NavigationItemCss>
            <NavigationItemSpan>Paste</NavigationItemSpan>
          </NavigationItemCss>
          <NavigationItemCss>
            <NavigationItemSpan>Salate</NavigationItemSpan>
          </NavigationItemCss>
          <NavigationItemCss>
            <NavigationItemSpan>Garnituri</NavigationItemSpan>
          </NavigationItemCss>
          <NavigationItemCss>
            <NavigationItemSpan>Sosuri</NavigationItemSpan>
          </NavigationItemCss>
          <NavigationItemCss>
            <NavigationItemSpan>Bauturi</NavigationItemSpan>
          </NavigationItemCss>
        </NavigationListCss>
      </NavigationWrapperCss>
    );
  }
}
export default Navigation;
