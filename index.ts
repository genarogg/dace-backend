import express from "express";
import path from "path";

import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;

const app = express();

// Middleware para decodificar el cuerpo de las solicitudes POST
app.use(express.json());

//Conexión a la base de datos

import sequelize from "./src/config/db-conenction";

sequelize.sync({ logging: false }).then(() => {
  console.log("db conectada!");
});

// Configura EJS como el motor de plantillas
app.set("view engine", "ejs");

// Configura la ruta a las vistas
app.set("views", path.join(__dirname, "/src/views"));

import {
  inicioRouter,
  registroRouter,
  loginRouter,
  carreraRouter,
} from "./src/routers/index";

app.use("/", inicioRouter);
app.use("/registro", registroRouter);
app.use("/login", loginRouter);

app.use("/admin", carreraRouter);

import dataFakeGeneration from "./src/config/dataFakeGeneration/index";

import { populateCarreras, populateMaterias } from "./src/config/InicializarDB";

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);

  //Generando datos falsos
  setTimeout(async () => {
    if (!(process.env.NODE_ENV === "dev")) {
      console.log("No se puede ejecutar en producción");
      return;
    }
    console.log("Ejecutando en modo desarrollo");
    await populateCarreras();
    await populateMaterias();
    dataFakeGeneration("http://localhost:8000", 200);
  }, 1000);
});
