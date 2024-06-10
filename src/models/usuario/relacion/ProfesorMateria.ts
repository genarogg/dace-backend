import { DataTypes, Model } from "sequelize";
import sequelize from "../../../config/db-conenction";

class ProfesorMateria extends Model {
  public UsuarioId!: number;
  public MateriaId!: number;

  public imprimirValores() {
    console.log("UsuarioId:", this.UsuarioId);
    console.log("MateriaId:", this.MateriaId);
  }
}

ProfesorMateria.init(
  {
    UsuarioId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    MateriaId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    periodo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "ProfesorMateria",
    sequelize: sequelize,
  }
);

import { Usuario, Materia } from "../../index";

ProfesorMateria.belongsTo(Usuario, { foreignKey: "UsuarioId" });
ProfesorMateria.belongsTo(Materia, { foreignKey: "MateriaId" });

export default ProfesorMateria;
