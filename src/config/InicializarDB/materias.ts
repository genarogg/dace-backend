import { Materia, Carrera } from "../../models";
import { materias } from "./info";

const populateMaterias = async () => {
  try {
    const materiasData = materias();

    // Obtenemos las carreras de la base de datos
    const carreras = await Carrera.findAll();

    // Creamos un mapa de carreras para buscarlas por nombre
    const mapaCarreras = new Map();
    carreras.forEach((carrera) => {
      mapaCarreras.set(carrera.nombre, carrera);
    });

    // Asociamos cada materia a su carrera correspondiente
    const materiasToInsert = materiasData.map((materia) => {
      const carrera = mapaCarreras.get(materia.carrera);
      if (carrera) {
        materia.carreraId = carrera.id;
      }
      return materia;
    });

    // Creamos las materias en la base de datos
    Materia.bulkCreate(materiasToInsert)
      .then(() => console.log("Materias creadas exitosamente"))
      .catch((error) => console.error("Error al crear materias:", error));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default populateMaterias;
