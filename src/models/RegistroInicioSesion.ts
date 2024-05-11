import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db-conenction";

class RegistroInicioSesion extends Model {
  public id!: number;
  public usuarioId!: number;
  public fecha!: Date;
  public ip!: string;
  public userAgent!: string;
}

RegistroInicioSesion.init(
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

    fecha: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
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
    tableName: "registro_inicio_sesion",
    sequelize,
  }
);

export default RegistroInicioSesion;
