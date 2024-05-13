import { Sequelize, QueryTypes, UniqueConstraintError } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  /* storage: ":memory:", */
  storage: "./src/config/db.sqlite",
  logging: false,
});

export default sequelize;
