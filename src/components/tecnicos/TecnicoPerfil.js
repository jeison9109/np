import React from "react";
import { Redirect, useParams } from "react-router";
import { getTecnicosById } from "../../selectores/getTecnicosById";
import "../styles/tecnicoperfil.css";

export const TecnicoPerfil = ({ history }) => {
  const { tecnicoId } = useParams();

  const tecnic = getTecnicosById(tecnicoId);

  if (!tecnic) {
    return <Redirect to="/" />;
  }

  const { tecnico, publisher, alter_ego, departamento, characters } = tecnic;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  return (
    <>
      <div className="fondcandi"></div>
      <div className="container-perfil">
        <div className="row">
          <div className="card">
            <div className="col-md-12">
              <img
                src={`../assets/tecnicos/${tecnicoId}.jpg`}
                className="card-img  animate__animated animate__fadeInLeft"
                alt={tecnico}
              />
            </div>
            <div className="col-8">
              <h3>{tecnico}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{alter_ego}</li>
                <li className="list-group-item">
                  <b>Zona: </b>
                  {departamento}
                </li>
                <li className="list-group-item">
                  <b>{publisher}</b>
                </li>
                <li className="list-group-item">{characters}</li>
              </ul>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-outline-info btn-sm"
                  onClick={handleReturn}
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
