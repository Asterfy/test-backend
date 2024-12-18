import Alumno from './alumno.model.js';
import AlumnoCompetidor from './alumno_competidor.model.js';
import Contest from './contest.model.js';
import Equipo from './equipo.model.js';
import MiembroTeam from './miembro_team.model.js';
import Miembro from './miembro.model.js';
import ParticipanteContest from './participante_contest.model.js';
import Pregunta from './pregunta.model.js';
import Rol from './rol.model.js';
import ScientifArticle from './scientif_article.model.js';
import Semestre from './semestre.model.js';
import Team from './team.model.js';
import sequelize from '../config/db.config.js';

//Relaciones de tablas
Alumno.hasMany(AlumnoCompetidor, {foreignKey: 'id_alumno', sourceKey: 'id'});
AlumnoCompetidor.belongsTo(Alumno, {foreignKey: 'id_alumno', targetKey: 'id'});

Contest.hasMany(Pregunta, {foreignKey: 'id_contest', sourceKey: 'id'}); 
Pregunta.belongsTo(Contest, {foreignKey: 'id_contest', targetKey: 'id'});

Semestre.hasMany(Contest, {foreignKey: 'id_semestre', sourceKey: 'id'});
Contest.belongsTo(Semestre, {foreignKey: 'id_semestre', targetKey: 'id'});

Contest.hasMany(Equipo, {foreignKey: 'id_contest', sourceKey: 'id'});
Equipo.belongsTo(Contest, {foreignKey: 'id_contest', targetKey: 'id'});

Equipo.belongsToMany(AlumnoCompetidor, {through: {model: 'ParticipanteContest', unique: false}, foreignKey: 'id_equipo'});
AlumnoCompetidor.belongsToMany(Equipo, {through: {model: 'ParticipanteContest', unique: false}, foreignKey: 'id_alumno_competidor'});

Alumno.hasOne(Miembro, {foreignKey: 'id_alumno', sourceKey: 'id'});
Miembro.belongsTo(Alumno, {foreignKey: 'id_alumno', targetKey: 'id'}); 

Rol.hasMany(Miembro, {foreignKey: 'id_rol', sourceKey: 'id'});
Miembro.belongsTo(Rol, {foreignKey: 'id_rol', targetKey: 'id'});

Miembro.belongsToMany(Team, {through: {model: 'MiembroTeam', unique: false}, foreignKey: 'id_miembro'});
Team.belongsToMany(Miembro, {through: {model: 'MiembroTeam', unique: false}, foreignKey: 'id_team'});

Miembro.hasMany(ScientifArticle, {foreignKey: 'id_miembro', sourceKey: 'id'});
ScientifArticle.belongsTo(Miembro, {foreignKey: 'id_miembro', targetKey: 'id'});