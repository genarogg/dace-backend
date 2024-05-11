import bcrypt from "bcrypt";

import { validarCapchat, generarToken, registrarInicio } from "./fn";

import { Request, Response } from "express";

import { Usuario } from "../../models";

const registroGet = async (req: Request, res: Response): Promise<void> => {
  res.render("registro");
};

const registroPost = async (req: Request, res: Response) => {
  const { cedula, correo, contrasena, esAdmin, captcha } = req.body;

  if (!cedula || !correo || !contrasena) {
    return res.status(200).json({ mensaje: "Faltan campos obligatorios." });
  }

  const captchaResponse = await validarCapchat(captcha);

  if (captchaResponse) {
    return res.status(200).json({ mensaje: "Captcha no válido." });
  }

  if (esAdmin) {
    res.status(400).send({
      error: "No se puede registrar un usuario admin desde este endpoint.",
    });
    return;
  }

  const usuario = await Usuario.findOne({ where: { cedula: cedula } });

  if (usuario) {
    // El usuario ya existe, envía una respuesta indicando que es duplicado
    return res.status(400).json({ error: "Usuario duplicado" });
  }

  Usuario.create({
    cedula,
    correo,
    contrasena: bcrypt.hashSync(contrasena, 10),
    esEstudiante: true,
  })
    .then((usuario) => {
      // console.log("Usuario creado:", usuario);

      const token = generarToken(usuario);

      registrarInicio(req, usuario.id);
      // Envía el token en la respuesta
      res.status(201).json({ token });
    })
    .catch((err) => {
      console.error("Hubo un error al crear el usuario:", err);
      res.status(500).json({ error: "Error al crear el usuario" });
    });
};

export { registroGet, registroPost };
