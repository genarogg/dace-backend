import { Carrera } from "../../models";
import carreras from "./info/carreras";

const populateCarreras = async () => {

  try {
    const carrerasData = carreras;

    const carrerasToInsert = Object.values(carrerasData[0]);

    Carrera.bulkCreate(carrerasToInsert)
      .then(() => console.log("Carreras creadas exitosamente"))
      .catch((error) => console.error("Error al crear carreras:", error));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default populateCarreras;
