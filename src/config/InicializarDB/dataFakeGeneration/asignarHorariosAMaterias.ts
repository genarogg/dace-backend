import { Materia, Horario } from "../../../models";

const asignarHorariosAMaterias = async () => {
  // Definir los días y las horas de inicio posibles
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const horasInicio = ["08:00", "10:00", "12:00", "14:00"];

  // Obtener todas las materias
  const materias = await Materia.findAll();

  for (let materia of materias) {
    // Seleccionar un día y una hora de inicio al azar
    const dia = dias[Math.floor(Math.random() * dias.length)];
    const horaInicio =
      horasInicio[Math.floor(Math.random() * horasInicio.length)];

    // Calcular la hora de fin (2 horas después de la hora de inicio)
    const horaFin =
      (parseInt(horaInicio.split(":")[0]) + 2).toString().padStart(2, "0") +
      ":00";

    // Asignar el horario a la materia
    await Horario.create({
      dia: dia,
      horaInicio: horaInicio,
      horaFin: horaFin,
      materiaId: materia.id,
    });
  }

  console.log("Horarios asignados exitosamente.");
};

export default asignarHorariosAMaterias;
