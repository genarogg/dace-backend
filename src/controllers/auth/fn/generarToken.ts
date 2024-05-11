import jwt from "jsonwebtoken";

interface Usuario {
  correo: string;
  cedula: Number;
  id: Number;
  esEstudiante: boolean;
  esProfesor: boolean;
  esAdmin: boolean;
}

function generarToken(usuario: Usuario) {
  const JWTSECRETO = process.env.JWTSECRETO || "jwt-secret";
  const JWTTIEMPO = process.env.JWTTIEMPO || "1h";

  const { id, correo, esEstudiante, esProfesor, esAdmin } = usuario;

  const token = jwt.sign(
    {
      id: id,
      correo: correo,
      esEstudiante: esEstudiante,
      esProfesor: esProfesor,
      esAdmin: esAdmin,
    },

    JWTSECRETO,

    {
      expiresIn: JWTTIEMPO,
    }
  );

  return token;
}

export default generarToken;
