import { Request, Response } from "express";

import { Carrera, Usuario, RegistroCarrera } from "../../models";

import { toCamelCase } from "../../functions";

const updateCarreraGet = async (req: Request, res: Response): Promise<any> => {
  try {
    const carrera = await Carrera.findAll();

    if (!carrera) {
      return res.status(404).json({
        message: "Debes crear una carrera primero",
      });
    }

    res.render("admin/carrera/updateCarrera", { data: carrera });
  } catch (error) {}
};

const updateCarreraPut = async (req: Request, res: Response): Promise<any> => {
  const { nombre, estado, facultad, periodo } = req.body;
  const { correo } = req.body.user;
  const { id } = req.params;

  console.log("llego")
  const usuario = await Usuario.findOne({ where: { correo } });

  if (!usuario || !usuario?.esAdmin) {
    return res.status(403).json({
      message: "No tienes permiso para actualizar carreras",
    });
  }

  const carrera = await Carrera.findOne({ where: { id } });

  if (!carrera) {
    return res.status(404).json({
      message: "La carrera no existe",
    });
  }

  carrera.nombre = nombre;
  carrera.pensumCode = toCamelCase(nombre);
  carrera.semestral = periodo === "semestral" ? true : false;
  carrera.anual = periodo === "anual" ? true : false;
  carrera.estado = estado;
  carrera.facultad = facultad;

  await carrera
    .save()
    .then(async (carreraActualizada) => {
      await RegistroCarrera.create({
        idUsuario: usuario.id,
        correoUsuario: usuario.correo,
        accion: "Actualización de carrera",
        carreraId: carreraActualizada.id,
        ip: req.ip,
        userAgent: req.headers["user-agent"] || "",
      });

      res.json({
        message: "Carrera actualizada",
        data: carreraActualizada,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error en el servidor",
        error,
      });
    });
};

export { updateCarreraGet, updateCarreraPut };
