import { Request, Response } from "express";
import { verificarToken } from "./fn";

const verificarTokenPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No se proporcionó token" });
  }

  const usuario = verificarToken(token);

  if (!usuario) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }

  return res.json({ usuario });
};

export default verificarTokenPost;
