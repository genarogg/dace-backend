import jwt from "jsonwebtoken";

interface Usuario {
  correo: string;
  cedula: Number;
  esEstudiante: boolean;
  esProfesor: boolean;
  esAdmin: boolean;
}

function generarToken(usuario: Usuario) {
  const JWTSECRETO = process.env.JWTSECRETO || "jwt-secret";
  const JWTTIEMPO = process.env.JWTTIEMPO || "1h";

  const token = jwt.sign(
    {
      correo: usuario.correo,
      cedula: usuario.cedula,
      esEstudiante: usuario.esEstudiante,
      esProfesor: usuario.esProfesor,
      esAdmin: usuario.esAdmin,
    },
    JWTSECRETO,
    {
      expiresIn: JWTTIEMPO,
    }
  );

  return token;
}

export default generarToken;
