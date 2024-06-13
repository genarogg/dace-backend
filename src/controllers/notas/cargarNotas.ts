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

    const profesorMaterias = await ProfesorMateria.findAll({
      where: { UsuarioId: id },
    });

    const materiasConNombreYEstudiantes = await Promise.all(
      profesorMaterias.map(async (profesorMateria) => {
        const materia = await Materia.findByPk(profesorMateria.MateriaId);
        const estudiantes = await EstudianteMateria.findAll({
          where: { materiaId: profesorMateria.MateriaId },
        });
        const estudiantesConInfo = await Promise.all(
          estudiantes.map(async (estudiante) => {
            const usuario = await Usuario.findByPk(estudiante.usuarioId);
            return {
              ...estudiante.toJSON(),
              cedula: usuario ? usuario.cedula : null,
              nombre: usuario ? usuario.nombre : null,
              apellido: usuario ? usuario.apellido : null,
            };
          })
        );
        return {
          ...profesorMateria.toJSON(),
          nombre: materia ? materia.nombre : null,
          estudiantes: estudiantesConInfo,
        };
      })
    );

    res.json(materiasConNombreYEstudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al obtener las materias" });
  }
};
const cargarNotasPut = async (req: Request, res: Response) => {};

export { cargarNotasGet, cargarNotasPut };
