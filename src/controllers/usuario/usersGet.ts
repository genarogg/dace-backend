import { Request, Response } from "express";
import { Usuario } from "../../models";

import verificarToken from "../auth/fn/verificarToken";

const usersGet = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization;

    console.log(token);
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

    user?.fechaDeNacimiento.toISOString().split("T")[0];

    const data = {
      email: user?.correo,
      firstName: user?.nombre,
      secondName: user?.segundoNombre,
      firstSurname: user?.apellido,
      secondSurname: user?.segundoApellido,
      birthdate: user?.fechaDeNacimiento.toISOString().split("T")[0],
      direction: user?.direccion,
      phoneNumber: user?.telefono,
      sex: user?.genero,
      parroquia: user?.parroquia,
      etnia: "",
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export { usersGet };
