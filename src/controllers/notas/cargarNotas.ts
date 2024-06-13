import { Request, Response } from "express";

import { Materia, ProfesorMateria, Usuario } from "../../models";

const cargarNotasGet = async (req: Request, res: Response) => {
  const idProfesor = req.params.id; // Asume que el ID del profesor viene en los parámetros de la ruta

  try {
    const materias = await Materia.findAll({
      where: { profesorId: idProfesor },
    });
    res.json(materias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al obtener las materias" });
  }
};

const cargarNotasPost = async (req: Request, res: Response) => {};

export { cargarNotasGet, cargarNotasPost };
