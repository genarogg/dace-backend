import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../../config/db-conenction";

class Carrera extends Model {
  public id!: number;
  public usuarioId!: number;
  public fecha!: Date;
  public ip!: string;
  public userAgent!: string;
}

Carrera.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    pensumCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    semestral: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    anual: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    creditosTotales: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    facultad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "carrera",
    sequelize,
  }
);

export default Carrera;
