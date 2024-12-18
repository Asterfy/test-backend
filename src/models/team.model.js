import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class Team extends Model {}

Team.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false
    },
    nombre_team: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize, 
    timestamps: false,
    modelName: 'Team',
    tableName: 'teams',
})

export default Team;