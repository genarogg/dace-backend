import express from "express";
import path from "path";

import dotenv from "dotenv";
dotenv.config();
const { PORT, NODE_ENV } = process.env;

const app = express();

// configurando cors
import cors from "cors";
app.use(cors());

//Conexión a la base de datos

import sequelize from "./src/config/db-conenction";

sequelize.sync({ logging: false }).then(() => {
  console.log("db conectada!");
});

// Configura EJS como el motor de plantillas
app.set("view engine", "ejs");

// Configura la ruta a las vistas
app.set("views", path.join(__dirname, "/src/views"));

// Middleware para decodificar el cuerpo de las solicitudes POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import {
  inicioRouter,
  registroRouter,
  loginRouter,
  carreraRouter,
  userRouter,
  notasRouter
} from "./src/routers/index";

app.use("/", inicioRouter);
app.use("/registro", registroRouter);
app.use("/login", loginRouter);

app.use("/admin", carreraRouter);

app.use("/usuario", userRouter);
app.use("/notas", notasRouter);

import dataFakeGeneration from "./src/config/InicializarDB/dataFakeGeneration/index";

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);

  //Generando datos falsos
  setTimeout(async () => {
    if (!NODE_ENV) {
      console.log("No se puede ejecutar en producción");
      return;
    }

    console.log("Ejecutando en modo desarrollo");

    dataFakeGeneration(100, "http://localhost:8000");
  }, 1000);
});
