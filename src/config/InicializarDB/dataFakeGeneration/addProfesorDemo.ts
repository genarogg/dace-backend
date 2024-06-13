import bcrypt from "bcrypt";

import { Usuario } from "../../../models";

const crearProfesorDemo = async () => {
  const newUser = {
    nombre: "Ana",
    apellido: "Ramos",
    cedula: "25074591",
    correo: "ana06rosa@gmail.com",
    telefono: "0412-1234567",
    contrasena: await bcrypt.hash("demo", 10),
    esProfesor: 1,
    esEstudiante: 1,
    status: "active",
  };

  await Usuario.create(newUser);
};

export default crearProfesorDemo;
