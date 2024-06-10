import bcrypt from "bcrypt";

import { Usuario } from "../../../models";
import { usuario } from "../info/index";

const crearProfesor = async (cantidad: number) => {
  const profesoresExistentes = await Usuario.count({
    where: { esProfesor: true },
  });

  if (profesoresExistentes >= cantidad) {
    console.log(`Ya existen ${cantidad} o más profesores. No se crearán más.`);
    return;
  }

  for (let i = 1; i <= cantidad; i++) {
    const { nombre, apellido, cedula, correo, telefono } = usuario();
    const contrasena = await bcrypt.hash(`contrasena${i}`, 10);

    const newUser = {
      nombre,
      apellido,
      cedula,
      correo: correo + "@profosor.com",
      telefono,
      contrasena,
      esProfesor: 1,
      status: "active",
    };

    await Usuario.create(newUser);
  }
};

export default crearProfesor;
