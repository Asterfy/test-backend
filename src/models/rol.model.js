import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class Rol extends Model {}

Rol.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false
    },
    nombre_rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permiso: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Rol',
    tableName: 'roles',
})

export default Rol;