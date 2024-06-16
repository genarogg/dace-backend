import { Usuario } from "../../../models";
import { Request, Response } from "express";

import verificarToken from "../../auth/fn/verificarToken";

const obtenerUsuarioAuth = async (req: any, res: any) => {
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

    const user = await Usuario.findByPk(id);

    return user;
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export { obtenerUsuarioAuth };
