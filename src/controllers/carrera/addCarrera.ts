import { Request, Response } from "express";

import { Carrera, Usuario, RegistroCarrera } from "../../models"; // Asegúrate de importar tu modelo de Usuario

import { toCamelCase } from "@fn/hola";

const addCarreraGet = (req: Request, res: Response): void => {
  res.render("admin/carrera/addCarrera");
};

const addCarreraPost = async (req: Request, res: Response): Promise<any> => {
  const { nombre, pensumCode, estado, facultad, periodo } = req.body;
  const { correo } = req.body.user;

  const usuario = await Usuario.findOne({ where: { correo } });

  if (!usuario || !usuario?.esAdmin) {
    return res.status(403).json({
      message: "No tienes permiso para crear carreras",
    });
  }

  // Busca al usuario por su correo electrónico
  const existingCarrera = await Carrera.findOne({ where: { nombre } });

  if (existingCarrera) {
    // Si la carrera ya existe, envía un mensaje de error
    return res.status(400).json({
      message: "La carrera ya existe",
    });
  }

  // Si el usuario existe, crea un nuevo registro de carrera
  await Carrera.create({
    nombre,
    pensumCode: toCamelCase(nombre),
    semestral: periodo === "semestral" ? true : false,
    anual: periodo === "anual" ? true : false,
    estado,
    facultad,
    usuarioId: usuario.id,
  })
    .then(async (carrera) => {
      // Crea un nuevo registro en la bitácora
      await RegistroCarrera.create({
        idUsuario: usuario.id,
        correoUsuario: usuario.correo,
        accion: "Creación de carrera",
        carreraId: carrera.id,
        ip: req.ip,
        userAgent: req.headers["user-agent"] || "",
      });

      res.json({
        message: "carrera creada",
        data: carrera,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error en el servidor",
        error,
      });
    });
};

export { addCarreraGet, addCarreraPost };
