import { Usuario } from "../models";
import crearUsuario from "./crearUsuarios";

const dataFakeGeneration = async (cantidad: number) => {
  const usuario = await Usuario.findOne({
    where: { correo: "usuario99@ejemplo.com" },
  });

  if (usuario) {
    return;
  }

  await crearUsuario(cantidad);
};

export default dataFakeGeneration;
