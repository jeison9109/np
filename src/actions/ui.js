//Actions para el UI

import { types } from "../types/tpyes";

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err, //Error q vamos a recibir
});

export const removeError = () => ({
  type: types.uiRemoveError,
});
