import { Request, Response } from "express";

import { Usuario } from "../../models/models";

const registroGet = async (req: Request, res: Response): Promise<void> => {
  res.render("registro");
};
const registroPost = async (req: Request, res: Response): Promise<void> => {
  const { cedula, correo, contrasena, esAdmin } = req.body;

  if (esAdmin) {
    res
      .status(400)
      .send({
        error: "No se puede registrar un usuario admin desde este endpoint.",
      });
    return;
  }

  Usuario.create({
    cedula: cedula,
    correo: correo,
    contrasena: contrasena,
    esEstudiante: true,
  })
    .then((usuario) => {
      console.log("Usuario creado con éxito:", usuario);
    })
    .catch((err) => {
      console.error("Hubo un error al crear el usuario:", err);
    });
};

export { registroGet, registroPost };
