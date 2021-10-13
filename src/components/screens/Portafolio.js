import React from "react";
import fondportafolio from "../../images/portafolio.jpg";
import { Footer } from "../screens/Footer";
import "../styles/portafolio.css";

export const Portafolio = () => {
  return (
    <>
      <div className="container">
        <h1>Portafolio</h1>
      </div>
      <div className="container-portafolio">
        <img
          className="fondportafolio"
          src={fondportafolio}
          alt={fondportafolio}
        />
      </div>
      <Footer />
    </>
  );
};
