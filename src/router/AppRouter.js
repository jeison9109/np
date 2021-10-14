import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/screens/Home";
import { Nosotros } from "../components/screens/Nosotros";
import { Soluciones } from "../components/screens/Soluciones";
import { Portafolio } from "../components/screens/Portafolio";
import { Formulario } from "../components/screens/Formulario";
import { TecnicoScreen } from "../components/tecnicos/TecnicoScreen";
import { TecnicoPerfil } from "../components/tecnicos/TecnicoPerfil";

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
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/tecnico" component={TecnicoScreen} />
          <Route exact path="/tecnic/:tecnicoId" component={TecnicoPerfil} />
        </Switch>
      </Router>
    </>
  );
}
