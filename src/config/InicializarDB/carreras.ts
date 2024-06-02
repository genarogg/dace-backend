import { Carrera } from "../../models";
import { carreras } from "./info";

const populateCarreras = async () => {
  try {
    const carrerasData = carreras();

    //@ts-ignore
    const carrerasToInsert = Object.values(carrerasData[0]);

    //@ts-ignore
    Carrera.bulkCreate(carrerasToInsert)
      .then(() => console.log("Carreras creadas exitosamente"))
      .catch((error) => console.error("Error al crear carreras:", error));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default populateCarreras;
