import { types } from "../types/tpyes";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

/*Accion es una simple funcion*/
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

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
    setTimeout(() => {
      dispatch(login(123, "pedro"));
    }, 2500);
  };
};
