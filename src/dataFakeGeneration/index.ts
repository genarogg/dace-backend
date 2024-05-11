import { Usuario } from "../models";
import crearUsuario from "./crearUsuarios";

const dataFakeGeneration = async (cantidad: number) => {
  if (!(process.env.NODE_ENV === "dev")) {
    console.log("No se puede ejecutar en producción");
    return;
  }

  try {
    const usuario = await Usuario.findOne({
      where: { correo: "usuario99@ejemplo.com" },
    });

    if (usuario) {
      return;
    }
  } catch (error) {}

  await crearUsuario(cantidad);
};

export default dataFakeGeneration;
