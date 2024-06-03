
import crearUsuario from "./crearUsuarios";
import crearAdmin from "./crearAdmin";
import crearProfesor from "./crearProfesor";

const dataFakeGeneration = async (url: string, cantidad: number) => {
  

  await crearAdmin(url);
  await crearProfesor(url, cantidad);
  /* await crearUsuario(url, cantidad); */
};

export default dataFakeGeneration;
