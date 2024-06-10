import bcrypt from "bcrypt";

import env from "dotenv";
env.config();

const {
  CORREO_ADMIN,
  CONTRASENA_ADMIN,
  CONTRASENA_ENDPOINT_REGISTRO_ADMIN,
} = process.env;

import { Usuario } from "../../../models";

const crearAdmin = async () => {
  const pass = CONTRASENA_ADMIN || "admin";

  const usuario = {
    nombre: "Admin",
    apellido: "Admin",
    cedula: 27369469,
    telefono: "0412-1234567",
    correo: CORREO_ADMIN,
    contrasena: await bcrypt.hash(pass, 10),
    esAdmin: true,
    contrasenaEndpoint: CONTRASENA_ENDPOINT_REGISTRO_ADMIN,
  };

  await Usuario.create(usuario);
};

export default crearAdmin;
