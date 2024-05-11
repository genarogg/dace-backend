import env from "dotenv";
env.config();

const {
  CORREO_ADMIN,
  CONTRASENA_ADMIN,
  CONTRASENA_ENDPOINT_REGISTRO_ADMIN,
} = process.env;

const crearAdmin = async (url: string) => {
  const usuario = {
    cedula: 25074591,
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
