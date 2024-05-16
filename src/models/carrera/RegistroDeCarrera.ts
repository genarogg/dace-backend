import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/db-conenction";

class RegistroCarrera extends Model {
  public id!: number;
  public accion!: string;
  public fecha!: Date;
  public carreraId!: number;
}

RegistroCarrera.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    idUsuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    correoUsuario: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    accion: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    carreraId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userAgent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "registro_de_carrera",
    sequelize, // passing the `sequelize` instance is required
  }
);

export default RegistroCarrera;
