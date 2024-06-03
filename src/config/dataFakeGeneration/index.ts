import { Usuario } from "../../models";
import crearUsuario from "./crearUsuarios";
import crearAdmin from "./crearAdmin";
import crearProfesor from "./crearProfesor";

const dataFakeGeneration = async (url: string, cantidad: number) => {
  try {
    const usuario = await Usuario.findOne({
      where: { correo: "usuario99@ejemplo.com" },
    });

    if (usuario) {
      return;
    }
  } catch (error) {}

  await crearAdmin(url);
  await crearProfesor(url, cantidad);
  /* await crearUsuario(url, cantidad); */
};

export default dataFakeGeneration;
