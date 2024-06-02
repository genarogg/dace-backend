import { Carrera } from "../../models";
import carreras from "./info/carreras";

const populateCarreras = async () => {
  try {
    const carrerasData = [
      {
        IngenieriaInformatica: {
          nombre: "Ingeniería de Sistemas",
          pensumCode: "IS01",
          semestral: true,
          anual: false,
          estado: true,
          creditosTotales: 200,
          facultad: "Ingeniería",
        },
        IngenieriaCivil: {
          nombre: "Ingeniería Civil",
          pensumCode: "IC01",
          semestral: true,
          anual: false,
          estado: true,
          creditosTotales: 210,
          facultad: "Ingeniería",
        },
      },
    ];

    const carrerasToInsert = Object.values(carrerasData[0]);

    Carrera.bulkCreate(carrerasToInsert)
      .then(() => console.log("Carreras creadas exitosamente"))
      .catch((error) => console.error("Error al crear carreras:", error));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default populateCarreras;
