import React from "react";
import "../styles/footer.css";
import img2 from "../../images/logonp.png";

export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h6>Nosotros</h6>
              <p className="text-justify" style={{ color: "gray" }}>
                Nestlé Professional entrega soluciones
                <i> ALIMENTOS Y BEBIDAS</i> que le permiten a nuestros clientes
                <i> CRECER Y DELEITAR</i> a sus consumidores.
              </p>
            </div>

            <div className="col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a style={{ color: "gray" }}> Hoteles</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}> Universidad y Transporte</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}> Restaurantes</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>
                    {" "}
                    Dessert y Savoury Manufactures
                  </a>
                </li>
                <li>
                  <a style={{ color: "gray" }}> B&I - HMR</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>Conocenos</h6>
              <ul className="footer-links">
                <li>
                  <a style={{ color: "gray" }}>Home</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Quienes Somos</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Soluciones</a>
                </li>
                <li>
                  <a style={{ color: "gray" }}>Portafolio</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <hr />
              <hr />
              <img
                src={img2}
                alt={img2}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <hr />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 Todos los derechos reservacion Nestlé
                Professional
                <a href="#"></a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="instragram" href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
