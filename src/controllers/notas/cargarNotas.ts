import { Request, Response } from "express";

import {
  Materia,
  ProfesorMateria,
  EstudianteMateria,
  Usuario,
} from "../../models";

import verificarToken from "../auth/fn/verificarToken";

const cargarNotasGet = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ error: "No se proporcionó token" });
      return;
    }

    const usuario = verificarToken(token);

    if (!usuario) {
      res.status(401).json({ error: "Token inválido" });
      return;
    }

    const { id } = usuario;

   

 

    res.json(materiasConNombreYEstudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al obtener las materias" });
  }
};
const cargarNotasPut = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ error: "No se proporcionó token" });
      return;
    }

    const usuario = verificarToken(token);

    if (!usuario) {
      res.status(401).json({ error: "Token inválido" });
      return;
    }

    const { id } = usuario;

    const user = await Usuario.findOne({ where: { id } });

    if (!user) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    const { esProfesor } = user;

    if (!esProfesor) {
      res.status(401).json({ error: "No tiene permisos para esta acción" });
      return;
    }
    const data = req.body;



    for (const estudiante of data.estudiantes) {
      // Comprueba si la nota del estudiante no es null
      if (estudiante.nota !== null) {
        // Actualiza la nota del estudiante
        await EstudianteMateria.update(
          { nota: estudiante.nota },
          {
            where: {
              id: estudiante.id,
            },
          }
        );
      }
    }

    res.json({ message: "Notas actualizadas correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Hubo un error al cargar las notas" });
  }
};

export { cargarNotasGet, cargarNotasPut };
