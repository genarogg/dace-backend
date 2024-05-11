import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/db-conenction";

class Usuario extends Model {
  public id!: number;
  public cedula!: number;
  public correo!: string;
  public contrasena!: string;
  public createdAt!: Date;
  public esEstudiante!: boolean;
  public esProfesor!: boolean;
  public esAdmin!: boolean;
  public sede!: string;
  public carrera!: string[];
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    carrera: {
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("carrera"));
      },
      set: function (val) {
        return this.setDataValue("carrera", JSON.stringify(val));
      },
      allowNull: true,
    },
    esEstudiante: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    esProfesor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    esAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sede: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
  },
  {
    tableName: "usuarios",
    sequelize: sequelize, // this bit is important
  }
);

export default Usuario;
