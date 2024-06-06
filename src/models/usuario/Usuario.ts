import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../../config/db-conenction";

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
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //unique: true,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fechaDeNacimiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    correo: {
      type: DataTypes.STRING,
      //unique: true,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
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
    sede: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
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
    fechaDeCreacion: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "usuarios",
    sequelize: sequelize,
  }
);

export default Usuario;
