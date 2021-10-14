import React from "react";
import { getTecnicosByPublisher } from "../../selectores/getTecnicosByPublisher";
import { TecnicoCard } from "./TecnicoCard";

export const TecnicoList = ({ publisher }) => {
  const tecnicos = getTecnicosByPublisher(publisher);

  return (
    <>
      <div className="row">
        <div
          className="card-group animate__animated animate__fadeInUp col-md-12"
          // className="card-group animate__animated animate__fadeInUp"
          //style={{ display: "flex", justifyContent: "center" }}
        >
          {tecnicos.map((tecnic) => (
            <TecnicoCard key={tecnic.id} {...tecnic} />
          ))}
        </div>
      </div>
    </>
  );
};
