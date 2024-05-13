import jwt from "jsonwebtoken";

interface Usuario {
  correo: string;
  cedula: Number;
  id: Number;
  esEstudiante: boolean;
  esProfesor: boolean;
  esAdmin: boolean;
}

const generarToken = (usuario: Usuario) => {
  const JWTSECRETO = process.env.JWTSECRETO || "jwt-secret";
  const JWTTIEMPO = process.env.JWTTIEMPO || "1h";

  const { id, correo, esEstudiante, esProfesor, esAdmin } = usuario;

  const token = jwt.sign(
    {
      id,
      correo,
      esEstudiante,
      esProfesor,
      esAdmin,
    },

    JWTSECRETO,

    {
      expiresIn: JWTTIEMPO,
    }
  );

  return token;
};

export default generarToken;
