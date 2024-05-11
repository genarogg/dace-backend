import { Usuario } from "../models";
import crearUsuario from "./crearUsuarios";
import crearAdmin from "./crearAdmin";

const dataFakeGeneration = async (url: string, cantidad: number) => {
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
  
  await crearAdmin(url);
  await crearUsuario(url, cantidad);
};

export default dataFakeGeneration;
