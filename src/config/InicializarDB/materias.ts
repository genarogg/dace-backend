import { Materia } from "../../models";
import { materias } from "./info";

const populateMaterias = async () => {
  const materiasData = materias();

  const materiasTransformadas = [];

  for (const carrera of Object.values(materiasData)) {
    for (const [semestre, materias] of Object.entries(
      carrera.IngenieriaInformatica
    )) {
      for (const [nombre, materia] of Object.entries(materias)) {
        materiasTransformadas.push({
          nombre: nombre,
          codigo: materia.codigo,
          horasTeoricas: materia.horasTeoricas,
          horasPracticas: materia.horasPracticas,
          horasSemanales: materia.horasSemanales,
          uc: materia.uc,
          prelaciones: materia.prelaciones,
          semestre: parseInt(semestre.split(" ")[1]), // Asume que el semestre siempre está en el formato "Semestre X"
        });
      }
    }
  }

  try {
    await Materia.bulkCreate(materiasTransformadas);
    console.log("Datos guardados correctamente");
  } catch (error) {
    console.error("Hubo un error al guardar los datos: ", error);
  }
};

export default populateMaterias;
