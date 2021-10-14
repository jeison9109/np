import React from "react";
import fondportafolio from "../../images/portafolio.jpg";
import { Footer } from "../screens/Footer";
import { ModalScreen } from "./ModalScreen";
import "../styles/portafolio.css";

export const Portafolio = () => {
  return (
    <>
      <div className="container">
        <h1 className="font-effect-fire">Portafolio</h1>
      </div>
      <div className="container-portafolio">
        <img
          className="fondportafolio"
          src={fondportafolio}
          alt={fondportafolio}
        />
      </div>
      <div className="container-modal">
        <ModalScreen />
      </div>

      <Footer />
    </>
  );
};
