import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/screens/Home";
import { Nosotros } from "../components/screens/Nosotros";
import { Soluciones } from "../components/screens/Soluciones";
import { Portafolio } from "../components/screens/Portafolio";
import { Formulario } from "../components/screens/Formulario";
import { TecnicoScreen } from "../components/tecnicos/TecnicoScreen";
import { TecnicoPerfil } from "../components/tecnicos/TecnicoPerfil";
import { Search } from "../components/screens/Search";
import { AuthRouter } from "../router/AuthRouter";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import { login } from "../actions/auth";
import { NestleProf } from "../components/screens/NestleProf";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export default function AppRouter() {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      //validacion de autenticacion
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName)); //import la accion
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setisLoggedIn]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <PublicRouter exact path="/home" component={Home} />
          <PublicRouter exact path="/nosotros" component={Nosotros} />
          <PublicRouter exact path="/soluciones" component={Soluciones} />
          <PublicRouter exact path="/portafolio" component={Portafolio} />
          <PublicRouter exact path="/formulario" component={Formulario} />
          <PublicRouter exact path="/tecnico" component={TecnicoScreen} />
          <PublicRouter
            exact
            path="/tecnic/:tecnicoId"
            component={TecnicoPerfil}
          />
          <PublicRouter exact path="/search" component={Search} />
          <PublicRouter
            path="/auth"
            isAuthenticated={isLoggedIn}
            component={AuthRouter}
          />
          <PrivateRouter
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={NestleProf}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </Router>
    </>
  );
}
