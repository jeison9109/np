import { tecnicos } from "../data/tecnicos";

export const getTecnicosByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLocaleLowerCase();

  return tecnicos.filter((tecnic) =>
    tecnic.tecnico.toLocaleLowerCase().includes(name)
  );
};
