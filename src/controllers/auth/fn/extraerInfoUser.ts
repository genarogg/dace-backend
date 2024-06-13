const extraer = (usuario: any) => {
  const {
    carrera,
    id,
    nombre,
    apellido,
    cedula,
    genero,
    fechaDeNacimiento,
    correo,
    telefono,
    direccion,
    sede,
    status,
    esEstudiante,
    esProfesor,
    esAdmin,
  } = usuario;

  const roles: { [key: string]: any } = { esEstudiante, esProfesor, esAdmin };
  const rolesActivos = Object.keys(roles).filter((role) => roles[role]);

  const resultado = {
    carrera,
    id,
    nombre,
    apellido,
    cedula,
    genero,
    fechaDeNacimiento,
    correo,
    telefono,
    direccion,
    sede,
    status,
    rolesActivos,
  };

  return resultado;
};

export default extraer;