import { Request, Response } from "express";

import { Materia, ProfesorMateria, Usuario } from "../../models";

const addProfesorAMateriaGet = async (req: Request, res: Response) => {
  try {
    const profesoresMaterias = await ProfesorMateria.findAll({});

    //buca el profesor y la materia
    for (const profesorMateria of profesoresMaterias) {
      const profesor = await Usuario.findByPk(profesorMateria.UsuarioId);
      const materia = await Materia.findByPk(profesorMateria.MateriaId);

      if (profesor && materia) {
        profesorMateria.setDataValue("profesor", profesor);
        profesorMateria.setDataValue("materia", materia);
      }
    }

    

    res.status(200).json(profesoresMaterias);
  } catch (error) {
    console.error("Error obteniendo profesores y materias:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const addProfesorAMateriaPost = async (req: Request, res: Response) => {
  try {
    const { profesorId, materiaId } = req.body;

    // Verificar si el usuario es un profesor
    const profesor = await Usuario.findByPk(profesorId);
    if (!profesor || !profesor.esProfesor) {
      return res
        .status(400)
        .json({ message: "El usuario no es un profesor válido" });
    }

    // Verificar si la materia existe
    const materia = await Materia.findByPk(materiaId);
    if (!materia) {
      return res.status(400).json({ message: "La materia no existe" });
    }

    // Asignar el profesor a la materia
    await ProfesorMateria.create({
      UsuarioId: profesorId,
      MateriaId: materiaId,
    });

    res
      .status(200)
      .json({ message: "Profesor asignado a la materia exitosamente" });
  } catch (error) {
    console.error("Error asignando profesor a materia:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const addProfesorAMateriaPut = async (req: Request, res: Response) => {};

const addProfesorAMateriaDelete = async (req: Request, res: Response) => {};

export {
  addProfesorAMateriaGet,
  addProfesorAMateriaPost,
  addProfesorAMateriaPut,
  addProfesorAMateriaDelete,
};
