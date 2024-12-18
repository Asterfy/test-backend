import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";
import AlumnoCompetidor from "./alumno_competidor.model.js";

class Alumno extends Model {}

Alumno.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_paterno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_materno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Alumno',
    tableName: 'alumnos',
})

Alumno.hasMany(AlumnoCompetidor, {foreignKey: 'id_alumno', sourceKey: 'id'});
AlumnoCompetidor.belongsTo(Alumno, {foreignKey: 'id_alumno', targetKey: 'id'});

export default Alumno;