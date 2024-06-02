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

  for (const materia of materiasTransformadas) {
    // Verifica si la materia ya existe en la base de datos
    const existingMateria = await Materia.findOne({
      where: { codigo: materia.codigo },
    });

    // Si la materia no existe, entonces la inserta
    if (!existingMateria) {
      await Materia.create(materia)
        .then(() =>
          console.log(`Materia ${materia.nombre} creada exitosamente`)
        )
        .catch((error) =>
          console.error(`Error al crear la materia ${materia.nombre}:`, error)
        );
    }
  }
};

export default populateMaterias;
