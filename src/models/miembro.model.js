import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class Miembro extends Model {}

Miembro.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    github_username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // id_alumno: {
    //   type: DataTypes.BIGINT,
    //   allowNull: false,
    //   references: {
    //     model: "Alumno",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    // },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Miembro",
    tableName: "miembros",
  }
);

export default Miembro;
