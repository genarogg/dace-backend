import { RegistroInicioSesion } from "../../../models";
import { Usuario } from "../../../models";

const registrarInicio = async (req: any, id: any) => {
  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    return;
  }

  const { cedula, correo, esEstudiante, esProfesor, esAdmin } = usuario;

  console.log(esEstudiante, esProfesor, esAdmin);

  RegistroInicioSesion.create({
    usuarioId: id,
    correo,
    cedula,
    rool: JSON.stringify({ esEstudiante, esProfesor, esAdmin }),
    ip: req.ip,
    userAgent: req.headers["user-agent"],
  });
};

export default registrarInicio;
