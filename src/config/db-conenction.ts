import { Sequelize, QueryTypes, UniqueConstraintError } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  /* storage: ":memory:", */
  storage: "./src/config/db.sqlite",
});

export default sequelize;
