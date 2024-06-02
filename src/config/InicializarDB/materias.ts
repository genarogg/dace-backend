import { Materia } from "../../models";
import { materias } from "./info";

const populateMaterias = async () => {
  const materiasData = [
    {
      IngenieriaInformatica: {
        "Semestre 1": {
          "FUNDAMENTOS DE LA INFORMATICA": {
            codigo: "IC1222",
            nombre: "FUNDAMENTOS DE LA INFORMATICA",
            horasTeoricas: 0,
            horasPracticas: 2,
            horasSemanales: 2,
            uc: 3,
            prelaciones: "",
          },
          DEPORTE: {
            codigo: "DP0001",
            nombre: "DEPORTE",
            horasTeoricas: 0,
            horasPracticas: 2,
            horasSemanales: 2,
            uc: 2,
            prelaciones: "",
          },
          "MATEMATICA I": {
            codigo: "IM1421",
            nombre: "MATEMATICA I",
            horasTeoricas: 0,
            horasPracticas: 6,
            horasSemanales: 6,
            uc: 5,
            prelaciones: "",
          },
          "LOGICA MATEMATICA": {
            codigo: "IM1223",
            nombre: "LOGICA MATEMATICA",
            horasTeoricas: 0,
            horasPracticas: 5,
            horasSemanales: 5,
            uc: 3,
            prelaciones: "",
          },
          "FORMACION CONSTITUCIONAL": {
            codigo: "FC0001",
            nombre: "FORMACION CONSTITUCIONAL",
            horasTeoricas: 0,
            horasPracticas: 65,
            horasSemanales: 65,
            uc: 2,
            prelaciones: "",
          },
          "LENGUAJE Y COMUNICACION": {
            codigo: "IH1124",
            nombre: "LENGUAJE Y COMUNICACION",
            horasTeoricas: 0,
            horasPracticas: 3,
            horasSemanales: 3,
            uc: 2,
            prelaciones: "",
          },
          "INGLES I": {
            codigo: "IH1125",
            nombre: "INGLES I",
            horasTeoricas: 0,
            horasPracticas: 4,
            horasSemanales: 4,
            uc: 2,
            prelaciones: "",
          },
          "ECONOMIA DIGITAL": {
            codigo: "EC005",
            nombre: "ECONOMIA DIGITAL",
            horasTeoricas: 20,
            horasPracticas: 20,
            horasSemanales: 40,
            uc: 2,
            prelaciones: "",
          },
        },
        "Semestre 2": {
          "MATEMATICA II": {
            codigo: "IM2421",
            nombre: "MATEMATICA II",
            horasTeoricas: 0,
            horasPracticas: 11,
            horasSemanales: 11,
            uc: 5,
            prelaciones: "MATEMATICA I",
          },
          "PROBLEMATICA CIENTIFICA TECNOL": {
            codigo: "IH2124",
            nombre: "PROBLEMATICA CIENTIFICA TECNOL",
            horasTeoricas: 0,
            horasPracticas: 9,
            horasSemanales: 9,
            uc: 2,
            prelaciones: "13 U.C Aprobadas",
          },
          "FISICA I": {
            codigo: "IB2322",
            nombre: "FISICA I",
            horasTeoricas: 0,
            horasPracticas: 7,
            horasSemanales: 7,
            uc: 4,
            prelaciones: "MATEMATICA I",
          },
          "ELECTIVA I (CONDUCTA HUMANA)": {
            codigo: "IME320",
            nombre: "ELECTIVA I (CONDUCTA HUMANA)",
            horasTeoricas: 0,
            horasPracticas: 55,
            horasSemanales: 55,
            uc: 2,
            prelaciones: "13 U.C Aprobadas",
          },
          "ALGORITMOS I": {
            codigo: "IC2323",
            nombre: "ALGORITMOS I",
            horasTeoricas: 0,
            horasPracticas: 8,
            horasSemanales: 8,
            uc: 3,
            prelaciones: "LOGICA MATEMATICA",
          },
          "ARTE Y CULTURA": {
            codigo: "AC0001",
            nombre: "ARTE Y CULTURA",
            horasTeoricas: 0,
            horasPracticas: 2,
            horasSemanales: 2,
            uc: 2,
            prelaciones: "FORMACION CONSTITUCIONAL",
          },
          "INGLES II": {
            codigo: "IH2125",
            nombre: "INGLES II",
            horasTeoricas: 0,
            horasPracticas: 10,
            horasSemanales: 10,
            uc: 2,
            prelaciones: "INGLES I",
          },
        },
      },
    },
  ];

  const materiasTransformadas = [];

  for (const carrera of Object.values(materiasData)) {
    for (const [semestre, materias] of Object.entries(
      carrera.IngenieriaInformatica
    )) {
      for (const [nombre, materia] of Object.entries(materias)) {
        materiasTransformadas.push({
          nombre: nombre,
          codigo: materia.codigo,
          horasTeoricas: materia.horasTeoricas,
          horasPracticas: materia.horasPracticas,
          horasSemanales: materia.horasSemanales,
          uc: materia.uc,
          prelaciones: materia.prelaciones,
          semestre: parseInt(semestre.split(" ")[1]), // Asume que el semestre siempre está en el formato "Semestre X"
        });
      }
    }
  }

  try {
    await Materia.bulkCreate(materiasTransformadas);
    console.log("Datos guardados correctamente");
  } catch (error) {
    console.error("Hubo un error al guardar los datos: ", error);
  }
};

export default populateMaterias;
