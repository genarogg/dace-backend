import { Sequelize, Op } from "sequelize";
import { Usuario, Materia, ProfesorMateria } from "../../../models";

const asignarProfesoresAMaterias = async () => {
  // Obtener todos los profesores
  const profesores = await Usuario.findAll({ where: { esProfesor: 1 } });

  // Para cada profesor
  for (const profesor of profesores) {
    // Obtener las materias que aún no tienen asignado este profesor
    const materiasAsignadas = await ProfesorMateria.findAll({
      where: { UsuarioId: profesor.id },
    });
    const idsMateriasAsignadas = materiasAsignadas.map(
      (materia) => materia.MateriaId
    );

    // Obtener las materias que han sido asignadas a menos de 2 profesores
    const materiasAsignadasDosVeces = await ProfesorMateria.findAll({
      attributes: ["MateriaId"],
      group: ["MateriaId"],
      having: Sequelize.literal("count(MateriaId) >= 2"),
    });
    const idsMateriasAsignadasDosVeces = materiasAsignadasDosVeces.map(
      (materia) => materia.MateriaId
    );

    const materiasSinAsignar = await Materia.findAll({
      where: {
        id: {
          [Op.notIn]: [
            ...idsMateriasAsignadas,
            ...idsMateriasAsignadasDosVeces,
          ],
        },
      },
    });

    // Asignar el profesor a las materias hasta que el profesor esté asignado a 2 materias
    // o no haya más materias disponibles
    for (let i = 0; i < Math.min(2, materiasSinAsignar.length); i++) {
      await ProfesorMateria.create({
        UsuarioId: profesor.id,
        MateriaId: materiasSinAsignar[i].id,
      });
    }
  }
};

export default asignarProfesoresAMaterias;
