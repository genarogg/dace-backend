import { obtenerUsuarioAuth } from "./fn/obtenerUsuarioAuth";

import { Request, Response } from "express";

import { Usuario, ProfesorMateria, Horario } from "../../models";

const horarioGet = async (req: Request, res: Response): Promise<any> => {
  console.log("horarioGet");
  try {
    const id2 = 1;

    const user = await Usuario.findByPk(id2);

    console.log(user);

    const id = user?.id;

    const profesorMaterias = await ProfesorMateria.findAll({
      where: { UsuarioId: id },
    });

    // Crear un array para almacenar las materias del profesor con sus horarios
    const profesorMateriasConHorarios = [];

    // Iterar sobre cada profesorMateria
    for (let profesorMateria of profesorMaterias) {
      // Buscar el horario correspondiente
      const horario = await Horario.findOne({
        where: { materiaId: profesorMateria.MateriaId },
      });

      // Agregar la profesorMateria y su horario al array
      profesorMateriasConHorarios.push({
        profesorMateria,
        horario,
      });
    }

    console.log(profesorMateriasConHorarios);

    return res.status(200).json({
      message: "Horario obtenido exitosamente",
      user, // Agregar la información del usuario aquí
      profesorMaterias: profesorMateriasConHorarios,
    });
  } catch (error) {}
};
export { horarioGet };
