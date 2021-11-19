import { tecnicos } from "../data/tecnicos";

export const getTecnicosById = (id) => {
  return tecnicos.find((tecnic) => tecnic.id === id);
};
