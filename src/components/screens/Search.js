import React, { useMemo } from "react";
import queryString from "query-string";
import { TecnicoCard } from "../tecnicos/TecnicoCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router";
import { getTecnicosByName } from "../../selectores/getTecnicosByName";
import { Footer } from "./Footer";
import "../styles/search.css";

export const Search = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInpuntChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const tecnicFiltered = useMemo(() => getTecnicosByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };
  return (
    <>
      <div className="container-search">
        <h1>BUSCAR</h1>
        <hr />
      </div>
      <div className="container-buscador">
        <div className="row">
          <div className="col-md-5">
            <h2>Tecnicos en misión para Nestlé Professional</h2>
            <hr />

            <form onSubmit={handleSearch}>
              <input
                autoComplete="off"
                type="text"
                placeholder="Encontrar candidato"
                className="form-control"
                name="searchText"
                value={searchText}
                onChange={handleInpuntChange}
              />
              <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary"
              >
                Buscar
              </button>
            </form>
          </div>
          <div className="col-7">
            <h4 style={{ marginTop: "87px" }}>Resultados</h4>
            <hr />

            {q === "" && <div className="alert alert-info">Buscador..</div>}

            {q !== "" && tecnicFiltered.length === 0 && (
              <div className="alert alert-danger">
                Nombre Erroneo por favor verifique sus datos ó Comuniquese a
                nuestras lineas oficiales {q}
              </div>
            )}

            {tecnicFiltered.map((tecnic) => (
              <TecnicoCard key={tecnic.id} {...tecnic} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
