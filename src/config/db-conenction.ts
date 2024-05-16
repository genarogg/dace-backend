import { Sequelize, QueryTypes, UniqueConstraintError } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  /* storage: ":memory:", */
  storage: "./src/config/db.sqlite",
  logging: false,
});

sequelize.sync({ alter: true }).then(() => {
  console.log(`Database & tables created!`);
});

export default sequelize;
