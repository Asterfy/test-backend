import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class AlumnoCompetidor extends Model {}

AlumnoCompetidor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lenguaje_dominio: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    area_especialidad: {
      type: DataTypes.STRING,
      // allowNull: false
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
    modelName: "AlumnoCompetidor",
    tableName: "alumnos_competidores",
  }
);

export default AlumnoCompetidor;
