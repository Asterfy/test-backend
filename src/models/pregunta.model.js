import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class Pregunta extends Model {}

Pregunta.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false
    }, 
    letra_pregunta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    info_pregunta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // id_contest:{
    //     type: DataTypes.BIGINT,
    //     // allowNull: false,
    //     references: {
    //         model: 'Contest',
    //         key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'
    // }

}, {
    sequelize,
    timestamps: false,
    modelName: 'Pregunta',
    tableName: 'preguntas',
})

export default Pregunta