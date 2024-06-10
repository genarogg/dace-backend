import bcrypt from "bcrypt";

import { Usuario } from "../../../models";
import { usuario } from "../info/index";

const crearUsuarios = async (cantidad: number) => {
  const estudiantes = await Usuario.count({
    where: { esEstudiante: true },
  });

  if (estudiantes >= cantidad) {
    console.log(`Ya existen ${cantidad} o más estudiantes. No se crearán más.`);
    return;
  }

  for (let i = 1; i <= cantidad; i++) {
    const { nombre, apellido, cedula, correo, telefono } = usuario();
    const contrasena = await bcrypt.hash(`contrasena${i}`, 10);

    const newUser = {
      nombre,
      apellido,
      cedula,
      correo: correo + "@estudiante.com",
      telefono,
      contrasena,
      esEstudiante: 1,
      status: "active",
      sede: "Central",
      carrera: { nombre: "Ingeniería en Computación" },
    };

    await Usuario.create(newUser);
  }
};

export default crearUsuarios;
