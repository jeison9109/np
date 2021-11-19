import { tecnicos } from "../data/tecnicos";

export const getTecnicosByPublisher = (publisher) => {
  const validPublishers = ["Tecnico en mision para NP"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher"${publisher}"No es correcto`);
  }
  return tecnicos.filter((tecnic) => tecnic.publisher === publisher);
};
