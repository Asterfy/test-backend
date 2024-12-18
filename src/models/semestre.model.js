import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class Semestre extends Model {}

Semestre.init({
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false
    },
    nombre_semestre:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Semestre',
    tableName: 'semestre',
})

export default Semestre;