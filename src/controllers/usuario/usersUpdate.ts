import { Request, Response } from "express";
import { Usuario } from "../../models";

import verificarToken from "../auth/fn/verificarToken";

const usersUpdatePut = async (req: Request, res: Response): Promise<void> => {
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

    const user = await Usuario.findOne({ where: { id } });

    if (!user) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    const {
      email: correo,
      firstName: nombre,
      secondName: segundoNombre,
      firstSurname: apellido,
      secondSurname: segundoApellido,
      birthdate: fechaDeNacimiento,
      direction: direccion,
      phoneNumber: telefono,
      sex: genero,
      parroquia,
      etnia,
    } = req.body;

    if (nombre) {
      const newData = {
        correo,
        nombre,
        segundoNombre,
        apellido,
        segundoApellido,
        fechaDeNacimiento,
        direccion,
        telefono,
        genero,
        parroquia,
        etnia,
      };
      await user.update(newData);

      res.status(200).json({ message: "Usuario actualizado" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

export { usersUpdatePut };
