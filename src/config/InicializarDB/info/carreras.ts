const carreras = () => {
  return [
    {
      IngenieriaInformatica: {
        nombre: "Ingeniería de Sistemas",
        pensumCode: "IS01",
        semestral: true,
        anual: false,
        estado: true,
        creditosTotales: 192,
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
      Medicina: {
        nombre: "Medicina",
        pensumCode: "MD01",
        semestral: false,
        anual: true,
        estado: true,
        creditosTotales: 250,
        facultad: "Ciencias de la Salud",
      },
      Derecho: {
        nombre: "Derecho",
        pensumCode: "DR01",
        semestral: false,
        anual: true,
        estado: true,
        creditosTotales: 180,
        facultad: "Ciencias Sociales",
      },
      Psicologia: {
        nombre: "Psicología",
        pensumCode: "PS01",
        semestral: false,
        anual: true,
        estado: true,
        creditosTotales: 180,
        facultad: "Ciencias Sociales",
      },
    },
  ];
};

export default carreras;
