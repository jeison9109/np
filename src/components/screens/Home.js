import React from "react";
import "../styles/home.css";
import img1 from "../../images/Imagen1.png";
import img2 from "../../images/logtext1.jpg";
import img3 from "../../images/Imagen3.png";
import { Footer } from "../screens/Footer";
import fondohome from "../../images/fondo-fin.png";

export const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="titulo-home">
          <h1>Nestlé Professional</h1>
        </div>
        <div className="container">
          <div className="clearfix">
            <img
              className="img2 col-md-6 float-end mb-3 ms-md-3"
              src={img2}
              alt={img2}
            />
            <div className="container" style={{ textAlign: "justify" }}>
              <br />
              <br />
              <br />
              <p>
                La historia de NESCAFÉ Alegria remonta a 1998, cuando se creó el
                modelo de negocios de "NESCAFÉ Top Cup" en la ciudad de Caracas.
              </p>

              <p>
                Luego del éxito en Venezuela, siguió una rápida expasión a
                México, Chile, Brasil y posteriomente en todo Lationamericá.
                "Colombia"
              </p>

              <p>
                Esta expasión vigorosa y armonizada creó una filosofia de
                trabajo, un verdadero "estilo de vida" que es el ADN de NESCAFÉ
                Alegria en NP LATAM.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
