import React from "react";
import Carouseles from "./Carouseles";
import { Footer } from "./Footer";
import {
  MdHotel,
  MdSchool,
  MdOutlineRestaurant,
  MdFastfood,
  MdPrecisionManufacturing,
} from "react-icons/md";

import fondnos from "../../images/coffe2.jpg";

export const Nosotros = () => {
  return (
    <>
      <Carouseles />

      <div
        className="container-ml"
        width="100%"
        style={{ position: "relative" }}
      >
        <img src={fondnos} alt={fondnos} width="100%" height="auto" />
        <div className="caption">
          <ul
            className="col-md-12"
            style={{ position: "absolute", top: "30px" }}
          >
            <h1 className="font-effect-fire">Nos dirigimos</h1>
            <li>
              <h3 style={{ color: "white" }}>
                {" "}
                <MdHotel
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                Hoteles
              </h3>
            </li>
            <li>
              <h3 style={{ color: "white" }}>
                {" "}
                <MdSchool
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                Universidad y Transporte
              </h3>
            </li>
            <li>
              <h3 style={{ color: "white" }}>
                <MdOutlineRestaurant
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                Restaurantes
              </h3>
            </li>
            <li>
              <h3 style={{ color: "white" }}>
                <MdFastfood
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                Dessert y Savoury Manufactures
              </h3>
            </li>
            <li>
              <h3 style={{ color: "white" }}>
                <MdPrecisionManufacturing
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    marginRight: "10px",
                  }}
                />
                B&i - HMR
              </h3>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};
