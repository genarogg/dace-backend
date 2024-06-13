import jwt from "jsonwebtoken";

interface Usuario {
  correo: string;
  cedula: number;
  id: number;
  esEstudiante: boolean;
  esProfesor: boolean;
  esAdmin: boolean;
}

const verificarToken = (token: string): Usuario | null => {
  const JWTSECRETO = process.env.JWTSECRETO || "jwt-secret";

  try {
    const usuario = jwt.verify(token, JWTSECRETO) as Usuario | null;

    return usuario;
  } catch (err) {
    console.error("Error al verificar el token:", err);
    return null;
  }
};

export default verificarToken;
