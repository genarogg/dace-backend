import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db-conenction";

class Horario extends Model {
  public id!: number;
  public dia!: string;
  public horaInicio!: string;
  public horaFin!: string;
  public materiaId!: number;
}

Horario.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    dia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horaInicio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horaFin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    materiaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "horarios",
    sequelize: sequelize,
  }
);

export default Horario;
