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
import CautareProdus from "./components/CautareProdus";
import Footer from "./components/Footer";
import ContulMeu from "./components/ContulMeu";
import InregistrareSucces from "./components/ContulMeu/InregistrareSucces";
import CosCumparaturi from "./components/CosCumparaturi";
import FinalizareComanda from "./components/FinalizareComanda";
import ComandaPlasata from "./components/FinalizareComanda/ComandaPlasata";
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
        <Route exact path="/cautare/*" component={CautareProdus} />
        <Route exact path="/contul-meu" component={ContulMeu} />
        <Route
          exact
          path="/inregistrare-succes"
          component={InregistrareSucces}
        />
        <Route exact path="/cos-cumparaturi" component={CosCumparaturi} />
        <Route
          exact
          path="/cos-cumparaturi/finalizare"
          component={FinalizareComanda}
        />
        <Route exact path="/comanda-plasata" component={ComandaPlasata} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;
