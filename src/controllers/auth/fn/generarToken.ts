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

  const token = jwt.sign(
    {
      id: usuario.id,
      correo: usuario.correo,
    },

    JWTSECRETO,

    {
      expiresIn: JWTTIEMPO,
    }
  );

  return token;
}

export default generarToken;
