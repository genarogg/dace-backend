
import crearUsuario from "./crearUsuarios";
import crearAdmin from "./crearAdmin";
import crearProfesor from "./crearProfesor";
import asignarProfesoresAMaterias from "./addProfesorAMateria";

const dataFakeGeneration = async (url: string, cantidad: number) => {
  

  await crearAdmin(url);
  await crearProfesor(url, cantidad);
  await asignarProfesoresAMaterias();
  /* await crearUsuario(url, cantidad); */
};

export default dataFakeGeneration;
