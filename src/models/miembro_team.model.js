import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class MiembroTeam extends Model {}

MiembroTeam.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    fecha_inclusion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    es_lider: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    estado_miembro: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

    // id_miembro: {
    //   type: DataTypes.BIGINT,
    //   allowNull: false,
    //   references: {
    //     model: "Miembro",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    // },
    // id_team: {
    //   type: DataTypes.BIGINT,
    //   allowNull: false,
    //   references: {
    //     model: "Team",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    // },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "MiembroTeam",
    tableName: "miembros_team",
  }
);

export default MiembroTeam;
