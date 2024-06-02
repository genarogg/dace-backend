import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db-conenction";
import Usuario from "../usuario/Usuario";
import Materia from "./Materia";

class Inscripcion extends Model {
  public UsuarioId!: number;
  public MateriaId!: number;
}

Inscripcion.init(
  {
    UsuarioId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Usuario,
        key: "id",
      },
    },
    MateriaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Materia,
        key: "id",
      },
    },
  },
  {
    tableName: "inscripciones",
    sequelize: sequelize,
  }
);

export default Inscripcion;
