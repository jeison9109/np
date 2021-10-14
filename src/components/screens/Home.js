import React from "react";
import "../styles/home.css";
import img1 from "../../images/Imagen1.png";
import img2 from "../../images/logtext1.jpg";
import img3 from "../../images/Imagen3.png";

import img16 from "../../images/img1.jpg";
import img17 from "../../images/img2.jpg";
import img18 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";
import img9 from "../../images/img9.jpg";
import img10 from "../../images/img10.jpg";
import img11 from "../../images/img11.jpg";
import img12 from "../../images/img12.jpg";
import img13 from "../../images/img13.jpg";
import img14 from "../../images/img14.jpg";
import img15 from "../../images/img15.jpg";
import img19 from "../../images/img16.jpg";
import { Footer } from "../screens/Footer";
import fondohome from "../../images/fondo-fin.png";

export const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="titulo-home">
          <h1 className="font-effect-fire">Nestlé Professional</h1>
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

      {/*-- Photo Grid --*/}

      <div className="row">
        <div className="col">
          <img src={img16} alt={img16} style={{ width: "100%" }} />
          <img src={img17} alt={img17} style={{ width: "100%" }} />
          <img src={img18} alt={img18} style={{ width: "100%" }} />
          <img src={img4} alt={img4} style={{ width: "100%" }} />
        </div>
        <div className="col">
          <img src={img5} alt={img5} style={{ width: "100%" }} />
          <img src={img6} alt={img6} style={{ width: "100%" }} />
          <img src={img7} alt={img7} style={{ width: "100%" }} />
          <img src={img8} alt={img8} style={{ width: "100%" }} />
        </div>
        <div className="col">
          <img src={img9} alt={img9} style={{ width: "100%" }} />
          <img src={img10} alt={img10} style={{ width: "100%" }} />
          <img src={img11} alt={img11} style={{ width: "100%" }} />
          <img src={img12} alt={img12} style={{ width: "100%" }} />
        </div>
        <div className="col">
          <img src={img13} alt={img13} style={{ width: "100%" }} />
          <img src={img14} alt={img14} style={{ width: "100%" }} />
          <img src={img15} alt={img15} style={{ width: "100%" }} />
          <img src={img19} alt={img19} style={{ width: "100%" }} />
        </div>
      </div>
      <Footer />
    </>
  );
};
