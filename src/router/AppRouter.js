import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/screens/Home";
import { Nosotros } from "../components/screens/Nosotros";
import { Soluciones } from "../components/screens/Soluciones";
import { Portafolio } from "../components/screens/Portafolio";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/soluciones" component={Soluciones} />
          <Route exact path="/portafolio" component={Portafolio} />
        </Switch>
      </Router>
    </>
  );
}
