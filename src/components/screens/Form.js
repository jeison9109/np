import React from "react";
import "../styles/formulario.css";
import { Footer } from "./Footer";

export const Form = () => {
  return (
    <>
      <div className="container-form">
        <div id="form-main">
          <div id="form-div">
            <h1 color="white">CONTACTENOS</h1>
            <form className="form" autoComplete="off">
              <p className="name">
                <input
                  name="name"
                  type="text"
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                  placeholder="Nombre y Apellido"
                  id="name"
                />
              </p>

              <p className="email">
                <input
                  name="email"
                  type="text"
                  className="validate[required,custom[email]] feedback-input"
                  id="email"
                  placeholder="Email"
                />
              </p>

              <p class="text">
                <textarea
                  name="text"
                  className="validate[required,length[6,300]] feedback-input"
                  id="comment"
                  placeholder="Comment"
                ></textarea>
              </p>

              <div className="submit">
                <input type="submit" value="ENVIAR" id="button-blue" />
                <div className="ease"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
