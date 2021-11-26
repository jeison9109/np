import React from "react";
import { Link } from "react-router-dom";

export const TecnicoCard = ({
  id,
  tecnico,
  publisher,
  alter_ego,
  departamento,
  characters,
}) => {
  return (
    <>
      <div className="row">
        <div className="col-ms-5">
          <div className="card" style={{ backgroundColor: "black" }}>
            <img
              src={`./assets/tecnicos/${id}.jpg`}
              alt={tecnico}
              className="card-img"
            />
            {/* <img className="card-img" src={cardimg} alt={cardimg} />*/}

            <div className="card-body">
              <h1 className="card-title" style={{ color: "white" }}>
                {tecnico}
              </h1>
              <p className="card-text" style={{ color: "grey" }}>
                {publisher}{" "}
              </p>
              <p style={{ color: "grey" }}>{departamento}</p>
              <p style={{ color: "grey" }}>{characters}</p>
              <Link to={`./tecnic/${id}`} style={{ color: "white" }}>
                Más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
