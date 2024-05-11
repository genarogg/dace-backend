import bcrypt from "bcrypt";

import { registrarInicio } from "./fn";

import { Request, Response } from "express";

import { Usuario } from "../../models";

const registroAdmin = async (req: Request, res: Response) => {
  const { cedula, correo, contrasena, contrasenaEndpoint, esAdmin } = req.body;
 

  if (contrasenaEndpoint !== process.env.CONTRASENA_ENDPOINT_REGISTRO_ADMIN) {
    return res.status(400).send({
      error: "Credenciales invalidas para utilizar este endpoint.",
    });
  }

  if (!cedula || !correo) {
    return res.status(200).json({ mensaje: "Faltan campos obligatorios." });
  }

  const usuario = await Usuario.findOne({ where: { cedula: cedula } });

  if (usuario) {
    // El usuario ya existe, envía una respuesta indicando que es duplicado
    return res.status(400).json({ error: "Usuario duplicado" });
  }
  console.log("llegue");
  Usuario.create({
    cedula,
    correo,
    contrasena: bcrypt.hashSync(contrasena, 10),
    esAdmin,
  })
    .then((usuario) => {
      registrarInicio(req, usuario.id);
      // Envía el token en la respuesta
      res.status(201).json({ mensaje: "usuario creado" });
    })
    .catch((err) => {
      console.error("Hubo un error al crear el usuario:", err);
      res.status(500).json({ error: "Error al crear el usuario" });
    });
};

export { registroAdmin };
