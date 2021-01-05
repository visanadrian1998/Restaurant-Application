import React from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import Navigation from "./components/Navigation/index";
import MainContent from "./components/MainContent/index";
const Routes = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/" component={MainContent} />
      </Switch>
    </Router>
  );
};
export default Routes;
