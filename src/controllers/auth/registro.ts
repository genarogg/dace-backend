import { Request, Response } from "express";

import { Usuario } from "../../models/models";

const registroGet = async (req: Request, res: Response): Promise<void> => {
  res.render("registro");
};
const registroPost = async (req: Request, res: Response) => {
  const { cedula, correo, contrasena, esAdmin } = req.body;

  if (!cedula || !correo || !contrasena) {
    return res.status(200).json({ mensaje: "Faltan campos obligatorios." });
  }

  if (esAdmin) {
    res.status(400).send({
      error: "No se puede registrar un usuario admin desde este endpoint.",
    });
    return;
  }

  const usuario = await Usuario.findByPk(cedula);

  if (usuario) {
    // El usuario ya existe, envía una respuesta indicando que es duplicado
    return res.status(400).json({ error: "Usuario duplicado" });
  }

  Usuario.create({
    cedula: cedula,
    correo: correo,
    contrasena: contrasena,
    esEstudiante: true,
  })
    .then((usuario) => {
      res.status(201).json(usuario);
    })
    .catch((err) => {
      console.error("Hubo un error al crear el usuario:", err);
      res.status(500).json({ error: "Error al crear el usuario" });
    });
};

export { registroGet, registroPost };
