import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db-conenction";

class Materia extends Model {
  public id!: number;
  public nombre!: string;
  public codigo!: string;
  public horasTeoricas!: number;
  public horasPracticas!: number;
  public horasSemanales!: number;
  public uc!: number;
  public prelaciones!: string;
  public semestre!: number;
}

Materia.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horasTeoricas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    horasPracticas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    horasSemanales: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prelaciones: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    semestre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "materias",
    sequelize: sequelize,
  }
);

export default Materia;
