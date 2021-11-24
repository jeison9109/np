import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import Swal from "sweetalert2";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

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
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      //dispatch(setError("Name is Required")); //importar setError de las actions
      Swal.fire("Error", "Name is Required");
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));

      Swal.fire("Error", "Email is not valid");
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError("password should be at least characters and matach each other")
      );
      Swal.fire(
        "Error",
        "password should be at least characters and matach each other"
      );
      return false;
    }

    dispatch(removeError());
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
          {msgError && <div className="auth__alert-error">{msgError}</div>}

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
