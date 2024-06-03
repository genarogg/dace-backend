import env from "dotenv";
env.config();

const {
  CORREO_ADMIN,
  CONTRASENA_ADMIN,
  CONTRASENA_ENDPOINT_REGISTRO_ADMIN,
} = process.env;

import { Usuario } from "../../../models";

const crearAdmin = async (url: string) => {
  const usuarioExistente = await Usuario.findOne({
    where: { cedula: "27369469" },
  });

  if (usuarioExistente) {
    return;
  }

  const usuario = {
    nombre: "Admin",
    apellido: "Admin",
    cedula: 27369469,
    correo: CORREO_ADMIN,
    contrasena: CONTRASENA_ADMIN,
    esAdmin: true,
    contrasenaEndpoint: CONTRASENA_ENDPOINT_REGISTRO_ADMIN,
  };

  await fetch(`${url}/registro/admin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });
};

export default crearAdmin;
