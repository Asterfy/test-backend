import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config.js";

class ScientificArticle extends Model {}

ScientificArticle.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false
    },
    titulo_articulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    doi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pdf_link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_publicacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    // id_miembro: {
    //     type: DataTypes.BIGINT,
    //     allowNull: false,
    //     references: {
    //         model: 'Miembro',
    //         key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'
    // }
}, {
    sequelize,
    timestamps: false,
    modelName: 'ScientificArticle',
    tableName: 'scientific_articles',
})

export default ScientificArticle;