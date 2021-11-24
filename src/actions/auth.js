import { types } from "../types/tpyes";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import Swal from "sweetalert2";
import { startLoading, finishLoading } from "./ui";

/*Accion es una simple funcion*/
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

//action asincrona por estar conectado con firebase
export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});

//Tarea asincrona, se necesita retornar un callback
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        //funcion para actualiar user
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("Error", e.message, "Error");
      });
  };
};

/*****Accion para auttenticacion de Google****/

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      /***desestructuracion del USER para obtneer el uid - displayName de google***/
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

//**Dispatch asicrono */

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        //funcion para actualiar user
        dispatch(login(user.uid, user.displayName));

        dispatch(finishLoading());
      })
      .catch((e) => {
        dispatch(finishLoading());
        Swal.fire("Error", e.message, "Error");
      });
  };
};
