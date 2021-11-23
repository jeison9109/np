import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../reducers/uiReducer";

/***Configuracion para acciones asincronas***/
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  /*****Estructura del store***/

  auth: authReducer,
  ui: uiReducer, //uiReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
