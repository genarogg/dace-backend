import { Carrera } from "../../models";
import carreras from "./info/carreras";

const populateCarreras = async () => {
  try {
    const carrerasData = [];

    for (const carrera of carreras) {
      for (const key in carrera) {
        carrerasData.push(carrera[key]);
      }
    }

    console.log();

    Carrera.bulkCreate(carrerasData)
      .then(() => console.log("Carreras creadas exitosamente"))
      .catch((error) => console.error("Error al crear carreras:", error));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default populateCarreras;
