import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { Footer } from "./Footer";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    //Dispatch de la accion
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar container-fluid">
        <h5 className="mt-5">
          <hr />
          <i className="far fa-moon "></i>

          <span>Bienvenido Amigo Professional</span>
        </h5>
        <hr />
        <div className="container-fluid container">
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Modelos de maquinas Alegria - Expresso
          </h2>
          <div className="container-fluid">
            <div className="row">
              <NavLink
                exact
                to="/Modelo860"
                activeClassName="active"
                className="row"
                style={{ textDecoration: "none", marginBottom: "10px" }}
              >
                <button type="button" className="btn btn-primary">
                  Maquina Alegria 8/60
                </button>
              </NavLink>

              <NavLink
                exact
                to="/Modelo630"
                activeClassName="active"
                className="row"
                style={{ textDecoration: "none", marginBottom: "10px" }}
              >
                <button type="button" className="btn btn-secondary">
                  Maquina Alegria 6/30
                </button>
              </NavLink>

              <NavLink
                exact
                to="/ModeloFTP"
                activeClassName="active"
                className="row"
                style={{ textDecoration: "none", marginBottom: "10px" }}
              >
                <button type="button" className="btn btn-success">
                  Maquina Expresso FTP60BE
                </button>
              </NavLink>

              <NavLink
                exact
                to="/ModeloFTS"
                activeClassName="active"
                className="row"
                style={{ textDecoration: "none", marginBottom: "10px" }}
              >
                <button type="button" className="btn btn-danger">
                  Maquina Expresso FTS60B
                </button>
              </NavLink>

              <NavLink
                exact
                to="/ModeloCombi"
                activeClassName="active"
                className="row"
                style={{ textDecoration: "none", marginBottom: "10px" }}
              >
                <button type="button" className="btn btn-warning">
                  Maquina Expresso Combi
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <button className="btn" id="button-logout" onClick={handleLogout}>
          Logout
        </button>
        <hr />
      </div>
      <Footer />
    </aside>
  );
};
