import { Carrera } from "../../models";
import { carreras } from "./info";

const populateCarreras = async () => {
  try {
    const carrerasData = carreras();

    //@ts-ignore
    const carrerasToInsert = Object.values(carrerasData[0]);

    for (const carrera of carrerasToInsert) {
      // Verifica si la carrera ya existe en la base de datos
      const existingCarrera = await Carrera.findOne({
        where: { nombre: carrera.nombre },
      });

      // Si la carrera no existe, entonces la inserta
      if (!existingCarrera) {
        await Carrera.create(carrera)
          .then(() =>
            console.log(`Carrera ${carrera.nombre} creada exitosamente`)
          )
          .catch((error) =>
            console.error(`Error al crear la carrera ${carrera.nombre}:`, error)
          );
      }
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default populateCarreras;
