import { Usuario, Materia, EstudianteMateria } from "../../../models";

const asignarMateriasAEstudiante = async () => {
  // Obtener todos los estudiantes
  const estudiantes = await Usuario.findAll({ where: { esEstudiante: true } });
  // Obtener todas las materias
  const materias = await Materia.findAll();

  for (let estudiante of estudiantes) {
    let ucTotal = 0;

    for (let materia of materias) {
      // Verificar si la materia ya tiene 15 estudiantes
      const count = await EstudianteMateria.count({
        where: { materiaId: materia.id },
      });
      if (count >= 15) {
        continue;
      }

      // Si asignar esta materia haría que el estudiante exceda el límite de UC, continuar con la siguiente materia
      if (ucTotal + materia.uc > 21) {
        continue;
      }

      // Asignar la materia al estudiante
      await EstudianteMateria.create({
        usuarioId: estudiante.id,
        materiaId: materia.id,
        periodo: "2021-1",
      });

      // Actualizar el total de UC
      ucTotal += materia.uc;
    }
  }

  console.log("Materias asignadas exitosamente.");
};

export default asignarMateriasAEstudiante;

/* import { Usuario, Materia, EstudianteMateria } from "../../../models";

const asignarMateriasAEstudiante = async () => {
  // Obtener todos los estudiantes
  const estudiantes = await Usuario.findAll({ where: { esEstudiante: true } });
  // Obtener todas las materias
  const materias = await Materia.findAll();

  for (let estudiante of estudiantes) {
    let ucTotal = 0;

    for (let materia of materias) {
      // Verificar si el estudiante ya ha tomado las materias preladas
      const preladas = materia.prelaciones;
      let preladasTomadas = true;
      for (let preladaId of preladas) {
        const usuarioMateria = await EstudianteMateria.findOne({
          where: { usuarioId: estudiante.id, materiaId: preladaId },
        });
        if (!usuarioMateria) {
          preladasTomadas = false;
          break;
        }
      }

      // Verificar si la materia ya tiene 15 estudiantes
      const count = await EstudianteMateria.count({
        where: { materiaId: materia.id },
      });
      if (count >= 15) {
        continue;
      }

      // Si el estudiante no ha tomado todas las materias preladas, o si asignar esta materia haría que el estudiante exceda el límite de UC, continuar con la siguiente materia
      if (!preladasTomadas || ucTotal + materia.uc > 21) {
        continue;
      }
      console.log("estudiantes");

      // Asignar la materia al estudiante
      await EstudianteMateria.create({
        usuarioId: estudiante.id,
        materiaId: materia.id,
      });

      // Actualizar el total de UC
      ucTotal += materia.uc;
    }
  }

  console.log("Materias asignadas exitosamente.");
};

export default asignarMateriasAEstudiante;
 */
