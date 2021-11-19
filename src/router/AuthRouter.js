import React from "react";
import { Switch, Route } from "react-router";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import "../components/styles/auth.css";

export const AuthRouter = () => {
  return (
    <>
      <div className="auth_main">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
        </Switch>
      </div>
    </>
  );
};
