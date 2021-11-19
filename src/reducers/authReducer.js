import { types } from "../types/tpyes";

export const authReducer = (state = {}, action) => {
  /*Crear las acciones*/

  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
