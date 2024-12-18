import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class Contest extends Model {}

Contest.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false
    },
    edicion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: { 
        type: DataTypes.DATE,
        allowNull: false
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Contest',
    tableName: 'contests',
})

export default Contest;