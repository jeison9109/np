import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD985kjxwBM9Gr14CGNShOWaZBymjFlZkk",
  authDomain: "nestleprof-70069.firebaseapp.com",
  projectId: "nestleprof-70069",
  storageBucket: "nestleprof-70069.appspot.com",
  messagingSenderId: "954423004504",
  appId: "1:954423004504:web:eba8780fd07bc652e8e92d",
};
/***La base de datos****/
firebase.initializeApp(firebaseConfig);

/***Nuestra referencia d firestore***/
const db = firebase.firestore();

/***Auth Provider para la autenticacion con Google****/
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
