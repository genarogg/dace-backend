const crearProfesor = async (url: string, cantidad: number) => {
  
  
  for (let i = 1; i <= cantidad; i++) {
    const usuario = {
      nombre: `Profesor${i}`,
      apellido: `Apellido${i}`,
      cedula: i,
      correo: `usuario${i}@profesor.com`,
      contrasena: `contrasena${i}`,
      esEstudiante: 0, // true para números pares, false para impares
      esProfesor: 1, // true para múltiplos de 3
      esAdmin: 0, // true para múltiplos de 5
      sede: `sede${i}`,
      status: "active",
      captcha: "6Le2S9cpAAAAACwmjzPeDgR7AuS64D-fI5KAOouw",
    };

    await fetch(`${url}/registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
  }
};

export default crearProfesor;
