import { Request, Response } from "express";

import {
  Materia,
  ProfesorMateria,
  EstudianteMateria,
  Usuario,
} from "../../../models";

const listadoSeccion = async (req: Request, res: Response, id: any) => {
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
        where: {
          materiaId: profesorMateria.MateriaId,
          //nota: null, // Solo devuelve los estudiantes cuya nota sea null
        },
      });
      const estudiantesConInfo = await Promise.all(
        estudiantes.map(async (estudiante) => {
          const usuario = await Usuario.findByPk(estudiante.usuarioId);

          if (!usuario) {
            return null;
          }

          return {
            ...estudiante.toJSON(),
            cedula: usuario.cedula,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
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

  return materiasConNombreYEstudiantes;
};

export default listadoSeccion;
