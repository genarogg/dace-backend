import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/db-conenction";

class EstudianteMateria extends Model {
  public id!: number;
  public usuarioId!: number;
  public materiaId!: number;
}

EstudianteMateria.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    usuarioId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    materiaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    periodo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "EstudianteMateria",
    timestamps: false,
  }
);

export default EstudianteMateria;
