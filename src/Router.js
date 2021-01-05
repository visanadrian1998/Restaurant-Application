import React from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import Navigation from "./components/Navigation/index";
import MainContent from "./components/MainContent/index";
import Pizza from "./components/Pizza";
import Paste from "./components/Paste";
import Burgeri from "./components/Burgeri";
import Salate from "./components/Salate";
import Garnituri from "./components/Garnituri";
import Sosuri from "./components/Sosuri";
import Bauturi from "./components/Bauturi";
const Routes = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/pizza" component={Pizza} />
        <Route exact path="/paste" component={Paste} />
        <Route exact path="/burgeri" component={Burgeri} />
        <Route exact path="/salate" component={Salate} />
        <Route exact path="/garnituri" component={Garnituri} />
        <Route exact path="/sosuri" component={Sosuri} />
        <Route exact path="/bauturi" component={Bauturi} />
      </Switch>
    </Router>
  );
};
export default Routes;
