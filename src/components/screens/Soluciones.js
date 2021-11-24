import React from "react";
import "../styles/soluciones.css";
import { Footer } from "../screens/Footer";
import fondsoluciones from "../../images/Imagen5.png";
import { NavLink } from "react-router-dom";
import { MdAdsClick } from "react-icons/md";
import { VideoNp } from "./VideoNp";

export const Soluciones = () => {
  return (
    <>
      <div className="container">
        <h1 className="font-effect-fire">Soluciones</h1>
      </div>
      <div className="container-v">
        <VideoNp />
      </div>

      <div className="container-button">
        <NavLink exact to="/formulario" activeClassName="active">
          <h3
            style={{ color: "white" }}
            className="container-contactenos animate__animated animate__rotateIn"
          >
            Contactenos{" "}
            <MdAdsClick
              spin
              style={{
                color: "white",
                fontSize: "2rem",
                marginRight: "10px",
              }}
            />
          </h3>{" "}
        </NavLink>
      </div>
      <div className="container-button">
        <NavLink exact to="/tecnico" activeClassName="active">
          <h3
            style={{ color: "white" }}
            className="container-contactenos animate__animated animate__rotateIn"
          >
            Verificar Tecnico{" "}
            <MdAdsClick
              spin
              style={{
                color: "white",
                fontSize: "2rem",
                marginRight: "10px",
              }}
            />
          </h3>{" "}
        </NavLink>
      </div>

      <div className="container-button">
        <NavLink exact to="/auth/login" activeClassName="active">
          <h3
            style={{ color: "white" }}
            className="container-contactenos animate__animated animate__rotateIn"
          >
            Ingresar al Portal{" "}
            <MdAdsClick
              spin
              style={{
                color: "white",
                fontSize: "2rem",
                marginRight: "10px",
              }}
            />
          </h3>{" "}
        </NavLink>
      </div>

      <div className="container-soluciones">
        <img
          className="fondsoluciones"
          src={fondsoluciones}
          alt={fondsoluciones}
        />
        <div
          className="container-button"
          style={{
            position: "absolute",
            top: "10px",
            marginLeft: "15px",
          }}
        ></div>
      </div>
      <Footer />
    </>
  );
};
