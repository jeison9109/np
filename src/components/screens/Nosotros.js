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
            style={{ position: "absolute", top: "0px" }}
          >
            <h1 className="font-effect-fire" style={{ marginTop: "10px" }}>
              Nos dirigimos
            </h1>
            <li>
              <h5 style={{ color: "white" }}>
                {" "}
                <MdHotel
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginRight: "10px",
                  }}
                />
                Hoteles
              </h5>
            </li>
            <li>
              <h5 style={{ color: "white" }}>
                {" "}
                <MdSchool
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginRight: "10px",
                  }}
                />
                Universidad y Transporte
              </h5>
            </li>
            <li>
              <h5 style={{ color: "white" }}>
                <MdOutlineRestaurant
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginRight: "10px",
                  }}
                />
                Restaurantes
              </h5>
            </li>
            <li>
              <h5 style={{ color: "white" }}>
                <MdFastfood
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginRight: "10px",
                  }}
                />
                Dessert y Savoury Manufactures
              </h5>
            </li>
            <li>
              <h5 style={{ color: "white" }}>
                <MdPrecisionManufacturing
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginRight: "10px",
                  }}
                />
                B&i - HMR
              </h5>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};
