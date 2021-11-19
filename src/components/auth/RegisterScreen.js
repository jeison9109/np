import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "Pedro Gomez",
    email: "pedro@gmail.com",
    password: "123456",
    password2: "123456",
  });

  //Realizo destruccturacion

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault(); //Evitar la propagacion del form por el URL

    if (isFormValid()) {
      console.log("formulario correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("Name is required");
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("email NO es valido");
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log(
        "password should be at least characters and matach each other"
      );
      return false;
    }

    return true;
  };

  return (
    <div className="auth">
      <div className="auth__header"></div>
      <div className="auth__body">
        <form
          className="auth__form"
          autocomplete="off"
          onSubmit={handleRegister}
        >
          <div className="auth__form_body">
            <h3 className="auth__form_title">Register</h3>
            <div>
              <div className="form-group">
                <label className="text-uppercase small">Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="text-uppercase small">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="text-uppercase small">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="text-uppercase small">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="auth__form_actions">
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              REGISTER
            </button>
          </div>
          <Link to="/auth/login" className="link">
            Already Register
          </Link>
        </form>
      </div>
    </div>
  );
};
