import { Request, Response } from "express";

import {
  Materia,
  ProfesorMateria,
  EstudianteMateria,
  Usuario,
} from "../../models";

const cargarNotasGet = async (req: Request, res: Response) => {
  const idProfesor = req.params.id; // Asume que el ID del profesor viene en los parámetros de la ruta

  try {
    const profesorMaterias = await ProfesorMateria.findAll({
      where: { UsuarioId: idProfesor },
    });

    const materiasConNombreYEstudiantes = await Promise.all(
      profesorMaterias.map(async (profesorMateria) => {
        const materia = await Materia.findByPk(profesorMateria.MateriaId);
        const estudiantes = await EstudianteMateria.findAll({
          where: { materiaId: profesorMateria.MateriaId },
        });
        return {
          ...profesorMateria.toJSON(),
          nombre: materia ? materia.nombre : null,
          estudiantes,
        };
      })
    );

    res.json(materiasConNombreYEstudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al obtener las materias" });
  }
};
const cargarNotasPost = async (req: Request, res: Response) => {};

export { cargarNotasGet, cargarNotasPost };
