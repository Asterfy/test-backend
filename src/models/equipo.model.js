import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class Equipo extends Model {}

Equipo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre_equipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puesto: {
      type: DataTypes.INTEGER,
    },
    
    // id_contest: {
    //   type: DataTypes.BIGINT,
    //   allowNull: false,
    //   references: {
    //     model: "Contest",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    // }
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Equipo",
    tableName: "equipos",
  }
);

export default Equipo;
