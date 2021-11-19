import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "nando@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  /********Conectar el boton de login de GOOGLE********/

  const handleGoogleLogin = () => {
    dispatch(
      startGoogleLogin()
    ); /**se importa la accion sin ningun argumento**/
  };

  return (
    <div className="auth">
      <div className="auth__header"></div>
      <div className="auth__body">
        <form onSubmit={handleLogin} className="auth__form" autocomplete="off">
          <div className="auth__form_body">
            <h3 className="auth__form_title">Sign in</h3>
            <div>
              <div className="form-group">
                <label className="text-uppercase small">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleInputChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label className="text-uppercase small">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                  name="password"
                />
              </div>
            </div>
          </div>
          <div className="auth__form_actions">
            <button className="btn btn-primary btn-lg btn-block">LOGIN</button>
          </div>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

          <Link to="/auth/register">Create new account</Link>
        </form>
      </div>
    </div>
  );
};
