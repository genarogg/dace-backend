import crearUsuario from "./crearUsuarios";
import crearAdmin from "./crearAdmin";
import crearProfesor from "./crearProfesor";
import asignarProfesoresAMaterias from "./addProfesorAMateria";

const dataFakeGeneration = async (url: string, cantidad: number) => {
  await crearAdmin();
  await crearProfesor(cantidad);
  /* await asignarProfesoresAMaterias();
  await crearUsuario(url, cantidad * 20); */
};

export default dataFakeGeneration;
