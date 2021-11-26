import React from "react";
import { TecnicoList } from "./TecnicoList";
import { NavLink } from "react-router-dom";
import { Footer } from "../screens/Footer";
import "../styles/tecnicos.css";
import imgtec from "../../images/serviciotec.jpg";

export const TecnicoScreen = () => {
  return (
    <>
      <div
        className="container-candidate"
        style={{ textAlign: "center", top: "0px", backgroundColor: "black" }}
      >
        <h1 style={{ color: "white" }}>
          Personal en misión para Nestlé Professional
        </h1>
        <hr />
        <div>
          <img
            src={imgtec}
            alt={imgtec}
            className="img-fluid rounded mx-auto d-block"
          />
        </div>
        <hr />
        <div className="container-search1">
          <NavLink
            exact
            to="/Search"
            activeClassName="active"
            style={{ color: "grey", textDecoration: "none" }}
          >
            Buscar
          </NavLink>
        </div>

        <TecnicoList publisher="Tecnico en mision para NP" />
      </div>
      <Footer />
    </>
  );
};
