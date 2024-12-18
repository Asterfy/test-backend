import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class ParticipanteContest extends Model {}

ParticipanteContest.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    universidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    semestre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    // id_alumno_competidor: {
    //     type: DataTypes.BIGINT,
    //     allowNull: false,
    //     references: {
    //         model: 'AlumnoCompetidor',
    //         key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'
    // },
    // id_equipo: {
    //     type: DataTypes.BIGINT,
    //     allowNull: false,
    //     references: {
    //         model: 'Equipo',
    //         key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'
    // }
}, {
    sequelize,
    timestamps: false,
    modelName: 'ParticipanteContest',
    tableName: 'participantes_contest',
}) 

export default ParticipanteContest;