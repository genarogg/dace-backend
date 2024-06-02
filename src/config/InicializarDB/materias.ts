import { Materia } from "../../models";
import { pensum } from "./info/index";

const populateMaterias = async () => {
  try {
    const data = {};

    const materias = [];

    for (const semestre in data) {
      for (const nombre in data[semestre]) {
        const materia = data[semestre][nombre];
        materias.push({
          nombre: materia.nombre,
          codigo: materia.codigo,
          horasTeoricas: materia.horasTeoricas,
          horasPracticas: materia.horasPracticas,
          horasSemanales: materia.horasSemanales,
          uc: materia.uc,
          prelaciones: materia.prelaciones,
          semestre: parseInt(semestre.split(" ")[1]),
        });
      }
    }

    Materia.bulkCreate(materias)
      .then(() => console.log("Materias creadas exitosamente"))
      .catch((error) => console.error("Error al crear materias:", error));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default populateMaterias;
