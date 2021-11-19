import React from "react";
import { TecnicoList } from "./TecnicoList";
import { NavLink } from "react-router-dom";
import { Footer } from "../screens/Footer";
import "../styles/tecnicos.css";

export const TecnicoScreen = () => {
  return (
    <>
      <div
        className="container-candidate"
        style={{ textAlign: "center", top: "0px", backgroundColor: "black" }}
      >
        <h1 style={{ color: "gray" }}>
          Personal en misión para Nestlé Professional
        </h1>
        <hr />
        <div className="container-search1">
          <NavLink exact to="/Search" activeClassName="active">
            Buscar
          </NavLink>
        </div>

        <TecnicoList publisher="Tecnico en mision para NP" />
      </div>
      <Footer />
    </>
  );
};
