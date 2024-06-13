import crearUsuario from "./crearUsuarios";
import crearAdmin from "./crearAdmin";
import crearProfesor from "./crearProfesor";
import asignarProfesoresAMaterias from "./addProfesorAMateria";
import asignarMateriasAEstudiante from "./addEstudianteMateria";
import asignarHorariosAMaterias from "./asignarHorariosAMaterias";
import crearProfesorDemo from "./addProfesorDemo";
import { Usuario } from "../../../models";

import { populateCarreras, populateMaterias } from "../";

const dataFakeGeneration = async (cantidad: number, url: string) => {
  try {
    const usuarioExistente = await Usuario.findOne({
      where: { cedula: "27369469" },
    });

    if (usuarioExistente) {
      console.log("Data fake generada acteriormente");
      return;
    }
    await crearProfesorDemo();
    await crearProfesor(cantidad);
    await populateMaterias();
    await asignarProfesoresAMaterias();
    await crearUsuario(cantidad * 20);
    await asignarMateriasAEstudiante();
    await asignarHorariosAMaterias();
    await populateCarreras();
    
    await crearAdmin();
    console.log("Data fake generada exitosamente");
  } catch (error) {
    console.log("Error al generar data fake", error);
  }
};

export default dataFakeGeneration;
