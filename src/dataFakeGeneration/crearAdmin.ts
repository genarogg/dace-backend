const crearAdmin = async (url: string) => {
  const usuario = {
    cedula: 25074591,
    correo: `admin@admin.com`,
    contrasena: "123",
    esAdmin: true, 
    contrasenaEndpoint: "admin",
  };


  await fetch(`${url}/registro/admin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });
};

export default crearAdmin;
