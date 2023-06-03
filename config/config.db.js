const Sql = require("sequelize");
const sql = new Sql('student_api','root','',{host:'host.docker.internal',port:'3307',dialect:'mysql'});
module.exports = sql;