import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  /* storage: ":memory:", */
  storage: "./src/config/db.sqlite",
  logging: false,
});

sequelize
  .sync()
  .then(() => console.log("Base de datos y tablas creadas"))
  .catch((error) => console.error("Error al sincronizar:", error));

export default sequelize;
