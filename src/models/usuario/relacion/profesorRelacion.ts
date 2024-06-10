/* import { Sequelize } from "sequelize";
import sequelize from "../../../config/db-conenction";

import { Usuario, Materia, ProfesorMateria } from "../../index";

// Inicializar las asociaciones en este archivo centralizado
Usuario.belongsToMany(Materia, {
  through: ProfesorMateria,
  foreignKey: "UsuarioId",
  otherKey: "MateriaId",
});
Materia.belongsToMany(Usuario, {
  through: ProfesorMateria,
  foreignKey: "MateriaId",
  otherKey: "UsuarioId",
});

export { sequelize, Usuario, Materia, ProfesorMateria };
 */