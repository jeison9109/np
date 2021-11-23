import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../components/styles/navbar.css";
import logonp from "../images/logonp.png";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="fond-nav">
        <img className="logonp" src={logonp} alt={logonp} />
        <nav className="navbar">
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/home"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/nosotros"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Quienes Somos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/soluciones"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Soluciones
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/portafolio"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Portafolio
                </NavLink>
              </li>
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
