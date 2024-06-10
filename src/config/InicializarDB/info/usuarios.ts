const usuario = () => {
  const nombresLatinos = [
    "Carlos",
    "María",
    "Juan",
    "Ana",
    "José",
    "Carmen",
    "Francisco",
    "Adriana",
    "Miguel",
    "Patricia",
    "Roberto",
    "Luisa",
    "Antonio",
    "Sofía",
    "Pedro",
    "Isabella",
    "Ricardo",
    "Gabriela",
    "Jorge",
    "Alejandra",
    "Fernando",
    "Teresa",
    "Diego",
    "Laura",
    "Rafael",
    "Elena",
    "Sergio",
    "Cecilia",
    "Alberto",
    "Luz",
  ];

  const apellidosLatinos = [
    "García",
    "Rodríguez",
    "Pérez",
    "Sánchez",
    "Torres",
    "Martínez",
    "Gómez",
    "López",
    "Hernández",
    "Ramírez",
    "González",
    "Morales",
    "Ortiz",
    "Chávez",
    "Díaz",
    "Castillo",
    "Reyes",
    "Guerrero",
    "Romero",
    "Alvarez",
    "Moreno",
    "Mendoza",
    "Ruíz",
    "Vargas",
    "Cortez",
    "Rojas",
    "Paredes",
    "Silva",
    "Aguilar",
    "Vega",
  ];

  const usuarioRandom = (lista: string[]) => {
    return lista[Math.floor(Math.random() * lista.length)];
  };

  const nombre = usuarioRandom(nombresLatinos);
  const apellido = usuarioRandom(apellidosLatinos);

  const correo = `${nombre}${apellido}`;

  //numero de cedula aleatorio debe ser de 8 digitos
  const cedula = Math.floor(10000000 + Math.random() * 90000000);

  //telefono celular aleatorio
  const telefono = `04${Math.floor(10000000 + Math.random() * 90000000)}`;

  return { nombre, apellido, correo, cedula, telefono };
};

export default usuario;
